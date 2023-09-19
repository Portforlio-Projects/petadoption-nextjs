import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { PetfinderClientId, PetfinderClientSecret } from "@/config";

const CLIENT_ID = PetfinderClientId;
const CLIENT_SECRET = PetfinderClientSecret;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const tokenResponse = await axios.post(
      "https://api.petfinder.com/v2/oauth2/token",
      {
        grant_type: "client_credentials",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }
    );

    const accessToken = tokenResponse.data.access_token;
    res.status(200).json({ accessToken });
  } catch (error) {
    console.error("Error obtaining access token:", error);
    res.status(500).json({ error: "Failed to obtain access token" });
  }
};
