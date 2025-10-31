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
#### Service: roman_calculator_service.ts
- POST API_URL/convert 
```ts
   simpleConvert(value: number) => Promise<SimpleConvert>
```
- return SimpleConvert interface:
```ts
  export interface SimpleConvert {
  roman: string
  value: number
  }
```
- POST API_URL/compute 
```ts
 computeAndConvert(value1: number, value2: number, operator: string) => Promise<ComputedConvert>
```
- return ComputedConvert interface:
```ts
  export interface ComputedConvert {
  operator: string
  result: number
  roman_result: string
  value1: number
  value2: number
  }
```
- Intercept all backend errors and throw them as ApiError interface:
```ts
  export interface ApiError {
    code: string
    error: string
   }
```
### Hooks
- use_roman_calculator.tsx
   - Incapsulate API logic
   - Handle response state
   - Handle error state
   - Handle loading state
      - Usage:
 ```ts
    const { loading, error, simpleResult, handleSimpleConvert, clearError } =
    useRomanCalculator();
```   
### Components
- convert_form.tsx
   - Input form to convert single number
   - Show Result
   - Show Error
   - Use use_roman_calculator hook
- compute_form.tsx
   - Input form to compute (add and subtract) 2 numbers
   - Show Result
   - Show Error
   - Use use_roman_calculator hook
