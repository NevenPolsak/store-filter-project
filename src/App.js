import React,{useState} from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import items from './data';

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems,setMenuItems] = useState(items);  
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div>
      <h1>Our store</h1>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </div>
  );
}

export default App;
