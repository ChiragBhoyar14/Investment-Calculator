# Investment Calculator

This project is an Angular-based Investment Calculator created for learning and practice purposes.

## Features

- Enter initial investment, annual investment, expected return, and duration.
- Calculates annual investment growth and displays results in a table.
- Uses Angular standalone components, signals and service.
- **Module-based approach available in the `feature/module-approach` branch!**  
  If you prefer working with Angular's traditional NgModules, check out the [feature/module-approach](https://github.com/<your-repo-url>/tree/feature/module-approach) branch.

## Technology Stack

- **Angular**: v18 (latest features including standalone components, signals and services)
- **TypeScript**: v5.4 (type-safe, modern JavaScript superset)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd Investment-Calculator
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Application

Start the development server:
```sh
npm start
```
Navigate to [http://localhost:4200](http://localhost:4200) in your browser.

## Project Structure

- `src/app/user-input/` - User input form for investment parameters.
- `src/app/investment-result/` - Displays calculated investment results.
- `src/app/investment.service.ts` - Business logic for calculations.
- `src/app/investment-input.model.ts` - Type definitions.

## Learning Goals

- Practice Angular standalone components, signals and service.
- Understand reactive state management.
- Learn how to structure Angular projects.
- Gain experience with TypeScript for safer, scalable code.
- Explore both standalone and module-based Angular design patterns.

## License

This project is for educational purposes only.
