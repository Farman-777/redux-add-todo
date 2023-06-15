import React, { useState } from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import DisplayCount from "./DisplayCount";
import { addTodo } from "../Redux/Actions/todo";
import { connect } from "react-redux";
import { v4 } from "uuid";

const AddToDo = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    id:""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo({...todo,id:v4()})
    //add todo in store
     console.log(todo);
    setTodo({ title: "", description: ""});
    /*addTodo(todo); */
  };
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body className="shadow-sm">
              <h3>Add Todo Here !!</h3>
              <DisplayCount />

              {/* form  */}
              <Form onSubmit={handleSubmit}>
                {/* title */}
                <Form.Group>
                  <Form.Label>Todo Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter here"
                    value={todo.title}
                    onChange={(event) =>
                      setTodo({
                        ...todo,
                        title: event.target.value,
                      })
                    }
                  ></Form.Control>
                </Form.Group>

                {/* Description */}
                <Form.Group className="mt-3">
                  <Form.Label>Todo Description</Form.Label>
                  <Form.Control
                    as={"textarea"}
                    placeholder="Enter here"
                    value={todo.description}
                    onChange={(event) =>
                      setTodo({
                        ...todo,
                        description: event.target.value,
                      })
                    }
                  ></Form.Control>
                </Form.Group>
                <Container className="text-center mt-3">
                  <Button type="submit" variant="primary">
                    Add Todo
                  </Button>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);
