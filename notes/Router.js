import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// BrowserRouter interacts with the History.
// Route is what routes the urls.
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
    render() {
        return <div>Hello {this.props.match.params.firstName}</div>
    }
}

class Goodbye extends React.Component {
    render() {
        return <div>Goodbye</div>
    }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div> {/* There can be only 1 child inside BrowserRouter */}
            My Site  {/* This is always shown */}
            <Switch>
                <Route path="/hello/:firstName" component={Hello} />  {/* These 2 components are shown only when their path is matched */}
                <Route path="/goodbye" component={Goodbye} />
            </Switch>
          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));


/*
Then in your component you can manage the nagivation between routes with <Link>.
This avoids to load a new page.

import {Link} from 'react-router-dom';

<Link to="/goodbye">
    Byebye!
</Link>

*/
