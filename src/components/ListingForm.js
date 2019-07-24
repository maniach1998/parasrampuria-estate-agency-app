import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { css } from 'glamor';
import '../styles/NewListing.css';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import 'react-toastify/dist/ReactToastify.css';


export default class ListingForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleStartDateChange = this.handleStartDateChange.bind(this);

        this.state = {
            name: props.listing ? props.listing.name : '',
            need: props.listing ? props.listing.need : '',
            listingType: props.listing ? props.listing.listingType : '',
            price: props.listing ? props.listing.price : undefined,
            carpetArea: props.listing ? props.listing.carpetArea : undefined,
            agency: props.listing ? props.listing.agency : undefined,
            agencyName: props.listing ? props.listing.agencyName : '',
            agencyContact: props.listing ? props.listing.agencyContact : '',
            agencyEmail: props.listing ? props.listing.agencyEmail : '',
            partyName: props.listing ? props.listing.partyName : '',
            contact: props.listing ? props.listing.contact : '',
            email: props.listing ? props.listing.email : '',
            onTheWeb: props.listing ? props.listing.onTheWeb : false,
            completed: props.listing ? props.listing.completed : false,
            createdAt: props.listing ? moment(props.listing.createdAt) : moment(),
            startDate: props.listing ? moment(props.listing.startDate) : moment(),
            endDate: props.listing ? moment(props.listing.endDate) : moment(),
            calendarStartFocused: false,
            calendarEndFocused: false,
        };
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };

    onNeedChange = (e) => {
        const need = e.target.value;
        this.setState(() => ({ need }));
    };

    onTypeChange = (e) => {
        const listingType = e.target.value;
        this.setState(() => ({ listingType }));
    };

    onCarpetAreaChange = (e) => {
        const carpetArea = e.target.value;

        if (!carpetArea || carpetArea.match(/^[0-9]*$/)) {
            this.setState(() => ({ carpetArea }));
        }
    };

    onContactChange = (e) => {
        const contact = e.target.value;

        if (!contact || contact.match(/^[0-9]*$/)) {
            this.setState(() => ({ contact }));
        }
    };

    onPriceChange = (e) => {
        const price = e.target.value;

        if (!price || price.match(/^[0-9]*$/)) {
            this.setState(() => ({ price }));
        }
    };

    onAgencyChange = (e) => {
        const agency = e.target.value;
        this.setState(() => ({ agency }));
    };

    onAgencyNameChange = (e) => {
        const agencyName = e.target.value;
        this.setState(() => ({ agencyName }));
    };

    onAgencyContactChange = (e) => {
        const agencyContact = e.target.value;

        if (!agencyContact || agencyContact.match(/^[0-9]*$/)) {
            this.setState(() => ({ agencyContact }));
        }
    };

    onAgencyEmailChange = (e) => {
        const agencyEmail = e.target.value;
        this.setState(() => ({ agencyEmail }));
    };

    onPartyNameChange = (e) => {
        const partyName = e.target.value;
        this.setState(() => ({ partyName }));
    };

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };

    onTheWebChange = (e) => {
        const onTheWeb = !this.state.onTheWeb;
        this.setState(() => ({ onTheWeb }));
    };

    onCompletedChange = (e) => {
        const completed = !this.state.completed;
        this.setState(() => ({ completed }));
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

    notify = () => toast(this.props.listing ? `👍🏻 Changes successfully made to '${this.props.listing.name}'` : "👍🏻 Listing added!", { 
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

    onSubmit = (e) => {
        e.preventDefault();

        this.notify();

        this.props.onSubmit({
            name: this.state.name,
            need: this.state.need,
            listingType: this.state.listingType,
            price: this.state.price ? parseInt(this.state.price) : '',
            carpetArea: this.state.carpetArea ? parseInt(this.state.carpetArea) : '',
            agency: this.state.agency,
            agencyName: this.state.agencyName ? this.state.agencyName : '',
            agencyContact: this.state.agencyContact ? parseInt(this.state.agencyContact) : '',
            agencyEmail: this.state.agencyEmail ? this.state.agencyEmail : '',
            partyName: this.state.partyName,
            contact: this.state.contact ? parseInt(this.state.contact) : '',
            email: this.state.email,
            onTheWeb: this.state.onTheWeb,
            createdAt: this.state.createdAt.valueOf(),
            completed: this.state.completed,
            startDate: this.state.startDate ? this.state.startDate.valueOf() : '',
            endDate: this.state.endDate ? this.state.endDate.valueOf() : ''
        });
    };

    render() {
        return (
            <div className="add-listing-container">
                <div className="newlisting-header">
                    <div className="heading">
                        {this.props.listing ? 'EDIT' : 'NEW'} LISTING
                        <Link to="/home" className="float-right align-middle" style={{ fontSize: 25 }}>X</Link>
                    </div>
                </div>
                <div className="newlisting-form-container d-flex">
                    <form style={{ margin: 20 }} onSubmit={this.onSubmit}>
                            <div>
                                <div className="col-3 listing-section">
                                    <span className="form-section-heading">LISTING NAME :</span>
                                </div>
                                <div className="col">
                                {/* Listing name input */}
                                    <input className="listing-name" required type="text" name="ListingName" autoFocus value={this.state.name} onChange={this.onNameChange}></input>
                                </div>
                            </div>
                            <div>
                                <div className="col-3 need-section">
                                    <span className="form-section-heading">NEED :</span>
                                </div>
                                <div className="col need-options">
                                {/* Need input */}
                                    <input type="radio" name="Need" value="To Rent" onChange={this.onNeedChange} checked={this.state.need === "To Rent"} /> To Rent
                                    <input type="radio" name="Need" value="For Rent" onChange={this.onNeedChange} checked={this.state.need === "For Rent"} /> For Rent
                                    <input type="radio" name="Need" value="Sell" onChange={this.onNeedChange} checked={this.state.need === "Sell"} /> Sell
                                    <input type="radio" name="Need" value="Buy" onChange={this.onNeedChange} checked={this.state.need === "Buy"} /> Buy
                                </div>
                                {this.state.need === "To Rent" || this.state.need === "For Rent" ? (
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
                                ) : (<div></div>)}
                            </div>
                            <div>
                                <div className="col-3 type-section">
                                    <span className="form-section-heading">TYPE :</span>
                                </div>
                                <div className="col type-options">
                                    {/* Type input */}
                                    <div className="row type-options">
                                        <div className="col d-flex flex-column align-items-center">
                                            <input type="radio" name="Type" value="1RK" onChange={this.onTypeChange} checked={this.state.listingType === "1RK"} />1RK
                                            <input type="radio" name="Type" value="1BHK" onChange={this.onTypeChange} checked={this.state.listingType === "1BHK"} />1BHK
                                            <input type="radio" name="Type" value="2BHK" onChange={this.onTypeChange} checked={this.state.listingType === "2BHK"} />2BHK
                                            <input type="radio" name="Type" value="2&amp;1/2 BHK" onChange={this.onTypeChange} checked={this.state.listingType === "2&1/2BHK"} />2&amp;1/2 BHK
                                        </div>
                                        <div className="col d-flex flex-column align-items-center">
                                            <input type="radio" name="Type" value="3BHK" onChange={this.onTypeChange} checked={this.state.listingType === "3BHK"} />3BHK
                                            <input type="radio" name="Type" value="4BHK" onChange={this.onTypeChange} checked={this.state.listingType === "4BHK"} />4BHK
                                            <input type="radio" name="Type" value="Villa" onChange={this.onTypeChange} checked={this.state.listingType === "Villa"} />Villa
                                            <input type="radio" name="Type" value="Rowhouse" onChange={this.onTypeChange} checked={this.state.listingType === "Rowhouse"} />Rowhouse
                                        </div>
                                        <div className="col d-flex flex-column align-items-center">
                                            <input type="radio" name="Type" value="Penthouse" onChange={this.onTypeChange} checked={this.state.listingType === "Penthouse"} />Penthouse
                                            <input type="radio" name="Type" value="Commercial" onChange={this.onTypeChange} checked={this.state.listingType === "Commercial"} />Commercial
                                            <input type="radio" name="Type" value="Shop" onChange={this.onTypeChange} checked={this.state.listingType === "Shop"} />Shop
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex justify-content-start price-section">
                                    <span className="form-section-heading">PRICE:</span>
                                    <div className="price-options">
                                {/* Price Range input */}
                                    <input type="text" name="Price" placeholder="Price (in ₹)" value={this.state.price} onChange={this.onPriceChange} />
                                </div>
                                </div>
                                
                            </div>
                            <div>
                                <div className="d-flex justify-content-start area-section">
                                    <span className="form-section-heading">CARPET AREA:</span>
                                    <div className="area-options">
                                    <input type="text" name="CarpetArea" value={this.state.carpetArea} onChange={this.onCarpetAreaChange} /> (in sq. ft)
                                </div>
                                </div>
                                
                            </div>
                            <div>
                                <div className="d-flex justify-content-start agency-section">
                                    <span className="form-section-heading">AGENCY:</span>
                                    <div className="col agency-options">
                                    <input type="radio" name="Agency" value="Direct" onChange={this.onAgencyChange} checked={this.state.agency === "Direct"} />Direct
                                    <input type="radio" name="Agency" value="EA" onChange={this.onAgencyChange} checked={this.state.agency === "EA"} />EA
                                    {this.state.agency === "EA" ? (
                                    <div>
                                        <div>
                                            <div className="d-flex justify-content-start party-name-section">
                                                <span className="form-section-heading">AGENCY NAME:</span>
                                                <div className="party-name-options">
                                                <input type="text" name="AgencyName" value={this.state.agencyName} onChange={this.onAgencyNameChange} />
                                            </div>
                                            </div>
                                            
                                        </div>
                                        <div>
                                            <div className="d-flex justify-content-start contact-section">
                                                <span className="form-section-heading">CONTACT:</span>
                                                <div className="contact-options">
                                                <input type="text" name="Contact" style={{ marginLeft: 91 }} value={this.state.agencyContact} onChange={this.onAgencyContactChange} />
                                            </div>
                                            </div>
                                            
                                        </div>
                                        <div>
                                            <div className="d-flex justify-content-start email-section">
                                                <span className="form-section-heading">EMAIL:</span>
                                                <div className="email-options">
                                                <input type="text" name="Email" style={{ marginLeft: 119 }} value={this.state.agencyEmail} onChange={this.onAgencyEmailChange} />
                                            </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    ) : (<div></div>)}
                                </div>
                                </div>
                                
                            </div>
                            <div>
                                <div className="d-flex justify-content-start party-name-section">
                                    <span className="form-section-heading">PARTY NAME:</span>
                                    <div className="party-name-options">
                                    <input type="text" name="PartyName" value={this.state.partyName} onChange={this.onPartyNameChange} />
                                </div>
                                </div>
                                
                            </div>
                            <div>
                                <div className="d-flex justify-content-start contact-section">
                                    <span className="form-section-heading">CONTACT:</span>
                                    <div className="contact-options">
                                    <input type="text" name="Contact" value={this.state.contact} onChange={this.onContactChange} />
                                </div>
                                </div>
                                
                            </div>
                            <div>
                                <div className="d-flex justify-content-start email-section">
                                    <span className="form-section-heading">EMAIL:</span>
                                    <div className="email-options">
                                    <input type="text" name="Email" value={this.state.email} onChange={this.onEmailChange} />
                                </div>
                                </div>
                                
                            </div>
                            <div>
                                <div className="d-flex justify-content-start align-items-center web-section">
                                    <span className="form-section-heading">ON THE WEB:</span>
                                    <div className="web-options">
                                    <input type="checkbox" name="OnTheWeb" value={this.state.onTheWeb} onChange={this.onTheWebChange} checked={this.state.onTheWeb === true} />
                                </div>
                                </div>
                                
                            </div>
                            {this.props.listing ? (
                                <div>
                                <div className="d-flex justify-content-start align-items-center completed-section">
                                    <span className="form-section-heading">COMPLETED:</span>
                                    <div className="completed-options">
                                    <input type="checkbox" name="Completed" value={this.state.completed} onChange={this.onCompletedChange} checked={this.state.completed === true} />
                                </div>
                                </div>
                            </div>
                            ) : (<div></div>)}
                            
                        <div className="text-center">
                            <button type="submit" value="Submit" className="custom-btn btn shadow-sm">SAVE LISTING</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
