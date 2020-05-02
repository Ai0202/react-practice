import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, [])

  const [items, setItem] = useState([]);

  const fetchItems = async () => {
    // const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get')
    // const items = await data.json();
    // console.log(items.items);

    let items = [
       { itemid: 1, name: 'アイテム1'},
       { itemid: 2, name: 'アイテム2'},
    ]

    setItem(items);
  }

  return (
    <div>
      {items.map(item => (
        <h3 key={item.itemid}>
          <Link to={`/shop/${item.itemid}`}>{item.name}</Link>
        </h3>
      ))}
    </div>
  );
}

export default Shop;
