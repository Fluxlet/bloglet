System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "https://github.jspm.io/*",
    "npm:*": "https://npm.jspm.io/*"
  },

  depCache: {
    "js/main.js": [
      "npm:babel-runtime@5.8.29/helpers/sliced-to-array",
      "npm:babel-runtime@5.8.29/helpers/object-destructuring-empty",
      "github:twbs/bootstrap@3.3.5/css/bootstrap.css!github:systemjs/plugin-css@0.1.19",
      "github:PrismJS/prism@1.2.0/themes/prism.css!github:systemjs/plugin-css@0.1.19",
      "blog.css!github:systemjs/plugin-css@0.1.19",
      "github:fluxlet/fluxlet@master/development",
      "github:fluxlet/fluxlet-immutable@master",
      "github:showdownjs/showdown@1.3.0",
      "github:PrismJS/prism@1.2.0",
      "github:components/jquery@2.1.4"
    ],
    "github:PrismJS/prism@1.2.0": [
      "github:PrismJS/prism@1.2.0/prism"
    ],
    "github:showdownjs/showdown@1.3.0": [
      "github:showdownjs/showdown@1.3.0/dist/showdown"
    ],
    "github:fluxlet/fluxlet-immutable@master": [
      "github:fluxlet/fluxlet-immutable@master/index"
    ],
    "github:fluxlet/fluxlet@master/development": [
      "npm:babel-runtime@5.8.29/helpers/to-consumable-array",
      "github:fluxlet/fluxlet@master/fluxlet",
      "github:fluxlet/fluxlet@master/logging",
      "github:fluxlet/fluxlet@master/lockdown",
      "github:fluxlet/fluxlet@master/validate-registrations",
      "github:fluxlet/fluxlet@master/dedupe",
      "github:fluxlet/fluxlet@master/requirements"
    ],
    "github:components/jquery@2.1.4": [
      "github:components/jquery@2.1.4/jquery"
    ],
    "npm:babel-runtime@5.8.29/helpers/sliced-to-array": [
      "npm:babel-runtime@5.8.29/core-js/get-iterator",
      "npm:babel-runtime@5.8.29/core-js/is-iterable"
    ],
    "github:fluxlet/fluxlet-immutable@master/index": [
      "github:fluxlet/fluxlet-immutable@master/path",
      "github:fluxlet/fluxlet-immutable@master/update",
      "github:fluxlet/fluxlet-immutable@master/clone",
      "github:fluxlet/fluxlet-immutable@master/chain",
      "github:fluxlet/fluxlet-immutable@master/freeze",
      "github:fluxlet/fluxlet-immutable@master/get",
      "github:fluxlet/fluxlet-immutable@master/map"
    ],
    "github:fluxlet/fluxlet@master/fluxlet": [
      "npm:babel-runtime@5.8.29/core-js/object/keys",
      "github:fluxlet/fluxlet@master/register"
    ],
    "github:fluxlet/fluxlet@master/lockdown": [
      "npm:babel-runtime@5.8.29/core-js/object/keys"
    ],
    "github:fluxlet/fluxlet@master/validate-registrations": [
      "npm:babel-runtime@5.8.29/core-js/object/keys"
    ],
    "github:fluxlet/fluxlet@master/dedupe": [
      "npm:babel-runtime@5.8.29/core-js/object/keys"
    ],
    "github:fluxlet/fluxlet@master/requirements": [
      "npm:babel-runtime@5.8.29/core-js/object/keys"
    ],
    "npm:babel-runtime@5.8.29/helpers/to-consumable-array": [
      "npm:babel-runtime@5.8.29/core-js/array/from"
    ],
    "npm:babel-runtime@5.8.29/core-js/get-iterator": [
      "npm:core-js@1.2.3/library/fn/get-iterator"
    ],
    "npm:babel-runtime@5.8.29/core-js/is-iterable": [
      "npm:core-js@1.2.3/library/fn/is-iterable"
    ],
    "github:fluxlet/fluxlet-immutable@master/clone": [
      "npm:babel-runtime@5.8.29/core-js/object/get-own-property-names"
    ],
    "github:fluxlet/fluxlet-immutable@master/update": [
      "github:fluxlet/fluxlet-immutable@master/path",
      "github:fluxlet/fluxlet-immutable@master/clone"
    ],
    "github:fluxlet/fluxlet-immutable@master/freeze": [
      "npm:babel-runtime@5.8.29/core-js/object/is-frozen",
      "npm:babel-runtime@5.8.29/core-js/object/freeze",
      "npm:babel-runtime@5.8.29/core-js/object/get-own-property-names"
    ],
    "github:fluxlet/fluxlet-immutable@master/map": [
      "github:fluxlet/fluxlet-immutable@master/get"
    ],
    "github:fluxlet/fluxlet@master/register": [
      "npm:babel-runtime@5.8.29/core-js/object/create"
    ],
    "github:fluxlet/fluxlet-immutable@master/get": [
      "github:fluxlet/fluxlet-immutable@master/path"
    ],
    "npm:babel-runtime@5.8.29/core-js/array/from": [
      "npm:core-js@1.2.3/library/fn/array/from"
    ],
    "npm:babel-runtime@5.8.29/core-js/object/keys": [
      "npm:core-js@1.2.3/library/fn/object/keys"
    ],
    "npm:core-js@1.2.3/library/fn/is-iterable": [
      "npm:core-js@1.2.3/library/modules/web.dom.iterable",
      "npm:core-js@1.2.3/library/modules/es6.string.iterator",
      "npm:core-js@1.2.3/library/modules/core.is-iterable"
    ],
    "npm:core-js@1.2.3/library/fn/get-iterator": [
      "npm:core-js@1.2.3/library/modules/web.dom.iterable",
      "npm:core-js@1.2.3/library/modules/es6.string.iterator",
      "npm:core-js@1.2.3/library/modules/core.get-iterator"
    ],
    "npm:babel-runtime@5.8.29/core-js/object/freeze": [
      "npm:core-js@1.2.3/library/fn/object/freeze"
    ],
    "npm:babel-runtime@5.8.29/core-js/object/get-own-property-names": [
      "npm:core-js@1.2.3/library/fn/object/get-own-property-names"
    ],
    "npm:babel-runtime@5.8.29/core-js/object/create": [
      "npm:core-js@1.2.3/library/fn/object/create"
    ],
    "npm:babel-runtime@5.8.29/core-js/object/is-frozen": [
      "npm:core-js@1.2.3/library/fn/object/is-frozen"
    ],
    "npm:core-js@1.2.3/library/fn/array/from": [
      "npm:core-js@1.2.3/library/modules/es6.string.iterator",
      "npm:core-js@1.2.3/library/modules/es6.array.from",
      "npm:core-js@1.2.3/library/modules/$.core"
    ],
    "npm:core-js@1.2.3/library/modules/web.dom.iterable": [
      "npm:core-js@1.2.3/library/modules/es6.array.iterator",
      "npm:core-js@1.2.3/library/modules/$.iterators"
    ],
    "npm:core-js@1.2.3/library/fn/object/keys": [
      "npm:core-js@1.2.3/library/modules/es6.object.keys",
      "npm:core-js@1.2.3/library/modules/$.core"
    ],
    "npm:core-js@1.2.3/library/modules/core.is-iterable": [
      "npm:core-js@1.2.3/library/modules/$.classof",
      "npm:core-js@1.2.3/library/modules/$.wks",
      "npm:core-js@1.2.3/library/modules/$.iterators",
      "npm:core-js@1.2.3/library/modules/$.core"
    ],
    "npm:core-js@1.2.3/library/modules/es6.string.iterator": [
      "npm:core-js@1.2.3/library/modules/$.string-at",
      "npm:core-js@1.2.3/library/modules/$.iter-define"
    ],
    "npm:core-js@1.2.3/library/modules/core.get-iterator": [
      "npm:core-js@1.2.3/library/modules/$.an-object",
      "npm:core-js@1.2.3/library/modules/core.get-iterator-method",
      "npm:core-js@1.2.3/library/modules/$.core"
    ],
    "npm:core-js@1.2.3/library/fn/object/freeze": [
      "npm:core-js@1.2.3/library/modules/es6.object.freeze",
      "npm:core-js@1.2.3/library/modules/$.core"
    ],
    "npm:core-js@1.2.3/library/fn/object/create": [
      "npm:core-js@1.2.3/library/modules/$"
    ],
    "npm:core-js@1.2.3/library/fn/object/get-own-property-names": [
      "npm:core-js@1.2.3/library/modules/$",
      "npm:core-js@1.2.3/library/modules/es6.object.get-own-property-names"
    ],
    "npm:core-js@1.2.3/library/fn/object/is-frozen": [
      "npm:core-js@1.2.3/library/modules/es6.object.is-frozen",
      "npm:core-js@1.2.3/library/modules/$.core"
    ],
    "npm:core-js@1.2.3/library/modules/es6.array.from": [
      "npm:core-js@1.2.3/library/modules/$.ctx",
      "npm:core-js@1.2.3/library/modules/$.def",
      "npm:core-js@1.2.3/library/modules/$.to-object",
      "npm:core-js@1.2.3/library/modules/$.iter-call",
      "npm:core-js@1.2.3/library/modules/$.is-array-iter",
      "npm:core-js@1.2.3/library/modules/$.to-length",
      "npm:core-js@1.2.3/library/modules/core.get-iterator-method",
      "npm:core-js@1.2.3/library/modules/$.iter-detect"
    ],
    "npm:core-js@1.2.3/library/modules/es6.array.iterator": [
      "npm:core-js@1.2.3/library/modules/$.unscope",
      "npm:core-js@1.2.3/library/modules/$.iter-step",
      "npm:core-js@1.2.3/library/modules/$.iterators",
      "npm:core-js@1.2.3/library/modules/$.to-iobject",
      "npm:core-js@1.2.3/library/modules/$.iter-define"
    ],
    "npm:core-js@1.2.3/library/modules/es6.object.keys": [
      "npm:core-js@1.2.3/library/modules/$.to-object",
      "npm:core-js@1.2.3/library/modules/$.object-sap"
    ],
    "npm:core-js@1.2.3/library/modules/$.classof": [
      "npm:core-js@1.2.3/library/modules/$.cof",
      "npm:core-js@1.2.3/library/modules/$.wks"
    ],
    "npm:core-js@1.2.3/library/modules/$.wks": [
      "npm:core-js@1.2.3/library/modules/$.shared",
      "npm:core-js@1.2.3/library/modules/$.global",
      "npm:core-js@1.2.3/library/modules/$.uid"
    ],
    "npm:core-js@1.2.3/library/modules/core.get-iterator-method": [
      "npm:core-js@1.2.3/library/modules/$.classof",
      "npm:core-js@1.2.3/library/modules/$.wks",
      "npm:core-js@1.2.3/library/modules/$.iterators",
      "npm:core-js@1.2.3/library/modules/$.core"
    ],
    "npm:core-js@1.2.3/library/modules/$.iter-define": [
      "npm:core-js@1.2.3/library/modules/$.library",
      "npm:core-js@1.2.3/library/modules/$.def",
      "npm:core-js@1.2.3/library/modules/$.redef",
      "npm:core-js@1.2.3/library/modules/$.hide",
      "npm:core-js@1.2.3/library/modules/$.has",
      "npm:core-js@1.2.3/library/modules/$.wks",
      "npm:core-js@1.2.3/library/modules/$.iterators",
      "npm:core-js@1.2.3/library/modules/$.iter-create",
      "npm:core-js@1.2.3/library/modules/$",
      "npm:core-js@1.2.3/library/modules/$.tag"
    ],
    "npm:core-js@1.2.3/library/modules/$.string-at": [
      "npm:core-js@1.2.3/library/modules/$.to-integer",
      "npm:core-js@1.2.3/library/modules/$.defined"
    ],
    "npm:core-js@1.2.3/library/modules/$.an-object": [
      "npm:core-js@1.2.3/library/modules/$.is-object"
    ],
    "npm:core-js@1.2.3/library/modules/es6.object.freeze": [
      "npm:core-js@1.2.3/library/modules/$.is-object",
      "npm:core-js@1.2.3/library/modules/$.object-sap"
    ],
    "npm:core-js@1.2.3/library/modules/es6.object.is-frozen": [
      "npm:core-js@1.2.3/library/modules/$.is-object",
      "npm:core-js@1.2.3/library/modules/$.object-sap"
    ],
    "npm:core-js@1.2.3/library/modules/es6.object.get-own-property-names": [
      "npm:core-js@1.2.3/library/modules/$.object-sap",
      "npm:core-js@1.2.3/library/modules/$.get-names"
    ],
    "npm:core-js@1.2.3/library/modules/$.ctx": [
      "npm:core-js@1.2.3/library/modules/$.a-function"
    ],
    "npm:core-js@1.2.3/library/modules/$.def": [
      "npm:core-js@1.2.3/library/modules/$.global",
      "npm:core-js@1.2.3/library/modules/$.core"
    ],
    "npm:core-js@1.2.3/library/modules/$.to-object": [
      "npm:core-js@1.2.3/library/modules/$.defined"
    ],
    "npm:core-js@1.2.3/library/modules/$.is-array-iter": [
      "npm:core-js@1.2.3/library/modules/$.iterators",
      "npm:core-js@1.2.3/library/modules/$.wks"
    ],
    "npm:core-js@1.2.3/library/modules/$.iter-call": [
      "npm:core-js@1.2.3/library/modules/$.an-object"
    ],
    "npm:core-js@1.2.3/library/modules/$.to-length": [
      "npm:core-js@1.2.3/library/modules/$.to-integer"
    ],
    "npm:core-js@1.2.3/library/modules/$.iter-detect": [
      "npm:core-js@1.2.3/library/modules/$.wks"
    ],
    "npm:core-js@1.2.3/library/modules/$.to-iobject": [
      "npm:core-js@1.2.3/library/modules/$.iobject",
      "npm:core-js@1.2.3/library/modules/$.defined"
    ],
    "npm:core-js@1.2.3/library/modules/$.object-sap": [
      "npm:core-js@1.2.3/library/modules/$.def",
      "npm:core-js@1.2.3/library/modules/$.core",
      "npm:core-js@1.2.3/library/modules/$.fails"
    ],
    "npm:core-js@1.2.3/library/modules/$.shared": [
      "npm:core-js@1.2.3/library/modules/$.global"
    ],
    "npm:core-js@1.2.3/library/modules/$.redef": [
      "npm:core-js@1.2.3/library/modules/$.hide"
    ],
    "npm:core-js@1.2.3/library/modules/$.hide": [
      "npm:core-js@1.2.3/library/modules/$",
      "npm:core-js@1.2.3/library/modules/$.property-desc",
      "npm:core-js@1.2.3/library/modules/$.support-desc"
    ],
    "npm:core-js@1.2.3/library/modules/$.iter-create": [
      "npm:core-js@1.2.3/library/modules/$",
      "npm:core-js@1.2.3/library/modules/$.hide",
      "npm:core-js@1.2.3/library/modules/$.wks",
      "npm:core-js@1.2.3/library/modules/$.property-desc",
      "npm:core-js@1.2.3/library/modules/$.tag"
    ],
    "npm:core-js@1.2.3/library/modules/$.tag": [
      "npm:core-js@1.2.3/library/modules/$",
      "npm:core-js@1.2.3/library/modules/$.has",
      "npm:core-js@1.2.3/library/modules/$.wks"
    ],
    "npm:core-js@1.2.3/library/modules/$.get-names": [
      "npm:core-js@1.2.3/library/modules/$.to-iobject",
      "npm:core-js@1.2.3/library/modules/$"
    ],
    "npm:core-js@1.2.3/library/modules/$.iobject": [
      "npm:core-js@1.2.3/library/modules/$.cof"
    ],
    "npm:core-js@1.2.3/library/modules/$.support-desc": [
      "npm:core-js@1.2.3/library/modules/$.fails"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.29",
    "babel-runtime": "npm:babel-runtime@5.8.29",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "clean-css": "npm:clean-css@3.4.6",
    "core-js": "npm:core-js@1.2.3",
    "css": "github:systemjs/plugin-css@0.1.19",
    "fetch": "npm:whatwg-fetch@0.10.0",
    "fluxlet": "github:fluxlet/fluxlet@master",
    "fluxlet-immutable": "github:fluxlet/fluxlet-immutable@master",
    "jquery": "github:components/jquery@2.1.4",
    "prism": "github:PrismJS/prism@1.2.0",
    "showdown": "github:showdownjs/showdown@1.3.0",
    "systemjs/plugin-css": "github:systemjs/plugin-css@0.1.19",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.1"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.29": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.5.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:clean-css@3.4.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
