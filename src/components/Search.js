import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResult] = useState([]);

  useEffect(() => {
    axios
      .get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      })
      .then((response) => {
        setResult(response.data.query.search);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label>Enter Search Term</label>
        <input
          type="text"
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
      </div>
      <div className="ui ceiled list">{renderedResults}</div>
    </div>
  );
};

export default Search;