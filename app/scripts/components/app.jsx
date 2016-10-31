var React = require('react');

var TemplateComponent = require('./template.jsx').TemplateComponent;

var CatalogBanner = React.createClass({
  render: function(){
    return (
      <div className="jumbotron">
        <div className="container">
          <h1>Classy Hound T-shirt Deals!</h1>
          <p>We won't be this crazy ever again!</p>
          <p>Seriously you only have 10 minutes.</p>
        </div>
      </div>
    );
  }
});

var ProductComponent = React.createClass({
  render: function(){
    return (
      <div>

        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img src="https://cdn.shopify.com/s/files/1/1047/7026/products/iconspeak-v-neck-t-shirt-charcoal_large.jpg?v=1472726757" alt="a shirt" />
              <div className="caption">
                <h3>Awesome Icons</h3>
                <p>Some of our favorite icons immortalized on this awesome shirt</p>
                <div className="form-inline">
                  <input type="text" className="form-control" placeholder="Quantity" />
                    <select className="form-control col-md-3">
                      <option>XS</option>
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                  <a href="#" className="btn btn-primary" role="button">Add to Cart</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
});

var AppContainer = React.createClass({
  render: function(){
    return (
      <TemplateComponent>
        <CatalogBanner />
        <ProductComponent />
      </TemplateComponent>
    );
  }
});

module.exports = {
  AppContainer: AppContainer
};
