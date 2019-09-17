const config = {
  API_URL: {
    DEV_URL: "http://localhost:5000/api/",
    PROD_URL: "https://loganbrown-api.herokuapp.com/api"
  },
  ROUTES: {
    EDUCATION: {
      GET_EDUCATION: "/education/",
      ADD_EDUCATION: "/education/add"
    }
  }
};

export default config;
