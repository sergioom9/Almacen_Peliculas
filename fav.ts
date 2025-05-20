import { signal } from "@preact/signals";

export type Pelicula = {
  nombre: string;
  imagenurl: string;
  descripcion: string;
  tipo: "Accion" | "Aventuras" | "Ficcion" | "Comedia" | "Drama" | "Romance" | "Default";
};

export const favoritos = signal<Pelicula[]>([]);
