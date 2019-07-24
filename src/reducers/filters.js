// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    need: [],
    listingType: [],
    priceRange: [0, Infinity],
    carpetArea: { min: 0, max: 1200 },
    agency: '',
    sortBy: 'date',
};

export default (state = filtersReducerDefaultState, action) => {

    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };

        case 'SET_NEED_FILTER':
            return {
                ...state,
                need: action.need
            };
        
        case 'SET_LISTING_TYPE_FILTER':
            return {
                ...state,
                listingType: action.listingType
            };

        case 'SET_PRICE_FILTER':
            return {
                ...state,
                priceRange: action.priceRange
            };

        case 'SET_CARPET_AREA_FILTER':
            return {
                ...state,
                carpetArea: action.carpetArea
            };

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        
        case 'SORT_BY_PRICE':
            return {
                ...state,
                sortBy: 'price'
            };
            
        default:
            return state;
    }
};