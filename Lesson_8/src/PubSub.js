const PubSub = {
	events: {},
	on: function(eventName, fn) {
		this.events[eventName] = this.events[eventName] || [];
		this.events[eventName].push(fn);
	},
	emit: function(eventName, data) {
		let eName = this.events[eventName];
		if (!eName || !eName.length) {
			return;
		}
		eName.forEach(fn => fn(data));
	},
	off: function(eventName, fn) {
		if (this.events[eventName]) {
	      	for (let i = 0; i < this.events[eventName].length; i++) {
		        if (this.events[eventName][i] === fn) {
		          	this.events[eventName].splice(i, 1);
		          	break;
		        }
	      	}
	    }
	}
}

export default PubSub;