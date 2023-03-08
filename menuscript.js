var burgCount = 0;
var panCount = 0;
var salCount = 0;

function addToOrder(foodStuff) {
    if(foodStuff == "burger"){
        burgCount++;
        document.getElementById("burg").innerHTML = "Burgers: " + burgCount;
    }
    if(foodStuff == "pancake"){
        panCount++;
        document.getElementById("pan").innerHTML = "Pancakes: " + panCount;
    }
    if(foodStuff == "salad"){
        salCount++;
        document.getElementById("sal").innerHTML = "Salads: " + salCount;
    }
}

function removeFromOrder(foodStuff) {
    if(foodStuff == "burger" && burgCount > 0){
        burgCount--;
        document.getElementById("burg").innerHTML = "Burgers: " + burgCount;
    }
    if(foodStuff == "pancake" && panCount > 0){
        panCount--;
        document.getElementById("pan").innerHTML = "Pancakes: " + panCount;
    }
    if(foodStuff == "salad" && salCount > 0){
        salCount--;
        document.getElementById("sal").innerHTML = "Salads: " + salCount;
    }


}

function placeOrder(){
    window.alert(`You ordered ${burgCount} burgers, ${panCount} pancakes, and ${salCount} salads for \$${Math.round(((burgCount * 5.99) + (panCount * 8.99) + (salCount * 6.99))* 100 + Number.EPSILON ) / 100}. Enjoy!`);
    burgCount = 0;
    panCount = 0;
    salCount = 0;
    document.getElementById("burg").innerHTML = "Burgers: " + burgCount;
    document.getElementById("pan").innerHTML = "Pancakes: " + panCount;
    document.getElementById("sal").innerHTML = "Salads: " + salCount;
}