cart = [];
cartprices = [];
prices = {
'Margherita': 12,
'Formaggio': 15,
'Chicken': 17,
'MeatTown': 20,
'Parma': 22
}

function addToCart(clicked) {
    cart.push(clicked.getAttribute("item-name"));
    cartprices.push(clicked.getAttribute("price"));
    document.getElementById("order").innerHTML = cart.join('<br/>');
    document.getElementById("totalprice").innerHTML =  cartprices.map(x => parseInt(x)).reduce(function(a, b){
      return a + b;
    }, 0);
    console.log(cart);
}

function thankYouOverlay() {
	document.getElementById("thankyouoverlay").style.display = "block";
}

function thankYouOverlayClose() {
	document.getElementById("thankyouoverlay").style.display = "none";
}


function homePageview() {
gtag('config', 'UA-171188897-1', {
  'page_title' : 'home',
  'page_path': '/home'
});	
}

function aboutPageview() {
gtag('config', 'UA-171188897-1', {
  'page_title' : 'about',
  'page_path': '/about'
});	
}

function menuPageview() {
gtag('config', 'UA-171188897-1', {
  'page_title' : 'menu',
  'page_path': '/menu'
});	
}


function contactPageview() {
gtag('config', 'UA-171188897-1', {
  'page_title' : 'contact',
  'page_path': '/contact'
});	
}

function orderCompletedEvent() {

gtag('event', 'CompletedOrder', {
  'event_category': 'Order',
  'event_label': 'Pizza',
  'value': 10
});

}

function pizzaAdded() {

gtag('event', 'pizzaAdded', {
  'event_category': 'Item',
  'event_label': 'Pizza',
  'value': 10
});

}

function tableBooked() {

gtag('event', 'tableBooked', {
  'event_category': 'webContact',
  'event_label': 'table'
});

}



