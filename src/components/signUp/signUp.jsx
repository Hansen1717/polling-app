import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Grid, form, FormGroup, HelpBlock, FormControl, ControlLabel, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Panel } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
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
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#brand">Pollster</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="/">
                                Login
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Grid>
                    <Panel>
                        <Panel.Heading className="text-center">Sign Up for Pollster!</Panel.Heading>
                        <Panel.Body>
                    <form>
                        <FieldGroup
                            id="formControlsUsername"
                            type="username"
                            label="Username"
                            placeholder="Enter Username"
                        />
                        <FieldGroup
                            id="formControlsPassword"
                            type="password"
                            label="Password"
                            placeholder="Enter Password"
                        />
                        <FieldGroup
                            id="formControlsPassword"
                            type="password"
                            label="Confirm Password"
                            placeholder="Enter Password"
                        />
                        <div className="text-center">
                            <Button className="btn-danger" id="signUp" type="submit" href="/">Submit</Button>
                        </div>
                    </form>
                    </Panel.Body>
                    </Panel>
                </Grid>
            </div>
        )
    }
}