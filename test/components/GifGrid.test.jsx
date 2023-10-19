// en este componente funciona un hook, pero dicho hook ya debe ser testeado, no es responsabilidad de este componente verificar que el customhook funcione bien

import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// hacemos un mock completo de este path
jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid/>", () => {
  const category = "Messi";

  // evaluó como debería estar el loading cuando la aplicación se carga
  test("debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("debe de mostrar items cuando se cargan las imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Messi",
        url: "http://localhost/messi.jpg",
      },
      {
        id: "123",
        title: "goku",
        url: "http://localhost/goku.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    // screen.debug()
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
