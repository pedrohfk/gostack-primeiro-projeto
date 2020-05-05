exports.__esModule = true;
const express_1 = require('express');

const appointmentsRouter = express_1.Router();
appointmentsRouter.post('/', function (request, response) {
    return response.json({ message: 'Hello World' });
});
exports.default = appointmentsRouter;
