"use strict"
import "bootstrap/css/bootstrap.css!"
import "prism/themes/prism.css!"
import "blog.css!"

import fluxlet from "fluxlet/development"
import { update, chain } from "fluxlet-immutable"
import showdown from "showdown"
import prism from "prism"
import $ from "jquery"

// # Setup

export function setup() {

  fluxlet("bloglet")
    .state(initialState)
    .actions({
      route,
      loaded,
      error,
      converted
    })
    .calculations({
      home,
      processMarkdown
    })
    .sideEffects({
      load,
      renderContent,
      renderError
    })
    .init(
      bindReady
    )
}

// # Initial State

const initialState = {
  place: null,
  content: {
    raw: null,
    type: null,
    html: null
  },
  error: null
}

// # Bindings

function bindReady(dispatch) {
  $(document)
    .on('click', "[href]:not([target])", event => {
      event.preventDefault()

      const $target = $(event.target)
      const title = $target.closest('[title]').attr('title') || $target.closest('a').text()
      const href = $target.closest('[href]').attr('href')

      dispatch.route(href)
    })
    .ready(() => {
      dispatch.route(window.location.search.replace(/^\?/,''))
    })
}

// # Actions

const route = place => chain(
  update('place', place),
  update('error', null)
)
const loaded = (raw, type) => update('content', {raw, type, html: null})
const error = error => update('error', error)
const converted = html => update('content.html', html)

// # Calculations

const home = {
  when: ({place}) => !place,
  then: update('place', 'pages/home.md')
}

const showdownConverter = new showdown.Converter()

const contentIs = (...criteria) => ({place, content:{raw,type,html}}) => !html && raw && type &&
  criteria.some(([mime, ext]) => type.startsWith(mime) && (!ext || place.endsWith(ext)))

const processMarkdown = {
  when: contentIs(['text/x-markdown'], ['text/plain', '.md']),
  then: update('content.html', (x, {content:{raw}}) => showdownConverter.makeHtml(raw))
}

// # Request Side Effects

const load = {
  when: (state, prev) => state.place !== prev.place,
  then: ({place}, {}, dispatch) => {

    fetch(place)
      .then(response => {
        response.text()
          .then(text => dispatch.loaded(text, response.headers.get('Content-Type')))
      })
  }
}

// # Rendering Side Effects

const renderContent = {
  when: (state, prev) => state.content.html && state.content.html !== prev.content.html,
  then: ({content:{html}, place}) => {

    $("#main").html(html)

    const title = $("#main h1:first").text()

    history.pushState({}, title, '?'+place)

    $(".blog-nav-item")
      .removeClass("active")
      .filter(`[href='${place}']`).addClass("active")

    window.setTimeout(() => prism.highlightAll(), 0)

  }
}

const renderError = {
  when: (state, prev) => state.error && state.error !== prev.error,
  then: ({error}) => {
    console.error(error)
  }
}
