import React, { Component } from 'react';
import Router, { withRouter } from 'react-router-dom'
// MATERIAL UI:
import Button from '@material-ui/core/Button';

class Thanks extends Component {

    handleNext = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <>
                <p>Thanks for your feedback!</p>
                <p>Please press "Start Over" to return to the starting page.</p>
                <Button variant="contained" color="primary"
                    onClick={this.handleNext}>
                    Start Over
                </Button>
                {/* <button onClick={() => this.props.history.push('/')}>Next</button> */}
            </>
        )
    }
}

export default withRouter(Thanks);