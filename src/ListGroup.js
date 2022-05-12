import React, { useState, useEffect } from "react";
import ListGroupItem from "./ListGroupItem";

const ListGroup = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  return(
    <div className="list-group">
      {items.map((item) => {
        return <ListGroupItem key={item.id} title={item.title} id={item.id} />
      })}
    </div>
  );
};

export default ListGroup;