var React = require('react');
var GitHubUser = require('../services/gitHubUser');

var SearchUser = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        GitHubUser.getByUsername(this.refs.username.value).then(function(res){
            console.log(res);
        });

        GitHubUser.getReposByUsername(this.refs.username.value).then(function(res){
            console.log(res);
        });
    },
    render: function () {
        return (
            <div className="jumbotron">
                <h1>GitHub Info</h1>
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>UserName</label>
                            <input type="text" ref="username" className="form-control" placeholder="Ex: zaza" />
                        </div>
                        <button type="submit" className="btn btn-primary">buscar</button>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = SearchUser;
