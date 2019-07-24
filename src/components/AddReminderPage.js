import React from 'react';
import { startAddReminder } from '../actions/reminders';
import { connect } from 'react-redux';
import ReminderForm from '../components/ReminderForm';

const AddReminderPage = (props) => (
    <div>
        <ReminderForm onSubmit={(reminder) => {
            props.dispatch(startAddReminder(reminder));
            props.history.push('/reminders');
        }} />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startAddReminder: (reminder) => dispatch(startAddReminder(reminder))
});

export default connect(mapDispatchToProps)(AddReminderPage);