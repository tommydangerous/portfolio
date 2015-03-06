var React = require('react');

var ContactForm  = require('./ContactForm.react');
var ContactItem  = require('./ContactItem.react');
var ContactStore = require('../stores/ContactStore');

var Contact = React.createClass({
  getInitialState: function() {
    return {
      items: ContactStore.getAll()
    }
  },

  render: function() {
    var items = this.state.items;
    var elements = []
    for (var key in items) {
      elements.push(
        <ContactItem key={key} item={items[key]} />
      );
    }

    return (
      <section className="contact">
        <ContactForm placeholder="Your email address" />
        <div className="items">
          {elements}
        </div>
        <div className="clear"></div>
      </section>
    );
  }
});

module.exports = Contact;
