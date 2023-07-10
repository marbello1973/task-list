import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Comprobar si el componente Addtask se esta renderizando", () => {
  test("comprobar si existe el componente Addtask", () => {
    render(<App />);
    expect(screen.getByText("Lista de tareas")).toBeInTheDocument();
  });
});
