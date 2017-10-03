import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions';
import {Link} from 'react-router-dom';

class PostsShow extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;  // id provided in the url path (by React Router).
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const id = this.props.match.params.id;  // id provided in the url path (by React Router). This is safer than: this.props.post.id because this has to be fecthed on load.
        this.props.deletePost(id, () => {
            this.props.history.push('/');  // Programmatic navigation - 'history' is added by the Route of react-router-dom.
        });
    }

    render() {
        const {post} = this.props;

        if (!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to="/">Back to Index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <h6>{post.content}</h6>
            </div>
        );
    }
}

function mapStateToProps({posts}, ownProps) {  // ownProps are those already in the component.
    return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
