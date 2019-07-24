import React from 'react';
import { connect } from 'react-redux';
import Listing from '../components/Listing';
import selectListings from '../selectors/listings';
import '../styles/Header.css';

const Listings = (props) => {
    if (props.completedValue) {
        return (
            <div id="Listings">
                <div className="listings-container">
                    {props.listings.map((listing) => {
                        if (listing.completed) {
                            return <Listing key={listing.id} deleteValue={props.deleteValue} {...listing} />;
                        }
                    })}
                </div>
            </div>
        );
    } 
    else {
        return (
            <div id="Listings">
                <div className="listings-container">
                    {props.listings.map((listing) => {
                        return <Listing key={listing.id} deleteValue={props.deleteValue} {...listing} />;
                    })}
                </div>
            </div>
        );
    }

};

const mapStateToProps = (state) => {
    return {
        listings: selectListings(state.listings, state.filters)
    };
};

export default connect(mapStateToProps)(Listings);