create schema michelada_TEST authorization postgres;
set search_path to michelada_TEST;

create table marcas(
    id_marca bigint primary key,
    nombre varchar(100) not null
);

create table productos(
    id_producto bigint primary key,
    nombre varchar(100) not null,
    id_marca bigint references marcas(id_marca),
    descripcion varchar(200),
    precio numeric not null check (precio > 0 and precio <= 180)
);