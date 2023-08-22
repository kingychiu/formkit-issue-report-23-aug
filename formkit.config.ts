import { fr } from "@formkit/i18n";
import { defineFormKitConfig } from "@formkit/vue";
import myTailwindTheme from "./formkit.theme";
import { genesisIcons } from "@formkit/icons";
import { generateClasses } from "@formkit/themes";

export default defineFormKitConfig({
  locales: { fr },
  locale: "fr",
  icons: {
    ...genesisIcons,
  },
  config: {
    // pass our theme object to generateClasses
    classes: generateClasses(myTailwindTheme),
  },
});
