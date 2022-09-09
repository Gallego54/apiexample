-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-09-2022 a las 22:38:43
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `apiusage_01`
--
use apiusage_01;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dataexample`
--

CREATE TABLE `dataexample` (
  `ID` int(11) NOT NULL,
  `data` varchar(264) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `dataexample`
--

INSERT INTO `dataexample` (`ID`, `data`) VALUES
(1, 'hi, my first api crud'),
(2, 'holaaa'),
(3, 'holaaa'),
(4, 'holaaa'),
(5, 'asdasd'),
(6, 'asdasd'),
(8, 'asdaasdasdsd'),
(9, 'asdaasdasdsd');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `dataexample`
--
ALTER TABLE `dataexample`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `dataexample`
--
ALTER TABLE `dataexample`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
