var React          = require('react');
var ReactPropTypes = React.PropTypes;

var Data = require('../../Data');

var ContactForm = React.createClass({

  propTypes: {
    placeholder: ReactPropTypes.string,
    value:       ReactPropTypes.string
  },

  getInitialState: function() {
    var value = this.props.value || '';
    return {
      mailto: this._createMailto(value),
      value:  value
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
          <a href={this.state.mailto}>
            {this.props.button}
          </a>
        </div>
      </div>
    );
  },

  _createMailto: function(value) {
    return Data.contact.items['email'].href + '?body=' + value;
  },

  _onChange: function(event) {
    this._setState(event.target.value);
  },

  _setState: function(value) {
    this.setState({
      mailto: this._createMailto(value),
      value: value
    });
  }
});

module.exports = ContactForm;
