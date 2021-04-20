var urlList = ["https://bit.ly/3tyD65u", "https://bit.ly/3gtUDIt", "https://bit.ly/3tyDG3a", "https://bit.ly/3sysRMY", "https://bit.ly/3tKFUwB", "https://bit.ly/32r6QVW", "https://bit.ly/32rEJWP", "https://bit.ly/32vTJ5L"];
var priceList = ["12.00","14.00","10.00","8.00","17.00","13.00","15.00","18.00"];
var colorList = ["https://bit.ly/3xbQT3W", "https://bit.ly/3v3hpe3", "https://bit.ly/3ap8qw5", "https://bit.ly/3dvy2cw", "https://bit.ly/3x8hwXv" ];

var counter = 0;
var counterI = 0;
var truther = true;

$(document).ready(function(){
    imageChanger()



    setTimeout(function () {
        $(":button").click(function () {
            $("#items").append("<p>" + $("#itemTitle" + this.id).text() + " (" + $("#itemPrice" + this.id).text() + ")</p>");
            $("#total").text((Number($("#total").text()) + Number($("#itemPrice" + this.id).text().replace("$", "") * 1.06)).toFixed(2));
        });

    });

});


$(document).ready(function(){

    $('.result input[type="radio"]').click(function () {
        var value = $(this).val();

        if (value == "white"){
            $('#customSize').html(`<img class="colorShirt" src='${colorList[0]}'>`);
        }
        if (value == "black"){
            $('#customSize').html(`<img class="colorShirt" src='${colorList[1]}'>`);
        }
        if (value == "blue"){
            $('#customSize').html(`<img class="colorShirt" src='${colorList[2]}'>`);
        }
        if (value == "green"){
            $('#customSize').html(`<img class="colorShirt" src='${colorList[3]}'>`);
        }
        if (value == "red"){
            $('#customSize').html(`<img class="colorShirt" src='${colorList[4]}'>`);
        }
    });

    $('#btnaddImage').click(function () {
        var image = $("#userImage").val();
        $('#addImage').html(`<img class="randomImg" src='${image}'>`);
    });
});
    
var timer = setInterval(imageChanger, 8000);

function imageChanger(){

    if(truther == false){
        truther = true;
    }
    else{
        truther = false;
        counter = 0;
    }
    counterI = 0;

        $('#saleItem' + counterI).empty();
        $('#saleItem' + counterI).html(`<img class="newitems" src='${urlList[counter]}'>`);
        $('#itemCost' + counterI).html(`<div class="cost">` + "$" + priceList[counter] + `</div>`);
        counter++;
        counterI++;
        $('#saleItem' + counterI).empty();
        $('#saleItem' + counterI).html(`<img class="newitems" src='${urlList[counter]}'>`);
        $('#itemCost' + counterI).html(`<div class="cost">` + "$" + priceList[counter] + `</div>`);
        counter++;
        counterI++;
        $('#saleItem' + counterI).empty();
        $('#saleItem' + counterI).html(`<img class="newitems" src='${urlList[counter]}'>`);
        $('#itemCost' + counterI).html(`<div class="cost">` + "$" + priceList[counter] + `</div>`);
        counter++;
        counterI++;
        $('#saleItem' + counterI).empty();
        $('#saleItem' + counterI).html(`<img class="newitems" src='${urlList[counter]}'>`);
        $('#itemCost' + counterI).html(`<div class="cost">` + "$" + priceList[counter] + `</div>`);
        counter++;
        counterI++;
}
