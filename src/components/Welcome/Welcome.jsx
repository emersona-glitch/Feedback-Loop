import React, { Component } from 'react';
import Router, { withRouter } from 'react-router-dom'

class Welcome extends Component {
    render() {
        return (
            <>
                <p>Welcome!</p>
                <button>Next</button>
            </>
        )
    }
}

export default withRouter(Welcome);