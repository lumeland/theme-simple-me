import basePath from "@lumeland/plugin-base-path";
import favicon from "@lumeland/plugin-favicon";
import metas from "@lumeland/plugin-metas";
import lightningcss from "@lumeland/plugin-lightningcss";
import icons from "@lumeland/plugin-icons";
import inline from "@lumeland/plugin-inline";
import lumeCms from "@lumeland/plugin-cms";
import cms from "./cms.ts";

/** Configure the site */
export default function () {
  return (site: Lume.Site) => {
    site
      .use(lightningcss())
      .use(metas())
      .use(favicon())
      .use(basePath())
      .mergeKey("extra_head", "stringArray")
      .use(icons())
      .use(inline())
      .use(lumeCms({ cms }));

    site.add([".css", ".jpg", ".webp", ".png"]);

    // Add remote files
    site.remote("/", import.meta.resolve("./src"), ["_includes/**"]);
  };
}

export const setup: Lume.Archetype = function* () {
  yield {
    url: import.meta.resolve("./src"),
    files: ["index.yml", "styles.css", "favicon.svg", "avatar.jpg"],
  };
};
