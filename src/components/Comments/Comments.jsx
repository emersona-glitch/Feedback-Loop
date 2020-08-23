import React, { Component } from 'react';
import Router, { withRouter } from 'react-router-dom'
// MATERIAL UI:
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Comments extends Component {

    state = {
        comments: ''
    }

    handleNext = () => {
        console.log(this.state);
        this.props.history.push('/Review')
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    render() {
        return (
            <>
                <p>Any comments you want to leave?</p>
                <TextField id="comments" 
                label="Standard" 
                onChange={this.handleChange} />
                <br/><br/>
                <Button variant="contained"
                    onClick={() => this.props.history.goBack()}>
                    Back
                </Button>
                <Button variant="contained" color="primary"
                    onClick={this.handleNext}>
                    Next
                </Button>
                {/* <button >Next</button> */}
            </>
/* 
            <>
                <p>Comments!</p>
                <Button variant="contained" color="primary"
                onClick={() => this.props.history.push('/Review')}> 
                    Next
                </Button>
                {<button onClick={() => this.props.history.push('/Review')}>Next</button>}
            </> */
        )
    }
}

export default withRouter(Comments);