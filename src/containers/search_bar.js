import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};

        // This is the alternative way to bind to an event.
        // The traditional (better) way would be a fat arrow func (in the input element):
        // onChange={(e) => this.onInputChange(e)}
        this.onInputChange = this.onInputChange.bind(this);
        // this.onFormSubmit = this.onFormSubmit.bind(this); // In this case we use the fat arrow in the JSX.
    }

    onInputChange(event) {
        // In order to make `this` work here you need either to:
        //  - bind the function in the constructor
        //  - use a fat arrow in the onEvent HTML property (BETTER)
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
                    onChange={this.onInputChange}  // It would be better to use a fat arrow func (see above).
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
