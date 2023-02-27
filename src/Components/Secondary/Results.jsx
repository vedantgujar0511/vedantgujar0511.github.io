import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Results.css";

const AllResultsCard = ({ results }) => {
  const [filteredResults] = useState(results);
  function formatURL(u) {
    // Split a given url into its various parts
    let urltext = u;
    let url = new URL(urltext);
    let domain = url.origin
    let pathname = url.pathname
    let paths = pathname.split('/');
    paths = paths.filter(Boolean);
    return [domain, paths]
  }
  

  return (
    <div className="results-content" >
      {filteredResults.map((item) => (
        <div className="result-card" style={{alignItems:'flex-start',display:'flex',flexDirection:'column'}}>
          <a href={`${item.link}`} style={{textAlign:'left'}}>
            <p> 
             {/* Format URl with angle brackets between parts */}
              {`${formatURL(item.link)[0]}`}  
              {formatURL(item.link)[1].map((path) => (
                <>{` › ${path}`}</>
              ))  }
            </p>
            <h3 style={{padding:'0px'}}>{`${item.name}`}</h3>
          </a>
          <p className="excerpt" style={{textAlign:'left'}}>{`${item.excerpt}`}</p>
        </div>
      ))}
    </div>
  );
};

AllResultsCard.propTypes = {
  results: PropTypes.array
};

export default AllResultsCard;