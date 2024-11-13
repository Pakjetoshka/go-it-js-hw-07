const ulElt = document.querySelector(`#categories`);
const liCategories = ulElt.querySelectorAll(`li.item`);
console.log(`Number of categories: ${liCategories.length}`);

liCategories.forEach(element => {
    const categoryHeading = element.querySelector("h2");
    const liEltNumb = element.querySelectorAll("ul>li");
    console.log(`Category: ${categoryHeading.textContent}`);
    console.log(`Elements: ${liEltNumb.length}`);
});