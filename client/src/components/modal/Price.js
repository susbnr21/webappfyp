import React, { Component } from 'react';
import M from 'materialize-css'; 

class Price extends Component{

    componentDidMount(){
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {inDuration: 300, outDuration: 225});
    }

    render() {
        return(
            <div>
                <button className="btn brown modal-trigger" href="#modal5" style={{height:'50px', width: '300px'}}>
                    Click Here For Price List
                </button>
                <form id="modal5" className="modal">
                    <div className="modal-content"></div>
                    <h5 style={{textDecoration: 'underline', fontWeight: 'bold'}}>Price System of Rental Shifters</h5>
                    <div className="row" style={{padding: 20}}>

                        <text style={{fontWeight: 'bold', color: 'orange'}}>Distance Prices</text>

                        <div style={{padding: 20}}>
                            <div className="input-field col s6">
                                <label for="disabled">Within 5 km</label>
                                <input disabled value="Rs. 500" id="disabled" type="text" className="validate"/>
                            </div>
                            <div className="input-field col s6">
                                <label for="disabled">Within 10 km</label>
                                <input disabled value="Rs. 1000" id="disabled" type="text" className="validate"/>
                            </div>
                            <div className="input-field col s12">
                                <label for="disabled">More Than 10 km</label>
                                <input disabled value="Rs. 1500+" id="disabled" type="text" className="validate"/>
                            </div>
                        </div>
                        
                        <text style={{fontWeight: 'bold', color: 'orange'}}>Truck Prices</text>

                        <div style={{padding: 20}}>
                            <div className="input-field col s6">
                                <label for="disabled">Small Truck</label>
                                <input disabled value="Rs. 500" id="disabled" type="text" className="validate"/>
                            </div>
                            <div className="input-field col s6">
                                <label for="disabled">Medium Truck</label>
                                <input disabled value="Rs. 1000" id="disabled" type="text" className="validate"/>
                            </div>
                            <div className="input-field col s6">
                                <label for="disabled">Large Truck</label>
                                <input disabled value="Rs. 1500" id="disabled" type="text" className="validate"/>
                            </div>
                            <div className="input-field col s6">
                                <label for="disabled">X-Large Truck</label>
                                <input disabled value="Rs. 2000" id="disabled" type="text" className="validate"/>
                            </div>
                        </div>

                        <text style={{fontWeight: 'bold', color: 'orange'}}>Extra Preference Prices</text>

                        <div style={{padding: 20}}>
                            <div className="input-field col s6">
                                <label for="disabled">Each One Woker</label>
                                <input disabled value="Rs. 100" id="disabled" type="text" className="validate"/>
                            </div>
                            <div className="input-field col s6">
                                <label for="disabled">Each One Box</label>
                                <input disabled value="Rs. 30" id="disabled" type="text" className="validate"/>
                            </div>
                            <div className="input-field col s6">
                                <label for="disabled">House Rearragement</label>
                                <input disabled value="Rs. 3000" id="disabled" type="text" className="validate"/>
                            </div>
                            <div className="input-field col s6">
                                <label for="disabled">Room Redecoration</label>
                                <input disabled value="Rs. 3000" id="disabled" type="text" className="validate"/>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}

export default Price;