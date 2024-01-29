# Vue 3 Polaris

Vue 3 Polaris is a Vue 3 UI library that provides a set of components and styles inspired by the Shopify Polaris design system. With Vue Polaris UI, you can easily create modern and sleek user interfaces for your web applications, giving them the new Shopify Polaris look.

## Features

- Easy customization with a smaller build size with **Tailwind CSS**.
- **Flexibility**: Adapt UI elements to your needs.
- **Tree-Shakeable**: Optimize bundle size for better performance.
- Updated to the last **New Polaris UI**.
- Explore and learn with the provided **[Storybook Demo]()** documentation.

## Installation

To get started with Vue Polaris UI, you can install it via npm or yarn:

```bash
npm install @mumble/vue3-polaris
# or
yarn add @mumble/vue3-polaris
```

## Usage

Import and register the components you need in your Vue application:

Individual components:
```javascript
import Vue from 'vue';
import { PButton } from 'vue3-polaris';

Vue.component('PButton', PButton);
```

All components, although is not recommended. This will import ALL components and UI Elements, and will hurt performance:
```javascript
import Vue from 'vue';
import Vue3Polaris from 'vue3-polaris';

Vue.use(Vue3Polaris);
```

Now, you can start using the Vue 3 Polaris components in your Vue templates:

```html
<template>
  <div>
    <PButton>Click me</PButton>
  </div>
</template>
```

## Documentation

For detailed documentation, examples, and customization options, please visit our [Storybook](https://github.com/your-repo/vue-polaris-ui).

## Contributing
We welcome contributions from the community. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on our GitHub repository.

If you notice any bugs, please create issues under [Issues](https://github.com/your-repo/vue3-polaris/issues). We will update the contribution rules later.

## License

Vue 3 Polaris is open-source and released under the [MIT License](https://github.com/your-repo/vue-polaris-ui/blob/main/LICENSE).

## Credits

This library is developed and maintained with ❤️ by [Mumble SRL](https://mumble.it/en/).

Shopify Polaris is a trademark of Shopify Inc., which is not affiliated with this project.