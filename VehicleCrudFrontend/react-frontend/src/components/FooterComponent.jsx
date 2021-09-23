import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted text-center">All Rights Reserved 2021 @Vaerish</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent;