"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestHandler = void 0;
const NestHandler = async ({ app, req, res }) => {
    if (!app.isInitialized)
        await app.init();
    const instance = app.getHttpAdapter().getInstance();
    // Todo: handle nest-fastify case
    instance(req, res);
};
exports.NestHandler = NestHandler;
//# sourceMappingURL=nest.js.map