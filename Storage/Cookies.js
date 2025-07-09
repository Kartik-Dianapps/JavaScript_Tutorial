// 🍪 Cookies in JavaScript

// 🔍 View all cookies (as a single string)
console.log(document.cookie);

// ✅ Set a cookie — this adds to existing cookies (does NOT overwrite other cookies)
document.cookie = "name=Kartik0125";
console.log(document.cookie);

document.cookie = "google=www.google.com";
console.log(document.cookie);

// ⚠️ Setting a cookie with the same key overwrites its value
document.cookie = "name=kartik01256"; // Overwrites the previous "name"
console.log(document.cookie);

// ❌ If the key contains special characters like ;, =, or space,
// the cookie may not be set correctly.

// ✅ Solution: Always encode key and value using encodeURIComponent
let key = prompt("Enter key:");
let value = prompt("Enter value:");
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie);
// and we can decode this using decodeURIComponent


// ✅ You can also set cookie options like path and expiration
// For example, set a cookie that is available on path "/a" and below,
// and expires on a specific date
document.cookie = "demo=12345; path=/a; expires=Tue, 25 Mar 2041 00:00:00 GMT";
