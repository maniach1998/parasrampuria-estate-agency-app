// Reminders Filter Reducers
const remindersFiltersDefaultState = {
    text: ''
};

export default (state = remindersFiltersDefaultState, action) => {
    switch (action.type) {
        case 'SEARCH_REMINDER':
            return {
                ...state,
                text: action.text
            };
            
        default:
            return state;
    };
};