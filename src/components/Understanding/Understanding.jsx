import React, { Component } from 'react';
import Router, { withRouter } from 'react-router-dom'

class Understanding extends Component {
    render() {
        return (
            <>
                <p>Understanding!</p>
                <button>Next</button>
            </>
        )
    }
}

export default withRouter(Understanding);