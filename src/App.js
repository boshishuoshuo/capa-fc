import React from 'react';
import { Route, Switch, withRouter, Redirect} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import HomePage from './containers/HomePage/HomePage';
import AboutPage from './containers/AboutPage/AboutPage';
import NewsPage from './containers/NewsPage/NewsPage';

const App = props => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Layout>
    </div>
  )
}

export default App;