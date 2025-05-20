import { favoritos } from "../fav.ts";
import AgregarAFavoritos from "../islands/AgregarAFavoritos.tsx";
import ListaFavoritos from "../islands/ListaFavoritos.tsx";

export default function Home() {
  return (
    <div class="index1">
      <h1 class="titulo">Mis pelis</h1>
      <AgregarAFavoritos />
      <ListaFavoritos />
    </div>
  );
}
