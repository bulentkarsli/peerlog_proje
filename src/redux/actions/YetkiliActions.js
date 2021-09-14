import * as actionTypes from "./actionTypes"
import linkler from "../../strings/backendLinkler.json"
import * as commonActions from "./commonActions"

const yetkiliLink = linkler.backEndEndPoint + linkler.kutuphaneKisi;
const idyeGoreGetirLink = yetkiliLink + linkler.idyeGoreGetir;


export function getYetkiliSuccess(yetkili) {
    return {type: actionTypes.GET_KISI_SUCCESS, payload: yetkili}
}

export function getYetkili(id) {
    return commonActions.defaultGetApiCaller(idyeGoreGetirLink + id, getYetkiliSuccess());
}

