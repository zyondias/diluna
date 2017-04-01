import React  from 'react';
import SearchUser from './searchUser';
import UserInfo from './userInfo';

class GitHub extends React.Component{

    // inicia o estado do objeto
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            repos: [],
        };
        this.updateUser = this.updateUser.bind(this);
        this.updateRepos = this.updateRepos.bind(this);
    }
    updateUser(user) {
        this.setState({user: user});
    }
    updateRepos(repos) {
        this.setState({repos: repos});
    }
    render() {
        return (
            <div className="container">
                <SearchUser 
                    updateUser={this.updateUser} 
                    updateRepos={this.updateRepos}
                />

                <UserInfo 
                    user={this.state.user}
                    repos={this.state.repos}
                    />
            </div>
        );
    }
}

export default GitHub;
