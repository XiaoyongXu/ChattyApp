React Boilerplate
=====================

A minimal and light dev environment for ReactJS.

### Usage

Clone the boilerplate and create your own git repo.

```
git clone git@github.com:XiaoyongXu/react-simple-boilerplate.git
cd react-simple-boilerplate
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```
Open one Terminal, install the dependencies and start the front-end server.

```
npm install
npm start
```
Open another Terminal, install the dependencies and start the back-end server.

```
cd chatty_server
npm install
npm start
```

Open the browser
```
open http://localhost:3000
```


### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
