/*==============================================================*/
/* DBMS name:      Microsoft SQL Server 2012                    */
/* Created on:     21/05/2025 20:11:16                          */
/*==============================================================*/


if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('CIUDADES') and o.name = 'FK_CIUDADES_REFERENCE_MUNICIPI')
alter table CIUDADES
   drop constraint FK_CIUDADES_REFERENCE_MUNICIPI
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('CLIENTES') and o.name = 'FK_CLIENTES_REFERENCE_DIRECCIO')
alter table CLIENTES
   drop constraint FK_CLIENTES_REFERENCE_DIRECCIO
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('CLIENTES') and o.name = 'FK_CLIENTES_REFERENCE_USUARIOS')
alter table CLIENTES
   drop constraint FK_CLIENTES_REFERENCE_USUARIOS
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('CONTRATOS') and o.name = 'FK_CONTRATO_REFERENCE_PRESTAMO')
alter table CONTRATOS
   drop constraint FK_CONTRATO_REFERENCE_PRESTAMO
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('DIRECCIONES') and o.name = 'FK_DIRECCIO_REFERENCE_LOCALIDA')
alter table DIRECCIONES
   drop constraint FK_DIRECCIO_REFERENCE_LOCALIDA
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('LOCALIDADES') and o.name = 'FK_LOCALIDA_REFERENCE_CIUDADES')
alter table LOCALIDADES
   drop constraint FK_LOCALIDA_REFERENCE_CIUDADES
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('MUNICIPIOS') and o.name = 'FK_MUNICIPI_REFERENCE_ESTADOS')
alter table MUNICIPIOS
   drop constraint FK_MUNICIPI_REFERENCE_ESTADOS
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('PAGOS') and o.name = 'FK_PAGOS_REFERENCE_PRESTAMO')
alter table PAGOS
   drop constraint FK_PAGOS_REFERENCE_PRESTAMO
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('PAGOS') and o.name = 'FK_PAGOS_REFERENCE_METODO_P')
alter table PAGOS
   drop constraint FK_PAGOS_REFERENCE_METODO_P
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('PERMISOS') and o.name = 'FK_PERMISOS_REFERENCE_ROL_PERM')
alter table PERMISOS
   drop constraint FK_PERMISOS_REFERENCE_ROL_PERM
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('PRESTAMOS') and o.name = 'FK_PRESTAMO_REFERENCE_CLIENTES')
alter table PRESTAMOS
   drop constraint FK_PRESTAMO_REFERENCE_CLIENTES
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('PRESTAMOS') and o.name = 'FK_PRESTAMO_REFERENCE_USUARIOS')
alter table PRESTAMOS
   drop constraint FK_PRESTAMO_REFERENCE_USUARIOS
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('ROLES') and o.name = 'FK_ROLES_REFERENCE_ROL_USUA')
alter table ROLES
   drop constraint FK_ROLES_REFERENCE_ROL_USUA
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('ROL_PERMISOS') and o.name = 'FK_ROL_PERM_REFERENCE_ROLES')
alter table ROL_PERMISOS
   drop constraint FK_ROL_PERM_REFERENCE_ROLES
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('ROL_USUARIO') and o.name = 'FK_ROL_USUA_REFERENCE_USUARIOS')
alter table ROL_USUARIO
   drop constraint FK_ROL_USUA_REFERENCE_USUARIOS
go

if exists (select 1
            from  sysobjects
           where  id = object_id('CIUDADES')
            and   type = 'U')
   drop table CIUDADES
go

if exists (select 1
            from  sysobjects
           where  id = object_id('CLIENTES')
            and   type = 'U')
   drop table CLIENTES
go

if exists (select 1
            from  sysobjects
           where  id = object_id('CONTRATOS')
            and   type = 'U')
   drop table CONTRATOS
go

if exists (select 1
            from  sysobjects
           where  id = object_id('DIRECCIONES')
            and   type = 'U')
   drop table DIRECCIONES
go

if exists (select 1
            from  sysobjects
           where  id = object_id('ESTADOS')
            and   type = 'U')
   drop table ESTADOS
go

if exists (select 1
            from  sysobjects
           where  id = object_id('LOCALIDADES')
            and   type = 'U')
   drop table LOCALIDADES
go

if exists (select 1
            from  sysobjects
           where  id = object_id('METODO_PAGO')
            and   type = 'U')
   drop table METODO_PAGO
go

if exists (select 1
            from  sysobjects
           where  id = object_id('MUNICIPIOS')
            and   type = 'U')
   drop table MUNICIPIOS
go

if exists (select 1
            from  sysobjects
           where  id = object_id('PAGOS')
            and   type = 'U')
   drop table PAGOS
go

if exists (select 1
            from  sysobjects
           where  id = object_id('PERMISOS')
            and   type = 'U')
   drop table PERMISOS
go

if exists (select 1
            from  sysobjects
           where  id = object_id('PRESTAMOS')
            and   type = 'U')
   drop table PRESTAMOS
go

