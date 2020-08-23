import React, { Component } from 'react';
import Router, { withRouter } from 'react-router-dom'
// MATERIAL UI:
import Button from '@material-ui/core/Button';



class Review extends Component {

    handleNext = () => {
        this.props.history.push('/Thanks')
    }

    render() {
        return (
            <>
                <p>Please review your answers and click "Submit" when you're ready.</p>
                <p>Here is your Input: </p>
                <Button variant="contained"
                    /* onClick={() => this.props.history.push('/Understanding')} */>
                    Back
                </Button>
                <Button variant="contained" color="primary"
                    onClick={this.handleNext}>
                    Submit
                </Button>
                {/* <button >Next</button> */}
            </>
            /* 
            <>
                <p>Review!</p>
                <Button variant="contained" color="primary"
                onClick={() => this.props.history.push('/Thanks')}> 
                    Next
                </Button>
                {<button onClick={() => this.props.history.push('/Thanks')}>Next</button>}
            </> */
        )
    }
}

export default withRouter(Review);