import type { Preview } from "@storybook/vue3";
import '../src/sass/main.scss'
import dedent from "ts-dedent";
import kebabCase from "lodash.kebabcase"

function templateSourceCode(
    templateSource,
    args,
    argTypes,
    replacing = 'v-bind="args"',
) {
  const componentArgs = {}
  for (const [k, t] of Object.entries(argTypes)) {
    const val = args[k]
    if (typeof val !== 'undefined' && t.table && t.table.category === 'props' && val !== t.defaultValue) {
      componentArgs[k] = val
    }
  }

  const propToSource = (key, val) => {
    const type = typeof val
    switch (type) {
      case "boolean":
        return val ? key : ""
      case "string":
        return `${key}="${val}"`
      case 'object':
        return `${key}="${JSON.stringify(val).replace(/"(\w+)"\s*:/g, '$1:').replaceAll('"', '\'')}"`;
      default:
        return `:${key}="${val}"`
    }
  }

  return templateSource.replace(
      replacing,
      Object.keys(componentArgs)
          .map((key) => " " + propToSource(kebabCase(key), args[key]))
          .join(""),
  )
}

const preview: Preview = {
  parameters: {
    docs: {
      source: {
        transform(src, ctx) {
          const match2 = /\b("')?template\1:\s*`([^`]+)`/.exec(src);
          const match = src ? src.includes('v-bind=') && !src.includes('template:') : false;

          function string_between_strings(startStr, endStr, str) {
            const pos = str.indexOf(startStr) + startStr.length;
            return str.substring(pos, str.indexOf(endStr, pos));
          }


          if (match) {
            const args = string_between_strings('v-bind="{', '}"', src)
            return templateSourceCode(dedent(src), ctx.args, ctx.argTypes, `v-bind="{${args}}"`);
          } else {
            return undefined
          }
        }
      }
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
