export interface Status {
    loading: boolean;
    error: boolean;
    success: boolean;
    errorMessage: string;
}

export interface Pages {
    thisPage: number,
    prevPage: number,
    nextPage: number,
    totalPages: number
}


export interface Dilog {
    openDelete: boolean;
    openEdit: boolean;
    openAdd?: boolean;
    Id: string;
}