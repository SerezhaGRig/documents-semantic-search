/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "document-semantic-search",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const bucket = new sst.aws.Bucket("document-semantic-search-dev", {
      access: "public"
    });
    new sst.aws.Nextjs("document-semantic-search", {
      link: [bucket]
    });
  },
});