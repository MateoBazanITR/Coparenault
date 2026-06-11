CREATE TABLE `roles` (
  `id_rol` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(50) UNIQUE NOT NULL
);

CREATE TABLE `usuarios` (
  `id_usuario` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `email` varchar(150) UNIQUE NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `telefono` varchar(20),
  `fecha_registro` datetime,
  `ultimo_login` datetime,
  `verificado` boolean DEFAULT false,
  `token_verificacion` varchar(255),
  `estado` enum(activo,pendiente,suspendido),
  `id_rol` int NOT NULL,
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `sesiones` (
  `id_sesion` int PRIMARY KEY AUTO_INCREMENT,
  `id_usuario` int,
  `token` varchar(255),
  `fecha_inicio` datetime,
  `fecha_expiracion` datetime,
  `ip` varchar(45)
);

CREATE TABLE `deportes` (
  `id_deporte` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(255)
);

CREATE TABLE `entrenadores` (
  `id_entrenador` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(100),
  `apellido` varchar(100),
  `telefono` varchar(20),
  `email` varchar(150)
);

CREATE TABLE `equipos` (
  `id_equipo` int PRIMARY KEY AUTO_INCREMENT,
  `nombre_equipo` varchar(100) NOT NULL,
  `ciudad` varchar(100),
  `categoria` varchar(50),
  `institucion` varchar(200),
  `logo` varchar(255),
  `fecha_inscripcion` datetime,
  `estado` enum(pendiente,aprobado,rechazado),
  `id_usuario` int,
  `id_entrenador` int,
  `id_deporte` int,
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `jugadores` (
  `id_jugador` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `dni` varchar(20),
  `email` varchar(150),
  `telefono` varchar(20),
  `edad` int,
  `posicion` varchar(50),
  `numero_camiseta` int,
  `nacionalidad` varchar(50),
  `altura` decimal(4,2),
  `apto_medico` boolean,
  `id_equipo` int,
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `arbitros` (
  `id_arbitro` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(100),
  `apellido` varchar(100),
  `telefono` varchar(20),
  `email` varchar(150)
);

CREATE TABLE `partidos` (
  `id_partido` int PRIMARY KEY AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `cancha` varchar(50),
  `puntaje_equipo_1` int DEFAULT 0,
  `puntaje_equipo_2` int DEFAULT 0,
  `estado` enum(pendiente,en_juego,finalizado,cancelado),
  `ronda` varchar(50),
  `observaciones` text,
  `equipo_1` int NOT NULL,
  `equipo_2` int NOT NULL,
  `id_arbitro` int,
  `id_deporte` int,
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `posiciones` (
  `id_posicion` int PRIMARY KEY AUTO_INCREMENT,
  `id_equipo` int,
  `partidos_jugados` int DEFAULT 0,
  `victorias` int DEFAULT 0,
  `derrotas` int DEFAULT 0,
  `empates` int DEFAULT 0,
  `puntos` int DEFAULT 0
);

CREATE TABLE `eventos` (
  `id_evento` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(100),
  `descripcion` text,
  `fecha` date,
  `hora` time,
  `lugar` varchar(100),
  `capacidad` int,
  `estado` enum(activo,cancelado,finalizado)
);

CREATE TABLE `productos_cantina` (
  `id_producto` int PRIMARY KEY AUTO_INCREMENT,
  `nombre_producto` varchar(100),
  `descripcion` varchar(255),
  `precio` decimal(10,2),
  `stock` int,
  `categoria` varchar(50),
  `fecha_ingreso` date,
  `estado` enum(disponible,agotado,inactivo)
);

CREATE TABLE `restricciones_dietarias` (
  `id_restriccion` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(100)
);

CREATE TABLE `producto_restriccion` (
  `id_producto` int,
  `id_restriccion` int
);

CREATE TABLE `reservas_cantina` (
  `id_reserva` int PRIMARY KEY AUTO_INCREMENT,
  `id_usuario` int,
  `fecha` datetime,
  `cantidad_personas` int,
  `estado` enum(pendiente,confirmada,cancelada)
);

CREATE TABLE `sponsors` (
  `id_sponsor` int PRIMARY KEY AUTO_INCREMENT,
  `nombre_empresa` varchar(100),
  `representante` varchar(100),
  `telefono` varchar(20),
  `email` varchar(150),
  `direccion` varchar(200),
  `sitio_web` varchar(255),
  `logo` varchar(255),
  `monto_aporte` decimal(10,2),
  `fecha_contrato` date,
  `tipo_publicidad` varchar(100),
  `nivel_patrocinio` varchar(50)
);

ALTER TABLE `usuarios` ADD FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_rol`);

ALTER TABLE `sesiones` ADD FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

ALTER TABLE `equipos` ADD FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

ALTER TABLE `equipos` ADD FOREIGN KEY (`id_entrenador`) REFERENCES `entrenadores` (`id_entrenador`);

ALTER TABLE `equipos` ADD FOREIGN KEY (`id_deporte`) REFERENCES `deportes` (`id_deporte`);

ALTER TABLE `jugadores` ADD FOREIGN KEY (`id_equipo`) REFERENCES `equipos` (`id_equipo`);

ALTER TABLE `partidos` ADD FOREIGN KEY (`equipo_1`) REFERENCES `equipos` (`id_equipo`);

ALTER TABLE `partidos` ADD FOREIGN KEY (`equipo_2`) REFERENCES `equipos` (`id_equipo`);

ALTER TABLE `partidos` ADD FOREIGN KEY (`id_arbitro`) REFERENCES `arbitros` (`id_arbitro`);

ALTER TABLE `partidos` ADD FOREIGN KEY (`id_deporte`) REFERENCES `deportes` (`id_deporte`);

ALTER TABLE `posiciones` ADD FOREIGN KEY (`id_equipo`) REFERENCES `equipos` (`id_equipo`);

ALTER TABLE `producto_restriccion` ADD FOREIGN KEY (`id_producto`) REFERENCES `productos_cantina` (`id_producto`);

ALTER TABLE `producto_restriccion` ADD FOREIGN KEY (`id_restriccion`) REFERENCES `restricciones_dietarias` (`id_restriccion`);

ALTER TABLE `reservas_cantina` ADD FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);
