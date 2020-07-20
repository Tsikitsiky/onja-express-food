console.log('good luck!');

const orderList = document.querySelector('.order-list');
const delailsBtn = document.querySelector('.details');
const deleteBtn = document.querySelector('.served');
const addOrderBtn = document.querySelector('.add-order');
const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');
const submitOrderBtn = document.querySelector('.submitOrder');
const form = document.querySelector('form');


// handle the buttons

const handleAddOrderBtn = (e) => { // new order btn
    // create the form html
    const myForm = ` 
    <form>
        <p>Your name :</p>
        <input
            class="input-form"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name here"
            required
        />
        <p>Please select your dish :</p>
        <select name="dish" class="select-form" required>
            <option value="romazava">Romazava</option>
            <option value="koba">Koba</option>
            <option value="ravitoto">Ravitoto</option>
            <option value="mokary">Mokary</option>
            <option value="achard">Achard</option>
            <option value="masikita">Masikita</option>
            <option value="sambos">Sambos</option>
            <option value="mofo-baolina">Mofo baolina</option>
            <option value="ranonapango">Ranonapango</option>
        </select>
        <p>Please select the size of your plate :</p>
        <input type="radio" id="small" name="size" value="small" required />
        <label for="small">Small</label><br />
        <input type="radio" id="medium" name="size" value="medium" />
        <label for="medium">Medium</label><br />
        <input type="radio" id="large" name="size" value="large" />
        <label for="large">Large</label><br />
        <p>How many pieces do you want to order?</p>
        <input
            class="input-form"
            type="number"
            id="quantity"
            name="amount"
            placeholder="Enter a number here"
            required
        />
        <button class="submitOrder" type="submit">Add this order</button>
    </form>
    `;

    innerModal.innerHTML = myForm;

    outerModal.classList.add('open');
};


// form submit btn
const handleSubmitBtn = (e) => {
    e.preventDefault();
    const submit = e.target;
    if (submit.matches('.submitOrder')) {
        console.log('it matches');
        // grab the form input
const name = document.getElementById('name');
const dish = document.querySelector('[name="dish"]');
const size = document.getElementsByName('size');
const quantity = document.getElementById('quantity');
        const newOrder = `
        <div class="order" data-dish="${dish.value}" data-size="${size.value}" data-amount="${quantity.value}">
					<span class="title">
						${name.value}
					</span>
					<button class="details">Details</button>
					<button class="served">Delete order</button>
				</div>
			</div>
        `;

        orderList.innerHTML += newOrder;
    }
}

// close the form
const closeForm = () => {
    outerModal.classList.remove('open');
}
outerModal.addEventListener('click', event => { //click out
    const isOutside = !event.target.closest('.inner-modal');
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
    const detailBtn = e.target;
    const order = detailBtn.closest('.order');
        // grab the detail
    if (detailBtn.matches('.details')) {
        const title = order.querySelector('.title').textContent;
        const disheOrdered = order.dataset.dish;
        const sizeOrdered = order.dataset.size;
        const amoutOrdered = order.dataset.amount;
        const myDetail = `
            <h2>${title}</h2>
            <h4>Ordered:</h4>
            <p>${amoutOrdered} ${sizeOrdered} ${disheOrdered}</p>
            <img src="https://picsum.photos/200" alt="Nice pic">
        `;
        innerModal.innerHTML = myDetail;
        outerModal.classList.add('open')
    }
};

// detele btn
const handleDeleteBtn = (e) => {
    const deleteBtn = e.target;
    if (deleteBtn.matches('.served')) {
		// delete the closet element with the .card class
		deleteBtn.closest('.order').remove();
	}
}

// add event listener the buttons
addOrderBtn.addEventListener('click', handleAddOrderBtn);

window.addEventListener('click', handleSubmitBtn);

window.addEventListener('click', handleDetailsBtn);

window.addEventListener('click', handleDeleteBtn);


