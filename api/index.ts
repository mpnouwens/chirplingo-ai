
import OpenAI from "openai";
import Groq from "groq-sdk";
import path from "path";

const groq = new Groq({
    apiKey: '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',
    dangerouslyAllowBrowser: true,
});
// WIP: Move this out
const openai = new OpenAI({
    apiKey: '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',
    organization: 'org-pvMXX76YoaPHDdOiyFLIX8vu',
    dangerouslyAllowBrowser: true,

});


async function transcribeAudio(blob: Blob | null) {
    if (!blob) {
        return;
    }

    const file = new File([blob], "audio.wav", { lastModified: Date.now() });
    const transcription = await openai.audio.transcriptions.create({
        file,
        model: "whisper-1",
        response_format: "verbose_json",
        timestamp_granularities: ["segment"]
    });

    console.log(transcription.text);
    return transcription.text;
}


// pass text to groq sdk assistant to get response, the assistant will be trained to respond to text
const runAssistant = async (text: string) => {
    const chatCompletion = await groq.chat.completions
        .create({
            messages: [
                { role: 'system', content: 'You are a helpful assisstant.' },
                { role: 'user', content: text },
            ],
            model: 'mixtral-8x7b-32768',
            response_format: {
                type: 'json_object',
            },
            temperature: 2,
        })
        .catch(async (err) => {
            if (err instanceof Groq.APIError) {
                console.log(err.status); // 400
                console.log(err.name); // BadRequestError
                console.log(err.headers); // {server: 'nginx', ...}
            } else {
                throw err;
            }
        });

    console.log(chatCompletion);
    return chatCompletion;
}

// use open ai to convert response to voice audio via text to speech
const speechPrompt = async (text: string) => {
    console.log('speechPrompt called');
    const mp3 = await openai.audio.speech.create({
        model: "tts-1",
        voice: "nova",
        speed: 0.96,
        input: text,
    });

    const blob = new Blob([await mp3.arrayBuffer()], { type: "audio/mpeg" });
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audio.play();
    return blob;
};


export {
    transcribeAudio,
    speechPrompt,
    runAssistant
}