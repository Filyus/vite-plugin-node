/// <reference types="express" />
/// <reference types="koa" />
/// <reference types="node" />
import type http from 'http';
import type { Connect, ViteDevServer } from 'vite';
import type { RequestAdapter, VitePluginNodeConfig } from '..';
export declare const debugServer: (msg: string, ...args: any[]) => void;
export declare const SUPPORTED_FRAMEWORKS: {
    express: RequestAdapter<import("express").Application>;
    nest: RequestAdapter<import("@nestjs/common").INestApplication>;
    koa: RequestAdapter<import("koa")<import("koa").DefaultState, import("koa").DefaultContext>>;
    fastify: RequestAdapter<import("fastify").FastifyInstance<import("fastify").RawServerDefault, http.IncomingMessage, http.ServerResponse<http.IncomingMessage>, import("fastify").FastifyLoggerInstance>>;
    marble: RequestAdapter<import("./marble").MarbleContext>;
};
export declare const getPluginConfig: (server: ViteDevServer) => VitePluginNodeConfig;
export declare const createMiddleware: (server: ViteDevServer) => Connect.HandleFunction;
