import { defineConfig } from "vocs";

export default defineConfig({
  title: "Docs",
  // @dev should be set to repo name for github pages
  basePath: "bpmg-aa-sdk-docs",
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "Example",
      link: "/example",
    },
  ],
});
