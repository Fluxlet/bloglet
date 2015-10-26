# Welcome

This is a site dedicated to the fluxlet micro-framework.

It's a single page application, with fluxlet at its core.

## What is Fluxlet?

Fluxlet manages the flow of data and the state of your application, inspired
by some of the ideas from flux.

Main concepts:

* Holds a single immutable state tree.
* Based around the execution slots of the JS event loop.
* Wraps every action in its own dispatcher, so you dispatch an action with a
  simple single function call.
* Process state using pure 'calculation' functions.
* Launch async side-effects only after all state manipulation is complete.
* Actions can only be dispatched from an async event, not directly from
  another action.
* Does not rely on any event framework or any other dependencies.
* Makes the most of new ES6 syntax features (arrows, object literal extensions
  and destructuring - but not classes)

Take a look at it on [GitHub](https://github.com/fluxlet/fluxlet) for more details.

## What is Bloglet?

This site, 'The Bloglet', is an experimental single page application using
Fluxlet, and whatever else I fancy playing around with at the time.

I'll be using it as a testbed for writing a practical application with Fluxlet,
present demos, and record my musings.

First of all I'll be writing a series about bloglet itself...
[Bloglet Part 1](/pages/bloglet-1.md)
