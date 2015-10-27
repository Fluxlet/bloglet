[Mark Gibson](https://github.com/jollytoad) (2015-26-10)

# Bloglet Part 3

## Imports

The main module imports other JS modules we'll need, although eventually I want to strip
that down to a bare minimum and load modules only when required (even the
markdown converter).

```js
import fluxlet from "fluxlet/development"
import { update, chain } from "fluxlet-immutable"
import showdown from "showdown"
import prism from "prism"
import $ from "jquery"
```

## Setup

Fluxlet has a fluent API for registration of its initial state, actions,
calculations and side-effects. See the fluxlet
[README](https://raw.githubusercontent.com/Fluxlet/fluxlet/master/README.md)
for an explaination of these.

```js
function setup() {
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
```

---
[Next: Routing](pages/bloglet-4.md)
