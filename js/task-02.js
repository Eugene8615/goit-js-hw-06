const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments']

const list = document.querySelector('#ingredients')

    const createElement = ingredients.map((ingredient) => {
	const item = document.createElement('li');
	item.className = 'item';
	item.textContent = ingredient;
	return item;
})

list.append(...createElement)