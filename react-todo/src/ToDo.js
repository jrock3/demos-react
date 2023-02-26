import { useState } from 'react';
import './ToDo.css';

const ItemInput = ({ handleSubmit }) => {
	return (
		<div className="user-input">
		<input id="user-input" type="text" />
		<input type="submit" onClick={handleSubmit} />
		</div>
	);
};
	
const ItemList = ({ items, handleRemove }) => {
	const list = items.map((item, ind) => <li key={ind}>{item}<span onClick={() => handleRemove(item)}>remove</span></li>);
	return <ul>{list}</ul>;
};

export default function ToDo() {
	const [ itemList, setItemList ] = useState(["Item 1", "Item 2", "Item 3"]);
	
	const handleSubmit =  () => {
		const userInput = document.getElementById('user-input');
		setItemList([...itemList, userInput.value]);
		userInput.value = '';
	}
	
	const handleRemove =  (clickedItem) => {
		const filteredItems = itemList.filter(item => item !== clickedItem);
		setItemList(filteredItems);
	};
	
	return (
		<div id="to-do">
		  <ItemInput handleSubmit={handleSubmit} />
		  <ItemList items={itemList} handleRemove={handleRemove} />
		</div>
	);
}