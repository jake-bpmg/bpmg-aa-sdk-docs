import { defineConfig } from "vocs";

export default defineConfig({
  description:
    "Typescript SDK for BPMG's Account Abstraction smart wallets and bundler integration.",
  title: "Bpmg AA SDK",
  // @dev should be set to repo name for github pages
  basePath: "bpmg-aa-sdk-docs",
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
  ],
  theme: {
    colorScheme: "dark",
  },
});
