---
title: "Fast and modern front-end setup with webpack, react, redux, router, saga and postcss part 2"
date: "2018-04-09"
category: "web"
cover: ./fast-and-modern-front-end-setup-2.jpeg
tags:
    - webpack
    - "2018"
    - react
    - redux
    - router
    - saga
    - postcss

published: true
---

##  This is the second part of the setup.

First of all, we forgot to add the commonChunksPlugin. What this plugin does is that it removes dupes. Plainly, it will put the duplicates it finds in a separate bundle. This plugin is included in webpack, so we just need to import webpack, no download needed:
 
 ```ruby
const webpack = require('webpack');
 ``` 
And implement it in plugins.The final webpack.config.js looks so:


  ```ruby
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
    filename: './style.css'
});
module.exports = {
    entry: "./index.js",
    output: {
        // CHANGED LINE        
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    context: path.resolve(__dirname, 'src'),
    devServer: {
        contentBase: path.resolve(__dirname, 'public/assets'),
        stats: 'errors-only',
        open: true,
        port: 8080,
        compress: true
    },
    plugins: [
        new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        extractPlugin,
        // NEW LINES
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ],
    module: {
        rules: [{
            test: /\.(jpg|png|gif|svg)$/,
            use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './assets/',
                }
            }]
        }, {
            test: /\.scss$/,
            use: extractPlugin.extract({
             use: ["css-loader", "sass-loader", "postcss-loader"],
             fallback: 'style-loader'
            })
        }, {
         test: /\.js$/,
         use: {
          loader: 'babel-loader',
          options: {
           presets: ['env', 'stage-0', 'react']
          }
         }
        }]
    }
}
 ``` 
Also notice we added a [name]. to the output.filename. This is because the commonChunksPlugin will make a new output file. Now you can run npm run build to check it out.
In the public/ folder, you will now notice main.bundle.js and common.bundle.js. This makes our final output smaller, which means faster loading time for the end user :D
However, if we run npm start , we will notice two things: first, the loading time of the page in the browser is slower than when we started, and second, there is an extra line in the console output informing us that something is deoptimised. Looking back, we see that some of the things we did are meant to optimize the final output at the cost of process itself. We can fix this by splitting the config file, and having a separate configuration for development and production. This will prove useful for other things later on.
So, we will start by creating a webpack.prod.config.js file next to our webpack.config file.
The main file will be the dev config, and the other one will load from it and optimize for production. Let’s start of our production file:

  ```ruby
var webpack = require("webpack");
module.exports = require('./webpack.config.js');
delete module.exports.devtool;
module.exports.plugins.push(
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    })
);
module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        comments: false,
        warnings: false
    })
);
 ``` 
So, first we load webpack to be able to use the DefinePlugin and UglifyJSPlugin. Next, we load the main file. We will just change some of it’s settings here, but keep the main ones. First change, remove the devtool object, we don’t need that in production. Then we add another plugin, the DefinePlugin, to the plugins array. This one allows us to set some global variables. But that doesn’t mean they will be global to the browser, just that you can use them in the code. This will be handy when we make frontend config files for dev and prod.
Finally, we will slightly change the uglification. If you just run npm run build-prod you will notice that the file outputs are one-liners and very unreadable. This process is called uglification and it serves to make the files smaller for faster upload to the users computer. Webpack uglifies in production automatically, but we will change the two flags.
Be not happy, for we have some more things to do with our webpack, this is just basic configuration. We will call this file by going to package.json, and changing a line in the scripts:

  ```ruby
"build-prod": "webpack -p --config webpack.prod.config.js"
 ``` 
Now you can run npm start build-prod to make sure it works.
Great, now to fix the two aforementioned issues. 
Let’s first move the commonChunksPlugin to the production, it slows down our development:

  ```ruby
module.exports.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common'
    })
);
 ``` 
Add this line in the prod config, and remove the plugin from main config. Run npm start to see if it’s faster, maybe change something in index.js to test it out.

Great, but more importantly, we currently process all called files in the /node_modules/ folder. This folder is where external libs are loaded. I like reprocessing these files as you can easily find an unoptimised lib, but we don’t need this in dev. We will avoid this by adding this under any test: in the loaders:

  ```ruby
exclude: /node_modules/,
 ``` 
And run npm start again :D. And to add this to the production, add this

```ruby
module.exports.module.rules.forEach(rule => {
    delete rule.exclude;
    return rule;
});
 ``` 
Now the production will take and optimize everything, while dev optimizes for work. There is still some room for other optimizations and maybe passing other plugins to prod, but it hasn’t shown any difference in speed for me, so this is where I stop.

Here are the config files to help you out

 ```ruby
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
    filename: './style.css'
});
module.exports = {
    entry: "./index.js",
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    context: path.resolve(__dirname, 'src'),
    devServer: {
        contentBase: path.resolve(__dirname, 'public/assets'),
        stats: 'errors-only',
        open: true,
        port: 8080,
        compress: true
    },
    plugins: [
        new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        extractPlugin
    ],
    module: {
        rules: [{
            test: /\.(jpg|png|gif|svg)$/,
            exclude: /node_modules/,
            use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './assets/',
                }
            }]
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: extractPlugin.extract({
                use: ["css-loader", "sass-loader", "postcss-loader"],
                fallback: 'style-loader'
            })
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'stage-0', 'react']
                }
            }
        }]
    }
}
 ``` 
