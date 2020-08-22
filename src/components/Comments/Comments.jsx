import React, { Component } from 'react';
import Router, { withRouter } from 'react-router-dom'

class Comments extends Component {
    render() {
        return (
            <>
                <p>Comments!</p>
                <button>Next</button>
            </>
        )
    }
}

export default withRouter(Comments);