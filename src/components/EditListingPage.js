import React from 'react';
import ListingForm from './ListingForm';
import { startEditListing } from '../actions/listings';
import { connect } from 'react-redux';

const EditListingPage = (props) => (
    <div>
        <ListingForm listing={props.listing} onSubmit={(listing) => {
            props.dispatch(startEditListing(props.listing.id, listing));
            props.history.push('/home');
        }} />
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        listing: state.listings.find((listing) => listing.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditListingPage);