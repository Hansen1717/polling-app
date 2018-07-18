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
                            <NavItem eventKey={1} href="/viewAll">
                                View Polls
                            </NavItem>
                            <NavItem eventKey={1} href="/">
                                Logout
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Grid>
                    <Panel>
                        <Panel.Heading className="text-center">Create a New Poll</Panel.Heading>
                        <Panel.Body>
                    <form>
                    <FieldGroup
                            id="formControlsNewPoll"
                            type="text"
                            label="Name your poll."
                            placeholder="Name of your Poll"
                        />
                        <FieldGroup
                            id="formControlsNewPoll"
                            type="text"
                            label="Enter a new question to poll."
                            placeholder="Yes or no question to be polled."
                        />
                        <div className="text-center">
                            <Button className="btn-danger" id="newPoll" type="submit" href="/viewAll">Submit</Button>
                        </div>
                    </form>
                    </Panel.Body>
                    </Panel>
                </Grid>
            </div>
        )
    }
}