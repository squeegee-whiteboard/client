# Squeegee Whiteboard - Client

The client for the Squeegee Whiteboard application

[![Build Status](https://travis-ci.org/squeegee-whiteboard/client.svg?branch=master)](https://travis-ci.org/squeegee-whiteboard/client)

## Usage

To install the NPM packages necessary for running the code, use `npm install`. Do this
before any of the other commands below or they won't work.

To run the development server, use `npm run dev`.

To lint the code, run `npm run lint`.

To make a production build (output in `dist` folder) use `npm run build`.

## New Dependencies

To add a package to the dependency list for the application, use `npm install --save
<package name>`. If the package is only used for development (e.g. linting), use `npm
install --save-dev <package name>` instead.

## Hosting

To host the app, build the production app using `npm run build` and then host the `dist`
folder.
