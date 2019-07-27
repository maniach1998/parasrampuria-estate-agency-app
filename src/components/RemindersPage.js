import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchReminder } from '../actions/remindersFilters';
import Reminders from './Reminders';

class RemindersPage extends React.Component {
    constructor(props) {
        super(props);
    }

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
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <Link to="/addReminder" className="btn custom-btn shadow-sm mb-1">ADD REMINDER</Link>
                        <input placeholder="Search" id="search-bar" title="Search query" className="mx-4 my-2" value={this.props.remindersFilters.text} onChange={(e) => {
                            this.props.dispatch(searchReminder(e.target.value));
                        }} />
                    </div>
                    <div className="mt-3 mb-1" style={{ fontSize: 20 }}>Recent notifications:</div>
                    <Reminders />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        remindersFilters: state.remindersFilters
    };
};

export default connect(mapStateToProps)(RemindersPage);