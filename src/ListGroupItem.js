import React from "react";
import { Link } from "react-router-dom";

const ListGroupItem = (props) => {
  return(
  	<div className="list-group-item">
  		<Link to={`/post/${props.id}`}>{props.title}</Link>
  	</div>
  );
};

export default ListGroupItem;