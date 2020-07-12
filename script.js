

    // This document.ready isn't necessary in this example... but is needed in cases where the HTML is complex.
    // This code makes sure that the JavaScript doesn't get run until the HTML is finished loading
    // It's useful to become familiar with now.

    $(document).ready(function() {

      // VARIABLES
      // ====================================================================
      // Here we create variables for tracking the number of sandwiches eaten
      // ...
      var counter = 0;
      const menu = [
          {
              name:"peanutbutter-jelly",
              image: "peanutbutter-jelly.jpg",
              price: 21.99          
            },
            {
                name:"grilled-cheese",
                image: "grilled-cheese.jpg",
                price: 23.99          
              },
              {
                name:"roast-beef",
                image: "roast-beef.jpg",
                price: 17.99          
              },
              {
                name:"oven-roasted-chicken",
                image: "oven-roasted-chicken.png",
                price: 22.99          
              },
              {
                  name:"tuna",
                  image: "tuna.png",
                  price: 19.99          
                },
                {
                  name:"turkey-breast",
                  image: "turkey-breast.png",
                  price: 18.99          
                },

      ]

      // ...
    //   window.onload = function(){
    //         displayMenuItems();
    //   };
    // console.log(menu[i].image);
    // console.log(menu[i].name);

    displayMenuItems();

      function displayMenuItems(){
        var item = 0;
          for (var i=0; i<menu.length; i += 2){

                
              var newRow = $("<div>");
              newRow.attr("class", "row");
              $("#menu-column").append(newRow);
             
              console.log("row"+i);
          
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
                  
                  console.log(menu[i].image);
                  console.log(menu[i].name);
          }
        }
      }


      // FUNCTIONS
      // ====================================================================
      // Here we create various on "click" functions which capture the clicks
      // Inside each click event is the code to create an alert, update the counter, then show the updated count.
      // ...
     
      
      // ...

      var manyEl = document.querySelectorAll(".col-6");
      console.log(manyEl);
      for (let i=0; i<manyEl.length; i++){

      manyEl[0].addEventListener("click", function(event){
        var element = event.target;
        // console.log(element);
        if (element.matches("h3") === true){
            var index = element.indexOf;
            console.log(index);
          }
        // console.log(element);
      })
    }




      function addToCart(sandwich){
       
        var newImg = $("<img>");
        var newSpan = $("<span>");
        newImg.attr("src", "./images/"+sandwich+".jpg");
        newImg.attr("class", "menu-item");
        $("#cart").append(newImg);
        newSpan.text(sandwich);
        $("#cart").append(newSpan);

        
        $("#total-number").text("Total Items: "+ counter);
      }



    });
