import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
import { connect } from "react-redux";
import { getNotes } from "../actions/NoteActions";
import PropTypes from "prop-types";

class NoteList extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    const { notes } = this.props.note;
    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("Enter note");
            if (name) {
              this.setState(state => ({
                notes: [...state.notes, { id: uuid(), name }]
              }));
            }
          }}
        >
          Add Note
        </Button>
        <ListGroup>
          <TransitionGroup>
            {notes.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames={"fade"}>
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState(state => ({
                        notes: state.notes.filter(note => note.id !== id)
                      }));
                    }}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

NoteList.propType = {
  getNotes: PropTypes.func.inRequire,
  item: PropTypes.object.inRequire
};

const mapStateToProps = state => ({
  note: state.note
});
export default connect(
  mapStateToProps,
  { getNotes }
)(NoteList);
