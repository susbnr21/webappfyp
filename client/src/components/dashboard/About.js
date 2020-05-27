import React, { Component } from 'react';
import Background from '../../assets/boxs.jpeg';
import { Link } from "react-router-dom";
import logo from '../../assets/Logo.png';

import Navbar from "../layout/Navbar.js";

class About extends Component{
    render() {
        return(
            <div>
                <Navbar/>

                <div style={{backgroundImage: `url(${Background})`, height: '760px', width: '100%', overflow: 'scroll'}}>
                    <div className='row'>
                        <div className="landing-copy col s12 center-align" style={{marginTop: "40px"}}>

                            <logo className='logo' style={{display: 'block'}}>
                                <img src={logo} alt="Logo" height='120' width='120'/>
                            </logo>

                        <div style={{margin: 75}}></div>

                        <div style={{marginLeft: 170}}>

                            <div style={{backgroundColor:'white', width: '85%',  height: '80%',paddingLeft: 20, paddingRight: 20}}>
                            
                                <div style={{padding: 10}}></div>

                                <text className="flow-text black-text text-darken-1" 
                                        style={{fontFamily: "Arial", fontSize: 25, fontWeight: 'bold'}}>
                                        Welcome to About Page{" "}
                                        <span style={{ fontFamily: "monospace" }}></span>🔖
                                </text>

                                <div style={{margin: 20}}></div>

                                <text className="orange-text text-darken-1"
                                        style={{fontFamily: 'Arial', fontSize: '15', fontWeight:'bold', padding: 20}}>"Lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                                        culpa qui officia deserunt mollit anim id est laborum.""Sed ut perspiciatis unde omnis iste natus error 
                                        sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
                                        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
                                        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores 
                                        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor 
                                        sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                                        dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam 
                                        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit 
                                        qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas 
                                        nulla pariatur?"</text>
                            </div>
                        </div>

                                <div style={{margin:40}}></div>

                                <Link to = "/selection"
                                    style={{
                                        width: "150px",
                                        borderRadius: 35,
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem",
                                        flex: 1,
                                        flexDirection: "row"
                                    }}
                                    className="btn btn-large white-text waves-effect waves-light hoverable blue accent-3"
                                    >
                                    Next
                                </Link>

                                <div style={{margin:50}}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;