import { faker } from "@faker-js/faker";
import { ServiceClass, AffiliateStatus } from "../../../src/protocols";

export const tripMock = {
            code: "ALR11",
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