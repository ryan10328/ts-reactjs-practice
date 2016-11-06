import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom'

class SearchBar extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = { keyword: '' };
    }

    render() {
        return (
            <input
                placeholder="請輸入搜尋關鍵字"
                value={this.state.keyword}
                onChange={(event) => {
                    this.setState({ keyword: (event.target as HTMLInputElement).value });
                } } />
        );
    }
}


export default SearchBar;