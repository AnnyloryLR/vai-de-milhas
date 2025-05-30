import { calculateMiles } from "../../src/services/miles-calculator-service";
import { economicTripMock, firstClassTripMock } from "./unit-factories/miles-calculator-service-factory";

describe("Miles Calculator Service", () => {

    it("should return calculated miles", () => {     
        const economic = calculateMiles(economicTripMock);
        const firstClass = calculateMiles(firstClassTripMock);

        expect(economic).toEqual(expect.any(Number));
        expect(firstClass).toEqual(expect.any(Number));
    })

})