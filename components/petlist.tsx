"use client";

import React from "react";
import { Animal } from "../types/petfinder";

interface Props {
  animals: Animal[];
}

const PetList: React.FC<Props> = ({ animals }) => {
  if (!animals || animals.length === 0) {
    return <p>No pets available for adoption at the moment.</p>;
  }

  return (
    <div>
      <h2>Pets Available for Adoption</h2>
      <ul>
        {animals.map((animal) => (
          <li key={animal.id}>
            {animal.name} - {animal.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;
