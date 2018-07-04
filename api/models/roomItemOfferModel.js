import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//mongoose subdocument for room item offered
export const RoomItemOfferSchema = new Schema({
    name: {type: String},
    numberOfRooms: {type: String},
    occupancy: {
        maxValue: {type: Number},
        minValue: {type: Number}
    }
 });

//hiding mongo db fields
//from the json object that is returned
//by a GET request
RoomItemOfferSchema.method('toJSON', function() {
    var item = this.toObject();

    return item;
  });