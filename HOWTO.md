Setting up the development environment
====================

Enable auto formatting of JavaScript and JSON in WebStorm
------------------

### Auto formatting with Prettier

Install the [Prettier plugin for WebStorm](https://plugins.jetbrains.com/plugin/10456-prettier).

Setup in WebStorm [Prettier File Watcher](https://prettier.io/docs/en/webstorm.html) for `.js` and `.json` files.

The prettier [configuration](https://prettier.io/docs/en/options.html) is stored in the file [`.prettierrc`](https://prettier.io/docs/en/configuration.html).

Installation
====================

Install the Node.js dependencies

`npm install`


Running the application
====================

Development mode
-------------

Run the application in the development mode

`npm run start`

Open the URL in a web browser

`http://localhost:8080/timeline-app.html`


Production mode
------------

Build the production application

`npm run build`

The production deployment bundle will be in the directory `dist/`.
 