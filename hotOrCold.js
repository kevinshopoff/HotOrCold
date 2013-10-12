$(document).ready(function(){
	var target = Math.floor(Math.random()*100);
	var bttnReload = false;
	console.log("The secret number is " + target);


	function giveFeedback(whichCircle, myGuess) {
		$("whichCircle").text(myGuess);
		$("#whichCircle").css("visibility","visible");
		if (myGuess < 10) {
			$(".circlevalue").css("margin-left","-6px");
		};
	};
	
	function checkGuess(guess) {	
		$("#minus4").css("visibility","hidden");
		$("#minus3").css("visibility","hidden");
		$("#minus2").css("visibility","hidden");
		$("#minus1").css("visibility","hidden");
		$("#plus1").css("visibility","hidden");
		$("#plus2").css("visibility","hidden");
		$("#plus3").css("visibility","hidden");
		$("#plus4").css("visibility","hidden");
	
		var guess = parseInt(guess);
		if (isNaN(guess)) {
			alert("Please enter a number.");
		} else if (guess == target) {
			$('#feedback').text('You guessed ' + target + ' correctly!');
			$("#feedback").css("visibility","visible");
			$("#middle").text(target);
			$("#middle").css("visibility","visible");
			$("button").text("Play Again!");
			bttnReload = true;
			//$("button").css("visibility","hidden");
			if (target < 10) {
				$(".circlevalue").css("margin-left","-6px");
			};
		} else if (guess < target) {
			//alert("Your guess of " + guess + " is too low.  Please try again.");
			$('#feedback').text('Your guess of ' + guess + ' is too low.  Please try again.');
			$("#feedback").css("visibility","visible");
			difference = target - guess;
			switch (true) {
				case (difference <= 5):
					//giveFeedback("#minus1", guess);
					$("#minus1").text(guess);
					$("#minus1").css("visibility","visible");
					if (guess < 10) {
						$(".circlevalue").css("margin-left","-6px");
					};
					break;
				case (difference <= 15):
					$("#minus2").text(guess);
					$("#minus2").css("visibility","visible");
					if (guess < 10) {
						$(".circlevalue").css("margin-left","-6px");
					};
					break;
				case (difference <= 25):
					$("#minus3").text(guess);
					$("#minus3").css("visibility","visible");
					if (guess < 10) {
						$(".circlevalue").css("margin-left","-6px");
					};
					break;
				default:
					$("#minus4").text(guess);
					$("#minus4").css("visibility","visible");
					if (guess < 10) {
						$(".circlevalue").css("margin-left","-6px");
					};
					break;					
			}
				
		} else {
			$('#feedback').text('Your guess of ' + guess + ' is too high.  Please try again.');
			$("#feedback").css("visibility","visible");
			difference = guess - target;
			switch (true) {
				case (difference <= 5):
					$("#plus1").text(guess);
					$("#plus1").css("visibility","visible");
					if (guess < 10) {
						$(".circlevalue").css("margin-left","-6px");
					};
					break;
				case (difference <= 15):
					$("#plus2").text(guess);
					$("#plus2").css("visibility","visible");
					if (guess < 10) {
						$(".circlevalue").css("margin-left","-6px");
					};
					break;
				case (difference <= 25):
					$("#plus3").text(guess);
					$("#plus3").css("visibility","visible");
					if (guess < 10) {
						$(".circlevalue").css("margin-left","-6px");
					};
					break;
				default:
					$("#plus4").text(guess);
					$("#plus4").css("visibility","visible");
					if (guess < 10) {
						$(".circlevalue").css("margin-left","-6px");
					};
					break;					
			}			
		};
	};
	
	$("button").click(function(){
		console.log("bttnReload = " + bttnReload);
		if (bttnReload) {
			window.location.reload();
		} else {
			var currentGuess = $('input[name=myGuess]').val();
			console.log(currentGuess + " was your guess");
			checkGuess(currentGuess);
		};
    });
	
	$("#guessNumber").submit(function(){
		console.log("bttnReload = " + bttnReload);
		if (bttnReload) {
			window.location.reload();
		} else {
			var currentGuess = $('input[name=myGuess]').val();
			console.log(currentGuess + " was your guess");
			checkGuess(currentGuess);
		};
		return false;
    });
	
});
	
	
	
	
	
	
