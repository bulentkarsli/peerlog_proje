import * as actionTypes from "./actionTypes"
import linkler from "../../strings/backendLinkler.json"

const kisiLink = linkler.backEndEndPoint + linkler.kisi;
const aktifKisiLink = linkler.backEndEndPoint + linkler.aktifKisi;
const tumunuGetirLink = kisiLink + linkler.tumunuGetir;
const kaydetLink = aktifKisiLink + linkler.kaydet;
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

export function addKisi(kisi) {
    console.log(kisi)
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
        fetch('http://localhost:8080/api/aktifKisi/kaydet', { //http://10.0.254.83:8080/api/kisi/tumunu-getir
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


export function getAllKisiler() {
    return function (dispatch){
        fetch('http://localhost:8080/api/kisi/tumunu-getir', { //http://10.0.254.83:8080/api/kisi/tumunu-getir
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

// export function getKisiSuccess(kisi) {
//     return {type: actionTypes.GET_KISI_SUCCESS, payload: kisi}
// }
//
// export function deleteKisiSuccess(kisi) {
//     return {type: actionTypes.DELETE_KISI_SUCCESS, payload: kisi}
// }
//
// export function updateKisiSuccess(kisi) {
//     return {type: actionTypes.UPDATE_KISI_SUCCESS, payload: kisi}
// }
//
// export function updateKisi(kisi) {
//     return commonActions.defaultPutApiCaller(updateLink, updateKisiSuccess, kisi)
// }
//
// export function deleteKisi(kisi) {
//     return commonActions.defaultDeleteApiCaller(deleteLink, deleteKisiSuccess, kisi)
// }
//
// export function getKisi(id) {
//     return commonActions.defaultGetApiCaller(idyeGoreGetirLink + id, getKisiSuccess);
// }

