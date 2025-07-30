-- Sample data for testing the database schema
-- Database: PostgreSQL

-- Insert sample estados
INSERT INTO "ESTADOS" ("NOMBRE") VALUES 
('Tabasco'),
('Veracruz'),
('Yucatán'),
('Campeche'),
('Chiapas');

-- Insert sample municipios
INSERT INTO "MUNICIPIOS" ("ID_ESTADO", "NOMBRE") VALUES 
(1, 'Centro'),
(1, 'Cárdenas'),
(1, 'Comalcalco'),
(2, 'Veracruz'),
(2, 'Boca del Río'),
(3, 'Mérida'),
(3, 'Progreso');

-- Insert sample ciudades
INSERT INTO "CIUDADES" ("ID_MUNICIPIO", "NOMBRE") VALUES 
(1, 'Villahermosa'),
(2, 'Heroica Cárdenas'),
(3, 'Comalcalco'),
(4, 'Puerto de Veracruz'),
(5, 'Boca del Río'),
(6, 'Mérida'),
(7, 'Progreso de Castro');

-- Insert sample localidades
INSERT INTO "LOCALIDADES" ("ID_CIUDAD", "NOMBRE") VALUES 
(1, 'Centro Histórico'),
(1, 'Casa Blanca'),
(1, 'Atasta'),
(2, 'Centro'),
(3, 'Centro'),
(4, 'Centro Histórico'),
(5, 'Riviera'),
(6, 'Centro Histórico'),
(7, 'Centro');

-- Insert sample direcciones
INSERT INTO "DIRECCIONES" ("ID_LOCALIDAD", "CALLER", "CODIGO_POSTAL", "NUMERO_EXTERIOR", "NUMERO_INTERIOR") VALUES 
(1, 'Av. 27 de Febrero', '86000', '123', NULL),
(2, 'Calle Reforma', '86035', '456', 'A'),
(3, 'Boulevard Adolfo Ruiz Cortines', '86040', '789', NULL),
(4, 'Calle Hidalgo', '24200', '321', NULL),
(5, 'Av. Comalcalco', '86300', '654', 'B');

-- Insert sample usuarios
INSERT INTO "USUARIOS" ("NOMBRE", "CONTRASENA", "CORREO", "FECHA_CREACION", "FECHA_ACTUALIZACION", "ESTATUS") VALUES 
('Admin Usuario', '$2b$10$hashedpassword1', 'admin@prestamos.com', NOW(), NOW(), true),
('Juan Pérez Operador', '$2b$10$hashedpassword2', 'juan.perez@prestamos.com', NOW(), NOW(), true),
('María González Supervisor', '$2b$10$hashedpassword3', 'maria.gonzalez@prestamos.com', NOW(), NOW(), true);

-- Insert sample clientes
INSERT INTO "CLIENTES" ("ID_DIRECCION", "ID_USUARIO", "NOMBRE", "APELLIDO_PATERNO", "APELLIDO_MATERNO", "RFC", "INE", "COMPROBANTE_DOMICILIO", "CURP", "FECHA_NACIMIENTO", "CORREO", "TELEFONO", "FECHA_CREACION", "FECHA_ACTUALIZACION", "ESTATUS") VALUES 
(1, 2, 'Carlos', 'Rodríguez', 'López', 'ROLC850315H98', 'INE123456789', 'comp_domicilio_001.pdf', 'ROLC850315HTCBPR05', '1985-03-15', 'carlos.rodriguez@email.com', '9931234567', NOW(), NOW(), true),
(2, 2, 'Ana', 'Martínez', 'García', 'MAGA900720M15', 'INE987654321', 'comp_domicilio_002.pdf', 'MAGA900720MTCRRC08', '1990-07-20', 'ana.martinez@email.com', '9937654321', NOW(), NOW(), true),
(3, 3, 'Luis', 'Hernández', 'Jiménez', 'HEJL880512H76', 'INE555666777', 'comp_domicilio_003.pdf', 'HEJL880512HTCRRS09', '1988-05-12', 'luis.hernandez@email.com', '9935556666', NOW(), NOW(), true);

-- Insert sample metodos de pago
INSERT INTO "METODO_PAGO" ("NOMBRE", "STATUS") VALUES 
('Efectivo', true),
('Transferencia Bancaria', true),
('Tarjeta de Débito', true),
('Tarjeta de Crédito', true),
('Cheque', false);

-- Insert sample prestamos
INSERT INTO "PRESTAMOS" ("ID_CLIENTE", "ID_USUARIO", "MONTO", "FECHA_INICIO", "INTERVALO_PAGO", "PAGO_MINIMO", "FECHA_FIN", "TASA", "STATUS", "FECHA_CREACION", "FECHA_ACTUALIZACION") VALUES 
(1, 2, 10000.00, '2024-01-15', '2024-02-15', 500.00, '2024-12-15', 12.5, true, NOW(), NOW()),
(2, 2, 15000.00, '2024-02-01', '2024-03-01', 750.00, '2025-01-01', 15.0, true, NOW(), NOW()),
(3, 3, 8000.00, '2024-03-10', '2024-04-10', 400.00, '2024-12-10', 10.0, true, NOW(), NOW());

-- Insert sample contratos
INSERT INTO "CONTRATOS" ("ID_PRESTAMOS", "URL", "STATUS", "FECHA_CREACION", "FECHA_ACTUALIZACION") VALUES 
(1, 'https://prestamos.com/contratos/contrato_001.pdf', true, NOW(), NOW()),
(2, 'https://prestamos.com/contratos/contrato_002.pdf', true, NOW(), NOW()),
(3, 'https://prestamos.com/contratos/contrato_003.pdf', true, NOW(), NOW());

-- Insert sample pagos
INSERT INTO "PAGOS" ("ID_PRESTAMOS", "ID_METODO_PAGO", "MONTO", "FECHA_PAGO", "STATUS") VALUES 
(1, 1, 500.00, '2024-02-15', true),
(1, 2, 500.00, '2024-03-15', true),
(2, 2, 750.00, '2024-03-01', true),
(3, 1, 400.00, '2024-04-10', true),
(3, 3, 400.00, '2024-05-10', true);

-- Insert sample rol_usuario
INSERT INTO "ROL_USUARIO" ("ID_USUARIO", "STATUS") VALUES 
(1, true),
(2, true),
(3, true);

-- Insert sample roles
INSERT INTO "ROLES" ("ID_ROL_USUARIO", "NOMBRE", "STATUS") VALUES 
(1, 'Administrador', 'activo'),
(2, 'Operador', 'activo'),
(3, 'Supervisor', 'activo');

-- Insert sample rol_permisos
INSERT INTO "ROL_PERMISOS" ("ID_ROL", "STATUS") VALUES 
(1, 'activo'),
(2, 'activo'),
(3, 'activo');

-- Insert sample permisos
INSERT INTO "PERMISOS" ("ID_ROL_PERMISO", "NOMBRE", "STATUS") VALUES 
(1, 'crear_prestamos', true),
(1, 'editar_prestamos', true),
(1, 'eliminar_prestamos', true),
(1, 'ver_prestamos', true),
(1, 'gestionar_usuarios', true),
(2, 'crear_prestamos', true),
(2, 'ver_prestamos', true),
(3, 'ver_prestamos', true),
(3, 'aprobar_prestamos', true),
(3, 'gestionar_reportes', true);
