import { fireEvent, render, screen } from "@testing-library/react";
import Addtask from "./AddTask";

describe("<Addtask /> existin etiquetas HTML ", () => {
  beforeEach(() => {
    render(<Addtask />);
  });

  test("comprobar si existe el componente Addtask", () => {
    const addtask = render(<Addtask />);
    expect(addtask).toBeTruthy();
  });

  test("comprobar que tenga h1 con titulo", () => {
    const addtask = render(<Addtask />);
    const h2 = addtask.container.querySelector("h2");
    expect(h2?.textContent).toBe("Lista de tareas");
  });
  test("comprobar que tenga un Input", () => {
    const input = document.querySelector("input");
    expect(input).toBeTruthy();
    expect(input?.textContent).toBe("");
    expect(input?.type).toBe("text");
  });

  test("Comprobar que no renderice tareas vacias", () => {
    const inputElement = screen.getByRole("textbox");
    const addButton = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: "" } });
    fireEvent.click(addButton);
    const tasksElement = screen.queryAllByRole("listitem");
    expect(tasksElement.length).toBe(0);
  });

  test("comprobar que tenga un Button", () => {
    const buton = document.querySelector("button");
    expect(buton).toBeTruthy();
    expect(buton?.textContent).toBe("Add");
  });

  test("comprobar que tenga unas etiquetas ul", () => {
    const ul = document.querySelector("ul");
    expect(ul).toBeTruthy();
  });
});
