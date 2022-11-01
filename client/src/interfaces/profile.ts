export interface Profile {
    id: string;
    name: string;
    birthday: Date;
    sex: string;
    photoUrl: string;
    bio: string;
    location: Coordinates;
}

export interface Coordinates {
    lat: string;
    long: string;
}