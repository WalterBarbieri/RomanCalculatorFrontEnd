import { useState } from "react";
import type { ApiError } from "../types/api_error";
import type { SimpleConvert } from "../types/simple_convert";
import type { ComputedConvert } from "../types/computed_convert";
import { computeAndConvert, simpleConvert } from "../services/roman_calculator_service";


export function useRomanCalculator() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<ApiError | null>(null)
    const [simpleResult, setSimpleResult] = useState<SimpleConvert | null>(null)
    const [computedResult, setComputedResult] = useState<ComputedConvert | null>(null)

    async function handleSimpleConvert(value: number) { 
        setLoading(true)
        setError(null)
        try {
            const response = await simpleConvert(value)
            setSimpleResult(response)
        } catch (error) {
            setError(error as ApiError)
            setSimpleResult(null)
        } finally {
            setLoading(false)
        }
    }

    async function handleComputeAndConvert(value1: number, value2: number, operator: string) {
        setLoading(true)
        setError(null)

        try {
            const response = await computeAndConvert(value1, value2, operator)
            setComputedResult(response)
        } catch (error) {
            setError(error as ApiError)
            setComputedResult(null)
        } finally {
            setLoading(false)
        }
    }

    async function clearError() {
        setError(null)
    }

    return {
        loading,
        error,
        simpleResult,
        computedResult,
        handleSimpleConvert,
        handleComputeAndConvert,
        clearError
    }
}