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


//DbHandler para MongoDB
var mongo = require('mongodb').MongoClient;
var config = require('../config/database');
var async = require('async');

var db = null;

module.exports = {
	connect: function(done) {
		mongo.connect(config.url + config.dbName, function(err, res) {
			if (!err) db = res;
			done(err, res);
		});
	},
	close: function() {
		if (this.isConnected()) {
			db.close();
			db = null;
		}
	},
	isConnected: function() {
		return db !== null;
	},
	insertDocument: function(document, collection, done) {
		var col = db.collection(collection);
		col.insertOne(document, done);
	},
	insertMultipleDocuments: function(documents, collection, done) {
		var col = db.collection(collection);
		col.insertMany(documents, done);
	},
	getCollection: function(collection, done) {
		var col = db.collection(collection);
		col.find({}).toArray(done);
	},
	loadJson: function(file, done) {
		var json = require('../config/jsons/' + file);
		if (json !== null) this.insertDocument(json, file, done);
		else return done(new Error("Not json found"));
	},
	loadAllJsons: function(done) {
		var dh = this;
		async.forEach(config.jsonFiles, function(json, callback) {
			dh.loadJson(json, callback);
		}, function(err) {
			return done(err);
		});
	},
	dropDatabase: function(done) {
		db.dropDatabase(done);
	},
	initDatabase: function(done) {
		var dh = this;
		dh.connect(function(err, res) {
			if (err) return done(err);
			dh.dropDatabase(function(err, res) {
				if (err) return done(err);
				dh.loadAllJsons(function(err, res) {
					return done(err);
				});
			});
		});
	}
};