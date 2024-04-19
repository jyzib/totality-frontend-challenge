import {model,Schema,models} from 'mongoose'

const propertySchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    amenities: [String], 
    images: [String],
  });
  

  const propertyModel = models.property || model('property', propertySchema)
  export default propertyModel