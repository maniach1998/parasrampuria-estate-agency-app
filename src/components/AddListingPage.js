import React from 'react';
import ListingForm from './ListingForm';
import { startAddExpense } from '../actions/listings';
import { connect } from 'react-redux';

const AddListingPage = (props) => (
    <div>
        <ListingForm onSubmit={(listing) => {
            props.dispatch(startAddExpense(listing));
            props.history.push('/home');
        }} />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (listing) => dispatch(startAddExpense(listing))
});

export default connect(mapDispatchToProps)(AddListingPage);