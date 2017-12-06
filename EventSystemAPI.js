
var EventReg=[];

function Attach(event, callback) {
	for (var i = 0; i < EventReg.length; i++) {
		var currentItem = EventReg[i];
		if (currentItem.key == event) { //EventReg already contains the event
			currentItem.value.push(callback);
			return;
		}	
	}
	var regItem={key:event,value:[]}; //EventReg doesn't contain the event
	regItem.value.push(callback);
	EventReg.push(regItem);
}

function Detach(event, callback){
	for (var indexOfEvent = 0; indexOfEvent < EventReg.length; indexOfEvent++) {
		var currentItem=EventReg[indexOfEvent];
		if (currentItem.key == event && currentItem.value.includes(callback)) {
			var indexOfCallback=currentItem.value.indexOf(callback);
			currentItem.value.splice(indexOfCallback, 1);

			if (currentItem.value.length==0) { //the event isn't associated with anymore callbacks
				EventReg.splice(indexOfEvent, 1);
			}
		}
	}
}

function DetachAll(event) {
	for (var indexOfEvent = 0; indexOfEvent < EventReg.length; indexOfEvent++) {
		currentItem=EventReg[indexOfEvent];
		if (currentItem.key==event) {
			EventReg.splice(indexOfEvent,1);
		}
	}
}

function Trigger(event, params) {
	// body...
}
