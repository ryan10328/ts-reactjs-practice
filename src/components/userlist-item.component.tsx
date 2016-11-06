import * as React from 'react';
import { Component } from 'react';

class UserListItem extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <li>
                <h2>
                    <a href="javascript:void(0)" 
                       onClick={ () => { this.props.onUserSelect(this.props.user) } }>
                        {this.props.user.name}
                    </a>
                </h2>
                <img src={this.props.user.picture} />
            </li>
        );
    }
}

export default UserListItem;