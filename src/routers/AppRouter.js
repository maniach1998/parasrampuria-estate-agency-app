import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/HomePage';
import DeleteListingPage from '../components/DeleteListingPage';
import AddListingPage from '../components/AddListingPage';
import EditListingPage from '../components/EditListingPage';
import CompletedPage from '../components/CompletedPage';
import RemindersPage from '../components/RemindersPage';
import LoginPage from '../components/LoginPage';
import AddReminderPage from '../components/AddReminderPage';
import EditReminderPage from '../components/EditReminderPage';


export const history = createHistory();


const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={LoginPage} exact={true} />
            <Route path="/home" component={HomePage} />
            <Route path="/add" component={AddListingPage} />
            <Route path="/edit/:id" component={EditListingPage} />
            <Route path="/delete" component={DeleteListingPage} />
            <Route path="/success" component={CompletedPage} />
            <Route path="/reminders" component={RemindersPage} />
            <Route path="/addReminder" component={AddReminderPage} />
            <Route path="/editRem/:id" component={EditReminderPage} />
        </Switch>
    </Router>
);

export default AppRouter;