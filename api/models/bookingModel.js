import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//mongoose subdocument for bookings
export const BookingSchema = new Schema({ 
    from: {type: String},
    to: {type: String},
    firstname: {type: String},
    lastname: {type: String},
    numberOfRooms: {type: Number}
 });

//hiding mongo db fields
//from the json object that is returned
//by a GET request
BookingSchema.method('toJSON', function() {
    var booking = this.toObject();

    //TODO: parent hotel and room are not known at this point, so make a new endpoint for bookings
    //so that /api/booking/id makes sense
    booking["@id"] = "/api/bookings/" + booking._id;

    booking["@context"] = "http://schema.org/";
    booking["@type"] = "LodgingReservation";

    delete booking._id;
    delete booking.__v;
    return booking;
  });