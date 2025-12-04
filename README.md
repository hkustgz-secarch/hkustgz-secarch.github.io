# HKUST(GZ) SecArch

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
pnpm dev
```

### Structure

Page sturctures are consistent with routes defined in `src/routes`. 

If you (with us), would like update the news or your personal profile, see `src/lib/data/*`. Static files are located in the `assets` folder nearby.

## Building

To create a production version of your app:

```sh
pnpm build
```
