import { createStore, combineReducers, applyMiddleware } from 'redux';
import listingsReducer from '../reducers/listings';
import filtersReducer from '../reducers/filters';
import remindersReducer from '../reducers/reminders';
import remindersFilters from '../reducers/remindersFilters';
import thunk from 'redux-thunk';

// Store creation

export default () => {
    const store = createStore(
        combineReducers({
            listings: listingsReducer,
            filters: filtersReducer,
            reminders: remindersReducer,
            remindersFilters: remindersFilters
        }),
        applyMiddleware(thunk)
    );
    
    return store;
};

