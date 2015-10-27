[Mark Gibson](https://github.com/jollytoad) (2015-27-10)

# Bloglet Part 4

## Routing

Display of an article will be driven by the query part of the URL, when you
visit the site it'll first check for this an attempt to load the given page.

I'd also like clicks on links to articles to load the page and set the URL,
and history etc.

### State

So I'll start with some state to hold the place we want to be...

```js
const initialState = {
  place: null
}
```

### Actions

and an action to set that place...

```js
const route = place => update('place', place)
```

### Bindings

and bindings to set the place from the initial URL and link clicks...

```js
function bindReady(dispatch) {
  $(document)
    .on('click', "[href]:not([target])", event => {
      event.preventDefault()

      const href = $(event.target).closest('[href]').attr('href')

      dispatch.route(href)
    })
    .ready(() => {
      dispatch.route(window.location.search.replace(/^\?/,''))
    })
}
```

this ignores any href with a target attr, allowing us to visit an external page.

### No place like home (Calculations)

Hang, where do we go if no place is given in the initial URL, well we can have
a calculation take care of that and provide a default place if its undefined...

```js
const home = {
  when: ({place}) => !place,
  then: update('place', 'pages/home.md')
}
```

### Registration

Now all of these components need to be registered with the fluxlet...

```js
export function setup() {
  fluxlet("bloglet")
    .state(initialState)
    .actions({
      route
    })
    .calculations({
      home
    })
    .init(
      bindReady
    )
}
```

As we saw in [Part 2](pages/bloglet-2.md), its this *setup* function that is
called to kick things off - which in turn binds to the ready event in
*bindReady* which you may remember is passed a *dispatch* argument, which
contains a dispatcher function for the *route* action that we've just
registered, which will get dispatched on ready, with the initial *place*, or
maybe not, in which case the *home* calculation will fill in for us, leaving
us with a state containing the first *place* to visit - which in the next
part we'll see can be acted upon by a side effect. And breathe.

Oh, hang on, we've missed something, if you click a link it'll also *route*
to a new *place* - but the URL doesn't update - that'll be covered later
with another action and side effect.

---
Next: Loading
