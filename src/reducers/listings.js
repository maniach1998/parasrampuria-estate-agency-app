// Listings Reducer
const listingsReducerDefaultState = [];

export default (state = listingsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_LISTING':
            return [
                ...state,
                action.listing
            ];

        case 'REMOVE_LISTING':
            return state.filter(({ id }) => (id !== action.id));

        case 'EDIT_LISTING':
            return state.map((listing) => {
                if (listing.id === action.id) {
                    return {
                        ...listing,
                        ...action.updates
                    };
                } else {
                    return listing;
                };
            });
        
        case 'SET_LISTINGS':
            return action.listings;

        default:
            return state;
    }
};