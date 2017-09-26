import React, { Component } from 'react';

// Component as a function.
// const SearchBar = () => {
//     return <input />
// };

// Component as a class.
class SearchBar extends Component {
    constructor(props) {
        super(props);

        // In the contructore we define the initial state.
        // This is th eonly place where we set the state directly: everywhere
        // else we set the state using: this.setState()
        this.state = {term: ''};
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
                {/* <p>The value is: {this.state.term}</p> */}
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
};

export default SearchBar;
