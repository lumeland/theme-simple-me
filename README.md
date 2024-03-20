# Simple Me

[Lume](https://lume.land) theme to create a Linktree alternative.

## Install as a remote theme

The **fastest and easiest** way to use this theme is by importing it as a remote
module. It allows to create a blog in seconds and update it at any time just by
changing the version number in the import URL. Just add the following code to
your `_config.ts` file:

```ts
import lume from "lume/mod.ts";
import me from "https://deno.land/x/lume_theme_simple_me/mod.ts";

const site = lume();

site.use(me());

export default site;
```

## Use it as a base template

To use this theme as a base template for a more customized site, clone this repo
and edit the [_config.ts](./_config.ts) file. The source files are in the
[src](./src/) folder.
