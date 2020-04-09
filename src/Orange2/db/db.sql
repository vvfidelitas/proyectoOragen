create database Proyecto;
use Proyecto;


create table tbUsuarios (
idUsuario int primary key not null auto_increment,
nombUsuario varchar(35),
nombreCliente varchar(35),
contrasena varchar(255));

create table tbProductos(
idProducto int primary key not null auto_increment,
nombProducto varchar(40),
cantidad int (220),
precio decimal(10,2), 
img varchar (300));


create table tbCompra(
	idFactura int primary key not null auto_increment, 
	hora timestamp, 
	total decimal(10,2) ,
	idUsuario int not null,
	foreign key (idUsuario) references tbUsuarios(idUsuario)); 


 create table tbCompraLineas(
 	idFactura int not null,
 	cantidadTotal int,
    idProducto int not null,
    primary key(idFactura,idProducto),
    foreign key (idFactura) references tbCompra(idFactura),
    foreign key (idProducto) references tbProductos(idProducto));

 create table tbCarrito(
 	cantidadTotal int,
    idProducto int not null,
    idUsuario int not null,
    primary key(idProducto,idUsuario),
    foreign key (idUsuario) references tbUsuarios(idUsuario),
    foreign key (idProducto) references tbProductos(idProducto));


--PRODUCTOS--
INSERT INTO `tbproductos` (`idProducto`, `nombProducto`, `cantidad`, `precio`, `img`) VALUES ('1', 'Fresa', '200', '2000', 'imagen');