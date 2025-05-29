import { faker } from "@faker-js/faker";
import { calculateMiles } from "../../src/services/miles-calculator-service";

describe("Miles Calculator Service", () => {

    it("should return calculated miles", () => {

        const economicTripMock = {
            code: faker.string.alphanumeric(5),
            origin: {
                lat: faker.location.latitude(),
                lon: faker.location.longitude()
            },
            destination: {
                lat: faker.location.latitude(),
                lon: faker.location.longitude()
            },
            miles: faker.datatype.boolean(),
            plane: faker.airline.airplane(),
            service: 



        }
    })
})