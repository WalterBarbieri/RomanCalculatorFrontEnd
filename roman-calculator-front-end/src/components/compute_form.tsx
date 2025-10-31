import { useState, type FormEvent } from "react";

import { useRomanCalculator } from "../hooks/use_roman_calculator";

export default function ComputeForm() {
  const [value1, setValue1] = useState<number | "">("");
  const [value2, setValue2] = useState<number | "">("");
  const [operator, setOperator] = useState<string>("add");

  const {
    loading,
    error,
    computedResult,
    handleComputeAndConvert,
    clearError,
  } = useRomanCalculator();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value1 !== "" && value2 !== "") {
      handleComputeAndConvert(Number(value1), Number(value2), operator);
      setValue1("");
      setValue2("");
    } else {
      return;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Compute and Convert
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <input
            type="number"
            value={value1}
            id="value1"
            name="value1"
            onChange={(e) =>
              setValue1(e.target.value === "" ? "" : Number(e.target.value))
            }
            placeholder="Number (1-3999)"
            className="border border-gray-300 p-2 rounded flex-1 min-w-0"
          />
          <select
            id="operator"
            name="operator"
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
            className=" text-xl"
          >
            <option value="add">+</option>
            <option value="subtract">-</option>
          </select>
          <input
            type="number"
            value={value2}
            id="value2"
            name="value2"
            onChange={(e) =>
              setValue2(e.target.value === "" ? "" : Number(e.target.value))
            }
            placeholder="Number (1-3999)"
            className="border border-gray-300 p-2 rounded flex-1 min-w-0"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {loading ? "Computing..." : "Convert"}
        </button>
      </form>

      {computedResult && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p>
            <strong>Computation:</strong>
             {` ${computedResult.value1} ${
              computedResult.operator === "add" ? "+" : "-"
            } ${computedResult.value2}`}
          </p>
          <p>
            <strong>Computed Value:</strong> {computedResult.result}
          </p>
          <p>
            <strong>Roman Numeral:</strong> {computedResult.roman_result}
          </p>
        </div>
      )}

      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex justify-between items-center">
          <p className="text-red-700 font-medium">{error.error}</p>
          <button
            onClick={() => clearError()}
            className="font-bold text-red-700"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
