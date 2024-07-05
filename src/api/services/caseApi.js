import { $host } from "../axios";

export const getCases = async () => {
  try {
    const response = await $host.get("cases");
    //return Array.from(response.data).map((c) => c.images.map((i) => i.replace("https://localhost:7001", "http://10.0.2.2:5186")));
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log("Server error response:", error.response.data);
      throw error.response.data;
    } else {
      console.error("Request failed:", error.message);
      throw new Error(error.message);
    }
  }
};

export const getCase = async (id) => {
  try {
    const response = await $host.get("cases/" + id);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log("Server error response:", error.response.data);
      throw error.response.data;
    } else {
      console.error("Request failed:", error.message);
      throw new Error(error.message);
    }
  }
};