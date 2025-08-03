import { PrismaClient } from "@prisma/client/edge";
import { Hono } from "hono";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import{bloginput, updatebloginput} from"@jaydeeppp/medium-blog"
export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    Secret: string;
  };
}>();
blogRouter.use("/*", async (c, next) => {
  const header = (await c.req.header("authorization")) || "";
  const response = await verify(header, c.env.Secret);

  if (response.id) {
    c.set("jwtPayload", response.id);
    return await next();
  } else {
    return c.json({
      msg: "Wrong Credentials",
    });
  }
});
blogRouter.post("/create", async (c) => {
  const jwtPayload = c.get("jwtPayload");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try{
    const body = await c.req.json();
    const {success}=bloginput.safeParse(body)
    if(!success)
    {
      c.status(404)
      return c.json({
        message:"Input Correct Format to Create Blog"
      })
    }
  const newBlog = await prisma.posts.create({
    data: {
      authorid: jwtPayload,
      title: body.title,
      content: body.content,
      published: body.published,
    },
  });
  return c.json({
    "blog":newBlog
  })
  }
  catch(e)
  {
    return c.json({
        message:"Something went Wrong Blog not Created"
    })
  }
  
});
blogRouter.put("/update/:id", async (c) => {
  const jwtPayload = c.get("jwtPayload");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try{
    const id = c.req.param("id");
  const body = await c.req.json();
  const {success}=updatebloginput.safeParse(body)
    if(!success)
    {
      c.status(404)
      return c.json({
        message:"Input Correct Format to Update Blog"
      })
    }
  const UpdateBlog = await prisma.posts.update({
    where: {
      id,
    },
    data: {
      authorid: jwtPayload,
      title: body.title,
      content: body.content,
      published: body.published,
    },
  });
  return c.json({
    "Blog Updated": UpdateBlog,
  });
  }
  catch(e)
  {
    c.status(404)
    return c.json({
        message:"Not Updated"
    })
  }
  
});
blogRouter.get("/read/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const id = await c.req.param("id");
    const GetOneBlog = await prisma.posts.findFirst({
      where: {
        id,
      },select:{
        id:true,
        title:true,
        content:true,
        author:{
          select:{name:true}
        }
      }
    });
    return c.json({
      GetOneBlog,
    });
  } catch (e) {
    return c.json({
      message: "No Blogs Found!",
    });
  }
});
blogRouter.delete("/delete/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const id = await c.req.param("id");
    const DeleteOneBlog = await prisma.posts.delete({
      where: {
        id,
      },
    });
    return c.json({
      message: "Deleted Blog",
    });
  } catch (e) {
    return c.json({
      message: "No Blogs Found To Delete!",
    });
  }
});
blogRouter.get("/feed", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const Feed = await prisma.posts.findMany({
      select:{
        title:true,content:true,id:true,
        author:{select:{
          name:true
        }}
      }
    });
    return c.json({
      Feed,
    });
  } catch (e) {
    console.log(e);
    c.status(404);
    return c.json({
      message: "No Blogs Found",
    });
  }
});
