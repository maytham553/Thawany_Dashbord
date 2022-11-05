export interface Admin {
        id?: string;
        password: string;
        phone: string;
        name: string;
        addUsers: boolean;
        allPermission: boolean;
        allowMapsUser: boolean;
        allowNotification: boolean;
        allowThawanyCash: boolean;
        userAdvert: boolean;  
}