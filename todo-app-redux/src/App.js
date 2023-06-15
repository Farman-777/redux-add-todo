import "./App.css";
import { Container } from "react-bootstrap";
import AddToDo from "./Components/AddToDo";
import DisplayToDos from "./Components/DisplayToDos";
import { Provider } from "react-redux";
import store from "./Redux/Store";

function App() {
  return (
    <Provider store={store}>
      <Container className="py-3">
        <AddToDo />
        <DisplayToDos />
      </Container>
    </Provider>
  );
}

export default App;
