import { faker } from "@faker-js/faker";
import { ServiceClass, AffiliateStatus } from "../../../src/protocols";

export const economicTripMock = {
            code: faker.string.alphanumeric(5),
            origin: {
                lat: faker.location.latitude(),
                long: faker.location.longitude()
            },
            destination: {
                lat: faker.location.latitude(),
                long: faker.location.longitude()
            },
            miles: faker.datatype.boolean(),
            plane: faker.airline.airplane().name,
            service: ServiceClass.ECONOMIC,
            affiliate: AffiliateStatus.BRONZE,
            date: faker.date.future().toDateString()
        }

export const firstClassTripMock = {
            code: faker.string.alphanumeric(5),
            origin: {
                lat: faker.location.latitude(),
                long: faker.location.longitude()
            },
            destination: {
                lat: faker.location.latitude(),
                long: faker.location.longitude()
            },
            miles: faker.datatype.boolean(),
            plane: faker.airline.airplane().name,
            service: ServiceClass.FIRST_CLASS,
            affiliate: AffiliateStatus.PLATINUM,
            date: faker.date.future().toDateString()
        }

