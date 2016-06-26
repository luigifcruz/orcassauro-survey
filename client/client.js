import React from 'react'
import { render } from 'react-dom'
import Survey from '../components/Survey'
import Question from '../components/Question'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, Redirect } from 'react-router'

const initialState = {
  marks: []
}

let store = configureStore(initialState);

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="survey" component={Survey}>
        <Route path=":id" component={Question}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
