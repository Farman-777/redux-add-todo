import React,{useState} from "react";
import DisplayCount from "./DisplayCount";
import { Card, Container, Row, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteTodo } from "../Redux/Actions/todo";

const DisplayToDos = ({todos,deleteTodo}) => {
  // const [todos, setTodos] = useState([
  //   { title: "first title", description: "first description" },
  //   { title: "second title", description: "second description" },
  // ]);
  return (
    <Container>
      <Row>
        <Col>
          <Card className="mt-3 shadow-sm">
            <Card.Body>
                <h3>All Todos are here</h3>
              <DisplayCount />
                <ListGroup>
                    {
                        todos.map((todo,index)=> (
                            <ListGroupItem key={index}>
                                <h4>{todo.title}</h4>
                                <p>{todo.description}</p>
                                <Button onClick={event => deleteTodo(todo.id)} variant="danger" size="sm">delete</Button>
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
const mapStateToProps = (state) => {
return {todos:state.todos}
}
const mapDispatchToProps = (dispatch) => ({
  deleteTodo:(id) => (dispatch(deleteTodo(id)))
})
export default connect(mapStateToProps,mapDispatchToProps)(DisplayToDos);
