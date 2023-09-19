import axios from "axios";

const fetchAccessToken = async () => {
  try {
    const response = await axios.get("/api/getToken");
    return response.data.accessToken;
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw new Error("Failed to fetch access token");
  }
};

export default fetchAccessToken;
