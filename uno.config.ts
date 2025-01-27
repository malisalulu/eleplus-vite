// import { defineConfig, presetTypography, presetUno } from 'unocss';

// export default defineConfig({
//   presets: [presetUno(), presetTypography()],
// });

// https://github.com/antfu/unocss
// see unocss.config.ts for config
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
