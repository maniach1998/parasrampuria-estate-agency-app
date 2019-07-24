// Get visible listings
export default (listings, { text, need, listingType, priceRange, carpetArea, sortBy }) => {
    return listings.filter((listing) => {
        const textMatch = listing.name.toLowerCase().includes(text.toLowerCase());
        const needMatch = listing.need.includes(need);
        let listingTypeMatch = true;
        if (listingType.length > 1) {
            listingTypeMatch = listingType.includes(listing.listingType);
        } else if (listingType.length === 1) {
            listingTypeMatch = listing.listingType.includes(listingType);
        }
        let priceMatch = true;
        if (priceRange !== []) {
            const [ priceLower, priceHigher ] = priceRange;
            priceMatch = listing.price >= priceLower && listing.price <= priceHigher;
        } else {
            priceMatch = false;
        }
        const carpetAreaMatch = listing.carpetArea >= carpetArea.min && listing.carpetArea <= carpetArea.max;

        return textMatch && needMatch && listingTypeMatch && priceMatch && carpetAreaMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'price') {
            return a.price < b.price ? 1 : -1;
        };
    });
};