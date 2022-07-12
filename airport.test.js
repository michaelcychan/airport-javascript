const Airport = require('./airport');

describe('Airport', () => {
  describe('initiaslisation', () => {
    it('inistiaslies with zero plane and a default capacity', () => {
      const airport = new Airport();
      expect(airport.showCurrentPlanes()).toStrictEqual([]) // let's assume the output is an array first
      expect(airport.showCapacity()).toBe(10)
      expect(airport.showEmptySlot()).toBe(10)
    });
    it('initialises with zero plane but a given capactiy', () => {
      const airport = new Airport(15);
      expect(airport.showCurrentPlanes()).toStrictEqual([]) // let's assume the output is an array first
      expect(airport.showCapacity()).toBe(15)
      expect(airport.showEmptySlot()).toBe(15)
    })
  });
  describe('landing a plane', () => {
    it('lands planes', () => {
      const airport = new Airport();
      const mockPlane = {};
      airport.land(mockPlane);
      expect(airport.showCurrentPlanes()).toStrictEqual([mockPlane]);
      expect(airport.showCapacity()).toBe(10)
      expect(airport.showEmptySlot()).toBe(9)
    });
  })
})