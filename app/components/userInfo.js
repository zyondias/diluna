import React from 'react';
import UserRepos from './userRepos';

const UserInfo = ({user, repos}) => {
    const userInfo = user ?
        (
            <div className="row">
                <div className="col-lg-4">
                    <img className="img-circle" src={user.avatar_url} alt="avatar" width="140" height="140" />
                    <h2>{user.login}</h2>
                    <p>{user.name}</p>
                    <p>Followers: {user.followers} / Following: {user.following}</p>
                    <p><a className="btn btn-default" href={user.html_url} role="button">view detail</a></p>
                </div>
                <div className="col-lg-4">
                    <UserRepos repos={repos} />
                </div>
            </div>
        ) : null
    return userInfo;
}

UserInfo.prototype = {
    user: React.PropTypes.object,
    repos: React.PropTypes.array,
}

export default UserInfo;
