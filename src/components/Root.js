import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import store from 'redux/store';
import MainTemplate from 'templates/MainTemplate';
import SchedulerPage from 'views/SchedulerPage';
import Expenses from 'views/Expenses';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <HashRouter>
          <MainTemplate>
            <Switch>
              <Route exact path={routes.home} render={() => <Redirect to={routes.scheduler} />} />
              <Route exact path={routes.scheduler} component={SchedulerPage} />
              <Route exact path={routes.expenses} component={Expenses} />
            </Switch>
          </MainTemplate>
        </HashRouter>
      </Provider>
    </>
  );
};

export default App;
