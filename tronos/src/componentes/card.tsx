import React from 'react';

import { Personaje } from '/Users/javier/Tronos React/202205-W04CH03_Javier-Flores/tronos/src/Modelos/personaje';

export function Card({ personaje }: { personaje: Personaje }) {
  return (
    <>
      <div className="card character__card">
        <img
          src={'img/' + personaje.nombre.toLowerCase() + '.jpg'}
          alt={personaje.nombre + personaje.familia}
          className="character__picture card-img-top"
        />
        <div className="card-body">
          <h2 className="character__name card-title h4">
            {personaje.nombre} y {personaje.familia}
          </h2>
          <div className="character__info">
            <ul className="list-unstyled">
              <li>Edad: {personaje.edad} años</li>

              <li>
                Estado:
                <i className="fas fa-thumbs-up"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
