import * as React from 'react'
import { Component } from 'react';


class UserDetail extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        if (!this.props.user) {
            return (
                <h1>讀取中...</h1>
            );
        }
       
        return (
            <div>
                <h1>{this.props.user.name}</h1>
                <img src={this.props.user.picture} />
                <div>{this.props.user.about}</div>
            </div>
        );
    }
}

export default UserDetail;