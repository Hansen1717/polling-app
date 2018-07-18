import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Grid, form, FormGroup, HelpBlock, FormControl, ControlLabel, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Panel } from 'react-bootstrap';
import polls from "../../polls"

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

function handleClick() {
    alert('You have clicked on me');
  }
  
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          polls: polls
        };
      }
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
                            <NavItem eventKey={1} href="/newPoll">
                                Create a Poll
                            </NavItem>
                            <NavItem eventKey={1} href="/">
                                Logout
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Grid>
                    <div className="text-center">
                        <Button className="btn-block btn-danger" id="createPoll" type="submit" href="/newPoll">Create A Poll</Button>
                    </div>

                    <div>
                    {this.state.polls.map(poll => (
                        <Panel id={poll.id} onClick={handleClick}>
                            <Panel.Body className="text-center"><div> {poll.title} </div></Panel.Body>
                        </Panel>
                    ))}
                    </div>
                </Grid>
            </div>
        )
    }
}