import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Grid, form, FormGroup, HelpBlock, Checkbox, Radio, FormControl, ControlLabel, Button } from 'react-bootstrap';

function FieldGroup({id,label,help,...props}) {
return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


export default class Home extends Component {
    render() {
        return (
            <Grid>
                <form>
                    <FieldGroup
                        id="formControlsUsername"
                        type="username"
                        label="Usernama"
                        placeholder="Enter Username"
                    />
                    <FieldGroup
                        id="formControlsPassword"
                        type="password"
                        label="Password"
                        placeholder="Enter Password"
                    />
                    <div className="text-center">
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </Grid>
        )
    }
}