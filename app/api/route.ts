import { data } from "autoprefixer";
import axios from "axios";
import { NextApiRequest } from "next";

const petfinderBaseUrl = "https://api.petfinder.com/v2";

const getAccessToken = async () => {
  try {
    const token = await axios.post(`${petfinderBaseUrl}/oauth2/token`, {
      grant_type: "client_credentials",
      client_id: process.env.PETFINDER_API_KEY,
      client_secret: process.env.PETFINDER_API_SECRET,
    });

    return token.data.access_token;
    console.log(token);
  } catch (error) {
    throw new Error("Failed to get access token");
  }
};

export const getAnimals = async () => {
  const accessToken = await getAccessToken();

  const animals = await axios.get(`${petfinderBaseUrl}/animals`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(animals);
  return animals.data;
};
