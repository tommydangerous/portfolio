var React = require('react');

var Data = require('../../Data');

var Footer = React.createClass({
  render: function() {
    var date = new Date();
    var year = date.getFullYear();

    return (
      <footer>
        <div className="footer">
          <div className="copyright">
            <p>{Data.layout.footer.copyright} &#169; {year}</p>
          </div>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
