"use strict";
exports.__esModule = true;
var express_1 = require("express");
var appointments_routes_1 = require("./appointments.routes");
var routes = express_1.Router();
routes.use('/appointments', appointments_routes_1["default"]);
exports["default"] = routes;
