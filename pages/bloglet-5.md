[Mark Gibson](https://github.com/jollytoad) (2015-10-30)

# Bloglet Part 5

## Loading

So far we've covered what page we are going to view, now we need to actually load
it.

### Side Effects

In fluxlet all asynchronous operations must be performed in side-effects, so
we'll create one.

For this we are using the new [Fetch API](https://fetch.spec.whatwg.org/).
We get the body of the response as text, and the content type of the response
and dispatch a *loaded* action with this data...

```js
const load = {
  // We only need to load when the place has changed
  when: (state, prev) => state.place !== prev.place,

  then: ({place}, {}, dispatch) => {

    fetch(place)
      .then(response => {
        response.text()
          .then(text => dispatch.loaded(text, response.headers.get('Content-Type')))
      })
  }
}
```

The *then* function is called only if the *when* condition is true. *then* is
passed the new state, the previous state (prior to the action manipulating it),
and an object containing *dispatchers* for all registered *actions*.

### State

Before we define the *loaded* action we'll add some more state, to hold the raw
response text, and the content type, and eventually the rendered html:

```js
const initialState = {
  place: null,

  content: {
    raw: null,
    type: null,
    html: null
  }
}
```

### Actions

Now for the *loaded* action, don't blink or you'll miss it...

```js
const loaded = (raw, type) => update('content', {raw, type, html: null})
```

This will simply replace the *content* property in the state with given values.

### Registration

These new components now need adding the setup...

```js
export function setup() {
  fluxlet("bloglet")
    .state(initialState)
    .actions({
      route,
      loaded        // <- our new action
    })
    .calculations({
      home
    })
    .sideEffects({
      load         // <- our first side-effect
    })
    .init(
      bindReady
    )
}
```

There we have it, whenever the *place* changes in the state, the new content
will be loaded into the *state*, ready for processing and rendering.

---
Next: Processing
