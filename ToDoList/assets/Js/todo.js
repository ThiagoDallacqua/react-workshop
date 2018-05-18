/**
 * Created by thiago on 25/10/16.
 */

var width = screen.width;

$("input[type='text']").css("display", "none");

selectDisplay(); //load a different layout depending on the size of the screen

$("ul").on("click", "li .completedMobile", function () { //will add the event to all possible li's, indifferently if they exist at the first load of the page or not

    $(this).parent().toggleClass("completed");
});

$("ul").on("click", "li .delete", function (event) { //remove the li which contains the referred span


    $(this).parent().fadeOut(500, function () {

        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event) {

    if(event.which === 13){

        if(this.value === ""){

            alert("Please, type a valid Todo!");
        }else{

            var todoText = $(this).val();

            $("ul").append("<li><span class='delete'><i class='fa fa-trash-o' aria-hidden='true'></i></span>" +
                "<span class='completedMobile'><i class='fa fa-check' aria-hidden='true'></i></span>" + todoText + "</li>");

            $(this).val("");
        }
    }
});

$(".fa-plus").click(function () {

    if($("input[type='text']").css("display") === "none"){

        $(this).css({

            animationName: "faPlus",
            animationDuration: "0.2s",
            animationTimingFunction: "linear",
            animationDelay: "0",
            animationIterationCount: "1"
        });
    }else{

        $(this).css({

            animationName: "faPlusInverse",
            animationDuration: "0.2s",
            animationTimingFunction: "linear",
            animationDelay: "0",
            animationIterationCount: "1"
        });
    }

    $("input[type='text']").fadeToggle("fast");
});

function selectDisplay() {

    if(width < 1024){

        $("ul").on("click", "li", function () {

            $(this).children().toggleClass("clicked");
        });
    }else{

        $("ul").on("mouseover", "li", function () {

            $(this).children().toggleClass("clicked");
        });

        $("ul").on("mouseout", "li", function () {

            $(this).children().toggleClass("clicked");
        });
    }
}