import { faker } from "@faker-js/faker";
import * as milesRepository from "../../src/repositories/miles-repository";
import { generateMilesForTrip, getMilesFromCode } from "../../src/services/miles-service";
import { tripMock } from "./unit-factories/miles-service-factory";

beforeEach(() => {
    jest.clearAllMocks();
})

describe(" Miles Service Unit Test", () => {
    it("should return an error if the miles code already exists", () => {
        jest.spyOn(milesRepository, "findMiles").mockResolvedValueOnce({
         
            "id": 1,
            "code": "ALR11",
            "miles": 7380
        });
        const promise = generateMilesForTrip(tripMock);

        expect(promise).rejects.toEqual({
            type: "conflict",
            message: `Miles already registered for code ${tripMock.code}`
        });
    })

    it("should return an error if the miles don't exist", () => {
        jest.spyOn(milesRepository, "findMiles").mockResolvedValueOnce(null);
        const code = faker.string.alphanumeric(5);
        const promise = getMilesFromCode(code);

        expect(promise).rejects.toEqual({
            type: "not_found",
            message: `Miles not found for code ${code}`
        })
    })
})

