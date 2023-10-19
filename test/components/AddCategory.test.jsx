import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  test("debe de cambiar el valor de la caja de texto", () => {
    // creamos el sujeto de pruebas
    render(<AddCategory onNewCategory={() => {}} />);

    // guardo el input en una variable
    const input = screen.getByRole("textbox");

    // disparamos el evento
    // especifico donde se desata el evento y que tipo de evento es, en este caso es un evento de tipo input, y lo desata la variable input de arriba
    fireEvent.input(input, { target: { value: "Messi" } });

    // y hacemos la aserción de lo que estamos esperando que suceda después del evento
    expect(input.value).toBe("Messi");
    // screen.debug()
  });

  test("debe de llamar onNewCategory si el input tiene un valor", () => {
    // valor que voy a evaluar
    const inputValue = "Messi";
    const onNewCategory = jest.fn();

    // levanto mi sujeto de pruebas
    render(<AddCategory onNewCategory={onNewCategory} />);

    // agarro las referencias al input y al form
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    // aca disparo el evento de escribir en el input
    fireEvent.input(input, { target: { value: inputValue } });

    // disparo el submit
    fireEvent.submit(form);

    // screen.debug()

    // verifica que después de que se haya ejecutado la función y se haya enviado el formulario, el valor del input se haya restablecido correctamente a una cadena vacía
    expect(input.value).toBe("");

    expect(onNewCategory).toHaveBeenCalled(); // la función ah sido llamado
    expect(onNewCategory).toHaveBeenCalledTimes(1); // la función ah sido llamado 1 vez, si vemos en el componente la llame una vez dentro del onSubmit
    expect(onNewCategory).toHaveBeenCalledWith(inputValue); // la función ah sido llamado  con el valor del inputValue
  });

  test("no debe de llamar el onNewCategory si el input esta vacio", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    // comprobamos que no halla sido llamado, o que hala sido llamado 0 veces
    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
