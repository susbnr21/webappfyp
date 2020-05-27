import React, { Component } from 'react';
import M from 'materialize-css'; 
import Mtruck from '../../assets/Mtruck.png';
// import axios from 'axios';
import { truckValue } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class MtruckModal extends Component{
    constructor() {
        super();
        this.state= {
            name: "",
            contact: "",
            address_from: "",
            address_to: "",
            truck_size: "Medium truck",
            description: "1-3 Bedroom Apartments (600-1200 sqft) and Small 1-2 Bedroom Houses (600-1200 sqft)",
            weight: "3000-5000 lbs",
            truck_space: "650-850 cubic feet",
            capacity_furniture:"1-10 medium furniture",
            capacity_box: "upto 250 medium box",
            worker: "",
            boxes: "",
            extra: "",
            errors: {}
        };
    }

    componentDidMount() {
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {inDuration: 300, outDuration: 225});
        M.AutoInit();
        const { user } = this.props.auth;
        console.log(this.props.auth.user.name)
        this.setState({name:user.name})
        console.log(this.state.name)
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value })
      };
    
    
    handleSubmit = e => {
        e.preventDefault();

        const truckData = {
            name:this.props.auth.user.name,
            contact: this.state.contact,
            address_from: this.state.address_from,
            address_to: this.state.address_to,
            truck_size: this.state.truck_size,
            description: this.state.description,
            weight: this.state.weight,
            truck_space: this.state.truck_space,
            capacity_furniture: this.state.capacity_furniture,
            capacity_box: this.state.capacity_box,
            worker: this.state.worker,
            boxes: this.state.boxes,
            extra: this.state.extra
          };
      
          this.props.truckValue(truckData);
        // axios.post(`http://localhost:5000/vehicles`,
        // {
        //     contact: `${this.state.contact}`,
        //     address_from: `${this.state.address_from}`,
        //     address_to: `${this.state.address_to}`,
        //     truck_size: `${this.state.truck_size}`,
        //     description: `${this.state.description}`,
        //     weight: `${this.state.weight}`,
        //     truck_space: `${this.state.truck_space}`,
        //     capacity_furniture: `${this.state.capacity_furniture}`,
        //     capacity_box: `${this.state.capacity_box}`
        // },
        // {
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json; charset=UTF-8',
        // },
        
        // })
        // .then( res => {
        //     console.log(res);
        //     console.log(res.data);
        // })
        // .catch(err => {
        //     console.log(`This is the ${err} error.`)
        // })
    };


    render() {
        const { errors } = this.state;
        const { user } = this.props.auth;
        return(
            <div style={{display: 'inline'}}>
                {/* For Medium Truck */}
                <button className="btn modal-trigger" href="#modal2" style={{height:'160px', width: '430px', marginLeft: 150}}>
                    <img src={Mtruck} style={{height:'160px', width: '500px'}} className='hoverable'></img>
                </button>
                <form id="modal2" className="modal" noValidate onSubmit={this.handleSubmit}>
                <div className="modal-content" style={{height: 400}}>
                    <h5 style={{textDecoration: 'underline', fontWeight: 'bold'}}>You Have Selected Medium Truck</h5>
                <div className="row">
                    <div style={{padding: 20}}>
                        <text style={{fontWeight: 'bold', color: 'orange'}}>DESCRIPTION</text>
                    </div>
                    <div className="input-field col s6">
                        <input disabled value={user.name} id="disabled" type="text" className="validate"/>
                        <label for="disabled">Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input disabled value="Medium Truck" id="disabled" type="text" className="validate"/>
                        <label for="disabled">Truck Size</label>
                    </div>
                        <div className="input-field col s12">
                        <input disabled value="1-3 Bedroom Apartments (600-1200 sqft) and Small 1-2 Bedroom Houses (600-1200 sqft)"
                        id="disabled" type="text" className="validate"/>
                        <label for="disabled">Description</label>
                    </div>
                    <div className="input-field col s6">
                        <input disabled value="3000-5000 lbs" id="disabled" type="text" className="validate"/>
                        <label for="disabled">Weight</label>
                    </div>
                    <div className="input-field col s6">
                        <input disabled value="650-850 cubic feet" id="disabled" type="text" className="validate"/>
                        <label for="disabled">Truck Space</label>
                    </div>
                    <div className="input-field col s6">
                        <input disabled value="Moving 1-10 Furniture Items" id="disabled" type="text" className="validate"/>
                        <label for="disabled">Capacity Furniture</label>
                    </div>
                    <div className="input-field col s6 ">
                        <input disabled value="Upto 250 medium box" id="disabled" type="text" className="validate"/>
                        <label for="disabled">Capacity Boxes</label>
                    </div>
                </div>

                    <text style={{fontWeight: 'bold', color: 'orange'}}>
                        PLEASE FILL THE FORM BELOW
                    </text>

                    <div className="input-field col s12">
                        <input type="text"
                        value={this.state.contact}
                        error={errors.contact}
                         id="contact" 
                         onChange={this.handleChange}
                         className={classnames("", {
                            invalid: errors.contact
                            })}
                         />
                        <label htmlFor="contact">Phone Number</label>
                        <span className="red-text">
                            {errors.contact}
                        </span>
                    </div>

                    <div className="input-field col s6">
                        <input type="text"
                        value={this.state.address_from}
                        error={errors.address_from} 
                         id="address_from" 
                         onChange={this.handleChange}
                         className={classnames("", {
                            invalid: errors.address_from
                          })}
                         />
                        <label for="address_from">Address From</label>
                        <span className="red-text">
                            {errors.address_from}
                        </span>
                    </div>
                    <div className="input-field col s6">
                        <input type="text"
                        value={this.state.address_to}
                        error={errors.address_to}  
                         id="address_to" 
                         onChange={this.handleChange}
                         className={classnames("", {
                            invalid: errors.address_to
                          })}
                         />
                        <label for="address_to">Address To</label>
                        <span className="red-text">
                            {errors.address_to}
                        </span>
                    </div>

                    <div>
                        <text style={{fontWeight: 'bold', color: 'orange'}}>OPTIONAL CHOICES</text>
                    </div>
                    
                    {/* FOR WORKER */}
                    <div style={{display:'inline'}}>
                        <div className="input-field col s12" style={{width: 240}}>
                            <text className="flow-text black-text text-darken-1" 
                            style={{fontFamily: "Arial", fontSize: 15, fontWeight: 'bold'}}>
                            Select the Number of workers {" "}
                            <span style={{ fontFamily: "monospace" }}></span> 👨🏻‍🔧
                            </text>
                            <select id="worker" onChange={this.handleChange} value={this.state.worker}>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="None">None</option>
                            <option value="1 Worker">1 Worker</option>
                            <option value="2 Worker">2 Workers</option>
                            <option value="3 Worker">3 Workers</option>
                            <option value="4 Worker">4 Workers</option>
                            <option value="5 Worker">5 Workers</option>
                            <option value="6 Worker">6 Workers</option>
                            <option value="7 Worker">7 Workers</option>
                            <option value="8 Worker">8 Workers</option>
                            <option value="9 Worker">9 Workers</option>
                            <option value="10 Worker">10 Workers</option>
                            </select>
                        </div>
                    </div>

                    {/* FOR BOXES */}
                    <div style={{display: 'inline'}}>
                        <div className="input-field col s12" style={{width: 240}}>
                            <text className="flow-text black-text text-darken-1" 
                                style={{fontFamily: "Arial", fontSize: 15, fontWeight: 'bold'}}>
                                Select the Number of Boxes {" "}
                                <span style={{ fontFamily: "monospace" }}></span> 📦
                            </text>
                            <select id="boxes" onChange={this.handleChange} value={this.state.boxes}>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="None">None</option>
                            <option value="1 Box">1 Box</option>
                            <option value="2 Boxes">2 Boxes</option>
                            <option value="3 Boxes">3 Boxes</option>
                            <option value="4 Boxes">4 Boxes</option>
                            <option value="5 Boxes">5 Boxes</option>
                            <option value="6 Boxes">6 Boxes</option>
                            <option value="7 Boxes">7 Boxes</option>
                            <option value="8 Boxes">8 Boxes</option>
                            <option value="9 Boxes">9 Boxes</option>
                            <option value="10 Boxes">10 Boxes</option>
                            <option value="More Than 10 Boxes">More Than 10 Boxes</option>
                            </select>
                        </div>
                    </div>

                    {/* FOR EXTRA PREFERENCES */}
                    <div style={{display: 'inline'}}>
                        <div className="input-field col s12" style={{width: 240}}>
                            <text className="flow-text black-text text-darken-1" 
                                style={{fontFamily: "Arial", fontSize: 15, fontWeight: 'bold'}}>
                                Select Any Extra Preferences You Want {" "}
                                <span style={{ fontFamily: "monospace" }}></span> 🏡
                            </text>
                            <select id="extra" onChange={this.handleChange} value={this.state.extra}>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="None">None</option>
                            <option value="House Rearrangement">House Rearrangement</option>
                            <option value="Room Decoration">Room Decoration</option>
                            </select>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button className="modal-close waves-effect waves-green btn-flat" type='submit' style={{marginRight: 20}}>Submit</button>
                        <a href="#!" className="modal-close waves-effect waves-red btn-flat">Cancel</a>
                    </div>
                </div>
                </form>
          </div>
        )
    }
}
MtruckModal.propTypes = {
    truckValue: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    { truckValue }
  )(MtruckModal);
  
// export default MtruckModal;