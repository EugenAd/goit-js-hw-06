const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

const categories = document.getElementById("categories");
for (const category of categories.querySelectorAll("li.item")) {
  const title = category.querySelector("h2");
  const count = category.querySelectorAll("li");

  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${count.length}`);
}
