import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//mongoose subdocument for room price
export const PriceSpecificationSchema = new Schema({ 
    description: {type: String},
    minPrice: {type: Number},
    maxPrice: {type: Number},
    priceCurrency: {type: String}
 });

//hiding mongo db fields
//from the json object that is returned
//by a GET request
PriceSpecificationSchema.method('toJSON', function() {
    var price = this.toObject();

    price["@type"] = "PriceSpecification";

    return price;
  });