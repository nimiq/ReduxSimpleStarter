import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    onInputChange(event) {
        // In order to make `this` work here you need either to:
        //  - use .bind(this) in the onChange HTML property
        //  - use a fat arrow in the onChange HTML property
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return (
            <form onSubmit={(e) => this.onFormSubmit(e)} className="input-group">
                <input
                    placeholder="City..."
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)}  // And alternative way to bind(this) would be using a fat arrow func.
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn -btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}
//
export default connect(null, mapDispatchToProps)(SearchBar);
