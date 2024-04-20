
import OpenAI from "openai";
import fs from "fs";
import Groq from "groq-sdk";

const groq = new Groq();
// WIP: Move this out
const openai = new OpenAI({
    apiKey: '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',
    organization: 'org-pvMXX76YoaPHDdOiyFLIX8vu',
});


async function transcribeAudio(blob: string) {
    const transcription = await openai.audio.transcriptions.create({
        file: fs.createReadStream(blob),
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
async function textToSpeech(text: string) {
    const speechFile = `${text}-${Date.now()}.mp3`;

    const mp3 = await openai.audio.speech.create({
        model: "tts-1",
        voice: "alloy",
        input: text,
    });
    console.log(speechFile);
    const buffer = Buffer.from(await mp3.arrayBuffer());
    await fs.promises.writeFile(speechFile, buffer);
    return speechFile;

}

export {
    transcribeAudio,
    textToSpeech,
    runAssistant
}