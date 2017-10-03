import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import {Link} from 'react-router-dom';

class PostsIndex extends Component {
    // Lifecycle React function called when the component renders.
    // NOTE: we want the component to render first and then make the network
    // call to the api.
    // NOTE: componentWillMount() is executed before the componet is renedered.
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        // Lodash map() over an object (not an array like vanilla JS).
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    {/* Link to handle the navigation to a different route */}
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {posts: state.posts};
}

// // We will use a shortcut in the last line of this file instead of this code.
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({fetchPosts: fetchPosts}), dispatch);
// }

// {fetchPosts: fetchPosts} is a shortcut for the mapDispatchToProps().
export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostsIndex);
