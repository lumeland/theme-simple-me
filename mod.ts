import plugins from "./plugins.ts";

import "lume/types.ts";

export default function () {
  return (site: Lume.Site) => {
    // Configure the site
    site.use(plugins());

    // Add remote files
    const files = [
      "_includes/css/header.css",
      "_includes/css/link.css",
      "_includes/layouts/base.vto",
      "index.yml",
      "styles.css",
      "favicon.svg",
      "avatar.jpg",
    ];

    for (const file of files) {
      site.remoteFile(file, import.meta.resolve(`./src/${file}`));
    }
  };
}