if exists (select 1
            from  sysobjects
           where  id = object_id('ROLES')
            and   type = 'U')
   drop table ROLES
go

if exists (select 1
            from  sysobjects
           where  id = object_id('ROL_PERMISOS')
            and   type = 'U')
   drop table ROL_PERMISOS
go

if exists (select 1
            from  sysobjects
           where  id = object_id('ROL_USUARIO')
            and   type = 'U')
   drop table ROL_USUARIO
go

if exists (select 1
            from  sysobjects
           where  id = object_id('USUARIOS')
            and   type = 'U')
   drop table USUARIOS
go

/*==============================================================*/
/* Table: CIUDADES                                              */
/*==============================================================*/
create table CIUDADES (
   ID_CIUDAD            integer              not null,
   ID_MUNICIPIO         integer              null,
   NOMBRE               varchar(255)         null,
   constraint PK_CIUDADES primary key (ID_CIUDAD)
)
go

/*==============================================================*/
/* Table: CLIENTES                                              */
/*==============================================================*/
create table CLIENTES (
   ID_CLIENTE           integer              not null,
   ID_DIRECCION         integer              null,
   ID_USUARIO           integer              null,
   NOMBRE               varchar(255)         null,
   APELLIDO_PATERNO     varchar(255)         null,
   APELLIDO_MATERNO     varchar(255)         null,
   RFC                  varchar(255)         null,
   INE                  varchar(255)         null,
   COMPROBANTE_DOMICILIO varchar(255)         null,
   CURP                 varchar(255)         null,
   FECHA_NACIMIENTO     date                 null,
   ESTATUS              bit                  null,
   constraint PK_CLIENTES primary key (ID_CLIENTE)
)
go

/*==============================================================*/
/* Table: CONTRATOS                                             */
/*==============================================================*/
create table CONTRATOS (
   ID_CONTRATO          integer              not null,
   ID_PRESTAMOS         integer              null,
   URL                  varchar(255)         null,
   STATUS               bit                  null,
   constraint PK_CONTRATOS primary key (ID_CONTRATO)
)
go

/*==============================================================*/
/* Table: DIRECCIONES                                           */
/*==============================================================*/
create table DIRECCIONES (
   ID_DIRECCION         integer              not null,
   ID_LOCALIDAD         integer              null,
   CALLER               varchar(255)         null,
   CODIGO_POSTAL        varchar(255)         null,
   NUMERO_EXTERIOR      varchar(255)         null,
   NUMERO_INTERIOR      varchar(255)         null,
   constraint PK_DIRECCIONES primary key (ID_DIRECCION)
)
go

/*==============================================================*/
/* Table: ESTADOS                                               */
/*==============================================================*/
create table ESTADOS (
   ID_ESTADO            int                  not null,
   NOMBRE               varchar(255)         null,
   constraint PK_ESTADOS primary key (ID_ESTADO)
)
go

/*==============================================================*/
/* Table: LOCALIDADES                                           */
/*==============================================================*/
create table LOCALIDADES (
   ID_LOCALIDAD         integer              not null,
   ID_CIUDAD            integer              null,
   NOMBRE               varchar(255)         null,
   constraint PK_LOCALIDADES primary key (ID_LOCALIDAD)
)
go

/*==============================================================*/
/* Table: METODO_PAGO                                           */
/*==============================================================*/
create table METODO_PAGO (
   ID_METODO_PAGO       integer              not null,
   NOMBRE               varchar(255)         null,
   STATUS               bit                  null,
   constraint PK_METODO_PAGO primary key (ID_METODO_PAGO)
)
go

/*==============================================================*/
/* Table: MUNICIPIOS                                            */
/*==============================================================*/
create table MUNICIPIOS (
   ID_MUNICIPIO         integer              not null,
   ID_ESTADO            int                  null,
   NOMBRE               varchar(255)         null,
   constraint PK_MUNICIPIOS primary key (ID_MUNICIPIO)
)
go

/*==============================================================*/
/* Table: PAGOS                                                 */
/*==============================================================*/
create table PAGOS (
   ID_PAGO              integer              not null,
   ID_PRESTAMOS         integer              null,
   ID_METODO_PAGO       integer              null,
   MONTO                float                null,
   FECHA_PAGO           timestamp            null,
   STATUS               bit                  null,
   constraint PK_PAGOS primary key (ID_PAGO)
)
go

/*==============================================================*/
/* Table: PERMISOS                                              */
/*==============================================================*/
create table PERMISOS (
   ID_PERMISO           integer              not null,
   ID_ROL_PERMISO       integer              null,
   NOMBRE               varchar(255)         null,
   STATUS               bit                  null,
   constraint PK_PERMISOS primary key (ID_PERMISO)
)
go

