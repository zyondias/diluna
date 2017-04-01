var React = require('react');
var SearchUser = require('./searchUser')
var GitHub = React.createClass({
    render: function () {
        return (
            <div className="container">
                <SearchUser />
            </div>
        );
    }
});

module.exports = GitHub;