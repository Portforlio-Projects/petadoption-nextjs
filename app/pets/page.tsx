// pages/index.tsx

import React from "react";
import { GetServerSideProps } from "next";
import PetList from "../../components/petlist";
import { getAnimals } from "../api/route";
import { Animal } from "../../types/petfinder";

interface Props {
  animals: Animal[];
}

const Home: React.FC<Props> = ({ animals }) => {
  return (
    <div>
      <PetList animals={animals} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const response = await getAnimals();
    return {
      props: {
        animals: response.animals,
      },
    };
  } catch (error) {
    return {
      props: {
        animals: [],
      },
    };
  }
};

export default Home;
