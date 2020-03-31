create database Proyecto;
use Proyecto;


create table tbAgricultores (
idAgricultor int primary key not null auto_increment,
nombAgricultor varchar(35),
cedula varchar(15),
provincia varchar(15),
correo varchar(20),
password varchar(255),
direccion varchar(500),
telefono varchar (20));

create table tbProductos(
idProducto int primary key not null auto_increment,
nombProducto varchar(40),
cantidad varchar (220),
img varchar (300),
idAgricultor int not null,
foreing key (idAgricultor) references tbAgricultores(idAgricultor)

);