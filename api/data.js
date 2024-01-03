import axios from "axios";

const api = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("error: ", error);
    return {};
  }
};

export const lastQuizzes = () => {
  return api("https://the-trivia-api.com/v2/categories?limit=8");
};

export const popularQuizzes = () => {
  return api("https://the-trivia-api.com/v2/categories?limit=8");
};

export const getQuizzes = () => {
  return api("https://the-trivia-api.com/v2/categories?limit=20");
};

export const getQuestions = (category) => {
  console.log("cattt : ", category);
  return api(
    `https://the-trivia-api.com/v2/questions?categories=${category}?limit=8`
  );
};
