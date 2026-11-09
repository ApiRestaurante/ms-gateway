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
const rxjs_1 = require("rxjs");
let UsuariosController = class UsuariosController {
    usuariosClient;
    constructor(usuariosClient) {
        this.usuariosClient = usuariosClient;
    }
    hello(usuarioDto) {
        return usuarioDto;
    }
    findAll() {
        return this.request(contracts_1.USUARIOS_PATTERNS.FIND_ALL, {});
    }
    // @Post()
    // create(@Body() dto: CreateUsuarioDto): Promise<Usuario> {
    //   return this.request<Usuario>(
    //     USUARIOS_PATTERNS.CREATE,
    //     dto,
    //   );
    // }
    async request(pattern, payload) {
        try {
            return await (0, rxjs_1.firstValueFrom)(this.usuariosClient
                .send(pattern, payload)
                .pipe((0, rxjs_1.timeout)(5000)));
        }
        catch (error) {
            if (typeof error === 'object' &&
                error !== null &&
                'statusCode' in error &&
                error.statusCode === 400) {
                throw new common_1.HttpException('Datos de usuario no válidos', 400);
            }
            throw new common_1.ServiceUnavailableException('No se pudo completar la petición al servicio de usuarios');
        }
    }
};
exports.UsuariosController = UsuariosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contracts_1.CreateUsuarioDto]),
    __metadata("design:returntype", Object)
], UsuariosController.prototype, "hello", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "findAll", null);
exports.UsuariosController = UsuariosController = __decorate([
    (0, common_1.Controller)('usuarios'),
    __param(0, (0, common_1.Inject)('USUARIOS_CLIENT')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], UsuariosController);
//# sourceMappingURL=usuarios.controller.js.map