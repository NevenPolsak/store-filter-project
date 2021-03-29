import React from 'react'

const Menu = ({items}) => {
    return (
      <div className="container">
        {items.map((menuItem) => {
          const { id, img, title, price } = menuItem;
          return (
            <div className="card" key={id}>
              <img src={img} alt={title} />
              <h2>{title}</h2>
              <h4>{price}</h4>
              <img src="/public/images/item-1.jpeg" alt=""/>
            </div>
          );
        })}
      </div>
    );
}

export default Menu
