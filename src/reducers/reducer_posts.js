import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';

export default function(state={}, action) {
    switch(action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload);  // payload is the id of the deleted post.
        case FETCH_POSTS:
            // Loadash help func to translate an array of objs into an object
            // of objs indexed by their ids.
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            const post = action.payload.data;
            /* We decided to return the entire set of posts, including the selected
               one. A better approach (more efficient) would be to use a selector
               (library: reselect) to compute a derived (filtered in this case) state.
               Checkout a video: https://www.udemy.com/react-redux/learn/v4/t/lecture/5691842?start=0
             */
            return {...state, [post.id]: post};  /* Key interpolation: create a new array copy of state,
                                                    but replacing the key 'post.id' with the new given obj 'post'.
                                                  */
    }
    return state;
}

/*
This piece of state format is:
{
   149094: {
              "id":149094,
              "title":"hello",
              "categories":"computer",
              "content":"ciaaaaao"
           },
   ...
}
*/
