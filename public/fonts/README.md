# Font Files

This directory should contain the Gilroy font files. Please add the following files:

## Required Font Files

- `Gilroy-SemiBold.woff2`
- `Gilroy-SemiBold.woff`
- `Gilroy-Regular.woff2`
- `Gilroy-Regular.woff`

## Font Sources

You can obtain the Gilroy font from:
- [Font Squirrel](https://www.fontsquirrel.com/fonts/gilroy)
- [MyFonts](https://www.myfonts.com/fonts/radomir-tinkov/gilroy/)
- [Fontspring](https://www.fontspring.com/fonts/radomir-tinkov/gilroy)

## Usage

The fonts are automatically loaded in the application through:
- `src/lib/fonts.ts` - Font configuration
- `src/app/layout.tsx` - Font application
- `tailwind.config.ts` - Tailwind font family configuration

## Fallbacks

If Gilroy fonts are not available, the system will fall back to:
- `system-ui` - System default font
- `sans-serif` - Generic sans-serif font
