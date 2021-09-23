import React, { Component } from 'react';
import VehicleService from '../services/VehicleService';

class ListVehicleComponent extends Component {
	constructor(props){
		super(props)

		this.state = {
			vehicles: []
		}
		this.addVehicle = this.addVehicle.bind(this);
		this.editVehicle = this.editVehicle.bind(this);
		this.deleteVehicle = this.deleteVehicle.bind(this);

	}

	deleteVehicle(id){
		VehicleService.deleteVehicle(id).then( res => {
			this.setState({vehicles: this.state.vehicles.filter(vehicle => vehicle.id !== id)});
		});
	}

	viewVehicle(id){
		this.props.history.push(`/view-vehicle/${id}`);
	}

	editVehicle(id){
		this.props.history.push(`/add-vehicle/${id}`);
	}

	componentDidMount(){
		VehicleService.getVehicles().then((res) => {
			this.setState({ vehicles: res.data});
		});
	}

	addVehicle(){
		this.props.history.push(`/add-vehicle/_add`);
	}

	render() {
		return (
			<div>
				<h2 className="text-center">Vehicles List</h2>
				<div className = "row">
					<button className="btn btn-success" onClick={this.addVehicle}> Add Vehicle </button>
				</div>
				<br></br>
				<div className = "row">
					<table className = "table table-striped table-bordered thead-dark">

						<thead>
							<tr>
								<th> Make </th>
								<th> Model </th>
								<th> Year </th>
								<th> Actions </th>
							</tr>
						</thead>
						<tbody>
						{
							this.state.vehicles.map( 
								vehicle =>
								<tr key = {vehicle.id} >
									<td> {vehicle.make} </td>
									<td> {vehicle.model} </td>
									<td> {vehicle.year} </td>
									<td>
										<button onClick={ () => this.editVehicle(vehicle.id)} className ="btn btn-dark"> Update </button>
										<button style={{marginLeft: "10px"}} onClick={ () => this.deleteVehicle(vehicle.id)} className="btn btn-danger">Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewVehicle(vehicle.id)} className="btn btn-info">View </button> 
                                    </td>
                                </tr>
							)
						}
						</tbody>
					</table>

				</div>
			</div>
		);
	}
}

export default ListVehicleComponent;