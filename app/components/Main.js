var React = require('react');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        Hello from the main!
        {this.props.children}
      <div>
    )
  }
});
