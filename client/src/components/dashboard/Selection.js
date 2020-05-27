import React, { Component } from "react";
import { Link } from "react-router-dom";
import Background from '../../assets/boxs.jpeg';
import logo from '../../assets/Logo.png';

import StruckModal from '../modal/StruckModal';
import MtruckModal from '../modal/MtruckModal';
import LtruckModal from '../modal/LtruckModal';
import BtruckModal from '../modal/BtruckModal';
import Price from '../modal/Price';

//Chatbot
import Chatbot from '../chatbot/Chatbot';

import Navbar from "../layout/Navbar.js";


class Selection extends Component {
    
    render() {
        return(
            <div>
            <Navbar/>
            <div style={{backgroundImage: `url(${Background})`, height: '760px', width: '100%', overflow: 'scroll'}}>
                <div className="row">
                    <div className="landing-copy col s12 center-align" style={{marginTop: "40px"}}>
                    <logo className='logo' style={{display: 'block'}}>
                        <img src={logo} alt="Logo" height='120' width='120'/>
                    </logo>

                        {/* FOR VEHICLE SELECTION */}
                        <div>
                            <h4>
                                <p className="flow-text black-text text-darken-1" 
                                    style={{fontFamily: "Arial", fontSize: 25, fontWeight: 'bold', textDecoration: 'underline'}}>
                                    Select Your Preferred Truck Size {" "}
                                    <span style={{ fontFamily: "monospace" }}></span> 🚛
                                </p>
                                <p className="flow-text red-text text-darken-1" style={{fontFamily: 'Arial', fontWeight: 'bold', fontSize: 15}}>
                                    Please Check the price list before finalizing the items.
                                </p>
                            </h4>

                            <div>
                                <Price className="hoverable"/>
                            </div>

                            <div style={{margin: 40}}/>
                            
                            <div>
                                <StruckModal className="hoverable"/>

                                <MtruckModal className="hoverable"/>
                            </div>

                            <div>
                                <LtruckModal className="hoverable"/>

                                <BtruckModal className="hoverable"/>
                            </div>

                        </div>

                        <div style={{margin: 10}}></div>

                        <div>
                            <text style={{color: 'red', fontWeight: 'bold', fontFamily: 'Arial'}}>
                                (Track Your Belongings At The Map Section.)
                            </text>

                            <div style={{margin: 10}}></div>

                            <Link to = "/location"
                                style={{
                                    width: "150px",
                                    borderRadius: 35,
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem",
                                    flex: 1,
                                    flexDirection: "row"
                                }}
                                type="submit" 
                                className="btn btn-large white-text waves-effect waves-light hoverable blue accent-3"
                                >
                                Map
                            </Link>

                            <Chatbot/>

                            <div style={{margin: 50}}></div>

                        </div>

                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Selection;