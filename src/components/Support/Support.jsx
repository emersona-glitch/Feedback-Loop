import React, { Component } from 'react';
import Router, { withRouter } from 'react-router-dom'
// MATERIAL UI:
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

class Support extends Component {

    handleNext = () => {
        this.props.history.push('/Comments')
    }

    handleChange = () => {
        return null
    }

    render() {
        return (
            <>
                <p>How well are you being supported?</p>
                <FormControl component="fieldset">
                    {/* <FormLabel component="legend">Feeling</FormLabel> */}
                    <RadioGroup row aria-label="Feeling" name="Feeling" /* value={value} */ onChange={this.handleChange}>
                        <FormControlLabel value="1" control={<Radio />} label="1" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4" />
                        <FormControlLabel value="5" control={<Radio />} label="5" />
                        {/* <FormControlLabel value="female" control={<Radio />} label="Female" /> */}
                        {/* <FormControlLabel value="male" control={<Radio />} label="Male" /> */}
                        {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
                        {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
                    </RadioGroup>
                </FormControl><br/>
                <Button variant="contained"
                    /* onClick={() => this.props.history.push('/Understanding')} */>
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
                <p>Support!</p>
                <Button variant="contained" color="primary"
                onClick={() => this.props.history.push('/Comments')}> 
                    Next
                </Button>
                {<button onClick={() => this.props.history.push('/Comments')}>Next</button>}
            </> */
        )
    }
}

export default withRouter(Support);