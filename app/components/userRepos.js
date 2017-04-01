var React = require('react');

var UserRepos = React.createClass({
    render: function () {
        var repos = this.props.repos.map(function (repo, key) {
            return (
                <div key={key} className="thumbnail">
                    <div className="caption">
                        <h3>{repo.name}
                            <span className="badge">{repo.stargazers_count} STARS</span>
                        </h3>
                        <p>{repo.description}</p>
                        <p>
                            <a href={repo.html_url} className="btn btn-primay" role="button">Repository</a>
                            <a href={repo.html_url + '/issues'} className="btn btn-primay" role="button">Issues</a>
                        </p>
                    </div>
                </div>
            );
        });
        return ( 
            <div>
                {repos}
            </div>
        );
    }
})

module.exports = UserRepos;
