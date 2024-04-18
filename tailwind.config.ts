import { AgoraTailwindConfig } from './packages/ui/src/tailwind-config';
import type { Config } from 'tailwindcss';

const tailwindConfiguration = {
  content: ['./packages/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: AgoraTailwindConfig.theme,
  plugins: AgoraTailwindConfig.plugins,
  safelist: AgoraTailwindConfig.safelist
} satisfies Config;

export default tailwindConfiguration;
