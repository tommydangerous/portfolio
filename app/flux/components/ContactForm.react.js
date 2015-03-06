var React = require('react');

var ReactPropTypes = React.PropTypes;

var ContactForm = React.createClass({

  propTypes: {
    placeholder: ReactPropTypes.string,
    value:       ReactPropTypes.string
  },

  getInitialState: function() {
    return {
      mailto: this.props.mailto || 'mailto:',
      value: this.props.value || ''
    };
  },

  render: function() {
    return (
      <div className="contact-form">
        <div className="input">
          <input onChange={this._onChange}
                 placeholder={this.props.placeholder}
                 value={this.state.value}
                 type="text" />
        </div>
        <div className="button">
          <a href={this.state.mailto}>Contact</a>
        </div>
      </div>
    );
  },

  _onChange: function(event) {
    var value = event.target.value;
    this.setState({
      mailto: 'mailto:' + value,
      value: value
    });
  }
});

module.exports = ContactForm;
