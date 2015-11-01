(function() {
	'use strict';

	/**
	*
	* SETTINGS
	*
	**/
	var MOVE = {};
	var ELEMENTS = {};
	var windowSize = {};
	var timerMS = 500;
	var stepSize;

	ELEMENTS.window = document.getElementById('window');
	ELEMENTS.square = document.getElementById('square');

	/**
	*
	* STYLE
	*
	**/
	ELEMENTS.window.style.width = '100%';
	ELEMENTS.window.style.height = '100%';
	ELEMENTS.window.style.position = 'fixed';
	ELEMENTS.window.style.background = '#dedede';

	ELEMENTS.square.style.background = '#333';
	ELEMENTS.square.style.position = 'absolute';
	ELEMENTS.square.style.height = '50px';
	ELEMENTS.square.style.left = 0;
	ELEMENTS.square.style.transition = 'all 484.5ms linear';

	/**
	*
	* INFORMATIONS/CONFIG
	*
	**/
	windowSize.width = ELEMENTS.window.clientWidth;
	windowSize.height = ELEMENTS.window.clientHeight;
	stepSize = windowSize.width / 10;
	ELEMENTS.square.style.width = stepSize + 'px';

	/**
	*
	* METHODS
	*
	**/
	MOVE.left = function(pos) {
		ELEMENTS.square.style.left = pos + 'px';
	};

	MOVE.decision = function() {
		if(ELEMENTS.square.offsetLeft < windowSize.width - stepSize) {
			MOVE.left(ELEMENTS.square.offsetLeft + stepSize);
		}
	};

	/**
	*
	* INIT
	*
	**/
	setInterval(MOVE.decision, timerMS);
})();
