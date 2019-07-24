import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer, Bounce } from 'react-toastify';
import Header from './Header';
import NavBar from './NavBar';
import Filters from './Filters';
import Listings from './Listings';
import { startLogout } from '../actions/auth';
import '../styles/Header.css';
import 'react-toastify/dist/ReactToastify.css';

export class HomePage extends React.Component {

    render() {
        return (
            <div>
                <ToastContainer draggablePercent={60} />
                <section>
                    <Header />
                </section>
                <section>
                    <div className="row">
                        <div className="col-2">
                            <Filters />
                        </div>
                        <div className="col">
                            <NavBar />
                            <div className="d-flex align-content-center">
                                <p className="listings-head align-middle">
                                    Your Listings
                                </p>
                                <div className="ml-auto">
                                    <button onClick={this.props.startLogout} className="btn custom-btn border shadow-sm" style={{ margin: 0, marginRight: 20 }} >Logout</button>
                                </div>
                            </div>
                            <Listings />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined ,mapDispatchToProps)(HomePage);