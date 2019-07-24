import React from 'react';
import '../styles/Header.css';
import { toast } from 'react-toastify';
import { css } from 'glamor';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRemoveListing } from '../actions/listings';

const notifySuccess = (name) => (
    toast(`❌ Listing '${name}' removed!`, {
        className: css({
            backgroundColor: 'rgb(255,255,255)'
        }),
        bodyClassName: css({
            fontFamily: 'Raleway Medium',
            color: 'rgb(98, 110, 132)'
        }),
        progressClassName: css({
            background: 'rgb(62, 133, 247)'
        })
    })
)

const Listing = ({ dispatch, id, name, listingType, need, price, carpetArea, agency, agencyName, agencyContact, agencyEmail, partyName, contact, deleteValue, completed, onTheWeb, startDate, endDate }) => (
    <div className="listing-card shadow-sm">
        <div className="listing-card-name">
            {name}
            <div className="float-right listing-card-options">
                <Link to={`/edit/${id}`} style={{ color: '#C94343', textDecoration: 'underline' }}>Edit</Link>
                <input type="checkbox" disabled={true} checked={completed} />Completed
                <input type="checkbox" disabled={true} checked={onTheWeb} />On The Web
            </div>
        </div>
        <div className="listing-card-body">
            <div>
                <div className="d-flex justify-content-between">
                    <span className="listing-card-heading">NEED:</span> {need}
                    <span className="listing-card-heading">TYPE:</span> {listingType}
                    <span className="listing-card-heading">PRICE:</span> ₹{price}
                    <span className="listing-card-heading">CARPET AREA:</span> {carpetArea}
                    <span className="listing-card-heading">AGENCY:</span> {agency}
                    <span className="listing-card-heading">PARTY NAME:</span> {partyName}
                    <span className="listing-card-heading">CONTACT:</span> {contact}
                </div>
                    {need.includes('Rent') ? (
                    <div className="d-flex justify-content-between">
                        <span className="listing-card-heading">START DATE:</span> {moment(startDate).format("Do MMM, YYYY")}
                        <span className="listing-card-heading">END DATE:</span> {moment(endDate).format("Do MMM, YYYY")}
                    </div>) : (<div></div>)}
                
                {agencyName || agencyContact || agencyEmail ? (
                    <div className="d-flex justify-content-between">
                        <span className="listing-card-heading">AGENCY NAME:</span> {agencyName}
                        <span className="listing-card-heading">AGENCY CONTACT:</span> {agencyContact}
                        <span className="listing-card-heading">AGENCY EMAIL:</span> {agencyEmail}
                    </div>
                ) : (<div></div>)}
            </div>
            {deleteValue ? (<button className="btn custom-btn shadow-sm" onClick={() => {
                dispatch(startRemoveListing({ id })).then(notifySuccess(name));
            }}>DELETE</button>) : (<div></div>)}
        </div>
    </div>
);

export default connect()(Listing);
