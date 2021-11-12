$(document).ready(function () {


    $("#card-btn").click(function(){
        let input, x = true
        input = $(".card-input");
        for(let i = 0; i < input.length; i++){

            if(input[i].value == ""){
                input[i].style.borderColor = "red";
            }
            else{
                input[i].style.borderColor = "white";
            }

        }
    })


});