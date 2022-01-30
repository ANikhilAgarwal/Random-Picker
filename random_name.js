var nameArray = [];

$("#pick").click(function() {
    // Get the input value
    var names = document.getElementById("names").value;
    console.log(names)
    // Seperate the names and push them into the array
    var nameArray = names.split("\n");
    console.log(nameArray)
    // Get a random name, the result
    var result = nameArray[Math.floor(Math.random()*nameArray.length)];
    console.log(result)
    // Display result
    document.getElementById('result').innerHTML = result
});

// $(document).keypress(function (e) {
//     if (e.which == 13) {
//         e.preventDefault();
//     }
// });

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

