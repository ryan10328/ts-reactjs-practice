import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import * as Axios from 'axios'; // for promise base ajax lib
import * as _ from 'lodash';
import SearchBar from './components/searchbar.component';
import UserList from './components/userlist.component';
import UserDetail from './components/user-detail.component';

class App extends Component<any, any> {
    private API_URL: string = '/api/data.json';

    constructor(props: any) {
        super(props);
        this.state = { users: [], selectedUser: null };
        this.FetchData('');
    }

    FetchData(keyword: string) {
        Axios.get(this.API_URL)
            .then((response: any) => {
                if (keyword) {
                    const result = _.filter(response.data, (x: any) => {
                        if (x.name.toLowerCase().indexOf(keyword) !== -1) {
                            return x;
                        }
                    });

                    this.setState({
                        users: result,
                        selectedUser: result[0]
                    });
                } else {
                    this.setState({
                        users: response.data,
                        selectedUser: response.data[0]
                    });
                }


            });
    }

    render() {
        return (
            <div>
                <SearchBar onKeywordChange={(keyword: string) => { this.FetchData(keyword) } } />
                <hr />
                <UserDetail user={this.state.selectedUser} />
                <hr />
                <UserList users={this.state.users}
                    onUserSelect={(x: any) => {
                        this.setState({ selectedUser: x });
                    } } />
            </div>
        );
    }

}
// 實際渲染到<div id='root'></div>中的語法
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);