var React = require('react');
var ReactDom = require('react-dom');
var Backbone = require('backbone');

var HomeContainer = require('./components/home_view.jsx').HomeContainer;
var AppContainer = require('./components/app.jsx').AppContainer;
var CartContainer = require('./components/cart_view.jsx').CartContianer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'catalog/': 'catalog',
    'cart/': 'cart'
  },
  index: function(){
    ReactDom.render(
      React.createElement(HomeContainer, {router: this}),
      document.getElementById('app')
    );
  },
  catalog: function(){
    ReactDom.render(
      React.createElement(AppContainer, {router: this}),
      document.getElementById('app')
    );
  },
  cart: function(){
    ReactDom.render(
      React.createElement(CartContainer, {router: this}),
      document.getElementById('app')
    )
  }
});

var router = new AppRouter();

module.exports = router;
