var randomResult;  
var losses;
var wins;
current = 0;

 
var startgameover = function() {

 $(".crystals").empty();

 var crystalpics = [ "/Users/alphonsotate/Desktop/Classwork/unit-4-game/assets/images/amber.jpg",
                     "/Users/alphonsotate/Desktop/Classwork/unit-4-game/assets/images/aragonite properties.jpg ",
                     "/Users/alphonsotate/Desktop/Classwork/unit-4-game/assets/images/BlueCrystalAbstract.jpg",
                     "/Users/alphonsotate/Desktop/Classwork/unit-4-game/assets/images/crystal skull.jpg",

 ];

randomResult = Math.floor( Math.random() * 69 ) + 30;

$(".winningNum").html("Universe's Number:" + '' + randomResult);

for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random()* 11) + 1;

  

    var crystals = $("<div>");
    crystals.attr({"class":'crystals',
                "numberVal": random });
  
  crystals.html("Numerous:" + "" + random );
  crystals.css({     
    "background-image":"url('" + crystalpics[i] + "')",
    "background-size": "cover"

});

$("#crystals").append(crystals);

    
    
        };

       

        

    };

    $(".current").html("Total Score: " + current);

     startgameover();  
     

        $(document).on('click', " .crystals", function() {
            
            
            var num = parseInt($(this).attr("numberVal"));
            current += num;

            console.log(current);

            $(".current").html("Current Value:" + current);

            if ( current > randomResult) {
                losses++;
                
                
                $(".losses").html(" Losses:"+ "" + losses);
                current = 0;
                startgameover();
            }
            else if (current === randomResult) {
                wins++;

                $(".wins").html("Wins:" + "" + losses);
                current = 0;
                startgameover();
            }

            

        });
    
    
    


   








