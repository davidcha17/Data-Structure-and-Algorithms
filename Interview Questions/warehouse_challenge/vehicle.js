const {Ping} = require('./ping');

/**
 * A named vehicle with a sequence of pings.
 */
class Vehicle {
  /**
   * @param {string} name
   */
  constructor(name) {
    /** @private @const */
    this.name = name;

    /** @private @const {!Array<!Ping>} */
    this.pings = [];
  }

  /**
   * The name of the vehicle.
   * @return {string}
   */
  getName() {
    return this.name;
  }

  /**
   * The pings for the vehicle, in chronological order (earliest first).
   * @return {!Array<!Ping>}
   */
  getPings() {
    return this.pings;
  }

  /**
   * Determines the total distance covered by the pings.
   * @param {!Array<!Ping>} pings
   * @return {number}
   */
  static getTotalDistance(pings) {
    // TODO: implement
    let vehicle = this.getName()
    return 0;
  }

  /**
   * Determines the total distance traveled by the vehicle.
   * @return {number}
   */
  getTotalDistance() {
    return Vehicle.getTotalDistance(this.pings);
  }

  /**
   * Determines the average speed of the vehicle.
   * @return {number}
   */
  getAverageSpeed() {
    // TODO: implement
    return 0;
  }
}

module.exports = {Vehicle};


// Task One
// Add the function to vehicle.js with the prototype:

// static getTotalDistance(pings);
// This method should return the total distance traversed by the given forklift. You can assume the input list is sorted with the earliest ping at the start. Once you are done, use vehicle.getTotalDistance() in your implementation of:

// getAverageSpeed();
// This method should return the average speed (total distance / total time) observed for the given forklift. A forklift which has never moved would have an average speed of 0 meters per second.