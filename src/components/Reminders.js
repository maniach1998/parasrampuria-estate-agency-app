import React from 'react';
import { connect } from 'react-redux';
import { css } from 'glamor';
import Reminder from './Reminder';
import { ToastContainer, toast } from 'react-toastify';
import selectReminders from '../selectors/reminders';
import moment from 'moment';
import 'react-toastify/dist/ReactToastify.css';

export class Reminders extends React.Component {
    componentDidMount() {
        this.props.reminders.map((reminder) => {
            if ((moment(reminder.endDate).subtract(1, 'month') <= moment()) && reminder.seen === false) {
                this.notify(reminder);
            }
        });
    }

    notify = ({ name, endDate }) => (
        toast(`⚠️ '${name}' expires ${moment(endDate).fromNow()}`, {
            className: css({
                backgroundColor: 'rgb(254, 250, 232)'
            }),
            bodyClassName: css({
                fontFamily: 'Raleway Medium',
                color: 'rgb(242,157,75)'
            }),
            progressClassName: css({
                background: 'rgb(243,174,61)'
            })
        })
    )

    render() {
        return (
            <div id="Reminders">
                <div className="card-deck p-3">
                    <ToastContainer autoClose={false} draggablePercent={50} position={toast.POSITION.BOTTOM_RIGHT} />
                    {this.props.reminders.map((reminder) => {
                        return <Reminder key={reminder.id} {...reminder}/>
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        reminders: selectReminders(state.reminders)
    };
};

export default connect(mapStateToProps)(Reminders);