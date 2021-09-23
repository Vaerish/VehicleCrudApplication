import React, { Component } from 'react';
import VehicleService from '../services/VehicleService';

class CreateVehicleComponent extends Component {
	constructor(props) {
		super(props)

		this.state = {
			id: this.props.match.params.id,
			make: '',
			model: '',
			year: ''
		}
		this.changeMakeHandler = this.changeMakeHandler.bind(this);
		this.changeModelHandler = this.changeModelHandler.bind(this);
		this.changeYearHandler = this.changeYearHandler.bind(this);
		this.saveOrUpdateVehicle = this.saveOrUpdateVehicle.bind(this);

	}

	componentDidMount(){
		if(this.state.id === '_add'){
			return
		}
		else{
				VehicleService.getVehicleById(this.state.id).then( (res) => {
				let vehicle = res.data;
				this.setState({
					make: vehicle.make,
					model: vehicle.model,
					year: vehicle.year
				});
			});
		}
	}

	saveOrUpdateVehicle = (e) => {
        e.preventDefault();
        let vehicle = {make: this.state.make, model: this.state.model, year: this.state.year};
        console.log('vehicle => ' + JSON.stringify(vehicle));

        // step 5
        if(this.state.id === '_add'){
            VehicleService.createVehicle(vehicle).then(res =>{
                this.props.history.push('/vehicles');
            });
        }else{
            VehicleService.updateVehicle(vehicle, this.state.id).then( res => {
                this.props.history.push('/vehicles');
            });
        }
    }

	changeMakeHandler = (event) => {
		this.setState({make: event.target.value});
	}

	changeModelHandler = (event) => {
		this.setState({model: event.target.value});
	}

	changeYearHandler = (event) => {
		this.setState({year: event.target.value});
	}

	cancel(){
		this.props.history.push('/vehicles');
	}

	getTitle(){
		if(this.state.id === '_add'){
			return <h3 className="text-center">Add Vehicle</h3>
		}else{
			return <h3 className="text-center">Update Vehicle</h3>
		}
	}

	render(){
		return(
			<div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Make: </label>
                                            <input placeholder="Make" name="make" className="form-control" 
                                                aria-label="make" value={this.state.make} onChange={this.changeMakeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Model: </label>
                                            <input placeholder="Model" name="model" className="form-control" 
                                                aria-label="model" value={this.state.model} onChange={this.changeModelHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Year: </label>
                                            <input placeholder="2021" name="year" className="form-control" 
                                                aria-label="year" value={this.state.year} onChange={this.changeYearHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateVehicle}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        );
	}
}

export default CreateVehicleComponent;