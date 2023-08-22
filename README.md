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