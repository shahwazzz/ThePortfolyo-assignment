import { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setdata] = useState(null);

  useEffect(() => {
    if (!data) {
      fetch(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      )
        .then((res) => res.json())
        .then((data) => setdata(data))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [data]);

  return { data };
};

export default useFetch;
