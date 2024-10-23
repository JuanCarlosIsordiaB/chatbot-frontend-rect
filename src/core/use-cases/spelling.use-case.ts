import type { SpellingResponse } from "../../interfaces";

export const spellingUseCase = async (prompt: string) => {
  try {
    const resp = await fetch(
      `${import.meta.env.VITE_GPT_API}/spelling-checker`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      }
    );

    if (!resp.ok) throw new Error("No se pudo realizar la corrección");

    const data = (await resp.json()) as SpellingResponse;

    return {
      ok: true,
      ...data,
    };
  } catch (error) {
    return {
      ok: false,
      userScore: 0,
      errors: [],
      message: "Correction failed",
    };
  }
};
