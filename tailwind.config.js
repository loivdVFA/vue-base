/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
      },
      screens: {
        DEFAULT: '800px',
      },
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        black: 'var(--color-black)',
        white: 'var(--color-white)',
        C01: 'var(--color-C01)',
        C02: 'var(--color-C02)',
        C03: 'var(--color-C03)',
        C04: 'var(--color-C04)',
        C05: 'var(--color-C05)',
        C06: 'var(--color-C06)',
        C07: 'var(--color-C07)',
        C08: 'var(--color-C08)',
        C09: 'var(--color-C09)',
      },
      boxShadow: {
        'shadow-search': 'var(--box-shadow-search)',
      },
      fontSize: {
        '10px': '10px',
        '12px': '12px',
        '13px': '13px',
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '22px': '22px',
        '28px': '28px',
        '32px': '32px',
        '36px': '36px',
      },
      lineHeight: {
        '10px': '10px',
        '12px': '12px',
        '13px': '13px',
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '22px': '22px',
        '24px': '24px',
        '26px': '26px',
        '28px': '28px',
        '30px': '30px',
        '32px': '32px',
      },
    },
  },
  plugins: [],
}
