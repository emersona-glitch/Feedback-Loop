import React, { Component } from 'react';
import Router, { withRouter } from 'react-router-dom'

class Support extends Component {
    render() {
        return (
            <>
                <p>Support!</p>
                <button>Next</button>
            </>
        )
    }
}

export default withRouter(Support);