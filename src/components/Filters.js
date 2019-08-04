import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import '../styles/Header.css';
import { setNeedFilter, setListingTypeFilter, setPriceFilter, setCarpetAreaFilter, sortByDate, sortByPrice } from '../actions/filters';

class Filters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            needChecked: false,
            listingTypeChecked: false,
            priceRangeChecked: false,
            carpetAreaChecked: false,
            need: [],
            listingType: [],
            priceRange: [0, Infinity],
            carpetArea: { min: 500, max: 2500 }
        };

    }

    needChange = (e) => {
        const needChecked = !this.state.needChecked;
        this.setState(() => ({ needChecked }));
        if (needChecked === false) {
            this.props.dispatch(setNeedFilter([]));
        }
    };

    listingTypeChange = (e) => {
        const listingTypeChecked = !this.state.listingTypeChecked;
        this.setState(() => ({ listingTypeChecked }));
        if (listingTypeChecked === false) {
            this.props.dispatch(setListingTypeFilter([]));
        }
    };

    priceRangeChange = (e) => {
        const priceRangeChecked = !this.state.priceRangeChecked;
        this.setState(() => ({ priceRangeChecked }));
        if (priceRangeChecked === false) {
            this.props.dispatch(setPriceFilter([0, Infinity]));
        }
    };

    carpetAreaChange = (e) => {
        const carpetAreaChecked = !this.state.carpetAreaChecked;
        this.setState(() => ({ carpetAreaChecked }));
        if (carpetAreaChecked === false) {
            this.props.dispatch(setCarpetAreaFilter({ min: 0, max: Infinity }));
        }
    };

    needSelected = (e) => {
        let options = e.target.options;
        let need = [];
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                need.push(options[i].value);
            }
        };
        this.setState(() => ({ need }));
        this.props.dispatch(setNeedFilter(need));
    };

    listingTypeSelected = (e) => {
        let options = e.target.options;
        let listingType = [];
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                listingType.push(options[i].value);
            }
        };
        this.setState(() => ({ listingType }));
        this.props.dispatch(setListingTypeFilter(listingType));
    };

    priceRangeSelected = (e) => {
        let options = e.target.options;
        let priceArray = [];
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                priceArray.push(options[i].value);
            }
        };
        priceArray =  priceArray.toString().split(',');
        let priceRange = [parseInt(priceArray[0]), parseInt(priceArray[priceArray.length - 1])];
        this.setState(() => ({ priceRange }));
        this.props.dispatch(setPriceFilter(priceRange));
    };

    render() {
        return (
            <div id="Filters">
                <div className="filters-container pb-3">
                    <div>
                        <p className="filter-head">Filters</p>
                    </div>
                    <div id="filter-line"></div>
                    <div className="filter-content" style={{ marginTop: 15 }}>
                        <input type="checkbox" checked={this.state.needChecked} onChange={this.needChange} />Need<br></br>
                        {this.state.needChecked ? (
                        <div>
                            <select 
                            className="custom-select" 
                            style={{ marginLeft: 10, marginRight: 10, width: 182 }}
                            onChange={this.needSelected}
                            >
                                <option value="Rent Enquiry">Rent Enquiry</option>
                                <option value="Available for Rent">Available for Rent</option>
                                <option value="Sell">Sell</option>
                                <option value="Buy">Buy</option>
                            </select><br></br>
                        </div>) : (<div></div>)}
                        <input type="checkbox" checked={this.state.listingTypeChecked} onChange={this.listingTypeChange} />Type<br></br>
                        {this.state.listingTypeChecked ? (
                        <div>
                            <select 
                            className="custom-select" 
                            multiple 
                            style={{ marginLeft: 10, marginRight: 10, width: 182, height: 235 }}
                            onChange={this.listingTypeSelected}
                            >
                                <option value="1RK">1RK</option>
                                <option value="1BHK">1BHK</option>
                                <option value="2BHK">2BHK</option>
                                <option value="2.5BHK">2.5BHK</option>
                                <option value="3BHK">3BHK</option>
                                <option value="4BHK">4BHK</option>
                                <option value="Villa">Villa</option>
                                <option value="Rowhouse">Rowhouse</option>
                                <option value="Penthouse">Penthouse</option>
                                <option value="Commercial">Commercial</option>
                                <option value="Shop">Shop</option>
                            </select><br></br>
                        </div>) : (<div></div>)}
                        <input type="checkbox" checked={this.state.priceRangeChecked} onChange={this.priceRangeChange} />Price Range<br></br>
                        {this.state.priceRangeChecked ? (
                        <div>
                            {this.state.need.some((item) => (item.includes('Rent'))) ? (
                                <div>
                                    <div style={{ marginLeft: 32 }}>
                                    Rent<br></br>
                                    </div>
                                <select 
                                className="custom-select" 
                                multiple 
                                style={{ marginLeft: 10, marginRight: 10, width: 182, height: 155 }}
                                onChange={this.priceRangeSelected}
                                >
                                    <option value={[0, 15000]}>Upto 15k</option>
                                    <option value={[15000, 20000]}>15k-20k</option>
                                    <option value={[20000, 30000]}>20k-30k</option>
                                    <option value={[30000, 50000]}>30k-50k</option>
                                    <option value={[55000, 65000]}>55k-65k</option>
                                    <option value={[65000, 90000]}>65k-90k</option>
                                    <option value={[90000, Infinity]}>Above 90k</option>
                                </select><br></br>
                                </div>
                            ) : (
                                <div>
                                    <div style={{ marginLeft: 32 }}>
                                    Outright<br></br>
                                    </div>
                                <select 
                                className="custom-select" 
                                multiple 
                                style={{ marginLeft: 10, marginRight: 10, width: 182, height: 155 }}
                                onChange={this.priceRangeSelected}
                                >
                                    <option value={[0, 4500000]}>Upto 45L</option>
                                    <option value={[4500000, 7000000]}>45L-70L</option>
                                    <option value={[7000000, 8000000]}>70L-80L</option>
                                    <option value={[8000000, 11500000]}>80L-1.15Cr</option>
                                    <option value={[11500000, 16000000]}>1.15Cr-1.6Cr</option>
                                    <option value={[16000000, 19000000]}>1.6Cr-1.9Cr</option>
                                    <option value={[19000000, 35000000]}>1.9Cr-3.5Cr</option>
                                    <option value={[35000000, 50000000]}>3.5Cr-5Cr</option>
                                    <option value={[50000000, 80000000]}>5Cr-8Cr</option>
                                    <option value={[80000000, Infinity]}>Above 8Cr</option>
                                </select><br></br>
                                </div>
                            )}
                            
                        </div>
                        ) : (<div></div>)}
                        <input type="checkbox" checked={this.state.carpetAreaChecked} onChange={this.carpetAreaChange} />Carpet Area<br></br>
                        {this.state.carpetAreaChecked ? (
                            <div style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                            <InputRange
                                maxValue={5000}
                                minValue={0}
                                value={this.state.carpetArea}
                                onChange={carpetArea => {
                                    this.setState({ carpetArea });
                                    this.props.dispatch(setCarpetAreaFilter(carpetArea));
                                }} />
                            <br></br>
                        </div>
                        ) : (<div></div>)}
                        <select 
                            value={this.props.filters.sortBy}
                            onChange={(e) => {
                                if (e.target.value === 'date') {
                                    this.props.dispatch(sortByDate());
                                } else if (e.target.value === 'price') {
                                    this.props.dispatch(sortByPrice());
                                }
                            }}
                            style={{ marginLeft: 30 }}>
                            <option value="date">Date</option>
                            <option value="price">Price</option>
                        </select>
                    </div>
                </div>
            </div>
        );
}
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    let actions = bindActionCreators({ setNeedFilter });
    return {...actions, dispatch};
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);