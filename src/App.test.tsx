import React from "react";
import { getScholarshipDetails } from "./services/getScholarshipDetails";

test("api response", async () => {
  const response = await getScholarshipDetails();
  expect(response?.data).toBeDefined();
});
