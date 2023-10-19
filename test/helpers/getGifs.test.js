import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en getGifs()", () => {
  test("debe de retornar un arrreglo de gifs", async () => {
    const gifs = await getGifs("Messi");

    // console.log(gifs)
    // expect(gifs.length).toBe(10)

    // que lña longitud del arreglo sea mayor a 0, pero no evaluo los elementos
    expect(gifs.length).toBeGreaterThan(0);

    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
