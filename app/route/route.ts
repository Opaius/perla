import { Hono } from "hono";

export const runtime = "edge";

const app = new Hono().basePath("api");

app.get();
