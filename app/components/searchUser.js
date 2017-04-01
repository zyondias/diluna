import React from 'react';
import GitHubUser from '../services/gitHubUser';

class SearchUser extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();

        GitHubUser.getByUsername(this.refs.username.value).then((res) => {
            this.props.updateUser(res.data);
        });

        GitHubUser.getReposByUsername(this.refs.username.value).then((res) => {
            this.props.updateRepos(res.data)
        });
    }
    render() {
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
}

SearchUser.propTypes = {
    updateUser: React.PropTypes.func.isRequired,
    updateRepos: React.PropTypes.func.isRequired,
}

export default SearchUser;
