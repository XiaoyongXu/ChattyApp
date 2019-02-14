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
* WebSocket
* UUID

### Screenshot

**Screenshot of default chat**
!["Screenshot of default chat"](https://github.com/XiaoyongXu/react-simple-boilerplate/blob/master/docs/chat%20without%20name.png)

**Screenshot of single user chat and name change**
!["Screenshot of single user chat and name change"](https://github.com/XiaoyongXu/react-simple-boilerplate/blob/master/docs/chat%20with%20name%20and%20change%20name.png)

**Screenshot of multiply user chat**
!["Screenshot of multiply user chat"](https://github.com/XiaoyongXu/react-simple-boilerplate/blob/master/docs/two%20clients%20chatting.png)


