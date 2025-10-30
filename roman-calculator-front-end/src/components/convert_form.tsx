import { type FormEvent, useState } from "react";
import { useRomanCalculator } from "../hooks/use_roman_calculator";

export default function ConvertForm() {
  const [value, setValue] = useState<number | "">("");

  const { loading, error, simpleResult, handleSimpleConvert, clearError } =
    useRomanCalculator();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value !== "") {
      handleSimpleConvert(Number(value));
    } else {
      return;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Single Value Converter
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="number"
          placeholder="Enter a number (1-3999)"
          className="border p-2 rounded-lg"
          value={value}
          onChange={(e) =>
            setValue(e.target.value === "" ? "" : Number(e.target.value))
          }
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Converting..." : "Convert"}
        </button>
      </form>

      {simpleResult && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p>
            <strong>Roman Numeral:</strong> {simpleResult.roman}
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
