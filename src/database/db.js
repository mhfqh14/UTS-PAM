const JADWAL = [
    {
    jadwal_id : '01',
    kode_pelabuhan_awal:"Mrk",
    kode_pelabuhan_tujuan:"Bkh",
    jenis_layanan:"Rgl",
    tanggal_berangkat:"7 Maret 2022",
    jam_berangkat: "7"
    },
    {
    jadwal_id : '02',
    kode_pelabuhan_awal:"Mrk",
    kode_pelabuhan_tujuan:"Bkh",
    jenis_layanan:"Exp",
    tanggal_berangkat:"7 Maret 2022",
    jam_berangkat: "8"
    },
    {
    jadwal_id : '03',
    kode_pelabuhan_awal:"Bkh",
    kode_pelabuhan_tujuan:"Mrk",
    jenis_layanan:"Rgl",
    tanggal_berangkat:"7 Maret 2022",
    jam_berangkat: "7"
    },
    {
    jadwal_id : '04',
    kode_pelabuhan_awal:"Bkh",
    kode_pelabuhan_tujuan:"Mrk",
    jenis_layanan:"Exp",
    tanggal_berangkat:"7 Maret 2022",
    jam_berangkat: "10"
    },
    {
    jadwal_id : '05',
    kode_pelabuhan_awal:"Bkh",
    kode_pelabuhan_tujuan:"Mrk",
    jenis_layanan:"Exp",
    tanggal_berangkat:"7 Maret 2022",
    jam_berangkat:"10"
    },    

]

const LAYANAN = [
    {
        jenis_layanan : "Rgl",
        nama_layanan: "Reguler"
    },
    {
        jenis_layanan : "Exp",
        nama_layanan: "Express"
    },
]

const PELABUHAN = [
    {
        pelabuhan_kode:"Mrk",
        pelabuhan_nama:"Merak"
    },
    {
        pelabuhan_kode:"Bkh",
        pelabuhan_nama:"Bakauheni"
    }
]

export {JADWAL, LAYANAN, PELABUHAN}