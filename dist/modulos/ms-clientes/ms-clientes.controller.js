"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsClientesController = void 0;
const contracts_1 = require("@apirestaurante/contracts");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let MsClientesController = class MsClientesController {
    clientesClient;
    constructor(clientesClient) {
        this.clientesClient = clientesClient;
    }
    findAll() {
        console.log('ms-gateway: listado de clientes');
        return this.clientesClient.send({ cmd: contracts_1.MS_CLIENTES.PATTERNS.Cliente.LISTAR }, {}); //envia
    }
    findUser(nif) {
        console.log('ms-gateway: get user detail for nif:', nif);
        return this.clientesClient.send({ cmd: contracts_1.MS_CLIENTES.PATTERNS.Cliente.OBTENER }, { nif }); //envia
    }
};
exports.MsClientesController = MsClientesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], MsClientesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':nif'),
    __param(0, (0, common_1.Param)('nif')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], MsClientesController.prototype, "findUser", null);
exports.MsClientesController = MsClientesController = __decorate([
    (0, common_1.Controller)('clientes'),
    __param(0, (0, common_1.Inject)(contracts_1.MS_CLIENTES.NAME)),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], MsClientesController);
//# sourceMappingURL=ms-clientes.controller.js.map