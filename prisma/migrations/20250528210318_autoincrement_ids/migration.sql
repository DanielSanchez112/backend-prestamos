-- AlterTable
CREATE SEQUENCE ciudades_id_ciudad_seq;
ALTER TABLE "CIUDADES" ALTER COLUMN "ID_CIUDAD" SET DEFAULT nextval('ciudades_id_ciudad_seq');
ALTER SEQUENCE ciudades_id_ciudad_seq OWNED BY "CIUDADES"."ID_CIUDAD";

-- AlterTable
CREATE SEQUENCE clientes_id_cliente_seq;
ALTER TABLE "CLIENTES" ALTER COLUMN "ID_CLIENTE" SET DEFAULT nextval('clientes_id_cliente_seq');
ALTER SEQUENCE clientes_id_cliente_seq OWNED BY "CLIENTES"."ID_CLIENTE";

-- AlterTable
CREATE SEQUENCE contratos_id_contrato_seq;
ALTER TABLE "CONTRATOS" ALTER COLUMN "ID_CONTRATO" SET DEFAULT nextval('contratos_id_contrato_seq');
ALTER SEQUENCE contratos_id_contrato_seq OWNED BY "CONTRATOS"."ID_CONTRATO";

-- AlterTable
CREATE SEQUENCE direcciones_id_direccion_seq;
ALTER TABLE "DIRECCIONES" ALTER COLUMN "ID_DIRECCION" SET DEFAULT nextval('direcciones_id_direccion_seq');
ALTER SEQUENCE direcciones_id_direccion_seq OWNED BY "DIRECCIONES"."ID_DIRECCION";

-- AlterTable
CREATE SEQUENCE estados_id_estado_seq;
ALTER TABLE "ESTADOS" ALTER COLUMN "ID_ESTADO" SET DEFAULT nextval('estados_id_estado_seq');
ALTER SEQUENCE estados_id_estado_seq OWNED BY "ESTADOS"."ID_ESTADO";

-- AlterTable
CREATE SEQUENCE localidades_id_localidad_seq;
ALTER TABLE "LOCALIDADES" ALTER COLUMN "ID_LOCALIDAD" SET DEFAULT nextval('localidades_id_localidad_seq');
ALTER SEQUENCE localidades_id_localidad_seq OWNED BY "LOCALIDADES"."ID_LOCALIDAD";

-- AlterTable
CREATE SEQUENCE metodo_pago_id_metodo_pago_seq;
ALTER TABLE "METODO_PAGO" ALTER COLUMN "ID_METODO_PAGO" SET DEFAULT nextval('metodo_pago_id_metodo_pago_seq');
ALTER SEQUENCE metodo_pago_id_metodo_pago_seq OWNED BY "METODO_PAGO"."ID_METODO_PAGO";

-- AlterTable
CREATE SEQUENCE municipios_id_municipio_seq;
ALTER TABLE "MUNICIPIOS" ALTER COLUMN "ID_MUNICIPIO" SET DEFAULT nextval('municipios_id_municipio_seq');
ALTER SEQUENCE municipios_id_municipio_seq OWNED BY "MUNICIPIOS"."ID_MUNICIPIO";

-- AlterTable
CREATE SEQUENCE pagos_id_pago_seq;
ALTER TABLE "PAGOS" ALTER COLUMN "ID_PAGO" SET DEFAULT nextval('pagos_id_pago_seq');
ALTER SEQUENCE pagos_id_pago_seq OWNED BY "PAGOS"."ID_PAGO";

-- AlterTable
CREATE SEQUENCE permisos_id_permiso_seq;
ALTER TABLE "PERMISOS" ALTER COLUMN "ID_PERMISO" SET DEFAULT nextval('permisos_id_permiso_seq');
ALTER SEQUENCE permisos_id_permiso_seq OWNED BY "PERMISOS"."ID_PERMISO";

-- AlterTable
CREATE SEQUENCE prestamos_id_prestamo_seq;
ALTER TABLE "PRESTAMOS" ALTER COLUMN "ID_PRESTAMO" SET DEFAULT nextval('prestamos_id_prestamo_seq');
ALTER SEQUENCE prestamos_id_prestamo_seq OWNED BY "PRESTAMOS"."ID_PRESTAMO";

-- AlterTable
CREATE SEQUENCE roles_id_rol_seq;
ALTER TABLE "ROLES" ALTER COLUMN "ID_ROL" SET DEFAULT nextval('roles_id_rol_seq');
ALTER SEQUENCE roles_id_rol_seq OWNED BY "ROLES"."ID_ROL";

-- AlterTable
CREATE SEQUENCE rol_permisos_id_rol_permiso_seq;
ALTER TABLE "ROL_PERMISOS" ALTER COLUMN "ID_ROL_PERMISO" SET DEFAULT nextval('rol_permisos_id_rol_permiso_seq');
ALTER SEQUENCE rol_permisos_id_rol_permiso_seq OWNED BY "ROL_PERMISOS"."ID_ROL_PERMISO";

-- AlterTable
CREATE SEQUENCE rol_usuario_id_rol_usuario_seq;
ALTER TABLE "ROL_USUARIO" ALTER COLUMN "ID_ROL_USUARIO" SET DEFAULT nextval('rol_usuario_id_rol_usuario_seq');
ALTER SEQUENCE rol_usuario_id_rol_usuario_seq OWNED BY "ROL_USUARIO"."ID_ROL_USUARIO";

-- AlterTable
CREATE SEQUENCE usuarios_id_usuario_seq;
ALTER TABLE "USUARIOS" ALTER COLUMN "ID_USUARIO" SET DEFAULT nextval('usuarios_id_usuario_seq');
ALTER SEQUENCE usuarios_id_usuario_seq OWNED BY "USUARIOS"."ID_USUARIO";
