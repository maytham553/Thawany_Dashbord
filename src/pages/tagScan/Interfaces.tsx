export interface UserInformation {
    id: string,
    name: string,
    phone: string,
    image: string,
    birthdate: string,
    countryCode: string,
    gender: string,
    tagId: string,
    tagScanned: number,
    views: number,
    visibility: boolean,
    method: string,
    token: string,
    location: {
        id: string,
        city: string,
        country: string,
        loc: string
    },
    socialAccounts: [SocialAccount],
    defaultAccount: DefaultAccount
}

export interface SocialAccount { 
    id: string,
    category: string,
    label: string,
    type: string,
    url: string,
    default: boolean
}

export interface DefaultAccount {
    id: string,
    category: string,
    label: string,
    type: string,
    url: string,
    default: boolean
}


export interface Dialog {
    open: boolean,
    id: number
}

