import database from '../firebase/firebase';
import { addReminder } from './reminders';

// ADD_LISTING
export const addListing = (listing) => ({
    type: 'ADD_LISTING',
    listing
});

export const startAddExpense = (listingData = {}) => {
    return (dispatch) => {
        const {
            name = '',
            need = '',
            listingType = '',
            price = '',
            carpetArea = '',
            agency = '',
            agencyName = '',
            agencyContact = '',
            agencyEmail = '',
            partyName = '',
            contact = '',
            email = '',
            createdAt = 0,
            completed = false,
            onTheWeb = false,
            startDate,
            endDate
            } = listingData;

            const listing = { name, need, listingType, price, carpetArea, agency, agencyName, agencyContact, agencyEmail, partyName, contact, email, createdAt, completed, onTheWeb, startDate, endDate };

            database.ref('listings').push(listing).then((ref) => {
                dispatch(addListing({
                    id: ref.key,
                    ...listing
                }));
            });

            if (need.includes('Rent')) {
                const reminder = { name, listingType, partyName, contact, createdAt, startDate, endDate, seen: false };

                database.ref('reminders').push(reminder).then((ref) => {
                    dispatch(addReminder({
                        id: ref.key,
                        ...reminder
                    }));
                });
            }
            else {
                console.log('Not a rental type');
            }
    };
};

// REMOVE_LISTING
export const removeListing = ({ id } = {}) => ({
    type: 'REMOVE_LISTING',
    id
});

export const startRemoveListing = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`listings/${id}`).remove().then(() => {
            dispatch(removeListing({ id }));
        });
    };
};

// EDIT_LISTING
export const editListing = (id, updates) => ({
    type: 'EDIT_LISTING',
    id,
    updates
});

export const startEditListing = (id, updates) => {
    return (dispatch) => {
        return database.ref(`listings/${id}`).update(updates).then(() => {
            dispatch(editListing(id, updates));
        });
    };
};

// SET_LISTINGS
export const setListings = (listings) => ({
    type: 'SET_LISTINGS',
    listings
});

export const startSetListings = () => {
    return (dispatch) => {
        return database.ref('listings').once('value').then((snapshot) => {
            const listings = [];

            snapshot.forEach((childSnapshot) => {
                listings.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setListings(listings));
        });
    };
};

