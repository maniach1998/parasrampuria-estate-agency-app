import React from 'react';
import '../styles/Header.css';
import Modal from 'react-modal';
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
);

const modalStyles = {
    header: {
        backgroundColor: '#3C3C3C'
    },
    heading: {
        fontFamily: "Raleway Bold",
        fontSize: '2em',
        color: '#C94343',
        padding: '0.3em 0.7em 0.3em 0.8em'
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

export class Listing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        const { 
            dispatch, 
            id, 
            name, 
            listingType, 
            need, 
            price, 
            carpetArea, 
            agency, 
            agencyName, 
            agencyContact, 
            agencyEmail, 
            partyName, 
            contact, 
            deleteValue, 
            completed, 
            onTheWeb, 
            startDate, 
            endDate 
        } = this.props;

        return (
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
                    {deleteValue ? (
                    <div>
                        <button className="btn custom-btn shadow-sm" onClick={this.openModal}>DELETE</button>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            contentLabel="Delete Modal"
                            style={{
                                content: {
                                    width: 420,
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
                            }}
                        >
                            <div>
                                <div style={modalStyles.header}>
                                    <div style={modalStyles.heading}>
                                        WARNING
                                    </div>
                                </div>
                                <div>
                                    <div style={modalStyles.bodyText}>
                                        Are you sure you want to delete this listing?
                                    </div>
                                    <div style={modalStyles.buttons}>
                                    <button className="btn custom-btn shadow-sm mr-2" style={modalStyles.confirm} onClick={() => {
                                        dispatch(startRemoveListing({ id })).then(notifySuccess(name));
                                    }}>CONFIRM</button>
                                    <button className="btn custom-btn shadow-sm ml-2" style={modalStyles.cancel} onClick={this.closeModal}>CANCEL</button>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                    ) : (<div></div>)}
                </div>
            </div>
        );
    }
}

export default connect()(Listing);

