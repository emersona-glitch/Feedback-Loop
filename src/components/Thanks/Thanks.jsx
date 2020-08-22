import React, { Component } from 'react';
import Router, { withRouter } from 'react-router-dom'

class Thanks extends Component {
    render() {
        return (
            <>
                <p>Thanks!</p>
                <button>Next</button>
            </>
        )
    }
}

export default withRouter(Thanks);