import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { css } from 'glamor';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import { startRemoveReminder, startEditReminder } from '../actions/reminders';
import moment from 'moment';
import Notification from '../images/notification.png';
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
);

const notifySeen = (name, seen) => (
    toast(`✌🏻Marked '${name}' as ${seen ? 'Read': 'Unread'}`, {
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
    })
);

const modalStyles = {
    header: {
        backgroundColor: '#3C3C3C'
    },
    heading: {
        fontFamily: "Raleway Bold",
        fontSize: '2em',
        color: '#C94343',
        padding: '0.2em 0.7em 0.2em 0.8em'
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodyText: {
        fontSize: '1.2em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0.6em 0'
    },
    confirm: {
        color: '#fff',
        backgroundColor: '#C94343',
        padding: '0.5em 1.5em'
    },
    cancel: {
        padding: '0.5em 1.5em'
    },
};

class Reminder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            seen: props.seen
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState(() => ({modalIsOpen: true}));
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState(() => ({modalIsOpen: false}));
    }

    render() {
        const { dispatch, id, name, listingType, partyName, contact, createdAt, startDate, endDate, seen } = this.props;
        return (
            <div className="listing-card shadow-sm">
                <div className="listing-card-name card-title">
                    {name}
                    <div className="float-right">
                        {(moment(endDate).subtract(1, 'month') <= moment() && seen === false) ? (
                            <img src={Notification} alt="Notification" style={{ width: 30, marginRight: 20 }} />
                        ) : (<div></div>)}
                        <Link to={`/editRem/${id}`} style={{ color: '#C94343', textDecoration: 'underline', fontSize: 20, fontWeight: 'normal', marginRight: 20 }}>Edit</Link>
                        <button className="btn border shadow-sm" onClick={this.openModal}>X</button>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            contentLabel="Delete Modal"
                            style={styles.modalStyle}
                        >
                            <div>
                                <div style={modalStyles.header}>
                                    <div style={modalStyles.heading}>
                                        WARNING
                                    </div>
                                </div>
                                <div>
                                    <div style={modalStyles.bodyText}>
                                        Are you sure you want to delete this reminder?
                                    </div>
                                    <div style={modalStyles.buttons}>
                                    <button className="btn custom-btn shadow-sm mr-2" style={modalStyles.confirm} onClick={() => {
                                        dispatch(startRemoveReminder({ id })).then(notifyRemoved(name));
                                    }}>CONFIRM</button>
                                    <button className="btn custom-btn shadow-sm ml-2" style={modalStyles.cancel} onClick={this.closeModal}>CANCEL</button>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                        <div className="d-flex mr-2 align-items-center">
                            <input type="checkbox" defaultChecked={this.state.seen} className="align-items-center" onClick={() => {
                                const seen = !this.state.seen;
                                dispatch(startEditReminder(id, { seen }));
                                this.setState({ seen });
                                notifySeen(name, seen);
                            }} />Seen
                        </div>
                        <div className="mr-3">
                            <span className="listing-card-heading" style={{ color: '#C94343' }}>Due:&nbsp;</span> {moment(endDate).fromNow()}
                        </div>
                        
                </div>
                <div className="d-flex justify-content-between listing-card-body">
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
    }
}

const styles = {
    modalStyle: {
        content: {
            width: 430,
            height: 195,
            margin: 0,
            padding: 0,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 'auto'
        }
    }
};

export default connect()(Reminder);