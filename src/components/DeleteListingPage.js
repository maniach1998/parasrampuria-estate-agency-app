import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import Listings from '../components/Listings';
import '../styles/DeleteListing.css';

const deleteValue = true;

const DeleteListingPage = (props) => (
    <div className="delete-listing-container">
        <div className="deletelisting-header">
            <div className="heading">
                DELETE LISTING
                <Link to="/home" className="float-right align-middle" style={{ fontSize: 25 }}>X</Link>
            </div>
        </div>
        <ToastContainer draggablePercent={60} />
        <div className="top-message">
            <div className="message">
                Select listings to be deleted :
            </div>
            <div className="search-bar-section">
                <input placeholder="Search" id="search-bar" title="Search query" value={props.filters.text} onChange={(e) => {
                        props.dispatch(setTextFilter(e.target.value));
                    }} />
            </div>
        </div>
        <div style={{ marginLeft: 38 }}>
            <Listings deleteValue={deleteValue}/>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(DeleteListingPage);