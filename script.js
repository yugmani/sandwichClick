

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
                image: "oven-roasted-chicken.jpg",
                price: 22.99          
              },
              {
                  name:"tuna",
                  image: "tuna.jpg",
                  price: 19.99          
                },
                {
                  name:"turkey-breast",
                  image: "turkey-breast.jpg",
                  price: 18.99          
                },

      ]

      // ...

      // FUNCTIONS
      // ====================================================================
      // Here we create various on "click" functions which capture the clicks
      // Inside each click event is the code to create an alert, update the counter, then show the updated count.
      // ...
      $("#pbj").on("click", function(){
        counter++;
        imageAdd("peanutbutter-jelly");
        // alert("Now you got ruined by Butter Jelly")
        // alert("You ate: "+counter+ " sandwiches");
      })
      $("#grilledcheese").on("click", function(){
        counter++;
        imageAdd("grilled-cheese");
        // alert("You are Grilled with Cheese");
        // alert("You ate: "+counter+ " sandwiches");
      })
      $("#roastbeef").on("click", function(){
        counter++;
        imageAdd("roast-beef");
        // alert("You are better with Roasted Beef");
        // alert("You ate: "+counter+ " sandwiches");
      })
      
      // ...
      function imageAdd(sandwich){
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
