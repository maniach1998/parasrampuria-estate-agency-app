import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'glamor';
import { SingleDatePicker } from 'react-dates';
import { toast } from 'react-toastify';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import 'react-toastify/dist/ReactToastify.css';

export default class ReminderForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.reminder ? props.reminder.name : '',
            listingType: props.reminder ? props.reminder.listingType : '', 
            partyName: props.reminder ? props.reminder.partyName : '', 
            contact: props.reminder ? props.reminder.contact : '', 
            createdAt: props.reminder ? moment(props.reminder.createdAt) : moment(), 
            startDate: props.reminder ? moment(props.reminder.startDate) : moment(), 
            endDate: props.reminder ? moment(props.reminder.endDate) : moment(),
            seen: props.reminder ? props.reminder.seen : false,
            calendarStartFocused: false,
            calendarEndFocused: false,
        };
    }

    notify = (name) => {
        if (this.props.reminder) {
            toast(`👍🏻 '${name}' updated successfully!`, {
                autoClose: 5000, 
                className: css({
                    backgroundColor: 'rgb(232,251,240)'
                }),
                bodyClassName: css({
                    fontFamily: 'Raleway Medium',
                    color: 'rgb(42,100,71)'
                }),
                progressClassName: css({
                    background: 'rgb(93,176,130)'
                })
            });
        } else {
            toast(`✅ '${name}' added!`, { 
                autoClose: 5000, 
                className: css({
                    backgroundColor: 'rgb(232,251,240)'
                }),
                bodyClassName: css({
                    fontFamily: 'Raleway Medium',
                    color: 'rgb(42,100,71)'
                }),
                progressClassName: css({
                    background: 'rgb(93,176,130)'
                })
            });
        }
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };

    onListingTypeChange = (e) => {
        const listingType = e.target.value;
        this.setState(() => ({ listingType }));
    };

    onContactChange = (e) => {
        const contact = e.target.value;

        if (!contact || contact.match(/^[0-9]*$/)) {
            this.setState(() => ({ contact }));
        }
    };

    onPartyNameChange = (e) => {
        const partyName = e.target.value;
        this.setState(() => ({ partyName }));
    };

    handleStartDateChange = (startDate) => {
        this.setState(() => ({ startDate }));
    };

    handleEndDateChange = (endDate) => {
        this.setState(() => ({ endDate }));
    };

    onStartFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarStartFocused: focused }));
    };

    onEndFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarEndFocused: focused }));
    };

    onSeenChange = () => {
        const seen = !this.state.seen;
        this.setState(() => ({ seen }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit({
            name: this.state.name,
            listingType: this.state.listingType,
            partyName: this.state.partyName,
            contact: this.state.contact,
            createdAt: this.state.createdAt.valueOf(),
            startDate: this.state.startDate.valueOf(),
            endDate: this.state.endDate.valueOf(),
            seen: this.state.seen
        });

        this.notify(this.state.name);
    };

    render() {
        return (
            <div>
                <div className="newlisting-header">
                    <div className="heading">
                        {this.props.reminder ? 'EDIT' : 'NEW'} REMINDER
                        <Link to="/reminders" className="float-right align-middle" style={{ fontSize: 25 }}>X</Link>
                    </div>
                </div>
                <div className="newlisting-form-container d-flex">
                    <form style={{ margin: 20 }} onSubmit={this.onSubmit}>
                        <div>
                            <div className="col-3 listing-section">
                                <span className="form-section-heading">REMINDER NAME :</span>
                            </div>
                            <div className="col">
                                <input className="listing-name" required type="text" name="ReminderName" autoFocus value={this.state.name} onChange={this.onNameChange}></input>
                            </div>
                        </div>
                        <div>
                            <div className="col-3 listing-section">
                                <span className="form-section-heading">TYPE :</span>
                            </div>
                            <div className="col">
                                <input className="listing-name" type="text" name="Type" value={this.state.listingType} onChange={this.onListingTypeChange}></input>
                            </div>
                        </div>
                        <div>
                            <div className="col-3 listing-section">
                                <span className="form-section-heading">PARTY NAME :</span>
                            </div>
                            <div className="col">
                                <input className="listing-name" type="text" name="PartyName" value={this.state.partyName} onChange={this.onPartyNameChange}></input>
                            </div>
                        </div>
                        <div>
                            <div className="col-3 listing-section">
                                <span className="form-section-heading">CONTACT :</span>
                            </div>
                            <div className="col">
                                <input className="listing-name" type="text" name="Contact" value={this.state.contact} onChange={this.onContactChange}></input>
                            </div>
                        </div>
                        <div>
                            <div style={{ marginLeft: 15 }}>
                                    <div>
                                        Start Date:
                                        <span style={{ marginLeft: 50 }}>
                                        <SingleDatePicker date={this.state.startDate} onDateChange={this.handleStartDateChange} isOutsideRange={() => false} focused={this.state.calendarStartFocused} onFocusChange={this.onStartFocusChange} />
                                        </span>
                                    </div>
                                    <div>
                                        End Date:
                                        <span style={{ marginLeft: 55 }}>
                                        <SingleDatePicker date={this.state.endDate} onDateChange={this.handleEndDateChange} isOutsideRange={() => false} focused={this.state.calendarEndFocused} onFocusChange={this.onEndFocusChange} />
                                        </span>
                                    </div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex justify-content-start align-items-center completed-section">
                                    <span className="form-section-heading">SEEN :</span>
                                    <div className="completed-options">
                                    <input type="checkbox" name="Seen" value={this.state.seen} onChange={this.onSeenChange} checked={this.state.seen === true} />
                                    </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" value="Submit" className="custom-btn btn shadow-sm">SAVE LISTING</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}