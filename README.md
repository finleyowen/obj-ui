# obj-ui
`obj-ui` is an npm package for creating static HTML webpages with object-oriented JavaScript

## Overview
`obj-ui` exports three main classes and two `extends` classes.

### Main classes
1. The [App](docs/classes/app.App.md) class represents directory of HTML pages, equivalent to a simple static website.
2. The [Page](docs/classes/app.App.md) class represents a HTML page.
3. The [Component](docs/classes/component.Component.md) class represents a HTML element.

### Sub-classes
The [Head](docs/classes/head.Head.md) and [Body](docs/classes/body.Body.md), classes, which represent `head` and `body` html elements respectively, both extend the [Component](docs/classes/component.Component.md) class.

## Quickstart
1. Make a new, empty directory and use [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) to install `obj-ui`
2. Create an `index.js` file and add the following code:
```
const { App } = require('obj-ui')

const app = new App({ outDir: 'build', lang: 'en' })
app.page('index', indexPage => {
    indexPage.head(headComponent => {
        headComponent.child('title', titleComponent => {
            titleComponent.text('Hello, world!')
        })
    })
    indexPage.body(bodyComponent => {
        bodyComponent.child('h1', heading => {
            heading.text('Hello, world!')
        })
    }) 
})

app.build()
```
3. Run `node index.js` from the working directory. A `/build` folder should be generated automatically in the root directory.
4. Open `/build/index.html`.
5. Browse the [API Docs](docs/modules.md)