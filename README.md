# TP5 - Web Technology Project

This repository contains two implementations of the same application using different frontend frameworks: Angular and React. Both versions interact with the same backend API.

## Project Structure

```plaintext
tp5/
├── angular-v/     # Angular implementation
├── react-v/       # React implementation
└── api/           # Backend API
```

## Common Features

Both implementations share the following features:
- User Authentication (Login/Register)
- Session Management
- Material Design UI Components
- Form Validation
- Responsive Layout

## Angular Version (angular-v)

### Technical Stack
- Angular 19.2.0
- Angular Material UI 19.2.4
- RxJS 7.8.0
- TypeScript 5.7.2

### Key Features
- Modular architecture with lazy loading
- Reactive Forms for form handling
- Angular Material components for UI
- Environment-based configuration
- Unit testing setup with Jasmine

### Getting Started
1. Install dependencies:
```bash
cd angular-v && npm install
```

2. Start development server:
```bash
ng serve
```

3. Build for production:
```bash
ng build
```

## React Version (react-v)

### Technical Stack
- React with TypeScript
- Vite as build tool
- Shadcn UI components
- Tailwind CSS
- Lucide icons

### Key Features
- Modern React patterns with hooks
- Type-safe development with TypeScript
- Utility-first CSS with Tailwind
- Custom hooks for session management
- Component library with Shadcn UI

### Getting Started
1. Install dependencies:
```bash
cd react-v && npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Environment Configuration

### Angular Environment
The Angular version uses two environment files:
- `environment.ts` for default configuration
- `environment.development.ts` for development-specific settings

### React Environment
The React version uses:
- `.env` file for environment variables
- `vite.config.ts` for build configuration

## Development Guidelines

### Code Style
- Angular follows the official Angular style guide
- React implementation uses ESLint and TypeScript strict mode
- Both versions maintain consistent code formatting using EditorConfig

### Testing
- Angular: Jasmine and Karma for unit testing
- React: Vite test runner with React Testing Library

## API Integration

Both versions communicate with the backend API located in the `api/` directory. The API endpoints are configured through environment variables:
- Angular: `environment.API_URL`
- React: `VITE_API_URL`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

