# design system template

## anatomy of a design system

```

                                        [__Foundation__]: CSS variables, JS tokens,Tailwind preset config, Component styles (optional)
                                             /              ^                                           ^
                                        design tokens       |                                           |
                                            /               |                                           |
                                           to               |                                           |
                                                        depends on                                      |
[__Figma__]: source of truth for design & branding          |                                           |
                                            to              |                                           |
                                            \               |                                       depends on
                                        component specs     |                                           |
                                            \               |                                           |
                                        [__Component Library__]: Components, Page Templates             |
                                                                        ^                               |
                                                                        |                               |
                                                                    depends on                          |
                                                                        |                               |
                                                                    [__Storybook__]: examples on how to consume design system foundation and component library pacakges

```

## system components

### foundation

Foundation will be used to store our design tokens, and then
transform them into appropriate formats so we can use them in our projects.

This package will also be published to a package registry like NPM,
so we can consume this directly by importing it,
or by using a CDN service like JSDeliver to access the static files.

TODO: add example here of a static file generated from CDN here, so I can show an example

All packages will be published to a public registry, but the process will be quite the same for private registries like Jfrog etc.

The name of this package in the codebase will be foundation.

### component library

This package will be used to host our components.
Additionally, this package will be published to the registry of our choice, so our teams can consume it.

### storybook

This package will consume the foundation and react packages, and help the developers with practical examples of how to consume the design system and start building beautiful interfaces.

## monorepo set up

### step 1

```txt
// in a workspa
yarn init -w

// create foundation package
cd packages
mkdir foundation
yarn init

// create react and storybook packages
mkdir react && mkdir storybook
cd react
yarn init
cd storybook
yarn init -p // private
```

### step 2

Append scope to the package.json files created for the three packages,
e.g.

```
//FROM
"name": "react"`
```

```
// TO
"name": "@chefyolki-design-system/react",
```

```
% yarn workspaces list
➤ YN0000: .
➤ YN0000: packages/foundation
➤ YN0000: packages/react
➤ YN0000: packages/storybook
➤ YN0000: Done in 0s 1ms
```

### step 3 - set up package dependencies

```
yarn workspace @chefyolki-design-system/storybook add @chefyolki-design-system/react  @chefyolki-design-system/foundation

yarn workspace @chefyolki-design-system/react add @chefyolki-design-system/foundation
```

### step 4

1. Set up ts for ONLY the development environment

```
yarn add -D typescript
```

2. Add typescript to packages

```
yarn workspace @chefyolki-design-system/react add -D typescript
yarn workspace @chefyolki-design-system/foundation add -D typescript
yarn workspace @chefyolki-design-system/storybook add -D typescript
```

3. Add tsconfig.json to packages

## Figma to CSS

Figma --> design tokens --> CSS

1. step 1

```
yarn workspace @chefyolki-design-system/foundation add -D style-dictionary
```

1. step 2
   manually add design tokens under `/foundation/src/tokens/` in json formats.

   Alternatively:  
    https://github.com/mikaelvesavuori/figmagic

1. step 3
   add style-dictionary config in `sd.config.js` and add script to build tokens

1. step 4
   yarn workspace @chefyolki-design-system/foundation run build-tokens

## Tailwind preset

...

## React setup

```
yarn workspace @chefyolki-design-system/react add -D react@^18.2.0 react-dom@^18.2.0 \
@types/react@^18.0.0 @types/react-dom@^18.0.0
```

Then, for our consumers, as we will want to distribute our components with hooks, it's a good idea to have a minimum React version of 16.8. To do this, let's add React as a peer dependency by adding this section to our `package.json`

```
"peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
}
```
