import React, { useReducer, useState } from "react";
import { interfaceDeclaration } from "@babel/types";

function reducer(state, action) {
  let { todos } = state;

  switch (action.Type) {
    //   ADD
    case "ADD":
      console.log(action);
      todos.push({ title: action.title, complete: false });
      return { todos };
    //   DONE
    case "DONE":
      return state.todos.map((item, index) => {
        if (action.index === index) {
          item.complete = true;
        }
      });
    //   REMOVE
    case "REMOVE":
      console.log(action);
      todos.splice(action.index, 1);
      return { todos };
    default:
      return state;
  }
}

export default function TodoList() {
  const [{ todos }, dispatch] = useReducer(reducer, {
    todos: [
      { title: "aaa", complete: false },
      { title: "bbb", complete: false }
    ]
  });

  const [inputText, setInputText] = useState("");

  return (
    <div>
      <h1>Todo List</h1>
      {/* form */}
      <form
        onSubmit={e => {
          e.preventDefault();
          const title = inputText;
          dispatch({ Type: "ADD", title });
          setInputText("");
        }}
      >
        <input
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
      </form>

      {/* list */}
      <ul>
        {todos.map((item, index) => {
          return (
            <li key={index}>
              {item.title}{" "}
              <button onClick={() => dispatch({ Type: "REMOVE", index })}>
                X
              </button>
            </li>
          );
        })}
      </ul>

      {/* <pre>{JSON.stringify({ todos }, null, 2)}</pre> */}
    </div>
  );
}
