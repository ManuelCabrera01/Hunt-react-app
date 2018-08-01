import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addNote } from "../actions/NoteActions";

import { timingSafeEqual } from "crypto";
class NoteModal extends Component {
  state = {
    modal: false,
    name: ""
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChage = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newNote = {
      name: this.state.name
    };
    //add note via acion
    this.props.addNote(newNote);

    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBotton: "2rem" }}
          onClick={this.toggle}
        >
          ADD NOTE
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>ADD TO THE LIST</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="note">NOTE</Label>
                <Input
                  type="text"
                  name="name"
                  id="note"
                  placeholder="create your note"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ arginTop: "2rem" }} block>
                  add note
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  note: state.note;
};

export default connect(
  mapStateToProps,
  { addNote }
)(NoteModal);
