import lumeCMS from "lume/cms.ts";

const cms = lumeCMS();

cms.document(
  "home: The profile page",
  "src:index.yml",
  [
    {
      type: "hidden",
      name: "layout",
      value: "layouts/home.vto",
    },
    {
      type: "object",
      name: "header",
      description: "The header of the page",
      fields: [
        "title: text",
        "description: markdown",
        "avatar: file",
      ],
    },
    {
      type: "object",
      name: "metas",
      description: "Data for the meta tags",
      fields: [
        "title: text",
        "description: text",
        "image: text",
        "twitter: text",
        "generator: checkbox",
      ],
    },
    {
      name: "links",
      type: "object-list",
      description: "The list of links.",
      fields: [
        {
          type: "text",
          name: "type",
          description:
            "The type of link. It uses the icons and colors from https://simpleicons.org/. For example, 'github', 'instagram', etc.",
          options: [
            "github",
            "instagram",
            "linkedin",
            "x",
            "youtube",
            "facebook",
            "tiktok",
            "patreon",
            "paypal",
            "mastodon",
            "discord",
            "spotify",
            "opencollective",
            "twitch",
          ],
        },
        "text: text",
        "href: text",
        "only_icon: checkbox",
      ],
    },
    {
      name: "extra_head",
      type: "code",
      description: "Extra content to include in the <head> tag",
    },
    {
      name: "footer",
      type: "markdown",
      description: "The footer of the page",
    },
  ],
);

cms.upload("uploads: Uploaded files", "src:*{.jpg,.svg}");

export default cms;
