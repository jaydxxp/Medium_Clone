import {z} from "zod"
export const signupinput=z.object({
    username:z.string(),
    email:z.email(),
    password:z.string().min(6),
    name:z.string().optional()
})
export type SignupInput=z.infer<typeof signupinput>
export const signininput=z.object({
    username:z.string(),
    password:z.string().min(6)
})
export type SigninInput=z.infer<typeof signininput>
export const bloginput=z.object({
    title:z.string(),
    content:z.string().min(6),
    published:z.boolean()
})
export type BlogInput=z.infer<typeof bloginput>
export const updatebloginput=z.object({
    title:z.string(),
    content:z.string().min(6),
    published:z.boolean(),
    id:z.string()
})
export type UpdateBlogInput=z.infer<typeof updatebloginput>