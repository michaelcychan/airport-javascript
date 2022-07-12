class Airport {
  constructor (weatherGenerator, capacity = 10) {
    this.capacity = capacity;
    this.slots = []
    this.weather = weatherGenerator;
  }
  showCapacity() {
    return this.capacity;
  }
  
  showCurrentPlanes() {
    return this.slots
  }
  land(plane) {
    if( this.weather.current() > 0.1) {
      if(this.slots.length < this.capacity) {
        this.slots.push(plane)
      } else {
        throw('Airport is full');
      }
    } else {
      throw('Weather is too bad');
    }

  }
  takeoff(plane) {
    this.slots = this.slots.filter(element => (element != plane) )
  }
  showEmptySlot() {
    return this.capacity - this.slots.length
  }
}

module.exports = Airport;