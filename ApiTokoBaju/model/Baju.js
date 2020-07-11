const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    KodeBaju: {
        type: String
    },
    NamaBaju: {
        type: String
    },
    JenisBaju: {
        type: String
    },
    Satuan: {
        type: String
    },
    Stok: {
        type: String
    },
    HargaBaju: {
        type: String
    },
    gambar: {
        type: String
    }
})
module.exports = mongoose.model('obat', userSchema)