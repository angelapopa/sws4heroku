import mongoose from 'mongoose';
import {BookingSchema} from './bookingModel';
import {LinkSchema} from './linkModel';
import {RoomItemOfferSchema} from './roomItemOfferModel';
import {PriceSpecificationSchema} from './roomPriceModel';

const Schema = mongoose.Schema;

//mongoose subdocument for rooms
export const RoomSchema = new Schema({
    name : {type: String},
    description: {type: String},
    bookings: [BookingSchema],
    itemOffered: [RoomItemOfferSchema],
    priceSpecification: [PriceSpecificationSchema],
    links: [LinkSchema]
 });

//hiding mongo db fields
//from the json object that is returned
//by a GET request
RoomSchema.method('toJSON', function() {
    var room = this.toObject();

    room["@type"] = "Offer";
    room["@context"] = "https://schema.org/";

    let formattedName0 = room.name.replace(/\s+/g, "%20");
    let formattedName = formattedName0.replace(/\//g, "%2F");
    room["@id"] = "/api/rooms/" + formattedName;

    room.itemOffered.forEach(function (item) {
      item["@type"] = "Product";
      item.occupancy["@type"] = "QuantitativeValue";
    })

    delete room.__v;
    //in this dataset, availability has always schema.org value InStock, so it will not be displayed to the end user
    delete room.availability;
    //price specification is handled in it's own endpoint
    delete room.priceSpecification;
    return room;
  });