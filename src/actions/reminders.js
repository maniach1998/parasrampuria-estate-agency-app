import database from '../firebase/firebase';

// ADD_REMINDER
export const addReminder = (reminder) => ({
    type: 'ADD_REMINDER',
    reminder
});

export const startAddReminder = (reminderData = {}) => {
    return (dispatch) => {
        const {
            name = '',
            listingType = '', 
            partyName = '', 
            contact = '', 
            createdAt = '', 
            startDate = '', 
            endDate = '',
            seen = false
        } = reminderData;

        const reminder = { name, listingType, partyName, contact, createdAt, startDate, endDate, seen };

        database.ref('reminders').push(reminder).then((ref) => {
            dispatch(addReminder({
                id: ref.key,
                ...reminder
            }));
        });
    };
};

// REMOVE_REMINDER
export const removeReminder = ({ id } = {}) => ({
    type: 'REMOVE_REMINDER',
    id
});

export const startRemoveReminder = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`reminders/${id}`).remove().then(() => {
            dispatch(removeReminder({ id }));
        });
    };
};

// EDIT_REMINDER
export const editReminder = (id, updates) => ({
    type: 'EDIT_REMINDER',
    id,
    updates
});

export const startEditReminder = (id, updates) => {
    return (dispatch) => {
        return database.ref(`reminders/${id}`).update(updates).then(() => {
            dispatch(editReminder(id, updates));
        });
    };
};

// SET_LISTINGS
export const setReminders = (reminders) => ({
    type: 'SET_REMINDERS',
    reminders
});

export const startSetReminders = () => {
    return (dispatch) => {
        return database.ref('reminders').once('value').then((snapshot) => {
            const reminders = [];

            snapshot.forEach((childSnapshot) => {
                reminders.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setReminders(reminders));
        });
    };
};