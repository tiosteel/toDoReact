import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const App = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [currentTasks, setCurrentTasks] = React.useState(
    JSON.parse(localStorage.getItem("currentTasks")) || []
  );

  const handleAddTaskInputChange = (event) => {
    setInputValue(event.target.value);
    setButtonDisabled(event.target.value.length < 1);
  };

  const handleAddTaskKeyUp = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  const handleAddTask = () => {
    if (inputValue.length > 0) {
      setCurrentTasks([
        {
          name: inputValue,
          completed: false,
        },
        ...currentTasks,
      ]);

      saveCurrentTasks();

      handleAddTaskInputChange({ target: { value: "" } });
    }
  };

  const saveCurrentTasks = () => {
    localStorage.setItem("currentTasks", JSON.stringify(currentTasks));
  };

  const handleCompleteTask = (iIndex, event) => {
    if (!currentTasks[iIndex].completed) {
      currentTasks[iIndex].completed = true;

      const completedTask = currentTasks.splice(iIndex, 1)[0];
      setCurrentTasks([...currentTasks, completedTask]);

      saveCurrentTasks();
    }
  };

  const handleRestoreTask = (iIndex, event) => {
    if (currentTasks[iIndex].completed) {
      currentTasks[iIndex].completed = false;

      const restoredTask = currentTasks.splice(iIndex, 1)[0];
      setCurrentTasks([restoredTask, ...currentTasks]);

      saveCurrentTasks();
    }
  };

  const handleDeleteTask = (iIndex, event) => {
    //@todo beauty confirm window
    // eslint-disable-next-line
    if (currentTasks[iIndex] && confirm("Are you sure?")) {
      currentTasks.splice(iIndex, 1);
      setCurrentTasks([...currentTasks]);

      saveCurrentTasks();
    }
  };

  return (
    <div>
      <Navbar variant="light" bg="light" expanded="true">
        <Container>
          <Navbar.Brand>
            <a href="/">
              <img
                src="Wiley-logo.png"
                width="20"
                height="20"
                alt="React Bootstrap logo"
              />
            </a>
          </Navbar.Brand>
          <Navbar.Brand>
            <a href="/">React ToDo App</a>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Form className="d-flex">
              <FormGroup className="me-1">
                <FormControl
                  type="text"
                  value={inputValue}
                  placeholder="Enter task"
                  onChange={(event) => handleAddTaskInputChange(event)}
                  onKeyUp={(event) => handleAddTaskKeyUp(event)}
                />
              </FormGroup>{" "}
              <Button
                variant="primary"
                disabled={buttonDisabled}
                onClick={(event) => handleAddTask(event)}
              >
                Add
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-3">
        <ListGroup>
          {currentTasks.map((oTask, iIndex) => (
            <ListGroupItem key={iIndex}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    textDecoration: oTask.completed ? "line-through" : "None",
                  }}
                >
                  {oTask.name}
                </span>
                <span>
                  <Button
                    style={{
                      display: oTask.completed ? "None" : "Inline-block",
                    }}
                    variant="success"
                    onClick={(event) => handleCompleteTask(iIndex, event)}
                  >
                    Complete
                  </Button>
                  <Button
                    style={{
                      display: oTask.completed ? "Inline-block" : "None",
                    }}
                    variant="warning"
                    onClick={(event) => handleRestoreTask(iIndex, event)}
                  >
                    Restore
                  </Button>{" "}
                  <Button
                    variant="danger"
                    onClick={(event) => handleDeleteTask(iIndex, event)}
                  >
                    Delete
                  </Button>
                </span>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
};

export default App;
