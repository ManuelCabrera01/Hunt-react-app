import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
import { connect } from "react-redux";
import { getNotes, deleteNote } from "../actions/NoteActions";
import PropTypes from "prop-types";

class NoteList extends Component {
  componentDidMount() {
    this.props.getNotes();
  }
  onDeleteClick = id => {
    this.props.deleteNote(id);
  };

  render() {
    const { notes } = this.props.notes;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-note">
            {notes.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames={"fade"}>
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
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
  { getNotes, deleteNote }
)(NoteList);
