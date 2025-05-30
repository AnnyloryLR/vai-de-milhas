import { faker } from "@faker-js/faker"
import { applyHaversineFormula, calculateDistance, toRadius } from "../../src/services/distances-calculator-service";

beforeEach(() => {
    jest.clearAllMocks();
})

describe("Distance Calculator Unit Service Testing", () => {
       
    it("should return the calculated distance", () => {
        const locationMock = {
            coords1:{ lat: faker.location.latitude(),
                long: faker.location.longitude()
            },
            coords2:{ lat: faker.location.latitude(),
                long: faker.location.longitude()
            }
        }
        const distance = calculateDistance(locationMock.coords1, locationMock.coords2);

        expect(distance).toEqual(expect.any(Number));

    })

    it("should return the calculated radius", () => {
        const dLat = faker.location.latitude() - faker.location.latitude();
        const dLon = faker.location.longitude() - faker.location.longitude();

        const radiusLat = toRadius(dLat);
        const radiusLon = toRadius(dLon);

        expect(radiusLat).toEqual(expect.any(Number));
        expect(radiusLon).toEqual(expect.any(Number));
    })

    it("should return the calculated distance not rounded", () => {
        const RADIUS_IN_MILES = 3958.8;
        const RADIUS_IN_KM = 6371;

        const dLat = toRadius(faker.location.latitude() - faker.location.latitude());
        const dLon = toRadius(faker.location.longitude() - faker.location.longitude());
        const lat1 = toRadius(faker.location.latitude());
        const lat2 = toRadius(faker.location.latitude());

        let distance_miles = applyHaversineFormula(lat1, lat2, dLat, dLon, RADIUS_IN_MILES);
        let distance_km = applyHaversineFormula(lat1, lat2, dLat, dLon, RADIUS_IN_KM);

        expect(distance_miles).toEqual(expect.any(Number));
        expect(distance_km).toEqual(expect.any(Number));
    })

})

