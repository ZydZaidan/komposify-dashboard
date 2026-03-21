# komposify-dashboard
Dashboard for Komposify, built with React and Tailwind (PKMKC2026)

# Komposify: IoT-Based Smart Composting System

[cite_start]**Komposify** adalah solusi manajemen limbah organik rumah tangga pintar yang mengintegrasikan teknologi IoT untuk mempercepat proses dekomposisi menjadi "Emas Hijau"[cite: 1, 2]. [cite_start]Proyek ini dikembangkan untuk program **PKM-KC 2026** oleh mahasiswa **ITPLN Jakarta**[cite: 3, 14].

## Key Features
- [cite_start]**Real-time Monitoring**: Memantau Suhu ($30^{\circ}C-35^{\circ}C$), Kelembapan ($50\%-60\%$), dan pH ($6.8-7.5$) secara akurat[cite: 74, 80].
- [cite_start]**Automated Control**: Pengendalian otomatis kipas, pompa, dan pengaduk berdasarkan parameter sensor[cite: 151].
- [cite_start]**Sustainable Energy**: Beroperasi mandiri menggunakan Panel Surya 100 Wp dan Baterai LiFePO4[cite: 84, 111].
- [cite_start]**Web Dashboard**: Antarmuka responsif untuk pemantauan jarak jauh melalui protokol IoT[cite: 92, 97].

## 🛠️ Tech Stack
- **Frontend**: React.js, Tailwind CSS (v4), Vite.
- [cite_start]**Hardware**: ESP32, DS18B20 (Suhu), Soil Moisture Sensor, Analog pH Sensor[cite: 111, 177].
- [cite_start]**Connectivity**: MQTT / HTTP REST API (Blynk Integration)[cite: 92].

## 📦 Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/username/komposify-dashboard.git](https://github.com/username/komposify-dashboard.git)
