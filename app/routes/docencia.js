/*
  UGR Transparente. Sitio Web de la Universidad de Granada de acceso a Datos Abiertos.
  Copyright (C) 2014 Jaime Torres Benavente, Óscar Zafra Megías
  Copyright (C) 2015 Mario Heredia Moreno, Germán Martínez Maldonado
  Copyright (C) 2016 Andrés Ortiz Corrales

  This file is part of UGR Transparente.

  UGR Transparente is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  UGR Transparente is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program. If not, see <http://www.gnu.org/licenses/>.
*/


//Variable para las configuraciones
var config = require('../../config/config');
var dbHandler = require('../dbhandler');

// Gestión de la pagina de oferta y demanda academica
exports.ofertaDemanda = function(req, res) {
	dbHandler.getCollection("ofertaDemanada", function(err, data) {
		if (err) res.status(500).json(err);
		else {
			var ofertaDemanda = data[0];

			res.render(ofertaDemanda.plantilla, {
				servidor: config.servidor,
				seccion: ofertaDemanda.nombre,
				contenido: ofertaDemanda.contenido,
				datos: ofertaDemanda.datos
			});
		}
	});
};

// Gestión de la pagina de claustro
exports.claustro = function(req, res) {
	dbHandler.getCollection("claustro", function(err, data) {
		if (err) res.status(500).json(err);
		else {
			var claustro = data[0];

			res.render(claustro.plantilla, {
				servidor: config.servidor,
				seccion: claustro.nombre,
				contenido: claustro.contenido,
				datos: claustro.datos
			});
		}
	});
};

// Gestión de la pagina de estudiantes
exports.estudiantes = function(req, res) {
	dbHandler.getCollection("estudiantes", function(err, data) {
		if (err) res.status(500).json(err);
		else {
			var estudiantes = data[0];

			res.render(estudiantes.plantilla, {
				servidor: config.servidor,
				seccion: estudiantes.nombre,
				contenido: estudiantes.contenido,
				datos: estudiantes.datos
			});
		}
	});
};