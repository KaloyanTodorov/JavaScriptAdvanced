function dart(){
	let $divs = $('#playBoard div');
	let $home = $('#Home');
	let $away = $('#Away');
	let $tdsWithScore = $('#scoreBoard tbody tr td:nth-child(2)');
	
	let scores = [];
	$tdsWithScore.toArray().forEach(element => {
		let score = element.textContent.replace(' points', '');
		scores.push(score);
	});
	let scoresAsObj = {
		firstLayer: scores[0],
		secondLayer: scores[1],
		thirdLayer: scores[2],
		fourthLayer: scores[3],
		fifthLayer: scores[4],
		sixthLayer: scores[5],
	}

	let isHomePLaying = true;

	let homePlayerScore = 0;
	let awayPlayerScore = 0;

	let haveWinner = false;
	let $turns = $('#turns p');

	$divs.on('click', function(e) {
		e.stopPropagation();
		let id = $(this)[0].id;
		
		let currentScore = Number(scoresAsObj[id]);
		
		if(isHomePLaying) {
			homePlayerScore += currentScore;
			$('#Home p:nth-child(1)').text(homePlayerScore);
			
			if(homePlayerScore >= 100) {
				$('#Home p:nth-child(2)').css('background', 'green');
				$('#Away p:nth-child(2)').css('background', 'red');
				haveWinner = true;
			}
		} else {
			awayPlayerScore += currentScore;
			$('#Away p:nth-child(1)').text(awayPlayerScore);
			
			if(awayPlayerScore >= 100) {
				$('#Home p:nth-child(2)').css('background', 'red');
				$('#Away p:nth-child(2)').css('background', 'green');
				
				haveWinner = true;
			}
		}
		
		if(haveWinner) {
			$divs.off();
		}
		
		isHomePLaying = !isHomePLaying;
		let thisTurn = isHomePLaying ? "Home" : "Away";
		let nextTurn = !isHomePLaying ? "Home" : "Away";
	
		$($turns[0]).text(`Turn on ${thisTurn}`);
		$($turns[1]).text(`Next is ${nextTurn}`);
	})
	
}