// TODO: hacer pruebas de este componente, no evaluar cosas que ya fueron evaluadas
// hacer las pruebas en la funcionalidad de onAddCategory
// escribir en el input
// postear el formulario y ver que pasa
// tomar el snapshot
// ver que pasa con la parte del onAddCategory cuando posteamos el formulario
// que pasa si mando la misma categoria y si mando una diferente
// que pasa en el html


import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp/>', () => { 
  test('should first', () => { 
    render(<GifExpertApp/>)

    screen.debug()
   })
 })