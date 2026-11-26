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
exports.ProfileController = void 0;
const contracts_1 = require("@apirestaurante/contracts");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let ProfileController = class ProfileController {
    usuariosClient;
    constructor(usuariosClient) {
        this.usuariosClient = usuariosClient;
    }
    create(createProfileDto) {
        console.log("GW - crearpERFIL: ", createProfileDto);
        return this.usuariosClient.send({ cmd: contracts_1.MS_USUARIOS.PATTERNS.Profile.CREAR }, createProfileDto);
    }
    findAll() {
        console.log('ms-gateway: list users');
        return this.usuariosClient.send({ cmd: contracts_1.MS_USUARIOS.PATTERNS.Profile.LISTAR }, {}); //envia
    }
    findOne(id) {
        console.log('ms-gateway: get user detail for username:', id);
        return this.usuariosClient.send({ cmd: contracts_1.MS_USUARIOS.PATTERNS.Profile.OBTENER }, { id }); //envia
    }
};
exports.ProfileController = ProfileController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contracts_1.CreateProfileDto]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "findOne", null);
exports.ProfileController = ProfileController = __decorate([
    (0, common_1.Controller)('profile'),
    __param(0, (0, common_1.Inject)(contracts_1.MS_USUARIOS.NAME)),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], ProfileController);
//# sourceMappingURL=profile.controller.js.map