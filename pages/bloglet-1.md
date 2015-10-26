[Mark Gibson](https://github.com/jollytoad) (2015-26-10)

# Bloglet Part 1

## Wishishes and Plannishing

So, what do I want...

* I want to write in plain (markdown) text, with embedded chunks of code.
* I want to do this in whatever editor I fancy using at the time.
* I want to push my blogs to a git repo.
* I want to serve it up from a free static hosting service, with no backend.
* I want the minimal amount of build process for the site itself,
* and ideally none for publishing of new content.
* I want full control of publishing whatever content I like, scripts and all.

What I'd like to experiment with:

* Base the entire thing around the new fluxlet framework I've been developing.
* Use ES2015+ including modules.
* Using JSPM, System.js, loading modules on-demand from CDNs, avoiding bundling
  as much as possible.
* Approaches to documentation.
* And whatever else I fancy playing around with in the future.

What I don't want to do/care about:

* Compatibility with every browser under the sun, or old browsers.
* Stability - the articles will always be available on github should anyone
  really want to read them if the site is broken.

So I plan to make this a single page app, loading each article into the main
area of the UI when desired.

Links won't directly change the URL, instead we'll catch them, load the raw
article (as markdown), convert it to html, and render it to the UI.
Also, we'll set the URL so that it can be reloaded, bookmarked etc.

I'll use JSPM to manage modules, with System.js to load them directly from the
JSPM CDNs.

As I'm not a web designer, I'm starting with the blog template from bootstrap,
although I expect it to evolve into something more unique eventually.

---
[Next: Some HTML and CSS](pages/bloglet-2.md)
