function ticketProcessor(arr, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    
    let ticketsArr = [];
    arr.forEach(ticket => {
        const args = ticket.split('|');
        const destination = args[0];
        const price = Number(args[1]);
        const status = args[2];

        const currentTicket = new Ticket(destination, price, status);
        ticketsArr.push(currentTicket);
    });

    let sortedArr = ticketsArr.sort((a, b) => a[sortCriteria] > b[sortCriteria]);
    return sortedArr;
}

// console.log(ticketProcessor(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'destination'));

ticketProcessor(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status');