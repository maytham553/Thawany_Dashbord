
import  alert, { useAlert }  from 'react-alert'

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
    return window.localStorage.getItem('token') ? true : false;
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

export const addPrefixDependOnCategories = (url: string, type: string):string => {
    switch (type) {
        case 'phone_number':
            return ("tel:" + url)
        case 'snapchat':
            return ("https://www.snapchat.com/add/" + url)
        case 'tiktok':
            return ("https://www.tiktok.com/" + url)
        case 'youtube':
            return ("https://www.youtube.com/@" + url)
        case 'pubg':
            return (url)
        case 'clash royale':
            return (url)
        case 'telegram':
            return ("https://t.me/" + url)
        case 'email':
            return ("mailto:" + url)
        case 'website':
            return ("https://" + url)
        case 'adress':
            return ("https://www.google.com/maps/search/?api=1&query=" + url)
        case 'linkedin':
            return (url)
        case 'custom_link':
            return ("https://" + url)
        case 'file':
            return (url)
        case 'whatsapp':
            return ("https://api.whatsapp.com/send?phone=" + url)
        case 'viber':
            return ("viber://chat?number=" + url)
        case 'skype':
            return (url)
        case 'facebook':
            return (url)
        case 'instagram':
            return ("https://www.instagram.com/"+url)

        default:
            return " ";
    }
}

export function isValidHttpUrl(url: string):boolean {
    let urlObj; 
    try {
        urlObj = new URL(url);
    } catch (_) {
      return false;
    }
    return urlObj.protocol === "http:" || urlObj.protocol === "https:";
}
