import axios from "axios";
import { useStore } from "vuex";

const apiCall = async (action, params={}) => {
  const store = useStore();
  const api_host = store.getters.getAPIHost;
  const user = {
    logged_in: store.getters.isLoggedIn,
    token: store.getters.getRequestToken,
  };
  let response;
  try {
    console.log(user);
    // Send POST request to the API param as JSON.
    response = await axios.post(`${api_host}/${action}`, { data: params, user });
    return response.data;
  } catch (error) {
    console.error("API call failed", error);
    return { status: "error", message: "API call failed" };
  }
};

export default apiCall;
