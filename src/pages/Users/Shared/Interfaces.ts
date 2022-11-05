export interface User {
    id?: string;
    name: string;
    phone: string;
    image: string;
    birthdate: string;
    countryCode: string;
    gender: string;
    tagId?: string;
    tagScanned?: number;
    views?: number;
    visibility?: boolean;
    method: string,
    token?: string;
}

