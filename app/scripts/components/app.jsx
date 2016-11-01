var React = require('react');
var ReactDom = require('react-dom');
var $ = require('jquery');
require('react-bootstrap');

var TemplateComponent = require('./template.jsx').TemplateComponent;
var productData = require('../product_data.js');

var ModalHeader = React.createClass({
  render: function(){
    return (
      <div className="modal-header">
        <h4 className="modal-title">Enter your Username below.</h4>
      </div>
    );
  }
});

var ModalBody = React.createClass({
  render: function(){
    return (
      <div className="modal-body">
        <input type="button" name="name" value="" />
      </div>
    );
  }
});

var ModalFooter = React.createClass({
  render: function(){
    return (
      <div className="modal-footer">
        <button type="button" className="btn btn-success">Log In</button>
      </div>
    );
  }
});

var Modal = React.createClass({
  render: function() {
    return (
      <div className="modal fade" tabIndex="-1" ref="modal" role="dialog" aria-labelledby="mySmallModalLabel">
        <div className="modal-dialog modal-sm" role="document">
          <ModalHeader />
          <ModalBody />
          <ModalFooter />
        </div>
      </div>
    );
  }
});

var CatalogBanner = React.createClass({
  showModal: function(){
    ReactDom.findDOMNode(this.refs.modal).value;
  },
  render: function(){
    return (
      <div className="jumbotron">
        <div className="container">
          <h1>Classy Hound T-shirt Deals!</h1>
          <p>We won't be this crazy ever again!</p>
          <p>Seriously you only have 10 minutes.</p>
          <button onClick={this.showModal} type="button" className="btn btn-success btn-lg">Log In</button>
          <Modal ref="modal" />
        </div>
      </div>
    );
  }
});

var ProductComponent = React.createClass({
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
                <input type="text" className="form-control" placeholder="Quantity" />
                  <select className="form-control col-md-3">
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                <button onClick={function(){self.props.addToCart(product)}} className="btn btn-primary">Add to Cart</button>
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
  addToCart: function(product){
    localStorage.setItem('cartItem', JSON.stringify(product));
    console.log(localStorage.getItem('cartItem'));
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
