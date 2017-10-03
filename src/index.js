import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// BrowserRouter interacts with the History.
// Route is what routes the urls.
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import Promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(Promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div> {/* There can be only 1 child inside BrowserRouter */}
            <Switch>
                <Route path="/posts/new" component={PostsNew} />
                <Route path="/posts/:id" component={PostsShow} />  {/* 'id' will be available in the component as: this.props.match.params.id */}
                <Route path="/" component={PostsIndex} />  {/* These components are shown only when their path is matched */}
            </Switch>
          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