And webpack.prod.config.js

 ```ruby
var webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
    filename: './style.css'
});
module.exports = require('./webpack.config.js');
delete module.exports.devtool;
module.exports.plugins.push(
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    })
);
module.exports.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common'
    })
);
module.exports.plugins.push(extractPlugin);
module.exports.module.rules.forEach(rule => {
    delete rule.exclude;
    return rule;
});
module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        comments: false,
        warnings: false
    })
);
 ``` 
!!!DONE!!!

Hope we haven’t forgotten anything :D. Keep in mind, there are also other plugins which might be useful based on what you want, but this is already too much webpack for an article with a full setup in the title. Off to react.

## REACT

The entry file is index.js, so we will load react here. React needs a place to load. Luckily, we already made a div with id=”app” in index.html, check it out. Next, as I forgot we haven’t done it, go to terminal and get react


```ruby
npm i -S react react-dom prop-types
``` 
And this is our index.js file:

```ruby
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
ReactDOM.render(
  <div>
    Hello world!
  </div>,
  document.getElementById('app')
);
```
So, first we are loading the babel-polyfill. This is done here, and we’re done with it. Next, react and react-dom to load our react app to html. Notice in the second line of the render function, we are fetching the #app element. Now run npm start and see the Hello world! in the browser.
Great, we have react now. We also got prop-types, which is useful when there are more people on the code, because it tells them what kind of props the component is expecting.
In order to actually utilise the advantages of react, let’s make a components/ folder inside the src/ folder. We will put our components here, and name the main one App.js.

```ruby
import React from 'react';
const App = props => <div>Our main component</div>
export default App;
```

In every react component, we have to import react. The const App line is our element, and the last line exports it, as we saw already. We can now import this component in our index.js file, thus allowing us to build our entire app out of components organized inside components/ folder:

```ruby
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```
If you’re already running npm start , you should see the changes immediately. You can also change the text in our App.js to see it reload and show you the results.
Just a note, in case someone is asking about hot reloading here: it’s great stuff, but I found it actually slows down the initial coding. Only when the app gets bigger does it show it’s worth, so I’m not putting it in the main setup.

## MATERIAL-UI

Let’s not reinvent the wheel and use already built and tested components material-ui gives us.

```ruby
npm i -S material-ui
```
There is a newer version called next, but it’s still beta. For this version, we need to encapsulate everything in a theme, and we’ll do it in the index.js file:


```ruby
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById('app')
);
```

Our app now has a theme, and we can use any material elements in our App.js file:

```ruby
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
const App = props => <div>
 <RaisedButton label="CLICK ME" />
</div>
export default App;
```
And we will see a button on our page.

## STYLES

There are two main ways to organize styling. Some people style and load styles for each component separately, and there are some postcss plugins that can help with this. I prefer to have clusters and groups wherever I can, so I just load one style file, and let it load the rest, thus forcing myself to try and reuse the classes as well. We will add a line in the index.js


```ruby
import './styles/main.scss';
```
I usually use this file just as an importer, having only import lines, and then organize the folder how I want.


## STATE MANAGEMENT

When the user interacts with your app, things happen, one by one. The current situation can be represented as a json object, and we can call it a state. State encapsulates location ( url ), current user, what the user clicked, such things. We want to separate state from the view. We will let react handle the views ( how will it be showed ) and get redux to handle the state ( what will be showed ). If this is a bit unclear, let’s explain it by making it work:

```ruby
npm i -S redux react-redux
```
Let’s first change our App.js file, to see exactly how we’re going to use redux:


```ruby
import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
const App = props => <div>
 <RaisedButton label={props.buttonText} onClick={props.onClick} />
</div>
App.propTypes = {
 buttonText: PropTypes.string.isRequired,
 onClick: PropTypes.func.isRequired
}
App.defaultProps = {
 buttonText: 'defaultText',
 onClick: () => console.log('default click action')
}
export default App;
```

We see some changes here, to demonstrate our goal. First, we imported the prop-types module, and defined types of props for our component. This way we allow the next guy ( or ourselves later, when we forget about this code and need to work on it ) to quickly get the idea about the props that need to be passed to the component. As we can see, we need a string buttonText and a function onClick, and they are both required. If we don’t provide them, there will be an error in the browser saying it, you can test it out.

Next, we use the props object in the button, as you can see. To end, we will define the default props, save and checkout our app. You will see a button in the browser with the default text, and when you click it the console will log our text.
This separation now clearly shows that we want to make our components show things, but the actual texts and functions and such things will be defined elsewhere. In the future, we can both easier find a bug if it pops up, reuse components or change them without touching the rest of the app.

Now let’s create a new folder in src/ called containers/. This folder will act as a middle man between our react components and the state. We will see where this state is later, and how to utilize it. In it, we will make a file App.js:


