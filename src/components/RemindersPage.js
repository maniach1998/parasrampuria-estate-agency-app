import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Reminders from './Reminders';

class RemindersPage extends React.Component {

    render() {
        return (
            <div className="delete-listing-container">
                <div className="deletelisting-header">
                    <div className="heading">
                        NOTIFICATIONS
                        <Link to="/home" className="float-right align-middle" style={{ fontSize: 25 }}>X</Link>
                    </div>
                </div>
                <div style={{ marginLeft: 18 }}>
                    <div>
                        {/* <button className="btn custom-btn shadow-sm mb-1">ADD REMINDER</button> */}
                        <Link to="/addReminder" className="btn custom-btn shadow-sm mb-1">ADD REMINDER</Link>
                    </div>
                    <div className="mt-3 mb-3" style={{ fontSize: 20 }}>Recent notifications:</div>
                    <Reminders />
                </div>
            </div>
);
}}

export default connect()(RemindersPage);