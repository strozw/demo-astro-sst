// @ts-check
import { defineConfig } from 'astro/config';

import aws from 'astro-sst';

/** @see {@link https://astro.build/config} */
export default defineConfig({
  output: "server",
  /** @see {@link https://github.com/sst/astro-sst} */
  adapter: aws({
    responseMode: "stream",
    serverRoutes: [
      "/ssr",
      "/isr",
    ]
  })
});
