import { useState } from "preact/hooks";
import { favoritos, Pelicula } from "../fav.ts";

export default function AgregarAFavoritos() {
  const [nombre, setNombre] = useState("");
  const [imagenurl, setImagenurl] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tipo, setTipo] = useState("Default");

  const agregarAFavoritos = () => {
    if (!nombre || !imagenurl || !descripcion || !tipo) return;

    const nuevaPeli: Pelicula = { nombre, imagenurl, descripcion, tipo: tipo as Pelicula["tipo"] };
    favoritos.value = [...favoritos.value, nuevaPeli];

    setNombre("");
    setImagenurl("");
    setDescripcion("");
    setTipo("Default");
  };

  return (
    <div class="div1">
      <h2 class="div2">Agregar película a favoritos</h2>
      <div class="div3">
        <input
          type="text"
          value={nombre}
          onInput={(e) => setNombre(e.currentTarget.value)}
          placeholder="Nombre de la película"
        />
        <input
          type="text"
          value={imagenurl}
          onInput={(e) => setImagenurl(e.currentTarget.value)}
          placeholder="URL imagen"
        />
        <textarea
          value={descripcion}
          onInput={(e) => setDescripcion(e.currentTarget.value)}
          placeholder="Descripción"
          rows={3}
        />
        <select value={tipo} onChange={(e) => setTipo(e.currentTarget.value)}>
          <option>Acción</option>
          <option>Aventuras</option>
          <option>Ciencia Ficción</option>
          <option>Comedia</option>
          <option>Drama</option>
          <option>Romance</option>
        </select>
        <button onClick={agregarAFavoritos}>Agregar</button>
      </div>
    </div>
  );
}
