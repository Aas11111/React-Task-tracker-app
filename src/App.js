import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import TaskLists from "./components/TaskLists";

function App() {
  // Load lists from local storage on component mount
  const initialLists = JSON.parse(localStorage.getItem("lists")) || [];
  const [lists, setLists] = useState(initialLists);

  // Save lists to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  function handleAddLists(list) {
    setLists((lists) => [...lists, list]);
  }

  function handleDeleteLists(id) {
    setLists((lists) => lists.filter((list) => list.id !== id));
    window.alert("are you sure you want to delete this task");
  }

  function handleToggleList(id) {
    setLists((lists) =>
      lists.map((list) =>
        list.id === id ? { ...list, completed: !list.completed } : list
      )
    );
  }

  return (
    <div className="App">
      <Header />
      <Form onAddLists={handleAddLists} />
      <TaskLists
        lists={lists}
        onDeleteItem={handleDeleteLists}
        onToggleLists={handleToggleList}
        setLists={setLists}
      />
    </div>
  );
}

export default App;
