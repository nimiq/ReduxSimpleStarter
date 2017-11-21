import React, {Component} from 'react';
// reduxForm is similar to the connect() react-redux helper.
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';

/*
NOTE: bare in mind that Redux Form takes care of the:
 - state
 - validation
of the form. The actual submit/post of the data is up to us.
*/
class PostsNew extends Component {
    renderField(field) {
        /* Syntactic sugar for:
               const touched = field.meta.touched;
               const error = field.meta.error;
        */
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>  {/* Custom attribute in Field */}
                <input
                    className="form-control"
                    type="text"
                    {...field.input}  /* Bind this JSX to the given Field.
                                         Basically it is a shortcut for:
                                             onChange={field.input.onChange}
                                             onFocus={field.input.onFocus}
                                             onBlur={field.input.onBlur}
                                       */
                />
                {/* Show errors.
                    It works if the errors array in validate was filled with
                    attributes with the same names as the Fields in render(). */}
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {  // Pass also a callback function that we will execute after the API call.
            this.props.history.push('/');  // Programmatic navigation - 'history' is added by the Route of react-router-dom.
        });
    }

    render() {
        // handleSubmit() comes from the reduxForm() at the bottom of this file.
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>  {/* The bind(this) is required to be able
                                                                          to use 'this' in the callback func */}
                <Field
                    name="title"  // The piece of state handled by this Field.
                    component={this.renderField}  // DO NOT bind() or you will get a weird focus error!!
                    // Custom attributes that end up in the renderField(field) as field.label:
                    label="Title"
                />
                <Field
                    name="categories"
                    component={this.renderField}  // DO NOT bind() or you will get a weird focus error!!
                    // Custom attributes that end up in the renderField(field) as field.label:
                    label="Categories"
                />
                <Field
                    name="content"
                    component={this.renderField}
                    // Custom attributes that end up in the renderField(field) as field.label:
                    label="Post Content"
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    // Values is an object that represents all the fields in the form with
    // their entered values.

    // Instantiate an errors object.
    const errors = {};

    // Validate the inputs from 'values'.
    if (!values.title || values.title.length < 3) {  // Title is required, > 3 chars.
        errors.title = "Enter a title that is at least 3 characters!";
    }
    if (!values.categories) {  // Categories is required.
        errors.categories = "Enter some categories!";
    }
    if (!values.content) {  // Content is required.
        errors.content = "Enter some content!";
    }

    // If errors is empty the form is fine to submit.
    // If errors has *any* properties than redux form assumes the form is invalid.
    return errors;
}

// Similar to the connect() from react-redux library.
export default reduxForm({
    form: 'PostsNewFormFoo123',  // ID of the form, must be unique per app (codebase).
    validate: validate,
})(
    // connect() here is necessary to add the mapDispatchToProps(), otherwise it could be skipped.
    connect(null, {createPost})(PostsNew)
);
