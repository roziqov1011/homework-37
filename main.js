
var elList = document.querySelector(".list");
var elSpan =  document.querySelector(".span");
var elLi = document.createElement("li");


var books = [" mehrobdan chayon", "  hamsa"  , "  otgan kunlar"  , "  shum bola"  , "  sariq devni minib"  , "  shaytanat"];

function  lengthBook(add) {
    var result = "";
    for(var i =0; i<add.length; i++){
        var currentItem = add[i];

        if(currentItem.length > result.length ){
            result =add[i];
        }
    }
    return result;
    
}


elList.appendChild(elLi);
elLi.value = books;
elLi.textContent = books;

elSpan.textContent = " Eng uzun kitob - "+lengthBook(books);