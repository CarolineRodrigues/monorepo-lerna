import type { Config } from 'tailwindcss';

const AgoraTailwindConfig = {
  content: [],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px'
      },
      content: {
        empty: "''"
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))'
      },
      gridTemplateColumns: {
        '1-auto': 'auto',
        '2-auto': 'auto auto',
        '3-auto': 'auto auto auto',
        '4-auto': 'auto auto auto auto',
        '5-auto': 'auto auto auto auto auto',
        '6-auto': 'auto auto auto auto auto auto',
        '7-auto': 'auto auto auto auto auto auto auto',
        '8-auto': 'auto auto auto auto auto auto auto auto',
        '9-auto': 'auto auto auto auto auto auto auto auto auto',
        '10-auto': 'auto auto auto auto auto auto auto auto auto auto',
        '11-auto': 'auto auto auto auto auto auto auto auto auto auto auto',
        '12-auto': 'auto auto auto auto auto auto auto auto auto auto auto auto'
      },
      opacity: {
        16: '0.16',
        32: '0.32'
      },
      minWidth: {
        initial: 'initial'
      },
      maxWidth: {
        initial: 'initial'
      },
      minHeight: {
        initial: 'initial'
      },
      maxHeight: {
        initial: 'initial'
      },
      zIndex: {
        dropdown: '1000',
        backdrop: '2000',
        sticky: '3000',
        fixed: '4000',
        drawer: '5000',
        dialog: '6000',
        toast: '7000',
        tooltip: '8000'
      }
    },
    screens: {
      xs: '360px',
      md: '768px',
      xl: '1200px'
    },
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif']
    },
    fontSize: {
      'base': '16px',
      // Typography / S
      's-regular': ['0.875rem', { lineHeight: '1.5rem', letterSpacing: '0', fontWeight: '400' }],
      's-medium': ['0.875rem', { lineHeight: '1.5rem', letterSpacing: '0', fontWeight: '500' }],
      's-semibold': ['0.875rem', { lineHeight: '1.5rem', letterSpacing: '0', fontWeight: '600' }],
      's-bold': ['0.875rem', { lineHeight: '1.5rem', letterSpacing: '0', fontWeight: '700' }],
      // Typography / M
      'm-light': ['1rem', { lineHeight: '1.75rem', letterSpacing: '0', fontWeight: '300' }],
      'm-regular': ['1rem', { lineHeight: '1.75rem', letterSpacing: '0', fontWeight: '400' }],
      'm-medium': ['1rem', { lineHeight: '1.75rem', letterSpacing: '0', fontWeight: '500' }],
      'm-semibold': ['1rem', { lineHeight: '1.75rem', letterSpacing: '0', fontWeight: '600' }],
      'm-bold': ['1rem', { lineHeight: '1.75rem', letterSpacing: '0', fontWeight: '700' }],
      // Typography / L
      'l-light': ['1.25rem', { lineHeight: '2rem', letterSpacing: '0', fontWeight: '300' }],
      'l-regular': ['1.25rem', { lineHeight: '2rem', letterSpacing: '0', fontWeight: '400' }],
      'l-medium': ['1.25rem', { lineHeight: '2rem', letterSpacing: '0', fontWeight: '500' }],
      'l-semibold': ['1.25rem', { lineHeight: '2rem', letterSpacing: '0', fontWeight: '600' }],
      'l-bold': ['1.25rem', { lineHeight: '2rem', letterSpacing: '0', fontWeight: '700' }],
      // Typography / XL
      'xl-light': ['1.5rem', { lineHeight: '2.25rem', letterSpacing: '0', fontWeight: '300' }],
      'xl-regular': ['1.5rem', { lineHeight: '2.25rem', letterSpacing: '0', fontWeight: '400' }],
      'xl-medium': ['1.5rem', { lineHeight: '2.25rem', letterSpacing: '0', fontWeight: '500' }],
      'xl-semibold': ['1.5rem', { lineHeight: '2.25rem', letterSpacing: '0', fontWeight: '600' }],
      'xl-bold': ['1.5rem', { lineHeight: '2.25rem', letterSpacing: '0', fontWeight: '700' }],
      // Typography / 2XL
      '2xl-light': ['2rem', { lineHeight: '3rem', letterSpacing: '0', fontWeight: '300' }],
      '2xl-regular': ['2rem', { lineHeight: '3rem', letterSpacing: '0', fontWeight: '400' }],
      '2xl-medium': ['2rem', { lineHeight: '3rem', letterSpacing: '0', fontWeight: '500' }],
      '2xl-semibold': ['2rem', { lineHeight: '3rem', letterSpacing: '0', fontWeight: '600' }],
      '2xl-bold': ['2rem', { lineHeight: '3rem', letterSpacing: '0', fontWeight: '700' }],
      // Typography / 3XL
      '3xl-light': ['2.5rem', { lineHeight: '3.75rem', letterSpacing: '0', fontWeight: '300' }],
      '3xl-regular': ['2.5rem', { lineHeight: '3.75rem', letterSpacing: '0', fontWeight: '400' }],
      '3xl-medium': ['2.5rem', { lineHeight: '3.75rem', letterSpacing: '0', fontWeight: '500' }],
      '3xl-semibold': ['2.5rem', { lineHeight: '3.75rem', letterSpacing: '0', fontWeight: '600' }],
      '3xl-bold': ['2.5rem', { lineHeight: '3.75rem', letterSpacing: '0', fontWeight: '700' }]
    },
    borderRadius: {
      none: '0px',
      4: '4px',
      8: '8px',
      16: '16px',
      24: '24px',
      32: '32px',
      full: '100%'
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      focus: '#F408FC',
      backdrop: 'rgba(43, 54, 60, 0.96)',
      mask: {
        image: 'rgba(43, 54, 60, 0.8)'
      },
      neutral: {
        50: '#F7F8FA',
        100: '#F1F3F8',
        200: '#E1E4EA',
        300: '#CDD2DC',
        400: '#BAC0CC',
        500: '#9CA6B8',
        600: '#8893AA',
        700: '#64718B',
        800: '#475164',
        900: '#2B363C'
      },
      primary: {
        50: '#FAFCFF',
        100: '#F2F6FF',
        200: '#E5EEFF',
        300: '#BBD1FD',
        400: '#5F93FC',
        500: '#1A65FA',
        600: '#034AD8',
        700: '#0338A2',
        800: '#002B82',
        900: '#021C51'
      },
      secondary: {
        50: '#F5FBFF',
        100: '#EBF6FF',
        200: '#E3F4FF',
        300: '#CCEAFF',
        400: '#A0D8FE',
        500: '#1CA3FC',
        600: '#1993E3',
        700: '#1682CA',
        800: '#12669E',
        900: '#0D4C75'
      },
      informative: {
        50: '#E5F6FF',
        100: '#E5F6FF',
        200: '#A5DEFF',
        300: '#77CEFF',
        400: '#49BCFF',
        500: '#0079BF',
        600: '#00598C',
        700: '#0B486B',
        800: '#083752',
        900: '#00121C'
      },
      success: {
        50: '#E5FFF6',
        100: '#C2F2E2',
        200: '#7ACCB1',
        300: '#36B289',
        400: '#1F9970',
        500: '#008558',
        600: '#00724C',
        700: '#005539',
        800: '#013926',
        900: '#001C13'
      },
      warning: {
        50: '#FFF9E5',
        100: '#FFF2CC',
        200: '#FFE699',
        300: '#FFE699',
        400: '#FFD966',
        500: '#FBCB3C',
        600: '#FBBB3C',
        700: '#F2A222',
        800: '#B06112',
        900: '#80460D'
      },
      danger: {
        50: '#FEF1F2',
        100: '#FEE1E3',
        200: '#FEC8CC',
        300: '#FCA6AD',
        400: '#F8727D',
        500: '#DE2D3B',
        600: '#D12332',
        700: '#C41826',
        800: '#B20917',
        900: '#86131D'
      }
    },
    spacing: {
      0: '0px',
      8: '8px',
      16: '16px',
      24: '24px',
      32: '32px',
      40: '40px',
      48: '48px',
      56: '56px',
      64: '64px',
      72: '72px',
      80: '80px',
      88: '88px',
      96: '96px',
      104: '104px',
      112: '112px',
      120: '120px',
      128: '128px',
      256: '256px',
      '1/4': '25%',
      '1/2': '50%',
      'full': '100%',
      'initial': 'initial'
    },
    boxShadow: {
      'none': '0 0 #0000',
      'top-lower': '0px -4px 4px 0px rgba(0, 0, 0, 0.16)',
      'top-low': '0px -8px 8px 0px rgba(0, 0, 0, 0.08)',
      'top-medium': '0px -16px 16px 0px rgba(0, 0, 0, 0.08)',
      'top-high': '0px -16px 16px 0px rgba(0, 0, 0, 0.16)',
      'top-higher': '0px -16px 16px 0px rgba(0, 0, 0, 0.32)',
      'center-lower': '0px 0px 4px 0px rgba(0, 0, 0, 0.32)',
      'center-low': '0px 0px 8px 0px rgba(0, 0, 0, 0.08)',
      'center-medium': '0px 0px 16px 0px rgba(0, 0, 0, 0.08)',
      'center-high': '0px 0px 16px 0px rgba(0, 0, 0, 0.16)',
      'center-higher': '0px 0px 16px 0px rgba(0, 0, 0, 0.32)',
      'bottom-lower': '0px 4px 4px 0px rgba(0, 0, 0, 0.16)',
      'bottom-low': '0px 8px 8px 0px rgba(0, 0, 0, 0.08)',
      'bottom-medium': '0px 16px 16px 0px rgba(0, 0, 0, 0.08)',
      'bottom-high': '0px 16px 16px 0px rgba(0, 0, 0, 0.16)',
      'bottom-higher': '0px 16px 16px 0px rgba(0, 0, 0, 0.32)',
      'inner': '0px 4px 4px 0px rgba(0, 0, 0, 0.32) inset'
    },
    transitionDuration: {
      DEFAULT: '200ms'
    },
    container: {
      padding: {
        xs: '32px',
        md: '64px',
        xl: '0px'
      }
    }
  },
  plugins: [
    // Override to class .container max-screen resolution
    ({ addComponents }: any) => {
      addComponents({
        '.container': {
          maxWidth: '1216px'
        }
      });
    },

    // Function to use variable colors inside scss
    // Ex: var(--color-primary-100)
    function ({ addBase, theme }: any) {
      function extractColorVars(colorObj: any, colorGroup = ''): any {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === 'string' ? { [`--color${colorGroup}-${colorKey}`]: value } : extractColorVars(value, `-${colorKey}`);

          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root, :host, ::backdrop': extractColorVars(theme('colors'))
      });
    }
  ],
  safelist: [
    {
      //pattern to be able to dynamically build stories in which we change the DOM
      pattern: /(border|bg|fill|text|stroke)-[^/]+$/,
      variants: ['hover', 'focus', 'xs', 'md', 'xl']
    }
  ]
} satisfies Config;

export { AgoraTailwindConfig };
