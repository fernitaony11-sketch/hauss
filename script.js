<script>
const drinks = [
{
name: "Dalgona Coffee",
img: "https://i.ibb.co/8m2v7zL/coffee-transparent.png",
link: "https://www.youtube.com/watch?v=UjYemgbhJF0"
},
{
name: "Matcha Latte",
img: "https://i.ibb.co/1m6MKMh/matcha-transparent.png",
link: "https://www.youtube.com/watch?v=6T0hZBKt-GU"
},
{
name: "Brown Sugar Boba",
img: "https://i.ibb.co/v4Sfbx4/bubble-tea-transparent.png",
link: "https://www.youtube.com/watch?v=pQpZCkxzFZQ"
},
{
name: "Milkshake Vanilla",
img: "https://i.ibb.co/6B2QPwM/milkshake-transparent.png",
link: "https://www.youtube.com/watch?v=Q8iU4cVPb2o"
},
{
name: "Thai Tea",
img: "https://i.ibb.co/nwGXv5R/thai-tea.png",
link: "https://www.youtube.com/watch?v=hV0Uy1Ik5dY"
},
{
name: "Es Kopi Susu",
img: "https://i.ibb.co/8m2v7zL/coffee-transparent.png",
link: "https://www.youtube.com/watch?v=Bkz25ZlZVn4"
},
{
name: "Lemon Tea",
img: "https://i.ibb.co/4ShZ8tT/lemon-tea.png",
link: "https://www.youtube.com/watch?v=qB2-8GZFODg"
},
{
name: "Taro Milk Tea",
img: "https://i.ibb.co/NW3vBDj/taro.png",
link: "https://www.youtube.com/watch?v=B1YyqS-gtn4"
},
{
name: "Avocado Smoothie",
img: "https://i.ibb.co/vxK47vV/avocado.png",
link: "https://www.youtube.com/watch?v=x1IMuM5RZ1c"
},
{
name: "Strawberry Milk",
img: "https://i.ibb.co/3k89HfN/strawberry-milk.png",
link: "https://www.youtube.com/watch?v=rNh-lsKFx5Q"
}
];


const container = document.getElementById("drinkContainer");


container.innerHTML = drinks.map(drink => `
<div class="drink-card">
<img src="${drink.img}" alt="${drink.name}" />
<h2>${drink.name}</h2>
<a href="${drink.link}" target="_blank">Lihat Resep</a>
</div>
`).join("");
</script>
