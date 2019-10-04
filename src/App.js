import React from "react";
import Count from "./components/Count";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App-header">
      {/* Count */}
      <Count></Count>

      <TodoList></TodoList>
    </div>
  );
}

export default App;
