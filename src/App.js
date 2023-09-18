import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import AddTodo from './AddTodo';
import React, { useState } from 'react';
import { List, Paper, Container } from "@mui/material";

function App() {

  const [appItem, setItem] = useState([]);

  const addItem = (item) => {
    item.id = "ID-" + appItem.length;
    item.done = false;
    setItem([...appItem, item]);
  };

  const deleteItem = (item) => {
    const newAppItems = appItem.filter(e => e.id !== item.id);
    setItem([...newAppItems]);
  };

  const editItem = () => {
    setItem([...appItem]);
  }

  let todoItems = appItem.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {appItem.map((item) => <Todo todoItem={item} key={item.id} deleteItem={deleteItem} editItem={editItem}/>)}
      </List>
    </Paper>
  );

  return (
    <div className="App">
      <header className="App-header">
        <Container maxWidth="md">
          <div className="AddTodoBlock" style={{ backgroundColor: 'white' }}>
            <AddTodo addItem={addItem} />
          </div>
          <div className="TodoList">
            {todoItems}
          </div>
        </Container>
      </header>
    </div>
  );
}

export default App;