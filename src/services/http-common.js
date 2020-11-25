import axios from "axios";
export const domain = "https://nice-url-backend.herokuapp.com/"

export default axios.create({
    baseURL: `${domain}/api`,
    headers: {
        "Content-type": "application/json",
    },
});

