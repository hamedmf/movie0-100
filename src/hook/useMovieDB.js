import React, { useEffect, useState } from "react";

export default function useMovieDB(endpoint, option) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/${endpoint}?api_key=b97ee4b164b607d5e4e00130b6fb4e67&
      ${new URLSearchParams(option?.query).toString()}`
    )
      .then((r) => r.json())
      .then((d) => {
        console.log(d);
        setData(d);
      })
      .finally(() => setLoading(false));
  }, [endpoint, option]);
  return { data, loading };
}
