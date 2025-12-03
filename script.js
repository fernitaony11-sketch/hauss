const drinks = [
link: "https://www.example.com/boba"
},
{
name: "Matcha Latte",
img: "https://via.placeholder.com/600x400.png?text=Matcha+Latte",
ingredients: ["Matcha", "Air panas", "Susu + es"],
steps: ["Larutkan matcha", "Campur susu dingin"],
link: "https://www.example.com/matcha"
},
{
name: "Chocolate Frappe",
img: "https://via.placeholder.com/600x400.png?text=Chocolate+Frappe",
ingredients: ["Susu", "Es", "Cokelat"],
steps: ["Blender semua bahan"],
link: "https://www.example.com/frappe"
},
{
name: "Caramel Macchiato",
img: "https://via.placeholder.com/600x400.png?text=Caramel+Macchiato",
ingredients: ["Espresso", "Susu", "Karamel"],
steps: ["Tambahkan karamel", "Tuang espresso"],
link: "https://www.example.com/caramel"
},
{
name: "Cold Brew",
img: "https://via.placeholder.com/600x400.png?text=Cold+Brew",
ingredients: ["Kopi kasar", "Air dingin"],
steps: ["Rendam 12 jam", "Saring dan sajikan"],
link: "https://www.example.com/coldbrew"
},
{
name: "Strawberry Smoothie",
img: "https://via.placeholder.com/600x400.png?text=Strawberry+Smoothie",
ingredients: ["Stroberi", "Yogurt", "Madu"],
steps: ["Blender hingga lembut"],
link: "https://www.example.com/smoothie"
},
{
name: "Mango Lassi",
img: "https://via.placeholder.com/600x400.png?text=Mango+Lassi",
ingredients: ["Mangga", "Yogurt", "Susu"],
steps: ["Blender semua bahan"],
link: "https://www.example.com/lassi"
},
{
name: "Affogato",
img: "https://via.placeholder.com/600x400.png?text=Affogato",
ingredients: ["Es krim vanila", "Espresso panas"],
steps: ["Tuang espresso ke es krim"],
link: "https://www.example.com/affogato"
}
];


const container = document.getElementById("drink-container");


container.innerHTML = drinks
.map(
(d) => `
<div class="card">
<div class="thumb"><img src="${d.img}" alt="${d.name}"></div>
<div class="content">
<h2>${d.name}</h2>
<strong>Bahan:</strong>
<ul>${d.ingredients.map((i) => `<li>${i}</li>`).join("")}</ul>
<strong>Langkah:</strong>
<ol>${d.steps.map((s) => `<li>${s}</li>`).join("")}</ol>
<a href="${d.link}" target="_blank">Lihat resep lengkap</a>
</div>
</div>
`
)
.join("");
