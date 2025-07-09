// sessionStorage is less often used than localStorage.
// sessionStorage exists within the current browser tab.Another tab with same page will have diff session storage.
// data survives after the page refreshes but if you open that same in other tab then data is gone 
// or closes that tab then also same will happen data is gone and 
// sessionStorage also have same properties and methods like localStorage like:

// How to set data 
// sessionStorage.setItem("a",1);
// sessionStorage.setItem("b",4);
// How to get data
// console.log(sessionStorage.getItem("a"));
// How to remove data
// sessionStorage.removeItem("a");
// How to clear storage
// sessionStorage.clear();
// How to get particular key at index
// sessionStorage.key(0);
// How to get no. of items in sessionStorage
// console.log(sessionStorage.length);


// Storage Event
// When existing data is updated in localStorage, or
// when a new (key, value) is inserted in localStorage, or
// when data is removed or cleared from localStorage,
// then this Storage Event is triggered in other tabs (not the one where the change happened).

// Note: sessionStorage does NOT trigger the storage event.

window.onstorage = (e)=>{
    console.log(e);
    alert("Data changed or cleared in localStorage...");
}
