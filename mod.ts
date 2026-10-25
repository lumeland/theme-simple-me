import { getFiles } from "@lumeland/core/utils/cdn.ts";
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

    // Remote files
    const files = ["_includes/**", "*.css"];
    site.remote("/", import.meta.resolve("./src"), files);
  };
}

export const setup: Lume.Archetype = async function* () {
  const specifier = import.meta.resolve("./src");
  const patterns = ["/avatar.jpg", "/favicon.svg", "/index.yml"];

  for (const [path, url] of await getFiles(specifier, patterns)) {
    yield {
      path,
      overwrite: true,
      content: new URL(url),
    };
  }
};
