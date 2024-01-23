// dateFormatter.js

export function formatTanggal(inputTanggal) {
  var tanggalObj = new Date(inputTanggal);

  // Pastikan tanggal, bulan, dan tahun adalah angka dan valid
  if (isNaN(tanggalObj.getDate()) || isNaN(tanggalObj.getMonth()) || isNaN(tanggalObj.getFullYear())) {
    return 'Format tanggal tidak valid';
  }

  var namaBulan = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  var tanggal = tanggalObj.getDate();
  var bulan = namaBulan[tanggalObj.getMonth()];
  var tahun = tanggalObj.getFullYear();

  var hasilFormat = `${tanggal}-${bulan}-${tahun}`;
  return hasilFormat;
}


