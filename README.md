# React Passkey-First Authentication Example with Corbado

This is a sample implementation of the Corbado web component being integrated into a web application built with React.

Please see the [full blog post](https://www.corbado.com/blog/react-passkeys) to understand all the required steps to integrate passkeys into React apps.

## File structure

- `src/App.js`: routing for the React web app
- `src/Home.js`: component for the sign up / login screen
- `src/Profile.js`: :component for the user profile information that is shown after successful authentication
- `.env`: add Corbado project id as environment variables that you can obtain
  from [Corbado developer panel](https://app.corbado.com/signin#register)

## Setup

### Prerequisites

Please follow the steps in [Getting started](https://docs.corbado.com/overview/getting-started) to create and configure
a project in the [Corbado developer panel](https://app.corbado.com/signin#register).

You need to have [Node](https://nodejs.org/en/download) and `npm` installed to run it.

## Usage

Run

```bash
npm i
```

to install all dependencies.

Finally, you can run the project locally with

```bash
export REACT_APP_CORBADO_PROJECT_ID=<YOUR PROJECT ID>
npm start
```
