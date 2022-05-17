import { TodoApp } from "./TodoApp";
import * as ReactDoom from "react-dom/client";
import { StrictMode } from "react";

const divRoot = document.querySelector("#root");

const root = ReactDoom.createRoot(divRoot);

root.render(
  <StrictMode>
    <TodoApp />
  </StrictMode>
);
