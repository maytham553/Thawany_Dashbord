interface IEndpoints {
        admins: {
                get: string;
                post: string;
                put: (id: string) => string;
                getById: (id: string) => string;
                delete: (id: string) => string;
        };
        advs: {
                get: string;
                post: string;
                put: (id: string) => string;
                getById: (id: string) => string;
                delete: (id: string) => string;
        };
        file: {
                post: string;
        };
        users: {
                get: string;
                post: string;
                put: string;
                getById: (id: string) => string;
                delete: (id: string) => string;
                getOtp: string;
                tags: {
                        activeById: (id: string) => string;
                        getById: (id: string) => string;
                };
                frends: {
                        get: string;
                        post: (id: string) => string;
                        delete: (id: string) => string;
                }
                socialAccounts: {
                        get: string;
                        post: string;
                        put: (id: string) => string;
                        delete: (id: string) => string;
                }
        };

}

const baseUrl = "https://thawany.me/";
function makeEndpoint(route: string): string {
        return `${baseUrl}${route}`
}

function makeEndpointWithData(route: string, date: any): string {
        return `${baseUrl}${route}${"/"}${date}`
}


export const Endpoint: IEndpoints = {
        admins: {
                get: makeEndpoint("Admin"),
                post: makeEndpoint("Admin"),
                put: (id: string) => makeEndpointWithData("Admin", id),
                getById: (id: string) => makeEndpointWithData("Admin", id),
                delete: (id: string) => makeEndpointWithData("Admin", id)
        },
        advs: {
                get: makeEndpoint("Adv"),
                post: makeEndpoint("Adv"),
                put: (id: string) => makeEndpointWithData("Adv", id),
                getById: (id: string) => makeEndpointWithData("Adv", id),
                delete: (id: string) => makeEndpointWithData("Adv", id)
        },
        file: {
                post: makeEndpoint("File")
        },
        users: {
                get: makeEndpoint("User"),
                post: makeEndpoint("User"),
                put: makeEndpoint("User"),
                getById: (id: string) => makeEndpointWithData("User", id),
                delete: (id: string) => makeEndpointWithData("User", id),
                getOtp: makeEndpoint("User/Otp"),
                tags: {
                        activeById: (id: string) => makeEndpointWithData("User/Activate", id),
                        getById: (id: string) => makeEndpointWithData("User/Scan", id)
                },
                frends: {
                        get: makeEndpoint("User/Friends"),
                        post: (id: string) => makeEndpointWithData("User/Friends", id),
                        delete: (id: string) => makeEndpointWithData("User/Friends", id),
                },
                socialAccounts: {
                        get: makeEndpoint("User/SocialAcounts"),
                        post: makeEndpoint("User/SocialAcounts"),
                        put: (id: string) => makeEndpointWithData("User/SocialAcounts", id),
                        delete: (id: string) => makeEndpointWithData("User/SocialAcounts", id),
                }
        }

}