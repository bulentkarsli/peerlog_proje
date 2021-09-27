import * as actionTypes from "./actionTypes"
import linkler from "../../strings/backendLinkler.json"

const kisiLink = linkler.backEndEndPoint + linkler.kisi;
const aktifKisiLink = linkler.backEndEndPoint + linkler.aktifKisi;
const tumunuGetirLink = kisiLink + linkler.tumunuGetir;
const kaydetLink = aktifKisiLink + linkler.kaydet;
const silLink = kisiLink + linkler.sil;
const guncelleLink = aktifKisiLink + linkler.guncelle;
const yetkiliLink = linkler.backEndEndPoint + linkler.yetkili;
const girisControlLink = yetkiliLink + linkler.girisControl;
// const idyeGoreGetirLink = kisiLink + linkler.idyeGoreGetir;
// const updateLink = kisiLink + linkler.guncelle;
// const deleteLink = kisiLink + linkler.sil;
// const addLink = kisiLink + linkler.kaydet;



export function getKisilerSuccess(kisiler) {
    return {type: actionTypes.GET_KISILER_SUCCESS, payload: kisiler}
}

export function addKisiSuccess(kisi) {
    return {type: actionTypes.ADD_KISI_SUCCESS, payload: kisi}
}

export function updateKisiSuccess(kisi) {
    return {type: actionTypes.UPDATE_KISI_SUCCESS, payload: kisi}
}

export function deleteKisiSuccess(kisi) {
    return {type: actionTypes.DELETE_KISI_SUCCESS, payload: kisi}
}

export function addKisi(kisi) {
    let obj = {
        "adi": kisi.adi,
        "soyadi":kisi.soyadi,
        "cepTel":kisi.cepTel,
        "mail":kisi.mail,
        "tcKimlikNo":kisi.tcKimlikNo,
        "statu":kisi.statu,
        "departman":kisi.departman,
    }
    return function (dispatch){
        fetch(kaydetLink, { //http://10.0.254.83:8080/api/kisi/kaydet
            method: 'POST', // or 'PUT'
            headers: {
                "Access-Control-Allow-Origin" : "*",
                "Content-Type" : "application/json",
            },
            body:JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(result => dispatch(addKisiSuccess(result.data)));
    }
    //return commonActions.defaultPostApiCaller(addLink, addKisiSuccess, kisi)
}

export function updateKisi(kisi) {
    let obj = {
        "id":kisi.id,
        "adi": kisi.adi,
        "soyadi":kisi.soyadi,
        "cepTel":kisi.cepTel,
        "mail":kisi.mail,
        "tcKimlikNo":kisi.tcKimlikNo,
        "statu":kisi.statu,
        "departman":kisi.departman,
    }
    return function (dispatch){
        fetch(guncelleLink, {
            method: 'PUT',
            headers: {
                "Access-Control-Allow-Origin" : "*",
                "Content-Type" : "application/json",
            },
            body:JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(result => dispatch(updateKisiSuccess(result.data)));
    }
    // return commonActions.defaultPutApiCaller(updateLink, updateKisiSuccess, kisi)
}

export function deleteKisi(kisi) {
    return function (dispatch){
        fetch(silLink + kisi.id, { //'http://localhost:8080/api/kisi/sil/'
            method: 'DELETE',
            headers: {
                "Access-Control-Allow-Origin" : "*",
                "Content-Type" : "application/json",
            }
        })
            .then(response => response.json())
            .then(result => dispatch(deleteKisiSuccess(result.data)));
    }
    // return commonActions.defaultDeleteApiCaller(deleteLink, deleteKisiSuccess, kisi)
}

export function getAllKisiler() {
    return function (dispatch){
        fetch(tumunuGetirLink, { //http://10.0.254.83:8080/api/kisi/tumunu-getir
            method: 'GET', // or 'PUT'
            headers: {
                "Access-Control-Allow-Origin" : "*",
                "Content-Type" : "application/json",
            }
        })
            .then(response => response.json())
            .then(result => dispatch(getKisilerSuccess(result.data)));
    }
    // return commonActions.defaultGetApiCaller(tumunuGetirLink, getKisilerSuccess);
}

export function getKisiSuccess(kisi) {
    return {type: actionTypes.GET_KISI_SUCCESS, payload: kisi}
}
//
// export function getKisi(id) {
//     return commonActions.defaultGetApiCaller(idyeGoreGetirLink + id, getKisiSuccess);
// }

