import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import MainTemplate from 'templates/MainTemplate';
import SchedulerPage from 'views/SchedulerPage';
import ExpensesPage from 'views/ExpensesPage';

const App = () => {
  return (
    <HashRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to={routes.scheduler} />} />
          <Route exact path={routes.scheduler} component={SchedulerPage} />
          <Route exact path={routes.expenses} component={ExpensesPage} />
        </Switch>
      </MainTemplate>
    </HashRouter>
  );
};

export default App;
