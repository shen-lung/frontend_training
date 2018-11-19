// use class, extends, destructuring, default params, template string
class Event {
	constructor(name = 'My Event', type = 'public', ticketClasses = []) {
		this.name = name;
		this.type = type;
		this.ticketClasses = ticketClasses;
	}
	addTicketClass(ticketClass) {
		this.ticketClasses.push(ticketClass);
	}
}

class Ticket {
	constructor(name = 'Ticket', price = '0') {
		this.name = name;
		this.price = typeof price == 'string' ? price : price.toString();
	}
}

class MyEvent extends Event {
	constructor(category = 'Music', name, type, ticketClasses) {
		super(name, type, ticketClasses);
		this.category = category;
	}
}

const myEvent = new MyEvent(name='Event', type='CA', category='Music');
const myTicket = new Ticket();

myEvent.addTicketClass(myTicket);

console.log(myEvent)
