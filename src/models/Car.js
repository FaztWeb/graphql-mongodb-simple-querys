import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CarSChema = new Schema({
  name: String
});

const Car = mongoose.model('cars', CarSChema);

export default Car;
