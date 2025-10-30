import type { ApiError } from "../types/api_error";
import type { ComputedConvert } from "../types/computed_convert";
import type { SimpleConvert } from "../types/simple_convert";


const API_URL = 'http://127.0.0.1:5000/api/calculator'

export async function simpleConvert(value: number): Promise<SimpleConvert> {
    const response = await fetch(`${API_URL}/convert`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value }),
    })

    const data = await response.json()
    if(!response.ok) {
        throw data as ApiError
    }
    return data as SimpleConvert
}

export async function computeAndConvert(value1: number, value2: number, operator: string): Promise<ComputedConvert> {
    const response = await fetch(`${API_URL}/compute`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value1, value2, operator }),
    })

    const data = await response.json()
    if(!response.ok) {
        throw data as ApiError
    }
    return data as ComputedConvert
}
