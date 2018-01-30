Mutation {
  createCar(name: 'Tesla Model S') {
    _id,
    name
  }
}

Mutation {
  createCar(name: 'Tesla Roadster') {
    _id
  }
}

Mutation {
  createCar(name: 'Tesla Model X') {
    _id
  }
}


{
  allCars {
    _id,
    name
  }
}
