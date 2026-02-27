"use strict";

const car = {
  brend: "Volvo",
  manufuacture_year: 2010,
  color: "black",
  fuel_type: "dizel",
  max_speed: 250,
  is_electric: true,
  address: {
    street: "Beyker Street",
    home: 230,
  },
};

function logCar(car) {
  const {
    brend: carBrend,
    manufuacture_year,
    is_electric = false,
    address: { street: streetName = "Default" } = {},
  } = car;

  console.log(`${carBrend} ${manufuacture_year} ${is_electric} ${streetName}`);
}

logCar(car); 
