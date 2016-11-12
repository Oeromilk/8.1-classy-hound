var React = require('react');
var moment = require('moment');

var a = moment.duration(10, 'minutes');
var b = moment.duration(1, 'seconds');
var time = 7200;
var duration = moment.duration(time * 1000, 'milliseconds');
var interval = 1000;

// setInterval(function(){
//   duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
//   var time = moment(duration(asMilliseconds()).format('h:mm:ss'));
//   console.log(time);
// }, interval);

// var newTimer = setTimer(a, b);
// console.log(a.get('minutes'));

var TemplateComponent = require('./template.jsx').TemplateComponent;

var CartComponent = React.createClass({
  handleRemove: function() {
    localStorage.removeItem('cartItem');
    console.log('I have been clicked');
  },
  render: function(){
    var self = this;
    var product = JSON.parse(localStorage.getItem('cartItem'));
    var products = [];
    products.push(product);

    var orderListing = this.props.cart.map(function(product){

      return (
        <tr key={product.title}>
          <th>{product.title}</th>
          <td>{product.size}</td>
          <td>{product.qty}</td>
          <td>Still in work</td>
          <td><button onClick={self.handleRemove} type="button" className="btn btn-warning">Remove</button></td>
        </tr>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Shirt</th>
                <th>Size</th>
                <th>QTY</th>
                <th>Deal Expires</th>
                <th>Remove From Cart</th>
              </tr>
            </thead>
            <tbody>
              {orderListing}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

var CartContianer = React.createClass({
  getInitialState: function(){
    var cart = JSON.parse(localStorage.getItem('cartItem'));
    return {
      cart: cart
    }
  },
  render: function(){
    return (
      <TemplateComponent>
        <CartComponent cart={this.state.cart}/>
      </TemplateComponent>
    );
  }
});

module.exports = {
  CartContianer: CartContianer
};
