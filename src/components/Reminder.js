import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { css } from 'glamor';
import { toast } from 'react-toastify';
import { startRemoveReminder, startEditReminder } from '../actions/reminders';
import moment from 'moment';
import 'react-toastify/dist/ReactToastify.css';

const notifyRemoved = (name) => (
    toast(`❌ ${name} removed!`, {
        className: css({
            backgroundColor: 'rgb(252,236,231)'
        }),
        bodyClassName: css({
            fontFamily: 'Raleway Medium',
            color: 'rgb(180,64,38)'
        }),
        progressClassName: css({
            background: 'rgb(237,98,64)'
        })
    })
)

const notifySeen = (seen) => (
    toast(`Marked as ${seen ? 'Read': 'Unread'}`, {
        className: css({
            backgroundColor: 'rgb(252,236,231)'
        }),
        bodyClassName: css({
            fontFamily: 'Raleway Medium',
            color: 'rgb(180,64,38)'
        }),
        progressClassName: css({
            background: 'rgb(237,98,64)'
        })
    })
)

const Reminder = ({ dispatch, id, name, listingType, partyName, contact, createdAt, startDate, endDate, seen }) => (
    <div className="card listing-card shadow-sm">
        <div className="listing-card-name card-title">
            {name}
            <div className="float-right">
                <Link to={`/editRem/${id}`} style={{ color: '#C94343', textDecoration: 'underline', fontSize: 20, fontWeight: 'normal', marginRight: 20 }}>Edit</Link>
                <button className="btn border shadow-sm" onClick={() => {
                        dispatch(startRemoveReminder({ id }));
                        notifyRemoved(name);
                }}>X</button>
            </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
                <div className="d-flex mr-2 align-items-center">
                    <input type="checkbox" checked={seen} className="align-items-center" />Seen
                </div>
                <div className="mr-3">
                    <span className="listing-card-heading" style={{ color: '#C94343' }}>Due:&nbsp;</span> {moment(endDate).fromNow()}
                </div>
                
        </div>
        <div className="card-body listing-card-body">
            <div>
                <span className="listing-card-heading">TYPE :</span>{listingType}
            </div>
            <div>
                <span className="listing-card-heading">PARTY NAME :</span>{partyName}
            </div>
            <div>
                <span className="listing-card-heading">CONTACT :</span>{contact}
            </div>
            <div>
                <span className="listing-card-heading">ADDED ON :</span>{moment(createdAt).format("Do MMM, YYYY")}
            </div>
            <div>
                <span className="listing-card-heading">START DATE :</span>{moment(startDate).format("Do MMM, YYYY")}
            </div>
            <div>
                <span className="listing-card-heading">END DATE :</span>{moment(endDate).format("Do MMM, YYYY")}
            </div>
        </div>
    </div>
);

export default connect()(Reminder);