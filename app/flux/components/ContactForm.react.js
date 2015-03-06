var React = require('react');

var ReactPropTypes = React.PropTypes;

var ContactForm = React.createClass({

  propTypes: {
    placeholder: ReactPropTypes.string,
    value:       ReactPropTypes.string
  },

  getInitialState: function() {
    var to    = this.props.to || '';
    var value = this.props.value || '';
    return {
      mailto: this._createMailto(to, value),
      to:     to,
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
          <a href={this.state.mailto} onClick={this._onClick}>
            {this.props.button}
          </a>
        </div>
      </div>
    );
  },

  _createMailto: function(to, value) {
    return 'mailto:' + to + '?body=' + value;
  },

  _onChange: function(event) {
    this._setState(event.target.value);
  },

  _onClick: function() {
    setTimeout(this._setState(''), 100);
  },

  _setState: function(value) {
    this.setState({
      mailto: this._createMailto(this.props.to, value),
      value: value
    });
  }
});

module.exports = ContactForm;
