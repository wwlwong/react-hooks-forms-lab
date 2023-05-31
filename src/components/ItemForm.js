import React from "react";


function ItemForm({onItemFormSubmit , handleItemChange, handleItemCategoryChange, itemName, itemCategory}) {
  
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit} >
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
