var React = require('react');

var TemplateComponent = require('./template.jsx').TemplateComponent;

var HomeJumbotron = React.createClass({
  handleShop: function(e){
    e.preventDefault();
    this.props.router.navigate('catalog/', {trigger: true});
  },
  render: function(){
    return (
      <div className="jumbotron">
        <div className="container">
          <h1>Classy Hound</h1>
          <p>Home of the classiest shirts!</p>
          <p><a onClick={this.handleShop} className="btn btn-primary btn-lg" href="#" role="button">Shop Now</a></p>
        </div>
      </div>
    )
  }
});

var HomeContainer = React.createClass({
  render: function(){
    return (
      <TemplateComponent>
        <HomeJumbotron router={this.props.router}/>
      </TemplateComponent>
    );
  }
});

module.exports = {
  HomeContainer: HomeContainer
};