/*==============================================================*/
/* Table: PRESTAMOS                                             */
/*==============================================================*/
create table PRESTAMOS (
   ID_PRESTAMO          integer              not null,
   ID_CLIENTE           integer              null,
   ID_USUARIO           integer              null,
   MONTO                float                null,
   FECHA_INICIO         datetime             null,
   INTERVALO_PAGO       datetime             null,
   PAGO_MINIMO          float                null,
   FECHA_FIN            datetime             null,
   TASA                 real                 null,
   STATUS               bit                  null,
   constraint PK_PRESTAMOS primary key (ID_PRESTAMO)
)
go

/*==============================================================*/
/* Table: ROLES                                                 */
/*==============================================================*/
create table ROLES (
   ID_ROL               integer              not null,
   ID_ROL_USUARIO       integer              null,
   NOMBRE               varchar(255)         null,
   STATUS               varchar(255)         null,
   constraint PK_ROLES primary key (ID_ROL)
)
go

/*==============================================================*/
/* Table: ROL_PERMISOS                                          */
/*==============================================================*/
create table ROL_PERMISOS (
   ID_ROL_PERMISO       integer              not null,
   ID_ROL               integer              null,
   STATUS               varchar(255)         null,
   constraint PK_ROL_PERMISOS primary key (ID_ROL_PERMISO)
)
go

/*==============================================================*/
/* Table: ROL_USUARIO                                           */
/*==============================================================*/
create table ROL_USUARIO (
   ID_ROL_USUARIO       integer              not null,
   ID_USUARIO           integer              null,
   STATUS               bit                  null,
   constraint PK_ROL_USUARIO primary key (ID_ROL_USUARIO)
)
go

/*==============================================================*/
/* Table: USUARIOS                                              */
/*==============================================================*/
create table USUARIOS (
   ID_USUARIO           integer              not null,
   NOMBRE               varchar(255)         null,
   CONTRASENA           varchar(255)         null,
   PASSWORD             varchar(255)         null,
   CORREO               varchar(255)         null,
   FECHA_CREACION       datetime             null,
   FECHA_ACTUALIZACION  datetime             null,
   ESTATUS              bit                  null,
   constraint PK_USUARIOS primary key (ID_USUARIO)
)
go

alter table CIUDADES
   add constraint FK_CIUDADES_REFERENCE_MUNICIPI foreign key (ID_MUNICIPIO)
      references MUNICIPIOS (ID_MUNICIPIO)
go

alter table CLIENTES
   add constraint FK_CLIENTES_REFERENCE_DIRECCIO foreign key (ID_DIRECCION)
      references DIRECCIONES (ID_DIRECCION)
go

alter table CLIENTES
   add constraint FK_CLIENTES_REFERENCE_USUARIOS foreign key (ID_USUARIO)
      references USUARIOS (ID_USUARIO)
go

alter table CONTRATOS
   add constraint FK_CONTRATO_REFERENCE_PRESTAMO foreign key (ID_PRESTAMOS)
      references PRESTAMOS (ID_PRESTAMO)
go

alter table DIRECCIONES
   add constraint FK_DIRECCIO_REFERENCE_LOCALIDA foreign key (ID_LOCALIDAD)
      references LOCALIDADES (ID_LOCALIDAD)
go

alter table LOCALIDADES
   add constraint FK_LOCALIDA_REFERENCE_CIUDADES foreign key (ID_CIUDAD)
      references CIUDADES (ID_CIUDAD)
go

alter table MUNICIPIOS
   add constraint FK_MUNICIPI_REFERENCE_ESTADOS foreign key (ID_ESTADO)
      references ESTADOS (ID_ESTADO)
         on update cascade on delete cascade
go

alter table PAGOS
   add constraint FK_PAGOS_REFERENCE_PRESTAMO foreign key (ID_PRESTAMOS)
      references PRESTAMOS (ID_PRESTAMO)
go

alter table PAGOS
   add constraint FK_PAGOS_REFERENCE_METODO_P foreign key (ID_METODO_PAGO)
      references METODO_PAGO (ID_METODO_PAGO)
go

alter table PERMISOS
   add constraint FK_PERMISOS_REFERENCE_ROL_PERM foreign key (ID_ROL_PERMISO)
      references ROL_PERMISOS (ID_ROL_PERMISO)
go

alter table PRESTAMOS
   add constraint FK_PRESTAMO_REFERENCE_CLIENTES foreign key (ID_CLIENTE)
      references CLIENTES (ID_CLIENTE)
go

alter table PRESTAMOS
   add constraint FK_PRESTAMO_REFERENCE_USUARIOS foreign key (ID_USUARIO)
      references USUARIOS (ID_USUARIO)
go

alter table ROLES
   add constraint FK_ROLES_REFERENCE_ROL_USUA foreign key (ID_ROL_USUARIO)
      references ROL_USUARIO (ID_ROL_USUARIO)
go

alter table ROL_PERMISOS
   add constraint FK_ROL_PERM_REFERENCE_ROLES foreign key (ID_ROL)
      references ROLES (ID_ROL)
go

alter table ROL_USUARIO
   add constraint FK_ROL_USUA_REFERENCE_USUARIOS foreign key (ID_USUARIO)
      references USUARIOS (ID_USUARIO)
go

