import React, {Component} from 'react';
import {Form, FormGroup} from 'reactstrap';

class NewUserForm extends Component {

    state = {
        firstName: '',
        lastName: ''
    }

    handlerSubmit = e => {
        e.preventDefault();
        this.props.onSubmit({
            firstName = this.state.firstName,
            lastName: this.state.lastName
        });

        this.setState({
            firstName: '',
            lastName: ''
        })
    }

    handleFirstNameChange = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    handleLastNameChange = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }

    render(){
        return (
            <Form onSubmit={this.handlerSubmit}>
            <FormGroup>
                <Label>
                    First Name
                </Label>
                <Input required placeholder="first name" onChange={this.handleFirstNameChange}
                value={this.state.firstName} />
            </FormGroup>
            <FormGroup>
                <Label>
                    Last Name
                </Label>
                <Input required placeholder="last name" onChange={this.handleLastNameChange}
                value={this.state.lastName} />
            </FormGroup>
            <FormGroup>
                <Button block outline type="submit"color="primary">
                    Create
                </Button>
            </FormGroup>
        </Form>
        );
    }
}