
var EventReg=[];
var EventQueue=[];

function Attach(event, callback) {
	if (EventReg[event] == undefined)
	{
		EventReg[event] = [];
	}
	EventReg[event].push(callback);
}

function Detach(event, callback){
	if(EventReg[event]!=undefined && EventReg[event].indexOf(callback)>-1){
		EventReg[event].splice(EventReg[event].indexOf(callback),1);
	}// removes the callback associated with the event
}

function DetachAll(event) {
	if (EventReg[event]!=undefined) {
		EventReg[event]=[];
	}
}

function Trigger(event, params) {
	EventQueue.push({event:event,params:params});
}