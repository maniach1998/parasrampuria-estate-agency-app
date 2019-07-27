// Reminders Reducer
const remindersReducerDefaultState = [];

export default (state = remindersReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_REMINDER':
            return [
                ...state,
                action.reminder
            ];

        case 'REMOVE_REMINDER':
            return state.filter(({ id }) => (id !== action.id));

        case 'EDIT_REMINDER':
            return state.map((reminder) => {
                if (reminder.id === action.id) {
                    return {
                        ...reminder,
                        ...action.updates
                    };
                } else {
                    return reminder;
                };
            });
        
        case 'SET_REMINDERS':
            return action.reminders;

        default:
            return state;
    }
};