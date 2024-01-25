import axios from "axios";
const end_point =  import.meta.env.VITE_ENDPOINT
const my_axios = axios.create({
  // baseURL: "http://cm-backend.pharmacyfull.com/api/v1/",
  baseURL: end_point,
});
export default my_axios;
// export default {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   install: (app, option) => {
//     app.provide("$axios", my_axios);
//   },
// };
