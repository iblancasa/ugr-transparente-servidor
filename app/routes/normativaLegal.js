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

// Gestión de la pagina de normativas
exports.normativaLegal = function(req, res) {
	dbHandler.getCollection("normativaLegal", function(err, data) {
		if (err) res.status(500).json(err);
		else {
			var normativa = data[0];

			res.render(normativa.plantilla, {
				servidor: config.servidor,
				seccion: normativa.nombre,
				contenido: normativa.contenido,
				datos: normativa.datos
			});
		}
	});
};