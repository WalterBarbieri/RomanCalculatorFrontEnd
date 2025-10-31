# Front-end React for Roman Calculator

## Prerequisites
- Node.js >= 18
- npm
- Vite/React environment 

## Running the App
```bash
npm install
npm run dev
```

## Styling
- tailwind CSS v.3

## Structure
### API CALLS
#### Service: roman_calculator_service.ts
- POST API_URL/convert 
```ts
   simpleConvert(value: number) => Promise<SimpleConvert>
```
- Response Type:
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
- Response Type:
```ts
  export interface ComputedConvert {
  operator: string
  result: number
  roman_result: string
  value1: number
  value2: number
  }
```
- Error Type:
```ts
  export interface ApiError {
    code: string
    error: string
   }
```
### Hooks
#### use_roman_calculator.tsx
Encapsulates API logic and manages:
   -Response state
   -Error state
   - Loading state
      - Usage example:
```ts
    const { loading, error, simpleResult, handleSimpleConvert, clearError } =
    useRomanCalculator();
```   
### Components
#### convert_form.tsx
   - Input form to convert single number
   - Displays result and errors
   - Uses useRomanCalculator hook
#### compute_form.tsx
   - Input form to compute (add and subtract) 2 numbers
   - Show Result
   - Show Error
   - Uses useRomanCalculator hook
