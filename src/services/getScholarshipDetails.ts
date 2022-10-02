import { RootScholarShipObject } from "./interfaces";
import axios from "axios";

/**
 * Note: base url will be used here since there is only one
 *       api service to call.
 */
const BASE_URL =
  "https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab";

export const getScholarshipDetails = async () => {
  try {
    return await axios.get<RootScholarShipObject>(BASE_URL);
  } catch (e) {
    console.error(e);
  }
};
