var React = require('react');

var ContactItem = React.createClass({
  render: function() {
    return (
      <div className="contact-item">
        <a href={this.props.item.href} target="_blank">
          <img className="lazy"
               data-src={this.props.item.imageUrl}
               src="img/empty.png"
          />
        </a>
      </div>
    );
  }
});

module.exports = ContactItem;
