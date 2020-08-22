import React, { Component } from 'react';
import Router, { withRouter } from 'react-router-dom'

class Feeling extends Component {
    render() {
        return (
            <>
                <p>Feeling!</p>
                <button>Next</button>
            </>
        )
    }
}

export default withRouter(Feeling);