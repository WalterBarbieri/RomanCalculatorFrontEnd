# Front-end React for Roman Calculator

## Prerequisites
- Node.js >= 18
- npm
- Vite/React environment 

## Running the App
- npm install
- npm run dev

## Style
- tailwind CSS v.3

## Structure
### API CALLS
- roman_calculator_service.ts
  - simpleConvert(value: number) => Promise<SimpleConvert>
  - return SimpleConvert interface:
  ```ts
  export interface SimpleConvert {
  roman: string
  value: number
  }
```
- simpleConvert(value: number) => Promise<SimpleConvert>
  - return SimpleConvert interface:
  ```ts
  export interface SimpleConvert {
  roman: string
  value: number
  }
```
