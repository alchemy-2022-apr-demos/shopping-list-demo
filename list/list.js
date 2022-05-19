import { checkAuth, fetchListItems, logout } from '../fetch-utils.js';
import { renderItem } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

const shoppingListElem = document.getElementById('shopping-list');
const error = document.getElementById('error');

async function displayListItems() {
    const data = await fetchListItems();
    if (data) {
        for (let item of data) {
            const listElem = renderItem(item);

            shoppingListElem.append(listElem);
        }
    } else {
        error.textContent = 'Something went wrong :(';
    }
}

displayListItems();
