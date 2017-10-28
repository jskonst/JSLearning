class StepsCounter {
	constructor(counterArea) {
		this.steps = 0;
		this.counterArea = counterArea;
	}
	render() {
		this.counterArea.innerHTML = this.steps;
	}
	setSteps(newStepsCount) {
		this.steps = newStepsCount;
		this.render();
	}
}

export default StepsCounter;


