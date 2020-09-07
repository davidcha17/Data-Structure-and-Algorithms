const fs = require('fs');
const readline = require('readline');
const {Ping} = require('./ping');
const {Vehicle} = require('./vehicle');

class WarehouseServer {
  constructor() {
    /** @const @private {!Array<Vehicle>} A list of vehicle instances. */
    this.vehicles = [];
  }

  /**
   * Returns an object mapping vehicle name to that vehicle's average speed for
   * all vehicles.
   * @return {!Object<string, number>}
   */
  getAverageSpeeds() {
    return this.vehicles.reduce((acc, vehicle) => {
      acc[vehicle.getName()] = vehicle.getAverageSpeed();
      return acc;
    }, {});
  }

  /**
   * Returns a sorted array of size maxResults of vehicle names corresponding
   * to the vehicles that have traveled the most distance since the given
   * timestamp (in seconds).
   * @param {number} maxResults
   * @param {number} timestamp
   * @return {!Array<string>}
   */
  getMostTraveledSince(maxResults, timestamp) {
    // TODO: Implement
    return [];
  }

  /**
   * Returns an array of names identifying vehicles that might have been
   * damaged through any number of risky behaviors, including collision with
   * another vehicle and excessive acceleration.
   * @return {!Array<string>}
   */
  checkForDamage() {
    // TODO: Implement
    return [];
  }

  /**
   * @param {string} fileName
   * @return {!Promise<void>}
   */
  initializeServer(fileName) {
    return new Promise(resolve => {
      const reader = readline.createInterface({
        input: fs.createReadStream(fileName),
      });
      reader.on('line', line => {
        const [name, x, y, timestamp] = line.split(',');
        this.processPing(name, x, y, timestamp);
      });
      reader.on('close', resolve);
    });
  }

  /**
   * @param {string} vehicleName
   * @param {number} x
   * @param {number} y
   * @param {number} timestamp
   */
  processPing(vehicleName, x, y, timestamp) {
    const ping = new Ping(x, y, timestamp);
    if (!this.vehicles.some(vehicle => vehicle.getName() === vehicleName)) {
      this.vehicles.push(new Vehicle(vehicleName));
    }
    this.vehicles[this.vehicles.length - 1].getPings().push(ping);
  }
}

module.exports = {WarehouseServer};

// Task Two
// In warehouse_server.js, implement the method with the prototype

// getMostTraveledSince(maxResults, timestamp);
// This method returns an array of the maxResults forklifts that have traveled the most distance since timestamp (inclusive), sorted by those that have moved most to least. You can assume the lists of pings for each vehicle are sorted with the earliest ping at the start.

// We want to be as proactive as possible in providing maintenance and repairs to our forklifts, especially those which may have been damaged. Complete the method with the prototype

// Task Three
// checkForDamage();
// This method should identify a list of forklifts that might need to be inspected. Examples of behavior that might warrant an inspection include forklifts which have been driven aggressively (quick acceleration and deceleration) or when forklifts collide with one another. You can use any heuristics you like, but are encouraged to make sure your decisions are well documented and your code is appropriately decomposed.