import { ProsConsResponse } from "../../interfaces/proscons.response";

export const prosConsStreamUseCase = async (prompt: string) => {
  try {
    const resp = await fetch(
      `${import.meta.env.VITE_GPT_API}/pros-cons-discusser-stream`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
        //TODO: abortSignal
      }
    );

    if (!resp.ok) throw new Error("No se pudo realizar la corrección");

    const reader = resp.body?.getReader();
    if (!reader) {
      console.log("No se pudo generar el reader");
      return null;
    }

    return reader;

    /*
        const decoder = new TextDecoder();

        let text = '';

        while(true) {
          const { done, value } = await reader.read();
          if(done) break;
          const decoded = decoder.decode(value, {stream: true});
          text += decoded;
          console.log(text);
        }
          */
  } catch (error) {
    console.log("Error en el use case", error);
    return null;
  }
};