import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { cssTransition, TransitionDroup } from "react-transition-group";
import uuid from "uuid";
class JobList extends Component {
  state = {
    jobs: [
      {
        id: uuid(),
        name: "test1",
        position: "test1",
        phoneNum: "123456",
        notes: [
          {
            content: "test1",
            tittle: "test1"
          }
        ],
        contacts: [
          {
            name: "test1",
            company: "test1",
            position: "test1",
            phoneNum: "test1",
            email: "test1",
            touch: "test1",
            comment: "test1"
          }
        ]
      }
    ]
  };

  render() {
    const { jobs } = this.state;
    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("Enter info");
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
          <transitionGroup>
            {jobs.map(({ id, name }) => (
              <cssTransition Key={id} timeout={500} className={"fade"}>
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
              </cssTransition>
            ))}
          </transitionGroup>
        </ListGroup>
      </Container>
    );
  }
}
export default JobList;
