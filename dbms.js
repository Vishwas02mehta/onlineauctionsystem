alert("welcomes you to one of the advanced auction systems of the entire world");

let age = prompt("Enter your age");

if (age >= 18) {
    console.log("A great welcome ");
    
} else {
    alert("Bhag ja yha se! You are not allowed to access this site.");
    document.body.innerHTML = "<h1 style='color:red; text-align:center;'>Access Denied</h1>";
}
