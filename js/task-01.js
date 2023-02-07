const arrayOfCategoriesEl = document.querySelectorAll("#categories .item");

console.log("Number of categories: ", arrayOfCategoriesEl.length);

arrayOfCategoriesEl.forEach((category) => {
    console.log("Category: ", category.querySelector("h2").textContent);
    console.log("Elements: ", category.querySelectorAll("li").length);
});