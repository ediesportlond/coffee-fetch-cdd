const showList = (list) => {
    
    const canvas = document.getElementsByTagName('main')[0];
    canvas.innerHTML = "";

    const loading = document.createElement("h2");
    loading.innerHTML = "...Loading...";
    loading.setAttribute("id", "loading");
    canvas.appendChild(loading);
    
    list.map(coffee => {
        const card = document.createElement("div");

        const title = document.createElement("h2");
        title.innerHTML = coffee.title;
        card.appendChild(title);
        
        const image = document.createElement("img");
        image.src = coffee.image;
        image.width = "200";
        card.appendChild(image);
        
        const description = document.createElement("p");
        description.innerHTML = coffee.description;
        card.appendChild(description);

        const ingredientsTitle = document.createElement("h3");
        ingredientsTitle.innerHTML = "Ingredients";
        card.appendChild(ingredientsTitle);

        const ingredients = document.createElement("ul");
        coffee.ingredients.map(ingredient => {
            ingredients.innerHTML += `<li/>${ingredient}`;
        })
        ingredients.innerHTML += '</ul>';
        card.appendChild(ingredients);

        canvas.appendChild(card);

    })

    document.getElementById("loading").remove();
}
const getHotCoffees = () => {
    fetch("https://api.sampleapis.com/coffee/hot")
    .then(res => res.json())
    .then(showList)
    .catch(console.error); //TODO: Display error for user
}

const getIcedCoffees = () => {
    fetch("https://api.sampleapis.com/coffee/iced")
    .then(res => res.json())
    .then(showList)
    .catch(console.error); //TODO: Display error for user
}

const getAllCoffees = () => {
    const allCoffees = [];
    fetch("https://api.sampleapis.com/coffee/hot")
    .then(res => res.json())
    .then(data => {
        allCoffees.push(...data);
        fetch("https://api.sampleapis.com/coffee/iced")
        .then(res => res.json())
        .then(data => {
            allCoffees.push(...data);
            showList(allCoffees);
        })
        .catch(console.error); //TODO: Display error for user
    })
    .catch(console.error); //TODO: Display error for user

}