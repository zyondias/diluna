var React = require('react');
var SearchUser = require('./searchUser')
var GitHub = React.createClass({

    // inicia o estado do objeto
    getInitialState: function() {
        return {
            user: null,
            repos: [],
        };
    },
    updateUser: function(user) {
        this.setState({user: user});
    },
    updateRepos: function(repos) {
        this.setState({repos: repos});
    },
    render: function () {
        return (
            <div className="container">
                <SearchUser 
                    updateUser={this.updateUser} 
                    updateRepos={this.updateRepos}
                />
            </div>
        );
    }
});

module.exports = GitHub;