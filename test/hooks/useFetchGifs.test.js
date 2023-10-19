import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en el hook useFetchGifs", () => {
  test("debe regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("Messi"));
    // console.log(result)
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("debe de retornar un arreglo de imagenes y isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("Messi"));

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
      // {timeout: 6000} esto lo podemos poner para darle un tiempo, si lo dejamos vacio por defecto es 1 segundo
      // ahora va a esperar hasta que suceda que sea mayor a cero
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
