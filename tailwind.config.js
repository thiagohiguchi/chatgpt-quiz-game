// import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: ['class'],
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  fontSize: {}, // This removes the default font sizes
  theme: {
  	extend: {
  		fontFamily: {
  			heading: ['Chewy', ...defaultTheme.fontFamily.sans],
  			paragraph: ['Raleway', ...defaultTheme.fontFamily.sans]
  		},
  		width: {
  			'9/10': '90%'
  		},
  		maxWidth: {
  			'1/2': '50%',
  			'8/10': '80%',
  			'9/10': '90%'
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
  			flicker: {
  				'0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
  					opacity: '0.99',
  					filter: 'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))'
  				},
  				'20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
  					opacity: '0.4',
  					filter: 'none'
  				}
  			},
  			shimmer: {
  				'0%': {
  					backgroundPosition: '-700px 0'
  				},
  				'100%': {
  					backgroundPosition: '700px 0'
  				}
  			}
  		},
  		animation: {
  			flicker: 'flicker 3s linear infinite',
  			shimmer: 'shimmer 1.3s linear infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
    require('tailwindcss-fluid-typography')({
      minScreenWidth: 30, // width in rem
      maxScreenWidth: 80, // width in rem
      unit: 'rem',
      suffix: '',
      prefix: '',
      values: [
        {
          key: 'xs',
          fontSize: 0.75,
          lineHeight: 1,
        },
        {
          key: 'sm',
          fontSize: [0.75, 0.875],
          lineHeight: 1.2,
        },
        {
          key: 'md',
          fontSize: [0.875, 1.125],
          lineHeight: 1.33,
        },
        {
          key: 'lg',
          fontSize: [1, 1.5],
          lineHeight: [1.3, 1.5],
        },
        {
          key: 'xl',
          fontSize: [1.25, 1.625],
          lineHeight: [1.25, 1.625],
        },
        {
          key: '2xl',
          fontSize: [1.5, 1.875],
          lineHeight: [1.5, 1.875],
        },
        {
          key: '3xl',
          fontSize: [2, 2.5],
          lineHeight: [2, 2.5],
        },
        {
          key: '4xl',
          fontSize: [2.5, 3],
          lineHeight: [2.5, 3],
        },
        {
          key: '5xl',
          fontSize: [3.5, 4],
          lineHeight: [3.5, 4],
        },
        {
          key: '6xl',
          fontSize: [4.5, 5],
          lineHeight: [4.5, 5],
        },
      ],
    }),
  ],
};
