// JSX -> es una tecnologia que nos permite escribir
// HTML y JS en un solo archivo

export function TodoApp() {
  return (
    <div className="todoContainer">
      <form className="todoCreateForm">
        <input className="todoInput"></input>
        <input
          type="submit"
          value="Create todo"
          className="buttonCreate"
        ></input>
      </form>
    </div>
  );
}
