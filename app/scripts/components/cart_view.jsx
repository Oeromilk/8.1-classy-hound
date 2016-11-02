var React = require('react');

var TemplateComponent = require('./template.jsx').TemplateComponent;

var CartComponent = React.createClass({
  handleRemove: function() {
    localStorage.removeItem('cartItem');
    console.log('I have been clicked');
  },
  render: function(){
    var self = this;
    // var product = JSON.parse(localStorage.getItem('cartItem'));
    // var products = [];
    // products.push(product);
    console.log(this.props.cart);

    var orderListing = this.props.cart.map(function(product){
      return (
        <tr key={product.title}>
          <th>{product.title}</th>
          <td>Still in work</td>
          <td>Still in work</td>
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
    console.log(cart);
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
