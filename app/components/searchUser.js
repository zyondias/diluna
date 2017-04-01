var React = require('react');

var SearchUser = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        console.log(this.refs.username.value);
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
