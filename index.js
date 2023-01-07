// myModule module
export default class Car {
  constructor(brand) {
    this.brand = brand;
  }
  run() {
    console.log("The %s is running...", this.brand);
  }
}
