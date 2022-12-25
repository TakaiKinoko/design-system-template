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
