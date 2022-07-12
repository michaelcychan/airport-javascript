class Airport {
  constructor (capacity = 10) {
    this.capacity = capacity;
    this.slots = []
  }
  showCapacity() {
    return this.capacity;
  }
  
  showCurrentPlanes() {
    return this.slots
  }
  land(plane) {
    this.slots.push(plane)
  }
  showEmptySlot() {
    return this.capacity - this.slots.length
  }
}

module.exports = Airport;