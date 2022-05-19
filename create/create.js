import { createListItem } from '../fetch-utils.js';

const form = document.querySelector('.item-form');
const error = document.getElementById('error');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const itemData = new FormData(form);
    const data = await createListItem(itemData.get('name'), itemData.get('qty'));
    if (data) {
        window.location.href = '/list';
    } else {
        error.textContent = 'Something went wrong :(';
    }
});
