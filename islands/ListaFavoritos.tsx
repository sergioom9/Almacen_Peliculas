import { favoritos } from "../fav.ts";

export default function ListaFavoritos() {
  const eliminarFavorito = (index: number) => {
    const nuevaLista = [...favoritos.value];
    nuevaLista.splice(index, 1);
    favoritos.value = nuevaLista;
  };

  return (
    <div class="div12">
      <h2 class="title">Mis pelis favoritas</h2>
      {favoritos.value.length === 0 ? (
        <p class="aviso">Aun no has agregado películas</p>
      ) : (
        <ul class="lista1">
          {favoritos.value.map((pelicula, index) => (
            <li key={index} class="listaitems">
              <img src={pelicula.imagenurl} alt={pelicula.nombre}/>
              <div>
                <strong>{pelicula.nombre}</strong><br />
                <em>{pelicula.tipo}</em><br />
                <p>{pelicula.descripcion}</p>
              </div>
              <button onClick={() => eliminarFavorito(index)} class="boton1">Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
