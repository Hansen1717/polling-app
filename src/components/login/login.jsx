import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Grid, form, FormGroup, HelpBlock, FormControl, ControlLabel, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

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
                            <NavItem eventKey={1} href="/signup">
                                Sign Up
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Grid>
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
                        <div className="text-center">
                            <Button className="btn-danger" id="login" type="submit" href="/viewAll">Login</Button>
                        </div>
                    </form>
                </Grid>
            </div>
        )
    }
}