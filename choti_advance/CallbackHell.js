// Callback hell issue
// Javascript is synchronous and single threaded language 
// Callback is fn which is passed inside a fn

// api.createOrder(cart,callback=function(orderId){
//     api.orderPayment(orderId,callback=function(){
//         api.orderSummary(callback=function(){
//             api.updateWallet();
//         })
//     })
// })

function createOrder(cart, callback) {
    setTimeout(() => {
        console.log("Order created");
        callback("order123");
    }, 1000);
}

function orderPayment(orderId, callback) {
    setTimeout(() => {
        console.log("Payment done for", orderId);
        callback();
    }, 1000);
}

function orderSummary(callback) {
    setTimeout(() => {
        console.log("Order summary shown");
        callback();
    }, 1000);
}

function updateWallet(callback) {
    setTimeout(() => {
        console.log("Wallet updated");
        callback();
    }, 1000);
}
let cart = [1,2,3];
createOrder(cart,function(orderId){
    orderPayment(orderId,function(){
        orderSummary(function(){
            updateWallet(function(){
                console.log("All tasks are done...");
            })
        })
    })
});