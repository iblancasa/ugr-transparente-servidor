/*
UGR Transparente. Sitio Web de la Universidad de Granada de acceso a Datos Abiertos.
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

// Librerías
var cargar = require('../lib/cargar');

module.exports = {
	servidor: "http://opendata.ugr.es/",
	puerto: 3000,
		personal: cargar('./config/jsons/personal.json'),
		infoEconomica: cargar('./config/jsons/infoEconomica.json'),
		ofertaDemanda: cargar('./config/jsons/ofertaDemanda.json'),
		claustro: cargar('./config/jsons/claustro.json'),
		estudiantes: cargar('./config/jsons/estudiantes.json'),
		gobierno: cargar('./config/jsons/gobierno.json'),
		rendimiento: cargar('./config/jsons/rendimiento.json'),
		normativaLegal: cargar('./config/jsons/normativaLegal.json'),
		infoInstitucional: cargar('./config/jsons/infoInstitucional.json'),
	index: cargar('./config/jsons/index.json'),
	error: {
		"titulo": "Página no encontrada (Error 404)",
		"texto": "Lo siento, la página no existe o está temporalmente inaccesible."
	}
};
