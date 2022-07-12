const Airport = require('./airport');

describe('Airport', () => {
  describe('initiaslisation', () => {
    it('inistiaslies with zero plane and a default capacity', () => {
      const mockWeather = {};
      const airport = new Airport(mockWeather);
      expect(airport.showCurrentPlanes()).toStrictEqual([]) // let's assume the output is an array first
      expect(airport.showCapacity()).toBe(10)
      expect(airport.showEmptySlot()).toBe(10)
    });
    it('initialises with zero plane but a given capactiy', () => {
      const mockWeather = {};
      const airport = new Airport(mockWeather, 15);
      expect(airport.showCurrentPlanes()).toStrictEqual([]) // let's assume the output is an array first
      expect(airport.showCapacity()).toBe(15)
      expect(airport.showEmptySlot()).toBe(15)
    })
  });
  describe('landing a plane', () => {
    it('lands a plane', () => {
      const mockWeather = {
        current: () => 0.8
      };
      const airport = new Airport(mockWeather);
      const mockPlane = {};
      airport.land(mockPlane);
      expect(airport.showCurrentPlanes()).toStrictEqual([mockPlane]);
      expect(airport.showCapacity()).toBe(10)
      expect(airport.showEmptySlot()).toBe(9)
    });
    it('lands multiple planes', () => {
      const mockWeather = {
        current: () => 0.8
      };
      const airport = new Airport(mockWeather);
      const mockPlane = {};
      const mockPlane2 = {};
      airport.land(mockPlane);
      airport.land(mockPlane2);
      expect(airport.showCurrentPlanes()).toStrictEqual([mockPlane, mockPlane2]);
      expect(airport.showCapacity()).toBe(10)
      expect(airport.showEmptySlot()).toBe(8)
    });
    it('prevents planes from landing when airport is full', () => {
      const mockWeather = {
        current: () => 0.8
      };
      const airport = new Airport(mockWeather);
      const mockPlane = {};
      for(let i = 1; i <= 10; i++){
        airport.land(mockPlane);
      }
      expect(airport.showEmptySlot()).toBe(0);
      expect(() => {
        airport.land(mockPlane);
      }).toThrow('Airport is full');
    })
  });
  describe('planes taking off', () => {
    it('instructs a plane to take off', () => {
      const mockWeather = {
        current: () => 0.8
      };
      const airport = new Airport(mockWeather);
      const mockPlane = {};
      //landing a plane
      airport.land(mockPlane);
      expect(airport.showCurrentPlanes()).toStrictEqual([mockPlane]);
      expect(airport.showEmptySlot()).toBe(9);
      //taking off
      airport.takeoff(mockPlane);
      expect(airport.showCurrentPlanes()).toStrictEqual([])
      expect(airport.showEmptySlot()).toBe(10)
    });
    it('instructs a plane to take off', () => {
      const mockWeather = {
        current: () => 0.8
      };
      const airport = new Airport(mockWeather);
      const mockPlane = {};
      const mockPlane2 = {};
      //landing a plane
      airport.land(mockPlane);
      airport.land(mockPlane2);
      expect(airport.showCurrentPlanes()).toStrictEqual([mockPlane, mockPlane2]);
      expect(airport.showEmptySlot()).toBe(8);
      //taking off
      airport.takeoff(mockPlane);
      expect(airport.showCurrentPlanes()).toStrictEqual([mockPlane2])
      expect(airport.showEmptySlot()).toBe(9)
    });
  })
})