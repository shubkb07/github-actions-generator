import axios from "axios";
import { useStore } from "vuex";

const apiCall = async (action, params={}) => {
  const store = useStore();
  const user = {
    logged_in: store.getters.isLoggedIn,
    token: store.getters.getRequestToken,
  };
  let response;
  try {
    console.log(user);
    // Send POST request to the API param as JSON.
    response = await axios.post(
      `${import.meta.env.VITE_API_HOST}/${action}`,
      {
        data: params, user
      },
      {
        headers: {
          Authorization: `Bearer lFMp9C1CLrsnfksN30h30aFjl9yk7ug9mHC8HwXtpU4bhVAEwReziDQxe8bQ2utQ`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("API call failed", error);
    return { status: "error", message: "API call failed" };
  }
};

export default apiCall;
