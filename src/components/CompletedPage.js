import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import Listings from './Listings';

const deleteValue = true;
const completedValue = true;

const CompletedPage = (props) => (
    <div className="delete-listing-container">
        <div className="deletelisting-header">
            <div className="heading">
                COMPLETED DEALS
                <Link to="/home" className="float-right align-middle" style={{ fontSize: 25 }}>X</Link>
            </div>
        </div>
        <ToastContainer />
        <div className="top-message">
            <div className="message">
                Search through completed listings :
            </div>
            <div className="search-bar-section">
                <input placeholder="Search" id="search-bar" title="Search query" value={props.filters.text} onChange={(e) => {
                        props.dispatch(setTextFilter(e.target.value));
                    }} />
            </div>
        </div>
        <div style={{ marginLeft: 38 }}>
            <Listings completedValue={completedValue} deleteValue={deleteValue}/>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(CompletedPage);