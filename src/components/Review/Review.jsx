import React, { Component } from 'react';
import Router, { withRouter } from 'react-router-dom'

class Review extends Component {
    render() {
        return (
            <>
                <p>Review!</p>
                <button>Next</button>
            </>
        )
    }
}

export default withRouter(Review);