# Surveyor

This package is responsible for "surveying" the user when creating a new project. In other words, it uses the [Enquirer][0] dependency to ask the user questions about the new project/package they are attempting to create.

## Dependencies

This list is all of the dependencies used by Surveyor and what they're used for:

- [@4lch4/logger][1]
  - My personal logger library that uses Chalk under the hood for some added stylization.
- [ansi-colors][2]
  - A required dependency that works alongside Chalk to provide terminal stylization.
- [chalk][3]
  - Provides terminal stylizing with custom colors, font styles, etc.
- [enquirer][0]
  - Provides the CLI prompts that are actually shown to the user.
- [dayjs][4]
  - An extremely lightweight date formatter/parser, similar to MomentJS but _much_ lighter.
  - To really nail this point home, here is a size comparison between DayJS and MomentJS after they've been minified:
    - **DayJS**: 6.4kb || **MomentJS**: 290.4kb
    - _This means the DayJS module is nearly 4,500% lighter!_

## Dev Dependencies

- [@types/node][5]
  - Provides NodeJS type data/bindings to TypeScript.
- [prettier][6]
  - Keeps the codebase pretty and uniformly styled.
- [typescript][7]
  - To ensure the same version of TypeScript is used across devices.

[0]: https://npmjs.com/package/enquirer
[1]: https://npmjs.com/package/@4lch4/logger
[2]: https://npmjs.com/package/ansi-colors
[3]: https://npmjs.com/package/chalk
[4]: https://npmjs.com/package/dayjs
[5]: https://npmjs.com/package/@types/node
[6]: https://npmjs.com/package/prettier
[7]: https://npmjs.com/package/typescript
