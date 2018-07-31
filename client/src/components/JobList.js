import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
import { connect } from "react-redux";
import { getJobs } from "../actions/JobActions";
import PropTypes from "prop-types";

class JobList extends Component {
  componentDidMount() {
    this.props.getJobs();
  }

  render() {
    const { jobs } = this.props.job;
    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("Enter job");
            if (name) {
              this.setState(state => ({
                jobs: [...state.jobs, { id: uuid(), name }]
              }));
            }
          }}
        >
          Add Job
        </Button>
        <ListGroup>
          <TransitionGroup>
            {jobs.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames={"fade"}>
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState(state => ({
                        jobs: state.jobs.filter(job => job.id !== id)
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

JobList.propType = {
  getJobs: PropTypes.func.inRequire,
  item: PropTypes.object.inRequire
};

const mapStateToProps = state => ({
  job: state.job
});
export default connect(
  mapStateToProps,
  { getJobs }
)(JobList);
