import { faker } from '@faker-js/faker';
import { Profile } from '../interfaces/profile';

const generateFakeProfiles: (amountToGenerate: number) => Profile[] = (amount: number) => {
    let result: Profile[] = [];

    for(let i = 0; i < amount; i++){
        let sex = faker.name.sex();
        let coords = faker.address.nearbyGPSCoordinate();
        let sex2: 'male'|'female'  = sex == 'male' ? 'male' : 'female';

        result.push({
            id: faker.datatype.uuid(),
            name: faker.name.firstName(sex2),
            birthday: faker.date.birthdate({min: 18, max: 30}),
            sex,
            photoUrl: faker.image.animals(),
            bio: faker.lorem.paragraph(),
            location: {lat: coords[0], long: coords[1]}
        })
    }


    return result;
}