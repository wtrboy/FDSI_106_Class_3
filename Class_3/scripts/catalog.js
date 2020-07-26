var catalog = [];


function fetchData() {
    //get data from a server
  $.ajax({
    url: 'http://restclass.azurewebsites.net/api/points',
    type: 'GET',
    success: function(allItems){
        // travel allItems
        // check if the item belong to me
        // if so, push it to catalogue array
        
        for(let i=0; i< allItems.length; i++){
            var item = allItems[i];
            if(item.user === "Lane"){
                catalog.push(item);
            }
        }

        displayCatalog();
    },
    error: function(details){
        console.error("Error getting data", details);
    }
  });
}

function displayCatalog() {
    // travel the array of items using a FOR loop
    // get each item
    // display the item on HTML

    for (let i = 0; i < catalog.length; i++) {
        var item = catalog[i];

        //display items on html
        var syntax =
            `<div class="item">
            <img src="${item.image}">
            <div class="info">
                <label class="code">${item.code}</label>
                <label class="title">${item.title}</label>
                <label class="price">$ ${item.price}</label>

                <button class="btn btn-info btn-sm">Add</button>
            </div>
        </div>`;


        $("#catalog-container").append(syntax);
    }
}

function init() {
    console.log("Catalog Working!");

    fetchData();
   
}




window.onload = init;

/*
    code
    title
    price
    imageURL
    quantity
    category

*/