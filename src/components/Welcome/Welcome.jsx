import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
// MATERIAL UI:
import Button from '@material-ui/core/Button';

class Welcome extends Component {
    
    handleNext = () => {
        this.props.history.push('/Feeling')
    }

    render() {
        return (
            <>
                <p>Welcome!</p>
                <p>Please click "Start" to start submitting your feedback.</p>
                <Button variant="contained" color="primary"
                onClick={this.handleNext}> 
                    Start
                </Button>
                {/* <button onClick={() => this.props.history.push('/Feeling')}>Next</button> */}
            </>
        )
    }
}

export default withRouter(Welcome);