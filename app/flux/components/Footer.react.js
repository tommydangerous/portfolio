var React = require('react');

var Footer = React.createClass({
  render: function() {
    var date = new Date();
    var year = date.getFullYear();

    return (
      <footer>
        <div className="footer">
          <div className="copyright">
            <p>Quantum Ventures &#169; {year}</p>
          </div>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
