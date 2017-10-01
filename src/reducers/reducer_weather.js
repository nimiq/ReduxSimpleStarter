import {FETCH_WEATHER} from '../actions/index';

export default function(state=[], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            // NOTE: do not mutate the state (like state.push()), rather
            // create a new state.
            return [action.payload.data, ...state]; // ES6 notation for state.concat([action.payload.data]);
    }

    return state;
}
