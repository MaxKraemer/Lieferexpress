let menus = ['Cheeseburger 7.90€','Chiliburger 9.90€','Baconburger 10.90€'];
let prices = [7.90,9.90,10.90]
let basket = [];//leerer Warenkorb
let totalPrice = 0;

function addtobasket(i){//per klick in den Warenkorb

    basket.push(menus[i]);//menus werden aus dem Array in den Warenkorb gesendet
    totalPrice +=(prices[i]);
    updateShoppingcart();
    showtotal();
}

function updateShoppingcart(){
    if(basket.length <=20){
    let basketbox = document.getElementById('basketbox');
    basketbox.innerHTML= ``;
    for (let i = 0; i < basket.length; i++) {

        let menus = basket[i];
        basketbox.innerHTML += `
        <div>1x ${menus} <img src="img/trash.jpg" onclick="deletemenus(${i})"></img></div>
        `;//menus werden im Warenkorb angezeigt                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

    }   
    }
}

function showmenu(){
    
    for (let i = 0; i < menus.length; i++) {
        
        document.getElementById('basketbox').innerHTML = `${menus[i]}`;
    }

    basketbox.innerHTML= ``;
    for (let i = 0; i < basket.length; i++) {
        let menus = basket[i];
        basketbox.innerHTML += `
        <div>1x ${menus} <img src="img/trash.jpg" onclick="deletemenus(${i})"></img></div>
        `;//menus werden im Warenkorb angezeigt
    }
}

function showtotal(){
    
    document.getElementById('total').innerHTML = `${totalPrice.toFixed(2)}`;
    
}

function deletemenus(index){
    
    let priceIndex = menus.indexOf(basket[index]);
    totalPrice -= prices[priceIndex];
    basket.splice(index, 1);
    showmenu();
    showtotal();
    
}








