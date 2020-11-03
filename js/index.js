import {
    EDIT_BUTTON_PREFIX,
    REMOVE_BUTTON_PREFIX,
    addItemToPage,
    clearInputs,
    renderItemsList,
    getInputValues,
    getInputCountry,
} from "./dom_util.js";


const findCountry = document.getElementById('find_button');
const returnButton = document.getElementById('return_button');
const submitButton = document.getElementById("submit_button");
const sortButton = document.getElementById("sort_button");
const sumButton = document.getElementById("sum_button");
const sumPrice = document.getElementById("sum_price");


let touristVouchers = [];

const onEditItem = async(e) => {
    const itemId = e.target.id.replace(EDIT_BUTTON_PREFIX, "");
    console.log(itemId)

    clearInputs();


};

const onDeletedItem = async(e) => {
    const itemId = e.target.id.replace(REMOVE_BUTTON_PREFIX, "");
    console.log(itemId)

    clearInputs();

};

const addItem = ({ country, durationInDays, priceInEuros }) => {
    const generatedId = uuid.v1();
    console.log(generatedId)
    const newItem = {
        id: generatedId,
        country,
        durationInDays,
        priceInEuros,
    };

    touristVouchers.push(newItem);

    addItemToPage(newItem, onEditItem, onDeletedItem);
};

findCountry.addEventListener("click", (event) => {
    event.preventDefault();
    const country = getInputCountry();
    const findTourVouch = touristVouchers.filter(touristVouch => touristVouch.country.search(country) !== -1);

    renderItemsList(findTourVouch, onEditItem, onDeletedItem);
});

returnButton.addEventListener("click", (event) => {
    event.preventDefault();
    renderItemsList(touristVouchers, onEditItem, onDeletedItem);
})

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const { country, durationInDays, priceInEuros } = getInputValues();
    console.log(country);
    clearInputs();

    addItem({
        country,
        durationInDays,
        priceInEuros
    });
});

sortButton.addEventListener("click", (event) => {
    event.preventDefault();
    touristVouchers.sort((a, b) => {
        if (a.country > b.country) { return -1; }
        if (a.country < b.country) { return 1; }
        return 0;
    })
    console.log(touristVouchers)
    renderItemsList(touristVouchers, onEditItem, onDeletedItem);
})

sumButton.addEventListener("click", (event) => {
    event.preventDefault();
    let sumOfPrice = 0;
    for (const voucher of touristVouchers) {
        sumOfPrice += +voucher.priceInEuros;
    }
    console.log(sumOfPrice)
    sumPrice.textContent = sumOfPrice;

})


renderItemsList(touristVouchers, onEditItem, onDeletedItem);