import React, { useState } from "react";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit}) {
  
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('Produce');

  function handleItemChange(event) {
    setItemName(event.target.value);
  }
  
  function handleItemCategoryChange(event){
    setItemCategory(event.target.value);
  }

  function handleFormSubmit(event){
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    }
    onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={handleFormSubmit} >
      <label>
        Name:
        <input onChange={handleItemChange} type="text" name="name" value={itemName}/>
      </label>

      <label>
        Category:
        <select onChange={handleItemCategoryChange} name="category" value={itemCategory} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
