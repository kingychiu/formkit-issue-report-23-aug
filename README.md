## Nuxt app Setup
package.json
```json
"@formkit/vue": "^0.18.3"
```

nuxt.config.js
```javascript
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@formkit/nuxt"],
  extends: ["./nuxt-layer"],
});
```

## Nuxt layer setup
package.json
```json
"@formkit/nuxt": "^0.18.3",
```
You can find the custom input and wrapper in /nuxt-layer/components/


## Run

in both the root and the nuxt-layer folder
```bash
yarn install
```

```bash
yarn build
yarn inspect
```

Open `chrome://inspect` in chrome to inspect heap usage. 
Keep refreshing the home page,
The heap usage increases from ~20Mb to >100Mb and won't go down.


![heap](/heap-snapshots.png)