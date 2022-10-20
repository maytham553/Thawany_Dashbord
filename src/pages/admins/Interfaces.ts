export interface IAdmin {
        id?: string
        name: string;
        addUsers: boolean;
        allPermission: boolean;
        allowMapsUser: boolean;
        allowNotification: boolean;
        allowThawanyCash: boolean;
        userAdvert: boolean;
        password: string;
        phone: string;
}

export interface IStatus {
        loading: boolean;
        error: boolean;
        success: boolean;
        errorMessage: string;
}

export interface IAdminForm {
        name: string,
        password: string,
        phone: string,
        addUsers: boolean,
        allPermission: boolean,
        allowMapsUser: boolean,
        allowNotification: boolean,
        allowThawanyCash: boolean,
        userAdvert: boolean,
}