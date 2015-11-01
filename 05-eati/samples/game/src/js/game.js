(function gameEATI() {
	'use strit';

	var winner;
	var table = document.getElementById('table');
	var player = 'circle';
	var index = 0;

	function endGame() {
		if
		(	verify(1, 2, 3) || verify(4, 5, 6) || verify(7, 8, 9) ||
	        verify(1, 4, 7) || verify(2, 5, 8) || verify(3, 6, 9) ||
	        verify(1, 5, 9) || verify(3, 5, 7)
	    ){
	        alert( winner + ' é o vencedor');
	        table.removeEventListener('click');
    	}else if (index === 9) {
	    	alert('O jogo terminou empatado.');
	    }
	};

	function verify(a, b, c) {
		var hA = document.getElementById('h' + a);
	    var hB = document.getElementById('h' + b);
	    var hC = document.getElementById('h' + c);
	    var bgA = hA.style.backgroundImage;
	    var bgB = hB.style.backgroundImage;
	    var bgC = hC.style.backgroundImage;

	    if( (bgA == bgB) && (bgB == bgC) && bgA !== ""){
	        if(bgA.indexOf('circle.png') >= 0) {
	        	winner = 'Bolinha';
	        }
	        else {
	            winner = 'Xis';
	        }

	        return true;
	    }

	    return false;
	};

	function callback(e) {
		var clicked  = e.target;

		if(clicked.style.backgroundImage === '') {
			var bg = './src/img/' + player + '.png';

			clicked.style.backgroundImage = 'url('+ bg +')';
			clicked.style.backgroundRepeat = 'no-repeat';
			clicked.style.backgroundPosition = 'center center';

			player = (player === 'circle' ? 'x' : 'circle');

			index++;

			endGame();
		}
	};

	table.addEventListener('click', callback);
})();