import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import { signupinput } from "@jaydeeppp/medium-blog";
import { signininput } from "@jaydeeppp/medium-blog";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    Secret: string;
  };
}>();
userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signupinput.safeParse(body);
  if (!success) {
    c.status(404);
    return c.json({
      message: "Incorrect Format to Create User",
    });
  }
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password,
        username: body.username,
      },
    });
    const token = await sign({ id: user.id }, c.env.Secret);
    return c.json({
      jwt: token,
    });
  } catch (e) {
    console.log(e);
    c.status(404);
    return c.json({
      msg: "Something went Wrong",
    });
  }
});
userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signininput.safeParse(body);
  if (!success) {
    c.status(404);
    return c.json({
      message: "Incorrect Format to Login User",
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      username: body.username,
      password: body.password,
    },
  });
  if (!user) {
    c.status(411);
    return c.json({
      msg: "This Account is not Registered Yet",
    });
  }
  const token = await sign({ id: user.id }, c.env.Secret);
  return c.json({
    message: "Successfully Logged In as:",
    token,user
  });
});
userRouter.get("/users", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const alluser = await prisma.user.findMany();
    return c.json({
      Users: alluser,
    });
  } catch (e) {
    c.status(403);
    c.json({
      message: "No User Found",
    });
  }
});
