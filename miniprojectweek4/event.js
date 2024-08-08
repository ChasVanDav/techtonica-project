class TicketType {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }
}

class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }

  addAvailableTickets(type, price) {
    let ticket = new TicketType(type, price);
    this.availableTickets.push(ticket);
  }

  allTickets() {
    if (this.availableTickets.length === 0) {
      return "No tickets available.";
    }

    let str = "All tickets: ";
    for (let index = 0; index < this.availableTickets.length; index++) {
      let ticket = this.availableTickets[index];
      str += `${index + 1}. ${ticket.type} ($${ticket.price}) `;
    }
    return str.trim();
  }

  searchTickets(minPrice, maxPrice) {
    let eligibleTickets = [];
    for (let index = 0; index < this.availableTickets.length; index++) {
      let ticket = this.availableTickets[index];
      if (ticket.price >= minPrice && ticket.price <= maxPrice) {
        eligibleTickets.push(ticket);
      }
    }

    if (eligibleTickets.length === 0) {
      return "No tickets available.";
    }

    let str = "Eligible tickets: ";
    for (let index = 0; index < eligibleTickets.length; index++) {
      let ticket = eligibleTickets[index];
      str += `${index + 1}. ${ticket.type} ($${ticket.price}) `;
    }
    return str.trim();
  }
}

// Create Event Objects
const eventObj1 = new Event('KLOS Golden Gala', 'An evening with Hollywood vampires');
eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);

const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
eventObj2.addAvailableTickets("General Admission", 25);
eventObj2.addAvailableTickets("Floor Seating", 80);

const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');
eventObj3.addAvailableTickets("Orchestra", 300);
eventObj3.addAvailableTickets("Mezzanine", 200);
eventObj3.addAvailableTickets("Balcony", 100);

// Add Events to Array
const eventArray = [eventObj1, eventObj2, eventObj3];

// DOM Manipulation to Display Events and Ticket Information
document.addEventListener('DOMContentLoaded', () => {
  let html = '';
  eventArray.forEach((event) => {
    // Display all tickets
    // html += `<li>${event.name} - ${event.description} - ${event.allTickets()}</li>`;
    
    // Display eligible tickets based on a hardcoded price range
    html += `<li>${event.name} - ${event.description} - ${event.searchTickets(0, 100)}</li>`;
  });
  document.querySelector('#event').innerHTML = html;
});
