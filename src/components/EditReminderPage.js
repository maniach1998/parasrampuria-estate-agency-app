import React from 'react';
import ReminderForm from '../components/ReminderForm';
import { startEditReminder } from '../actions/reminders';
import { connect } from 'react-redux';

export class EditReminderPage extends React.Component {

    render() {
        return (
            <div>
                <ReminderForm reminder={this.props.reminder} onSubmit={(reminder) => {
                    this.props.dispatch(startEditReminder(this.props.reminder.id, reminder));
                    this.props.history.push('/reminders');
                }} />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        reminder: state.reminders.find((reminder) => reminder.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditReminderPage);