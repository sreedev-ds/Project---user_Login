import axios from "axios";

export const getAllCountries = async () => {
  try {
    const response = await axios.get(
      "https://restcountries.com/v2/all?fields=name,region,flag"
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch countries", error);
    return [];
  }
};