```ruby
import { connect } from 'react-redux'
import TheComponent from '../components/App';
const mapStateToProps = (state, ownProps) => {
    return {
     buttonText: state.text
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
          dispatch({type: 'BASIC_ACTION', text: 'new text'})
        }
    }
}
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(TheComponent)
export default App;
```

Ok, so we see now, we will use this to actually pass the props to the component. This allows us to make several different containers that use the same component, but we can also use the same container with different components. In this example, we actually export the container with the component preloaded, but you don’t need to.

In the mapStateToProps, we pass strings, numbers, arrays and objects to the component. In the mapDispatchToProps, we pass functions to the component. By passing these to the connect() function, we connect them to the state object. Imagine this state object looking like this: {text: ‘some text’} . We can take this property and use it in our component, but we can also update it in onClick() function (shown later, needs more work :D ). We can also use and update the state object in other components. This means, we have only one source of information, and whenever something changes, all components in the app get notified and can react accordingly.

This looks great. We’re decoupling and optimizing our app slowly, and now we need to understand how this dispatch() function updates the state. For this, we use something called the reducer. The reducer is a function which will take the data from the dispatch() function, and decide how to make a new state out of it. Let’s make a folder called reducers/ and put an index.js, and this inside:


```ruby
import { combineReducers } from "redux";
import basicReducer from './basicReducer';
export const reducers = combineReducers({
  text: basicReducer
});
```
We will use this as the main reducer, and just load our reducers in it. The reducer structure defines the state tree structure, so now state.text will be whatever basicReducer returns. Let’s make basicReducer.js in the same folder:


```ruby
const basicReducer = (state = 'some text', action) => {
 switch(action.type) {
  case 'BASIC_ACTION': return action.text
  default: return state
 }
}
export default basicReducer;
```

We see here that we need to tell the reducer to return state as it is in any situation except if action.type (mandatory prop) matches some string. Later we will extract these constants in a separate file. So now, whenever we call dispatch() from the container, the reducer will check if the type matches. If not, keep state as is. If yes, return another state, in this case the new state becomes action.text. After we click the button, the state will be updated to {text: ‘new text’}, and this prop will be passed back to the component which will in turn show this text. Don’t test yet, as we haven’t set up redux.

One more thing to know here, is that we must never alter the state object in the reducer, only use it to make and pass a new object. Reducers are pure functions, which means no side effects. This gives a lot of benefits. For example, the app stores state by state, which means we can easily go back and forth through our users action to find an error the user encountered.

Let’s set up redux now, go to index.js


```ruby
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './reducers/index';
import './styles/main.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './containers/App';
let store = createStore(reducers);
ReactDOM.render(
 <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
   </Provider>,
  document.getElementById('app')
);
```
What we added: we now import redux and createStore from redux, and our reducers list. The store holds the state objects. We create it with our reducers, and encapsulate the entire app in <Provider> component to allow any component within access to the state object. Note one more change in this file: we now import App from ./containers/App, not ./components/App, and we can npm start our app :).

We will see the button with the default text from the state as defined in our basic reducer. Go to basicReducer.js and change the default text, and see the button update. Great, now we get our props from the state object.

Also, when we click the button, the text changes. Let’s go through the cycle again:

 1.   we click the button in the component
 2.   the component calls a function in the container
 3.   the container dispatches an action, with a type defined ( mandatory ), and some data if needed, new text in this case
 4.   reducers listen to dispatches, and when an action type matches a defined string, they return the new state as defined.
 5.   store updates the state, and notifies all components listening to the state
 6.   the container now sees there is a change in the state, and send the new prop to the button component
 7.   the component rerenders with the new prop

OK, so state management works, but we will organize it a bit more by extracting all those action types in a separate file. Create actions/ folder in our src/ folder. In it, make an index.js file to hold our constants:

```ruby
export default {
 BASIC_ACTION:'BASIC_ACTION' 
}
```
We will use this in dispatch and in the reducer, so any changes in the string can be contained. components/App:

```ruby
import { connect } from 'react-redux';
import actions from '../actions/';
import TheComponent from '../components/App';
const mapStateToProps = (state, ownProps) => {
    return {
     buttonText: state.text
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
          dispatch({type: actions.BASIC_ACTION, text: 'new text'})
        }
    }
}
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(TheComponent)
export default App;
```
We import the entire actions set, and then use the type we want. I find it easier to import all actions, because you often need to change them or copy files, and I don’t need to think about the importing any more. Note the change in the dispatch() function.

And in basicReducer.js:


```ruby
import actions from '../actions';
const basicReducer = (state = 'some other text', action) => {
 switch(action.type) {
  case actions.BASIC_ACTION: return action.text
  default: return state
 }
}
export default basicReducer;
```

Also, by importing the entire actions object, we can easily extend the reducer.

In the beginning, state management might seem like an overkill, and it can easily be so, and you need to define if you need redux. But I found that proper mainenance of the state tree means you can separate your logic for different parts of the tree easily. For example, if your state objects has user prop and friends prop, and the user logs out, you can dispatch one action, and then have two different reducers react to it separately, thus having the user property set to {}, and having the friends property set to []. This makes state management a breeze.