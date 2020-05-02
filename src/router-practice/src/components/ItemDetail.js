import React, { useState, useEffect } from 'react';

function ItemDetail() {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    // const fetchItem = await fetch();
    // const item = await fetchItem.json();
    
    const item = {itemid: 123, name: 'test'}
    setItem(item)
  }

  return (
    <div>
      <h1>{item.name}</h1>
    </div>
  );
}

export default ItemDetail;
