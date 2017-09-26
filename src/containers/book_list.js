import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }

    renderList() {
        return this.props.books.map(book => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        });
    }
}

// Maps the returned state to the component's props.
function mapStateToProps(state) {
    return {
        books: state.books,
    };
}

// Maps the returned object (1st arg to bindActionCreators()) to the component's props. So basically you can bind the action creator to an event like onClick.
function mapDispatchToProps(dispatch) {
    // Bind an action creator to reducers.
    // dispatch() passes the result of the action creator selectBook() to
    // all reducers.
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Bind the specific mapStateToProps() to the specific component.
// Also bind the action creators to the dispatchers that notifies all reducers.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
