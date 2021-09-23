import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark text-center">
                        <div> <a href="http://localhost:3000/" className="navbar-brand"> Vehicle Management App </a> </div>
                        <div> <a href="https://github.com/Vaerish/VehicleCrudApplication" className="navbar-brand"> Code </a> </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;