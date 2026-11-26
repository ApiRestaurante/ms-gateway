"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesModule = void 0;
const common_1 = require("@nestjs/common");
const ms_clientes_controller_1 = require("./ms-clientes.controller");
const microservices_1 = require("@nestjs/microservices");
const config_1 = require("@nestjs/config");
const contracts_1 = require("@apirestaurante/contracts");
let ClientesModule = class ClientesModule {
};
exports.ClientesModule = ClientesModule;
exports.ClientesModule = ClientesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            microservices_1.ClientsModule.register([
                {
                    name: contracts_1.MS_CLIENTES.NAME,
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: contracts_1.MS_CLIENTES.HOST,
                        port: contracts_1.MS_CLIENTES.PORT
                    },
                },
            ]),
        ],
        controllers: [ms_clientes_controller_1.MsClientesController],
    })
], ClientesModule);
//# sourceMappingURL=ms-clientes.module.js.map