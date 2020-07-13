

    // This document.ready isn't necessary in this example... but is needed in cases where the HTML is complex.
    // This code makes sure that the JavaScript doesn't get run until the HTML is finished loading
    // It's useful to become familiar with now.

    $(document).ready(function() {

      // VARIABLES
      // ====================================================================
      // Here we create variables for tracking the number of sandwiches eaten
      // ...
      var counter = 0;
      var totalPrice = 0;
      const menu = [
          {
              id:101,
              name:"peanutbutter jelly",
              image: "101.jpg",
              price: 21.99          
            },
            {
                id:102,
                name:"grilled cheese",
                image: "102.jpg",
                price: 23.99          
              },
              {
                id:103,
                name:"roast beef",
                image: "103.jpg",
                price: 17.99          
              },
              {
                id:104,
                name:"oven-roasted-chicken",
                image: "104.png",
                price: 22.99          
              },
              {
                  id:105,
                  name:"tuna",
                  image: "105.png",
                  price: 19.99          
                },
                {
                  id:106,
                  name:"turkey-breast",
                  image: "106.png",
                  price: 18.99          
                },

      ]

      
    displayMenuItems();

      function displayMenuItems(){
          var item = 0;
          for (var i=0; i<menu.length; i += 2){
   
              var newRow = $("<div>");
              newRow.attr("class", "row");
              $("#menu-column").append(newRow);
       
              for(let j=0; j<2; j++){
                
                var newColumn = $("<div>");
                newColumn.attr("class", "col-6");
                $(newRow).append(newColumn);
                
                  var newH = $("<h3>");
                  newH.text(menu[item].name);
                 
                  $(newColumn).append(newH);
                  var menuImage = $("<img>");
                  menuImage.attr("src", "./images/"+menu[item].image);
                  menuImage.attr("class", "menu-photo");
                  $(newColumn).append(menuImage);

                  var newP = $("<p>");
                  newP.text("Price:$ "+menu[item].price);
                  $(newColumn).append(newP);
                  
                  item++;
                  
          }
        }
      }


      // FUNCTIONS
      // ====================================================================
      // Here we create various on "click" functions which capture the clicks
      // Inside each click event is the code to create an alert, update the counter, then show the updated count.
      // ...
     
      
      // ...
      var myCart = [];
      
      var manyEl = document.querySelectorAll(".col-6");
      for (let i=0; i<manyEl.length; i++){
      manyEl[i].addEventListener("click", function(event){
        // var element = event.target;
        event.preventDefault();
          
          addToCart(i);
         
          $("#total-number").text("Total Items: "+ myCart.length);
          $("#total-cost").text("Total Cost: $"+ totalPrice.toFixed(2))
          
          displayCartItems();
      })
     
    }

function addToCart(index){
      
      myCart.push(menu[index]);
      totalPrice += menu[index].price;

      console.log("length: "+myCart.length);
  }  


  function displayCartItems(){
   
    var smallDiv = $(".cart-item-container");
    smallDiv.text("");

    let uniqueItems = myCart.filter((item, index)=>{
      return myCart.indexOf(item) === index;
    });

    for (let item=0; item<uniqueItems.length; item++){
        
        var nextDiv = $("<div>");
        nextDiv.attr("class", "cart-item");
        smallDiv.append(nextDiv);
        var smallDiv = $(".cart-item-container");
        var newImg = $("<img>");
        var nextP= $("<p>");
        newImg.attr("src", "./images/"+uniqueItems[item].image);
        newImg.attr("class", "menu-item");
        $(nextDiv).append(newImg);
        nextP.text(uniqueItems[item].name);
        $(nextDiv).append(nextP);
        var qty = 1; 

        for (let d_items=0; d_items<dupItems.length; d_items++){
          if (uniqueItems[item] === dupItems[d_items]){
            qty++; 
          }
          
        }
    }
  }


  function quantityItems(){

    let dupItems = myCart.filter((cart, index) => {
        return myCart.indexOf(cart) !== index;
    });
    console.log(dupItems);




  }
    
});
