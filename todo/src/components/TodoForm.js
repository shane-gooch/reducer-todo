import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Input, Button, Header, Icon, Image } from "semantic-ui-react";

export default function TodoForm(props) {
  const [blankState] = useState({
    todo: ""
  });
  const [formData, setFormData] = useState({
    todo: ""
  });
  const changeHandler = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const addItem = (e, formData) => {
    props.addItem(e, formData);
    setFormData(blankState);
  };
  return (
    <div className="header">
      <Header as="h1" icon textAlign="center">
        <Icon circular name="pencil" />
        <Header.Content>Todo List</Header.Content>
      </Header>
      <form onSubmit={e => addItem(e, formData.todo)} className="todoForm">
        <Input
          className="input"
          focus
          placeholder="Add Todo"
          type="text"
          value={formData.todo}
          onChange={changeHandler}
          name="todo"
          required
        />
        <Button color="blue" className="formButton">
          Add
        </Button>
        <Button
          color="red"
          onClick={e => props.clearCompleted(e)}
          className="formButton"
        >
          Clear
        </Button>
      </form>
    </div>
  );
}
