// pages/index.tsx

import React from "react";
import { GetServerSideProps } from "next";
import PetList from "../../components/petlist";
import { getAnimals } from "../api/route";
import { Animal } from "../../types/petfinder";
import Container from "@/components/ui/container";

interface Props {
  animals: Animal[];
}

const PetsPage = async () => {
  const data = await getAnimals();
  return (
    <Container>
      <div>
        <PetList animals={data.animals} />
      </div>
    </Container>
  );
};

export default PetsPage;
