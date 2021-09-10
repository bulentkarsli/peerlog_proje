import * as actionTypes from "./actionTypes"
import linkler from "../../strings/backendLinkler"
import * as commonActions from "./commonActions"

const kisiLink = linkler.backEndEndPoint + linkler.kutuphaneKisi;
const tumunuGetirLink = kisiLink + linkler.tumunuGetir;
const idyeGoreGetirLink = kisiLink + linkler.idyeGoreGetir;
const updateLink = kisiLink + linkler.guncelle;
const deleteLink = kisiLink + linkler.sil;
const addLink = kisiLink + linkler.kaydet;

export function getKisiSuccess(kisi) {
    return {type: actionTypes.GET_KISI_SUCCESS, payload: kisi}
}

export function getKisilerSuccess(kisi) {
    return {type: actionTypes.GET_KISILER_SUCCESS, payload: kisi}
}
export function deleteKisiSuccess(kisi) {
    return {type: actionTypes.DELETE_KISI_SUCCESS, payload: kisi}
}

export function updateKisiSuccess(kisi) {
    return {type: actionTypes.UPDATE_KISI_SUCCESS, payload: kisi}
}

export function addKisiSuccess(kisi) {
    return {type: actionTypes.ADD_KISI_SUCCESS, payload: kisi}
}

export function updateKisi(kisi) {
    return commonActions.defaultPutApiCaller(updateLink, updateKisiSuccess, kisi)
}

export function addKisi(kisi) {
    return commonActions.defaultPostApiCaller(addLink, addKisiSuccess, kisi)
}

export function deleteKisi(kisi) {
    return commonActions.defaultDeleteApiCaller(deleteLink, deleteKisiSuccess, kisi)
}

export function getKisi(id) {
    return commonActions.defaultGetApiCaller(idyeGoreGetirLink + id, getKisiSuccess);
}
export function getAllKisiler() {
    return commonActions.defaultGetApiCaller(tumunuGetirLink, getKisilerSuccess);
}