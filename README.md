# Horizon - Professional Design System

A pixel-perfect, professional design system built with Next.js 15, TypeScript, Tailwind CSS, and React Icons. Designed for serious clients who demand excellence in every detail.

## 🚀 Features

- **Next.js 15** with App Router and Turbopack for lightning-fast development
- **TypeScript** with strict configuration for type safety
- **Tailwind CSS** with custom design system and Gilroy font integration
- **React Icons** for beautiful, consistent iconography
- **ESLint & Prettier** for code quality and consistency
- **Pre-commit hooks** with Husky and lint-staged
- **Professional project structure** with organized components and utilities
- **Accessibility-first** design with proper focus management and ARIA support
- **Responsive design** with mobile-first approach
- **Custom animations** and smooth transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Font**: Gilroy (SemiBold & Regular)
- **Linting**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged

## 📁 Project Structure

```
horizon/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable React components
│   │   ├── ui/             # Base UI components
│   │   ├── layout/         # Layout components
│   │   └── forms/          # Form components
│   ├── lib/                # Library configurations
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── styles/             # Additional styles
│   └── constants/          # Application constants
├── public/
│   └── fonts/              # Font files (Gilroy)
├── .husky/                 # Git hooks
└── config files            # ESLint, Prettier, Tailwind, etc.
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd horizon
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Add Gilroy font files**

   Download the Gilroy font files and place them in `public/fonts/`:
   - `Gilroy-SemiBold.woff2`
   - `Gilroy-SemiBold.woff`
   - `Gilroy-Regular.woff2`
   - `Gilroy-Regular.woff`

   **Font Source**: The Gilroy font files can be found in this [GitHub Gist](https://gist.github.com/devesh111/d81a3ebac44c2359c045252a5ed9612f) which contains the complete Gilroy font family in various weights and formats.

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design System

### Colors

The design system includes a comprehensive color palette:

- **Primary**: Blue tones for main actions and branding
- **Secondary**: Gray tones for text and backgrounds
- **Success**: Green tones for positive actions
- **Warning**: Yellow/Orange tones for warnings
- **Error**: Red tones for errors and destructive actions

### Typography

- **Font Family**: Gilroy (Regular & SemiBold)
- **Responsive**: Scales appropriately across all screen sizes
- **Accessible**: Proper contrast ratios and readable sizes

### Components

Pre-built components include:

- **Button**: Multiple variants (primary, secondary, outline, ghost, destructive)
- **Input**: Form inputs with validation states
- **Card**: Content containers with multiple styles
- **Layout**: Header, footer, and navigation components

## 🔧 Configuration

### TypeScript

Strict TypeScript configuration with:

- No unused locals/parameters
- Exact optional property types
- No implicit returns
- No unchecked indexed access

### ESLint

Comprehensive linting rules for:

- TypeScript best practices
- React best practices
- Import organization
- Code quality standards

### Prettier

Consistent code formatting with:

- Single quotes
- Semicolons
- 2-space indentation
- 80 character line length

### Pre-commit Hooks

Automatic code quality checks:

- ESLint fixes
- Prettier formatting
- TypeScript type checking

## 🎯 Best Practices

### Code Quality

- **Type Safety**: Use TypeScript strictly
- **Component Structure**: Follow the established patterns
- **Accessibility**: Include proper ARIA labels and keyboard navigation
- **Performance**: Optimize images and use proper loading strategies

### Styling

- **Tailwind Classes**: Use the design system classes
- **Responsive Design**: Mobile-first approach
- **Consistent Spacing**: Use the defined spacing scale
- **Color Usage**: Stick to the defined color palette

### Git Workflow

- **Pre-commit**: All code is automatically linted and formatted
- **Commit Messages**: Use conventional commit format
- **Branch Strategy**: Feature branches for new development

## 📱 Responsive Design

The design system is built with a mobile-first approach:

- **Breakpoints**: xs (0px), sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- **Grid System**: CSS Grid and Flexbox for layouts
- **Typography**: Responsive font sizes
- **Spacing**: Consistent spacing scale across all devices

## ♿ Accessibility

Built with accessibility in mind:

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels and descriptions
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Focus Management**: Visible focus indicators
- **Semantic HTML**: Proper HTML structure

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run the linting and formatting tools
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- Create an issue in the repository
- Check the documentation
- Review the component examples

---

Built with ❤️ for pixel-perfect, professional web applications.
