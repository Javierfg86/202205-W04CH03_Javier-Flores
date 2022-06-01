import { Asesor } from '/Users/javier/Tronos React/202205-W04CH03_Javier-Flores/tronos/src/Modelos/asesor';
import { Escudero } from '/Users/javier/Tronos React/202205-W04CH03_Javier-Flores/tronos/src/Modelos/escudero';
import { Luchador } from '/Users/javier/Tronos React/202205-W04CH03_Javier-Flores/tronos/src/Modelos/luchador';
import { Personaje } from '/Users/javier/Tronos React/202205-W04CH03_Javier-Flores/tronos/src/Modelos/personaje';
import { Rey } from '/Users/javier/Tronos React/202205-W04CH03_Javier-Flores/tronos/src/Modelos/rey';

export function CrearPersonajes() {
  const data: Array<Personaje> = [
    new Rey('Joffrey', 'Baratheon', 33, 2),
    new Luchador('Jaime', 'Lannister', 33, 'espada', 8),
    new Luchador('Daenerys', 'Targaryen', 33, 'dragones', 9),
  ];
  data.push(new Asesor('Tyrion', 'Lannister', 33, data[2]));
  data.push(new Escudero('Bronn', 'Aguas Negras', 33, 5, <Luchador>data[1]));

  return data;
}
