import type { AudioToTextResponse } from "../../interfaces";

export const audioToTextUseCase = async (audioFile: File, prompt?: string) => {
  try {
    const formData = new FormData();
    formData.append("file", audioFile);

    const resp = await fetch(`${import.meta.env.VITE_GPT_API}/audio-to-text`, {
      method: "POST",
      body: formData,
    });

    const data = (await resp.json()) as AudioToTextResponse;

    return {
      ok: true,
      res: data.text,
    };
  } catch (error) {
    return {
      ok: false,
      message: "Error al convertir audio a texto",
    };
  }
};
