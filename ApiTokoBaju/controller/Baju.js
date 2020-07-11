const baju = require('../model/Baju.js')
const response = require('../config/response')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
exports.inputDataBaju = (data, gambar) =>
    new Promise(async (resolve, reject) =>{

        const obatBaju = new baju({
            KodeBaju : data.KodeBaju,
            NamaBaju : data.NamaBaju,
            JenisBaju: data.JenisBaju,
            Satuan: data.Satuan,
            Stok: data.Stok,
            HargaBaju: data.HargaBaju,
            gambar: gambar
        })

        await baju.findOne({KodeObat: data.KodeObat})
            .then(baju =>{
                if (baju){
                    reject(response.commonErrorMsg('Kode Baju Sudah Digunakan'))
                }else{
                    bajuBaru.save()
                        .then(r =>{
                            resolve(response.commonSuccessMsg('Berhasil Menginput Data'))
                        }).catch(err =>{
                        reject(response.commonErrorMsg('Mohon Maaf Input Baju Gagal'))
                    })
                }
            }).catch(err =>{
                reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server kami'))
            })
    })

exports.lihatDataBaju = () =>
    new Promise(async (resolve, reject) =>{
        await baju.find({})
            .then(result =>{
                resolve(response.commonResult(result))
            })
            .catch(()=>reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server kami')))
    })

exports.lihatDetailDataBaju = (KodeBaju) =>
    new Promise(async (resolve, reject) =>{
        await baju.findOne({KodeBaju: KodeBaju})
            .then(result =>{
                resolve(response.commonResult(result))
            })
            .catch(()=>reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server kami')))
    })

exports.updateBaju = (id, data, gambar) =>
    new Promise(async (resolve, reject)=>{
        await baju.updateOne(
            {_id : ObjectId(id)},
            {
                $set: {
                    KodeBaju : data.KodeBaju,
                    NamaBaju : data.NamaBaju,
                    JenisBaju: data.JenisBaju,
                    Satuan: data.Satuan,
                    Stok: data.Stok,
                    HargaBaju: data.HargaBaju,
                    gambar: gambar
                }
            }
        ).then(baju =>{
            resolve(response.commonSuccessMsg('Berhasil Mengubah Data'))
        }).catch(err =>{
            reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server kami'))
        })
    })

exports.hapusbaju = (_id) =>
    new Promise(async (resolve, reject) =>{
        await baju.remove({_id: ObjectId(_id)})
            .then(() =>{
                resolve(response.commonSuccessMsg('Berhasil Menghapus Data'))
            }).catch(() =>{
                reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server kami'))
            })
    })