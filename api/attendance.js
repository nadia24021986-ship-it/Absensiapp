export default async function handler(req, res) {
  // CORS header agar bisa diakses dari frontend
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Menangani permintaan
  if (req.method === 'POST') {
    return res.status(200).json({ 
      status: "success", 
      message: "Data absensi diterima di server!",
      receivedAt: new Date().toLocaleString()
    });
  }

  // Jika diakses via browser (GET)
  return res.status(200).json({ 
    status: "ok", 
    message: "API Absensi Aktif" 
  });
}
