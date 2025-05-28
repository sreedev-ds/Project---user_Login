import axios from "axios";

export const getAllCountries = async () => {
  const response = await axios.get(
    "https://restcountries.com/v2/all?fields=name,region,flag"
  );
  return response.data;
};