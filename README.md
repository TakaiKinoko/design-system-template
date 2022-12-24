# design-system-template

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
