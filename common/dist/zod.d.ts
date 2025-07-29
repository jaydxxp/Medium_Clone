import { z } from "zod";
export declare const signupinput: z.ZodObject<{
    username: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SignupInput = z.infer<typeof signupinput>;
export declare const signininput: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type SigninInput = z.infer<typeof signininput>;
export declare const bloginput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    published: z.ZodBoolean;
}, z.core.$strip>;
export type BlogInput = z.infer<typeof bloginput>;
export declare const updatebloginput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    published: z.ZodBoolean;
    id: z.ZodString;
}, z.core.$strip>;
export type UpdateBlogInput = z.infer<typeof updatebloginput>;
