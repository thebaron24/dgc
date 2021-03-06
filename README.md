# Diversity Group Consulting

This is a seed project for building a dynamic website using [webpack](https://webpack.js.org/), [handlebars](http://handlebarsjs.com/), and [material-components-web](https://github.com/material-components/material-components-web). The root purpose for this repo is to provide a central location for development on the DGC website. The foundation for this repo was forked from the seed project [material-handlebars](https://github.com/thebaron24/material-handlebars) and customized to meet certain principle concepts.

## Principle Concepts

1. support the last two versions of browsers
2. small file footprint
3. fast loading speed
4. multi page to simplify SEO
5. centralized configurable json for site configuration
6. easy to update content
7. themeable
8. self building menu
9. reusable

## Developer Dependencies

This is an npm package that relies on you having [nodejs with npm](https://nodejs.org) and [git](https://git-scm.com/) installed. Dont forget to configure your machine to be able to clone from github using [http](https://help.github.com/articles/cloning-a-repository/) or [ssh](https://help.github.com/articles/connecting-to-github-with-ssh/) and understand the [difference in using http or ssh](https://help.github.com/articles/which-remote-url-should-i-use/).

## Install

In the node command prompt navigate to a folder you want to clone the repo into. Clone the repo with `git clone <prefered repo link> <optional repo name>` to download the repo into a folder named dgc or the optional repo name you chose when cloning. Then, `cd <dgc or optional repo name>` to move into the repository folder. To install the dependencies just `npm i`.

## Build

This package has several pre-built scripts that make development easier and faster. There is a development build and a production build npm script that is configured in the webpack.dev.js and webpack.prod.js file respectively.

Run `npm run build:dev` or `npm run build` to build the developement version in a `/build` folder.

Run `npm run build:prod` to build the production version in a `/dist` folder.

## Serving

This package uses [webpack-dev-server](https://github.com/webpack/webpack-dev-server) to serve the development and production version of the site. After you build the dev or prod version of the site you can serve them on `localhost:2400` with the following coommands:

Run `npm run serve:dev` or `npm run serve` to serve the developement version from the `/build` folder.

Run `npm run serve:prod` to serve the production version from the `/dist` folder.

## Tests

Unit tests via [Karma](https://karma-runner.github.io) coming soon..
