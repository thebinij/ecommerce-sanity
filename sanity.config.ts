import { schemaTypes } from "./sanity/schemas";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

export default defineConfig({

  title: "purple-antelope",

  projectId: "djjgyefp",

  dataset: "production",

  basePath: "/admin",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
