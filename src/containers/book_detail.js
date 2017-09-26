import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {
        // Initial state.
        if (!this.props.book) {
            return <div>Select a book to get started.</div>
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

// Maps the returned state to the component's props.
function mapStateToProps(state) {
    return {
        book: state.activeBook,
    };
}

export default connect(mapStateToProps)(BookDetail);
