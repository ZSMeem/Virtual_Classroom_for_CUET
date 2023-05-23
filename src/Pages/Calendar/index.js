import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { registerLicense } from "@syncfusion/ej2-base";

const root = ReactDOM.createRoot(document.getElementById("root"));
registerLicense(
  "Mgo+DSMBaFt/QHRqVVhkXlpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jSH5Vd0RiXXted3BXQw==;Mgo+DSMBPh8sVXJ0S0J+XE9AdFRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31Td0VlWH5fdHBVQWVbVA==;ORg4AjUWIQA/Gnt2VVhkQlFacl1JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkRjX35fcXBRRmdbUEE=;ODkwMDkzQDMyMzAyZTM0MmUzMERCMG1yTHhHUWQrL2l6YTRieFFuSFQwS3B2R1AwZ1k2UUZlaVNCZlhtUjg9;ODkwMDk0QDMyMzAyZTM0MmUzMEJmclBVaFlCcWhrVDFSSHVzTXpWZVRCNTUvTU0zTjViOGhrRnQxV1R2Mjg9;NRAiBiAaIQQuGjN/V0Z+WE9EaFtAVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUViWXlfcXVRQmBUVUxz;ODkwMDk2QDMyMzAyZTM0MmUzMGk3bFlncGx2cWNFM1lUbWZOczF3b3c3eTV4S2pyY0pBdUNOYUdDUEtiL3M9;ODkwMDk3QDMyMzAyZTM0MmUzME9HQXJMcFdEcWlNeUw0SGxPVjJzNG9majhmM0lKY252TjAvY3Z4Y29rcGM9;Mgo+DSMBMAY9C3t2VVhkQlFacl1JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkRjX35fcXBRRmlfU0E=;ODkwMDk5QDMyMzAyZTM0MmUzMEcxL2pwWHFnbkhlYlBXQUswNUFkbEVKenRXNWJiMWRqT3g5RmJEYnZGUkk9;ODkwMTAwQDMyMzAyZTM0MmUzMFFOQnNjTmVZRVRwSG5NS0J4VUxNQUFEUEk1SWpHSzdvRTdwajlQR2ZHSzA9;ODkwMTAxQDMyMzAyZTM0MmUzMGk3bFlncGx2cWNFM1lUbWZOczF3b3c3eTV4S2pyY0pBdUNOYUdDUEtiL3M9"
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
