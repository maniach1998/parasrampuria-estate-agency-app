import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import Add from '../images/navbar-imgs/Add.png';
import Delete from '../images/navbar-imgs/Delete.png';
import Success from '../images/navbar-imgs/Success.png';
import Reminders from '../images/navbar-imgs/Reminders.png';
import '../styles/Header.css';

export const NavBar = (props) => {
    return (
        <div id="NavBar">
            <div className="navbar-container d-flex justify-content-around">
                <Link to="/add">
                    <img src={Add} title="New Listing" alt="Add button" style={{ height: 50, marginLeft: 68 }} />
                </Link>
                <Link to="/delete">
                    <img src={Delete} title="Delete Listing" alt="Delete button" style={{ height: 50, marginLeft: 68 }} />
                </Link>
                <Link to="/success">
                    <img src={Success} title="Completed Listings" alt="Success button" style={{ height: 50, marginLeft: 68 }} />
                </Link>
                <Link to="/reminders">
                    <img src={Reminders} title="Reminders" alt="Reminders button" style={{ height: 50, marginLeft: 68 }} />
                </Link>

                <input placeholder="Search" id="search-bar" title="Search query" value={props.filters.text} onChange={(e) => {
                    props.dispatch(setTextFilter(e.target.value));
                }} />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(NavBar);