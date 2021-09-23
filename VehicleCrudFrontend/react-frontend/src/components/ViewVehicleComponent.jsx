import React, { Component } from 'react';
import VehicleService from '../services/VehicleService';

class ViewVehicleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            vehicle: {}
        }
    }

    componentDidMount(){
        VehicleService.getVehicleById(this.state.id).then( res => {
            this.setState({vehicle: res.data});
        });
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Vehicle Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                             Make: &nbsp;&nbsp;&nbsp;{ this.state.vehicle.make }
                        </div>
                        <div className = "row">
                            Model: &nbsp;&nbsp;{ this.state.vehicle.model }
                        </div>
                        <div className = "row">
                            Year: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ this.state.vehicle.year }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewVehicleComponent;;