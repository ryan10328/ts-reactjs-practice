import * as React from 'react';
import { Component } from 'react';
// custom component
import UserListItem from './userlist-item.component';

class UserList extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const userListItem = this.props.users.map((user: any) => {
            return (
                <UserListItem key={user._id} 
                              user={user}
                              onUserSelect={this.props.onUserSelect}
                 />
            );
        });

        return (
            <ul>
                {userListItem}
            </ul>
        );
    }
}

export default UserList;