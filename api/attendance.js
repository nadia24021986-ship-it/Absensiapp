export default async function handler(req, res) {
  // Mengizinkan akses dari mana saja
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Menangani permintaan POST
  if (req.method === 'POST') {
    return res.status(200).json({ 
      status: "success", 
      message: "Data absensi berhasil diterima oleh server!",
      timestamp: new Date().toISOString()
    });
  }

  // Menangani permintaan GET
  return res.status(200).json({ 
    status: "success", 
    message: "API Absensi Aktif dan Berjalan Normal" 
  });
}

