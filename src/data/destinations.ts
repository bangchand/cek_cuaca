export interface Coordinate {
  lat: number;
  lng: number;
}

export interface Review {
  id: string;
  username: string;
  avatarUrl?: string;
  rating: number; // 1-5
  comment: string;
  date: string; // ISO string or simple date string
}

export interface Destination {
  id: string;
  namaWisata: string;
  deskripsi: string;
  alamat: string;
  titik: Coordinate;
  kodeProv: string;
  kodeKota: string;
  kodeKec: string;
  kodeKel: string;
  imageUrl?: string;
  ratings: number[]; // Array of past rating scores to calculate average
  reviews: Review[];
  lokasiSingkat?: string; // e.g., "Sembalun"
  cuacaStatus?: string; // e.g., "Cerah"
  reviewCountText?: string; // e.g., "5,3rb ulasan"
  adm4?: string; // BMKG API area code (e.g. 31.71.03.1001)
}

export const staticDestinations: Destination[] = [
  {
    id: "dest-011",
    namaWisata: "Anak Dara",
    deskripsi: "Bukit di Sembalun dengan pemandangan sunrise yang spektakuler dan savana hijau luas.",
    alamat: "Sembalun, Lombok Timur",
    titik: { lat: -8.3512, lng: 116.5244 },
    kodeProv: "52",
    kodeKota: "03",
    kodeKec: "03",
    kodeKel: "2001",
    imageUrl: "/destinations/anakdara.png",
    ratings: [5,5,4,5,4,5],
    reviews: [
      { id: "rev-012", username: "Adi", rating: 5, comment: "Tempat yang luar biasa!", date: "2026-03-01" }
    ],
    lokasiSingkat: "Sembalun",
    cuacaStatus: "Cerah",
    reviewCountText: "5,3rb ulasan"
  },

  {
    id: "dest-004",
    namaWisata: "Gunung Rinjani",
    deskripsi: "Gunung berapi tertinggi kedua di Indonesia dengan pemandangan Danau Segara Anak yang sangat indah.",
    alamat: "Sembalun, Lombok Timur",
    titik: { lat: -8.4113, lng: 116.4573 },
    kodeProv: "52",
    kodeKota: "03",
    kodeKec: "03",
    kodeKel: "2001",
    imageUrl: "/destinations/rinjani.png",
    ratings: [5,4,5,5,5],
    reviews: [
      {
        id: "rev-005",
        username: "Rizky Pratama",
        rating: 5,
        comment: "Pendakian yang luar biasa! View Segara Anak tidak ada tandingannya.",
        date: "2026-02-10"
      }
    ],
    lokasiSingkat: "Lombok",
    cuacaStatus: "Berawan",
    reviewCountText: "10rb ulasan"
  },

  {
    id: "dest-005",
    namaWisata: "Dataran Tinggi Dieng",
    deskripsi: "Dataran tinggi vulkanik dengan banyak candi kuno, telaga warna, dan fenomena kawah aktif.",
    alamat: "Dieng, Wonosobo",
    titik: { lat: -7.2057, lng: 109.9064 },
    kodeProv: "33",
    kodeKota: "07",
    kodeKec: "01",
    kodeKel: "2006",
    imageUrl: "/destinations/dieng.png",
    ratings: [5,4,4,5],
    reviews: [
      {
        id: "rev-006",
        username: "Agus Setiawan",
        rating: 4,
        comment: "Udara sangat dingin tapi pemandangannya luar biasa.",
        date: "2026-01-12"
      }
    ],
    lokasiSingkat: "Wonosobo",
    cuacaStatus: "Hujan Ringan",
    reviewCountText: "3,5rb ulasan"
  },

  {
    id: "dest-006",
    namaWisata: "Danau Toba",
    deskripsi: "Danau vulkanik terbesar di dunia dengan Pulau Samosir di tengahnya.",
    alamat: "Parapat, Sumatera Utara",
    titik: { lat: 2.6845, lng: 98.8756 },
    kodeProv: "12",
    kodeKota: "09",
    kodeKec: "08",
    kodeKel: "1001",
    imageUrl: "/destinations/toba.png",
    ratings: [5,5,5,4],
    reviews: [
      {
        id: "rev-007",
        username: "Maria Simanjuntak",
        rating: 5,
        comment: "Pemandangan danau terbesar yang pernah saya lihat.",
        date: "2026-02-05"
      }
    ],
    lokasiSingkat: "Samosir",
    cuacaStatus: "Cerah",
    reviewCountText: "8,2rb ulasan"
  },

  {
    id: "dest-007",
    namaWisata: "Labuan Bajo",
    deskripsi: "Gerbang menuju Taman Nasional Komodo dengan laut biru dan pulau eksotis.",
    alamat: "Labuan Bajo, Manggarai Barat",
    titik: { lat: -8.4967, lng: 119.8877 },
    kodeProv: "53",
    kodeKota: "15",
    kodeKec: "01",
    kodeKel: "1002",
    imageUrl: "/destinations/labuanbajo.png",
    ratings: [5,5,4,5],
    reviews: [
      {
        id: "rev-008",
        username: "Kevin Hartono",
        rating: 5,
        comment: "Sunset terbaik di Indonesia!",
        date: "2026-03-02"
      }
    ],
    lokasiSingkat: "Flores",
    cuacaStatus: "Cerah",
    reviewCountText: "12rb ulasan"
  },

  {
    id: "dest-008",
    namaWisata: "Pantai Pink",
    deskripsi: "Pantai unik dengan pasir berwarna merah muda yang langka di dunia.",
    alamat: "Komodo, Manggarai Barat",
    titik: { lat: -8.6526, lng: 119.5364 },
    kodeProv: "53",
    kodeKota: "15",
    kodeKec: "02",
    kodeKel: "2001",
    imageUrl: "/destinations/pinkbeach.png",
    ratings: [5,5,4],
    reviews: [
      {
        id: "rev-009",
        username: "Linda Putri",
        rating: 5,
        comment: "Pasirnya benar-benar pink, sangat unik!",
        date: "2026-02-18"
      }
    ],
    lokasiSingkat: "Komodo",
    cuacaStatus: "Cerah",
    reviewCountText: "6,4rb ulasan"
  },

  {
    id: "dest-009",
    namaWisata: "Taman Nasional Bromo Tengger Semeru",
    deskripsi: "Taman nasional dengan gunung aktif dan lautan pasir yang luas.",
    alamat: "Sukapura, Probolinggo",
    titik: { lat: -8.1080, lng: 112.9220 },
    kodeProv: "35",
    kodeKota: "13",
    kodeKec: "05",
    kodeKel: "2006",
    imageUrl: "/destinations/semeru.png",
    ratings: [5,5,4,5],
    reviews: [
      {
        id: "rev-010",
        username: "Fajar Nugroho",
        rating: 5,
        comment: "Pendakian Semeru sangat menantang tapi indah.",
        date: "2026-01-25"
      }
    ],
    lokasiSingkat: "Bromo",
    cuacaStatus: "Cerah",
    reviewCountText: "15rb ulasan"
  },

  {
    id: "dest-010",
    namaWisata: "Pantai Tanjung Aan",
    deskripsi: "Pantai berpasir putih dengan air laut jernih dan bukit di sekitarnya.",
    alamat: "Kuta, Lombok Tengah",
    titik: { lat: -8.9093, lng: 116.3180 },
    kodeProv: "52",
    kodeKota: "02",
    kodeKec: "06",
    kodeKel: "2001",
    imageUrl: "/destinations/tanjungaan.png",
    ratings: [5,4,5,5],
    reviews: [
      {
        id: "rev-011",
        username: "Nur Aisyah",
        rating: 5,
        comment: "Pantai paling bersih yang pernah saya kunjungi.",
        date: "2026-02-21"
      }
    ],
    lokasiSingkat: "Kuta",
    cuacaStatus: "Cerah Berawan",
    reviewCountText: "4,2rb ulasan"
  }
  ];
