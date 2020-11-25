import React, { useEffect, useState } from "react";
import axios from "axios";

const withRequest2 = (url) => (WrappedComponent) => {
  return function Utils() {
    const [data, setData] = useState(null);

    const initialize = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    useEffect(() => {
      initialize();
    }, []);

    return <WrappedComponent data={data} />;
  };
};

export default withRequest2;
