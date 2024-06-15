import "lume/types.ts";
import Color from "https://colorjs.io/dist/color.js";
import simpleIcons from "https://deno.land/x/lume_icon_plugins@v0.1.1/simpleicons.ts";
import basePath from "lume/plugins/base_path.ts";
import favicon from "lume/plugins/favicon.ts";
import metas from "lume/plugins/metas.ts";
import postcss from "lume/plugins/postcss.ts";
import transformImages from "lume/plugins/transform_images.ts";

/** Configure the site */
export default function () {
  return (site: Lume.Site) => {
    site.use(postcss())
      .use(metas())
      .use(favicon())
      .use(basePath())
      .mergeKey("extra_head", "stringArray")
      .use(transformImages())
      .use(simpleIcons());

    site.data("textColor", (hex: string) => {
      const color = new Color(`#${hex}`);
      const onWhite = Math.abs(color.contrastWCAG21("white"));
      const onBlack = Math.abs(color.contrastWCAG21("black"));
      return (onWhite + 0.5) > onBlack ? "white" : "black";
    });

    site.copy([".jpg", ".webp", ".png"]);
  };
}
