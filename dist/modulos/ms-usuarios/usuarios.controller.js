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
exports.UsuariosController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const contracts_1 = require("@apirestaurante/contracts");
let UsuariosController = class UsuariosController {
    usuariosClient;
    constructor(usuariosClient) {
        this.usuariosClient = usuariosClient;
    }
    findAll() {
        console.log('ms-gateway: list users');
        return this.usuariosClient.send({ cmd: contracts_1.MS_USUARIOS.PATTERNS.Usuario.LISTAR }, {}); //envia
    }
    findUser(username) {
        console.log('ms-gateway: get user detail for username:', username);
        return this.usuariosClient.send({ cmd: contracts_1.MS_USUARIOS.PATTERNS.Usuario.OBTENER }, { username }); //envia
    }
    crearUsuario(createusuarioDto) {
        console.log("GW - crearUsuario: ", createusuarioDto);
        return this.usuariosClient.send({ cmd: contracts_1.MS_USUARIOS.PATTERNS.Usuario.CREAR }, createusuarioDto);
    }
};
exports.UsuariosController = UsuariosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], UsuariosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], UsuariosController.prototype, "findUser", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contracts_1.CreateUsuarioDto]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "crearUsuario", null);
exports.UsuariosController = UsuariosController = __decorate([
    (0, common_1.Controller)('usuarios'),
    __param(0, (0, common_1.Inject)(contracts_1.MS_USUARIOS.NAME)),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], UsuariosController);
//# sourceMappingURL=usuarios.controller.js.map