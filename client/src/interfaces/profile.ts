export interface Profile {
    id: string;
    name: string;
    birthday: Date;
    sex: string;
    photoUrl: string;
    bio: string;
    location: GeolocationPosition;
}