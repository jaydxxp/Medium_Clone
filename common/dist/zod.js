"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatebloginput = exports.bloginput = exports.signininput = exports.signupinput = void 0;
const zod_1 = require("zod");
exports.signupinput = zod_1.z.object({
    username: zod_1.z.string(),
    email: zod_1.z.email(),
    password: zod_1.z.string().min(6),
    name: zod_1.z.string().optional()
});
exports.signininput = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string().min(6)
});
exports.bloginput = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string().min(6),
    published: zod_1.z.boolean()
});
exports.updatebloginput = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string().min(6),
    published: zod_1.z.boolean(),
    id: zod_1.z.string()
});
