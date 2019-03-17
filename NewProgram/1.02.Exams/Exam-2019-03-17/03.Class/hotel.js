class Hotel {
    constructor(name, capacity) {
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 0;
        this.roomType = {
            single: capacity * 0.5,
            double: capacity * 0.3,
            maisonette: capacity * 0.2,
        };

        this.services = [];

        return this;
    }

    get roomType() {
        return this._roomType;
    }

    set roomType(value) {
        this._roomType = value;
    }

    get roomsPricing() {
        return {
            single: 50,
            double: 90,
            maisonette: 135,
        };
    }

    get servicesPricing() {
        return {
            food: 10,
            drink: 15,
            housekeeping: 25,
        }
    }

    rentARoom(clientName, roomType, nights) {
        if(typeof clientName !== "string") {
            throw TypeError('Client should be string');
        }

        if(typeof roomType !== 'string') {
            throw TypeError('roomType should be string');
        }

        if(typeof nights !== 'number' && nights !== '') {
            throw TypeError('nights should be number');
        }

        if(this.roomType[roomType] <= 0) {
            let message = `No ${roomType} rooms available! `;

            for (const room in this.roomType) {
                if(roomType === room) {
                    continue;
                }

                message += `Available ${room} rooms: ${this.roomType[room]}.`
            }

            return message;
        }

        this.currentBookingNumber++;

        const currentBooking = {
                clientName,
                roomType,
                nights,
                roomNumber: this.currentBookingNumber,

        };

        this.roomType[roomType] -= 1;
        this.bookings.push(currentBooking);

        return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber}.`
    }

    roomService(currentBookingNumber, serviceType) {
        if (typeof currentBookingNumber !== 'number') {
            throw  TypeError("should be number");
        }

        if (typeof serviceType !== 'string') {
            throw  TypeError("should be string");
        }

        let clientName = this.bookings[currentBookingNumber + 1].clientName;

        return `Mr./Mrs. ${clientName}, Your order for ${serviceType} service has been successful.`;
    }


    checkOut(currentBookingNumber) {

    }

    report() {

    }
}


let hotel = new Hotel('HotUni', 10);
//
console.log(hotel.rentARoom('Peter', 'single', 4));
console.log(hotel.rentARoom('Robert', 'double', 4));
console.log(hotel.rentARoom('Geroge', 'maisonette', 6));

//
// let hotel = new Hotel('HotUni', 10);
//
// hotel.rentARoom('Peter', 'single', 4);
// hotel.rentARoom('Robert', 'double', 4);
// hotel.rentARoom('Geroge', 'maisonette', 6);
//
// console.log(hotel.roomService(3, 'housekeeping'));
// console.log(hotel.roomService(3, 'drink'));
// console.log(hotel.roomService(2, 'room'));

//
// let hotel = new Hotel('HotUni', 5);

hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Robert', 'double', 4);
hotel.rentARoom('Geroge', 'maisonette', 6);

hotel.rentARoom('Geroge', 'maisonette', 6);

hotel.rentARoom('Geroge', 'maisonette', 6);

hotel.roomService(3, 'housekeeping');
hotel.roomService(3, 'drink');
hotel.roomService(2, 'room');
//
// console.log(hotel.report());