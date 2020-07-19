console.log('good luck!');

const orderList = document.querySelector('.order-list');
const delailsBtn = document.querySelector('.details');
const deleteBtn = document.querySelector('.served');
const addOrderBtn = document.querySelector('.add-order');
const orderOuter = document.querySelector('.add-order-outer');
const orderInner = document.querySelector('.add-order-inner');
const detailsOuter = document.querySelector('.details-outer');
const detailsInner = document.querySelector('.details-inner');
const submitOrderBtn = document.querySelector('.submitOrder');
const form = document.querySelector('form');

// grab the form input
const name = document.getElementById('name');
const dish = document.querySelector('[name="dish"]');
const size = document.getElementsByName('size');
for (let i = 0; i < size.length; i++) {
    size[i].addEventListener('change', ($event) => {
      let sizeValue = `${$event.target.value}`;
    })
  };
const quantity = document.getElementById('quantity');

// handle the buttons

const handleAddOrderBtn = (e) => { // new order btn
    orderOuter.classList.add('open');
};


// form submit btn
const handleSubmitBtn = (e) => {
    e.preventDefault();
    const newList = `
        <div class="order" data-dish="${dish.value}" data-size="${size.value}" data-amount="${quantity.value}">
			<span class="title">
				${name.value}
			</span>
			<button class="details">Details</button>
			<button class="served">Delete order</button>
		</div>
    `;

    orderList.innerHTML += newList; // add the new order into the list
}

// close the form
const closeForm = () => {
    orderOuter.classList.remove('open');
}
orderOuter.addEventListener('click', event => { //click out
    const isOutside = !event.target.closest('.add-order-inner');
    if (isOutside) {
        closeForm();
    } 
});
window.addEventListener('keydown', event => { // escape
    if (event.key === 'Escape') {
        closeForm();
    }
});

// details btn
const handleDetailsBtn = (e) => {
    const myDetail = `
        <h2>${name.value}</h2>
        <h4>Ordered:</h4>
        <p>${quantity.value} ${size.value} ${dish.value}</p>
        <img src="https://picsum.photos/200" alt="Nice pic">
    `;
    detailsInner.innerHTML = myDetail;
    detailsOuter.classList.add('open')
};

// close the details
const closeDetails = () => {
    detailsOuter.classList.remove('open');
}
detailsOuter.addEventListener('click', event => { //click out
    const isOutside = !event.target.closest('.details inner');
    if (isOutside) {
        closeDetails();
    } 
});
window.addEventListener('keydown', event => { // escape
    if (event.key === 'Escape') {
        closeDetails();
    }
});

// detele btn
const handleDeleteBtn = (e) => {
    console.log(e.target)
    if (e.target.classList.contains('.served')) {
		const deleteBtn = e.target;
		// delete the closet element with the .card class
		deleteBtn.closest('.order').remove();
	}
}

// add event listener the buttons
addOrderBtn.addEventListener('click', handleAddOrderBtn);

submitOrderBtn.addEventListener('click', handleSubmitBtn);

document.addEventListener('click', handleDetailsBtn);

document.addEventListener('click', handleDeleteBtn);


// document.addEventListener('click', (event) => {
//     if(event.target.matches('submitOrder')) {
//         console.log(event.target)
//     handleSubmitBtn();
//     }
// })