import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  async function searchApi(searchTerm) {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
      setErrMsg(null);
    } catch (err) {
      setErrMsg("Something went wrong. Try again later.");
    }
  }

  useEffect(() => {
    searchApi();
  }, []);

  return [searchApi, results, errMsg];
};
