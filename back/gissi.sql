-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 30-08-2023 a las 20:22:06
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gissi`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `promociones`
--

DROP TABLE IF EXISTS `promociones`;
CREATE TABLE IF NOT EXISTS `promociones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `subtitulo` text COLLATE utf8mb4_general_ci NOT NULL,
  `cuerpo` text COLLATE utf8mb4_general_ci NOT NULL,
  `img_id` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `promociones`
--

INSERT INTO `promociones` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Tarifa especial para residentes ', 'Celebre la vida en Hotel New Garden. Disfrute de nuestras tarifas de alojamiento especiales para residentes argentinos. Aproveche sus días en un oasis en el medio del corazón de Buenos Aires, relájese en nuestras suites y desconectese.', ' INCLUIDO\r\n\r\nDesayuno buffet\r\nParking\r\n\r\nCONDICIONES\r\n* Los huéspedes deberan presentar su DNI o pasaporte argentino al hacer el check in.   ', 'mo50nsm4wo8iqp87ibdk'),
(2, 'Compra anticipada : Hasta un 20% de descuento', 'Reciba hasta el 20 % de descuento en nuestra tarifa de habitación al reservar por anticipado su estadía.La reservación debe realizarse 7 días antes.', ' INCLUIDO\r\n\r\nHasta el 20 % de de descuento en nuestra tarifa de habitación\r\n\r\nCONDICIONES\r\n* Se requiere el pago completo por adelantado, mismo que no es reembolsable, al momento de hacer la reservación.\r\n* No se permite hacer modificaciones a la reservación.\r\n* No se efectuará ningún reembolso por reservaciones canceladas, por salidas anticipadas ni si el huésped no se presenta.  ', 'c2dqjev3gqqiptmmwjpk'),
(15, 'Paquete Relax', 'Celebra un cumpleaños, aniversario o absolutamente nada.', ' Celebra un cumpleaños, aniversario o absolutamente nada.\r\n\r\nEste paquete incluye:\r\n\r\nTrago de bienvenida\r\nMasajes para dos personas\r\nDesayuno en la habitación\r\nTé Imperio para personas\r\nCheck-in temprano a las 12hs, check-out tardío hasta las 16hs\r\nPara reservas, llame al  (+54 11) 4112-8558 . O envíenos un email a reservas@newgarden.com\r\n\r\n*Desde usd 221*', 'jmkd57fdhgw2iph933da');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'barbara', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
