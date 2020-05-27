import React, {Component} from 'react';
import { Link } from "react-router-dom";

//Chatbot
import Chatbot from '../chatbot/Chatbot';

import Navbar from "../layout/Navbar.js";

import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

class Location extends Component{
    render() {
        return(
            <div>
                <Navbar/>
                    <Map
                        google={this.props.google}
                        zoom={8}
                        style={{width:'100%', height:'100%'}}
                        initialCenter={{ lat: 28.00, lng: 84.00}}
                    >
                        <Marker position={{ lat: 27.700, lng: 85.300}} />
                    </Map>

                        <Link to = "#"
                                style={{
                                    width: "150px",
                                    borderRadius: 35,
                                    letterSpacing: "1.5px",
                                    marginTop: 665,
                                    flex: 1,
                                    flexDirection: "row"
                                }}
                                type="submit"
                                className="btn btn-large white-text waves-effect waves-light hoverable blue accent-3"
                                >
                                Next
                        </Link>

                        <Chatbot/>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAtBSFqRSfrU5HL6X_jE3IZDljaI2qFoKo'
  })(Location);