

export function getBase64(file: any, cb: (result: any) => void) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

export function refreshPage() {
    window.location.reload();
}
export function cheackLogin() {
   return  window.localStorage.getItem('token') ? true : false;
}
export function logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('name');
    window.localStorage.removeItem('phone');
    window.localStorage.removeItem('addUsers');
    window.localStorage.removeItem('allPermission');
    window.localStorage.removeItem('allowMapsUser');
    window.localStorage.removeItem('allowNotification');
    window.localStorage.removeItem('allowThawanyCash');
    window.localStorage.removeItem('userAdvert');
    window.location.reload();
}

