/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "demo-astro-sst",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    /** @see {@link https://sst.dev/docs/component/aws/astro} */
    new sst.aws.Astro("MyWeb", {
      environment: {
        TZ: 'Asia/Tokyo',
      },
      invalidation: {
        paths: ["/*"],
      }
    });
  },
});
