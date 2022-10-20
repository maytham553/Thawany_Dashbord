export interface IAdmin {
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

export interface IStatus {
        loading: boolean;
        error: boolean;
        success: boolean;
        errorMessage: string;
}
