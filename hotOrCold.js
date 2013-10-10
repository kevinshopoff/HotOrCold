$(document).ready(function(){
	var target = Math.floor(Math.random()*100);
	var correct = false;
	/*alert("Here we go! " + target);*/
	while (!correct) {
		var guess = prompt("Enter your guess between 1 and 100");
		if (guess == target) {
			correct = true;
			alert("You guessed " + target + " correctly!");
		} else if (guess < target){
			alert("Your guess of " + guess + " is too low.  Please try again.");
		} else {
			alert("Your guess of " + guess + " is too high.  Please try again.")
		};
	};
	
});