var React = require('react');
var ReactDom = require('react-dom');
var Modal = require('react-modal');
var $ = require('jquery');
require('react-bootstrap');

var TemplateComponent = require('./template.jsx').TemplateComponent;
var productData = require('../product_data.js');

//imported from react modal documentation
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


var CatalogBanner = React.createClass({
  getInitialState: function() {
    return {
      modalIsOpen: false,
      username: ''
    };
  },
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
  afterOpenModal: function() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  },
  closeModal: function(e) {
    this.setState({modalIsOpen: false,
    username: e.target.value});
    localStorage.setItem('loggedIn', this.state.username);
  },
  render: function(){
    return (
      <div className="jumbotron">
        <div className="container">
          <h1>Classy Hound T-shirt Deals!</h1>
          <p>We won't be this crazy ever again!</p>
          <p>Seriously you only have 10 minutes.</p>
          <button onClick={this.openModal} type="button" className="btn btn-success btn-lg">Log In</button>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2>Please Log In</h2>
            <form className="form-inline">
              <div className="form-group">
                <label htmlFor="userName">Name</label>
                <input type="text" className="form-control" id="userName" placeholder="Username" />
              </div>
              <button onClick={this.closeModal} type="submit" value={this.state.username} className="btn btn-primary">Save Username</button>
            </form>
        </Modal>
      </div>
    );
  }
});

var ProductComponent = React.createClass({
  getInitialState: function(){
    var size;
    var quantity;
    return {
      size: size,
      quantity: quantity
    };
  },
  handleSize: function(e){
    this.setState({size: e.target.value});
  },
  handleQuantity: function(e){
    this.setState({quantity: e.target.value});
  },
  render: function(){
    var self = this;
    var productListing = this.props.productData.map(function(product){
      return (
        <div key={product.title}  className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src={product.imgUrl} alt="a shirt" />
            <div className="caption">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className="form-inline">
                <input onChange={self.handleQuantity} type="text" className="form-control" placeholder="Quantity" />
                  <select onChange={self.handleSize} className="form-control col-md-3">
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                <button onClick={function(){self.props.addToCart(product, self.state.size, self.state.quantity)}} className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="row">
          {productListing}
        </div>
      </div>
    );
  }
});

var AppContainer = React.createClass({
  getInitialState: function(){
    var cart = [];
    return {
      cart: cart
    }
  },
  addToCart: function(product, size, qty){
    product["size"] = size;
    product["qty"] = qty;
    this.state.cart.push(product);
    localStorage.setItem('cartItem', JSON.stringify(this.state.cart));
    console.log('cart', this.state.cart);
  },
  render: function(){
    return (
      <TemplateComponent>
        <CatalogBanner />
        <ProductComponent productData={productData} addToCart={this.addToCart}/>
      </TemplateComponent>
    );
  }
});

module.exports = {
  AppContainer: AppContainer
};
