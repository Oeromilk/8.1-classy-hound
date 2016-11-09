var React = require('react');

var TemplateComponent = React.createClass({
  render: function(){
    var username = localStorage.getItem('loggedIn');
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#" >
                Classy Hound
              </a>
              <p className="navbar-text">Signed in as {username}</p>
              <ul className="nav navbar-nav">
                <li><a href="#catalog/">T-Shirts</a></li>
                <li><a href="#cart/">Cart</a></li>
              </ul>
            </div>
          </div>
        </nav>
          {this.props.children}
      </div>
    );
  }
})

module.exports = {
  TemplateComponent: TemplateComponent
};
