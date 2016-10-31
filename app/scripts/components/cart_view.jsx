var React = require('react');

var TemplateComponent = require('./template.jsx').TemplateComponent;

var CartComponent = React.createClass({
  render: function(){
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
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><button type="button" className="btn btn-warning">Remove</button></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td><button type="button" className="btn btn-warning">Remove</button></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><button type="button" className="btn btn-warning">Remove</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

var CartContianer = React.createClass({
  render: function(){
    return (
      <TemplateComponent>
        <CartComponent />
      </TemplateComponent>
    );
  }
});

module.exports = {
  CartContianer: CartContianer
};
