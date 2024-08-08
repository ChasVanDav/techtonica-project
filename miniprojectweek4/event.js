class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }

  addAvailableTickets(type, price) {
    let ticket = new ticketType(
      type,
      price
    )
    this.availableTickets.push(ticket);
  }

  allTickets() {
    let str = "All tickets: "
    for(let index=0; index<this.availableTickets.length; index++) {
      let ticket = this.availableTickets[index]
      str += `${index+1}. ${ticket.type} ($${ticket.price}) ` 
    }
    return str;
  }

  searchTickets(minprice, maxprice) {
    let str = "Eligible tickets: "
    let ticket = 
    while (i >= minprice || i <= maxprice) {
      str += `${index+1}. ${ticket.type} ($${ticket.price}) `;
      i++
    }
    }
  


class ticketType {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }
}

  

const eventObj1 = new Event(
  'KLOS Golden Gala',
  'An evening with hollywood vampires'
);

eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);

// console.log(eventObj1.allTickets());


const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');

const eventArray = new Array();

// pushing single object to an array
// eventArray.push(eventObj1);
// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);

// in order to check whether the elements are pushed, use console.log
console.log(eventArray);

document.addEventListener('DOMContentLoaded', () => {
    // Handler when the DOM is fully loaded
    let html = '';
    eventArray.forEach((item) => {
      html += `<li>${item.name} - ${item.description} - ${item.allTickets}`;
    });
    document.querySelector('#event').innerHTML = html;
  });

