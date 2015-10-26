[Mark Gibson](https://github.com/jollytoad) (2015-26-10)

# Bloglet Part 2

## Some HTML

So, to being with at least, we'll be loading EVERYTHING via modules, so the
index head is pretty minimal...

```html
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Bloglet</title>

  <script src="jspm_packages/system.js"></script>
  <script src="config.js"></script>
  <script>
    // Import the main module and execute the setup function
    System.import('js/main').then(function(main) {
      main.setup()
    })
  </script>

  <style>.bloglet { opacity: 0 }</style>
</head>
```

Bootstrapping System.js with a config and an import of the main application
module.

The body is pretty boring static html, with a _#main_ element where the loaded
content will go. So I won't repeat it here, just take a look at the page source.

## Some CSS

The _main_ module imports the Bootstrap CSS using a System.js plugin...

```js
import "bootstrap/css/bootstrap.css!"
import "prism/themes/prism.css!"
import "blog.css!"
```

Notice the _opacity: 0_ in the head, that hides the hideously unstyled page
until blog.css has loaded and the fades the UI in.

Ok, I know it's daft and I could just have included the CSS directly in head,
but I wanted to play with something different - that's the whole point of this.

---
[Next: Imports and Setup](pages/bloglet-3.md)
