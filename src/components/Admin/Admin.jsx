import React, { Component } from 'react';
import Router, { withRouter } from 'react-router-dom'

class Admin extends Component {
    render() {
        return (
            <>
                <p>Admin!</p>
                <button>Next</button>
            </>
        )
    }
}

export default withRouter(Admin);