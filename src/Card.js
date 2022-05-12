import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Card = () => {
	let { id } = useParams();
	const [item, setItem] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setItem(data));
  }, []);

	if(!item) {
		return 'Loading...';
	}

  return(
  	<div className="card">
  		<div className="card-title">{item.title}</div>
  		<div className="card-body">{item.body}</div>
  	</div>
  );
};

export default Card;