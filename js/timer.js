function timerStart(interval){
	window.timerStartedAt = new Date();
	setInterval(timerTick,interval);
}

function timerTick() {
  var d1 = new Date();
  var diffTime = d1.getTime() - window.timerStartedAt.getTime();
  timerProgress(diffTime,window.config.timer.limit);
}
