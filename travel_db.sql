-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 24 Nov 2023 pada 09.08
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `travel_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `table_boking`
--

CREATE TABLE `table_boking` (
  `id_boking` int(11) NOT NULL,
  `date_boking` varchar(50) NOT NULL,
  `status_destination` varchar(50) NOT NULL,
  `destination_id` int(100) NOT NULL,
  `user_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `table_boking`
--

INSERT INTO `table_boking` (`id_boking`, `date_boking`, `status_destination`, `destination_id`, `user_id`) VALUES
(2, '16 november 2023', 'berjalan', 1, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `table_destination`
--

CREATE TABLE `table_destination` (
  `id_destination` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `price` int(30) NOT NULL,
  `date` varchar(30) NOT NULL,
  `kategori` varchar(20) NOT NULL,
  `description` varchar(80) NOT NULL,
  `image` varchar(80) NOT NULL,
  `facilities` varchar(100) NOT NULL,
  `kuota` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `table_destination`
--

INSERT INTO `table_destination` (`id_destination`, `title`, `price`, `date`, `kategori`, `description`, `image`, `facilities`, `kuota`) VALUES
(1, 'bali', 200000, '20 november 2023', 'recomended', '', '', '', 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `table_history`
--

CREATE TABLE `table_history` (
  `history_id` int(11) NOT NULL,
  `user_id` int(200) NOT NULL,
  `username` varchar(50) NOT NULL,
  `date_booking` varchar(50) NOT NULL,
  `status_destination` varchar(50) NOT NULL,
  `destination_id` int(200) NOT NULL,
  `title` varchar(50) NOT NULL,
  `price` int(225) NOT NULL,
  `action_type` varchar(50) NOT NULL,
  `action_date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `lokasi` varchar(30) NOT NULL,
  `bio` varchar(50) NOT NULL,
  `sampul_bg` varchar(30) NOT NULL,
  `image_profile` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone_number` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id_user`, `username`, `lokasi`, `bio`, `sampul_bg`, `image_profile`, `email`, `phone_number`) VALUES
(1, 'satu', '', 'bio', 'sampul', 'profile', 'nifdvropnvopw', '8383836');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `table_boking`
--
ALTER TABLE `table_boking`
  ADD PRIMARY KEY (`id_boking`);

--
-- Indeks untuk tabel `table_destination`
--
ALTER TABLE `table_destination`
  ADD PRIMARY KEY (`id_destination`);

--
-- Indeks untuk tabel `table_history`
--
ALTER TABLE `table_history`
  ADD PRIMARY KEY (`history_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `table_boking`
--
ALTER TABLE `table_boking`
  MODIFY `id_boking` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `table_destination`
--
ALTER TABLE `table_destination`
  MODIFY `id_destination` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `table_history`
--
ALTER TABLE `table_history`
  MODIFY `history_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
