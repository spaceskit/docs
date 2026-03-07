import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Spaceskit",
      description:
        "Documentation for the Spaceskit multi-agent coordination protocol and gateway.",
      social: {
        github: "https://github.com/nickaruso/spaceskit",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [{ label: "Welcome", link: "/" }],
        },
        {
          label: "Reference",
          items: [
            {
              label: "Protocol",
              autogenerate: { directory: "reference/protocol" },
            },
            {
              label: "Configuration",
              autogenerate: { directory: "reference/config" },
            },
          ],
        },
      ],
    }),
  ],
});
