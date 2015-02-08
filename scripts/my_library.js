// function myFunction() {
// 	console.log("hello world.");
// }


// // These are the same. 
// $("#bar");	//JQuery ($)
// document.getElementById("bar");  // standard JS

// $("#bar").html("asdf");
// var myElement = document.getElementById("bar");


// when doc ready run...

// $(document).ready(function() {
// 	....
// })

// This is another way to write doc.ready...

$(function() {
				$("body").hide();
				$("body").fadeIn(4000);
				$("#bar").on("click", function() {
					console.log("there was a click");
				});

				function sayHi() {
					console.log("hello there");
				}

				$("#bar").on("click", sayHi);
			});