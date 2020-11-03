export const REMOVE_BUTTON_PREFIX = 'remove-button-';
export const EDIT_BUTTON_PREFIX = 'edit-button-';


const countryInput = document.getElementById("country_input");
const durationInput = document.getElementById("duration_input");
const priceInput = document.getElementById("price_input");
const itemsContainer = document.getElementById("item_container");
const countryFindInput = document.getElementById("find_input");


const getItemId = (id) => `item-${id}`;


const itemTemplate = ({ id, country, durationInDays, priceInEuros }) => `
<li id="${getItemId(id)}">
    <div>
        <h5>${country}</h5>
        <h5>${durationInDays}</h5>
        <h5>${priceInEuros}</h5>
        <button id="${EDIT_BUTTON_PREFIX}${id}" type="button">Edit</button>
        <button id="${REMOVE_BUTTON_PREFIX}${id}" type="button">Remove</button>
    </div>
</li>`;

export const clearInputs = () => {
    countryInput.value = "";
    durationInput.value = "";
    priceInput.value = "";
};

export const addItemToPage = ({ id, country, durationInDays, priceInEuros }, onEditItem, onDeletedItem) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, country, durationInDays, priceInEuros })
    );

    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
    const deletedButton = document.getElementById(`${REMOVE_BUTTON_PREFIX}${id}`);


    editButton.addEventListener("click", onEditItem);
    deletedButton.addEventListener("click", onDeletedItem);

}

export const renderItemsList = (items, onEditItem, onDeletedItem) => {
    itemsContainer.innerHTML = "";
    for (const item of items) {
        addItemToPage(item, onEditItem, onDeletedItem);
    }
};

export const getInputValues = () => {
    return {
        country: countryInput.value,
        durationInDays: durationInput.value,
        priceInEuros: priceInput.value,
    };
};

export const getInputCountry = () => {
    return countryFindInput.value
};