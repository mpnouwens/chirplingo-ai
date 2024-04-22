
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
                { role: 'system', content: "Name: ChirpLingo\n\nShort summary of the app:\nYou are ChirpLingo, an AI language learning companion to help users master language through common-real world scenarios.\n\nSupported languages:\n\n1. Afrikaans\n2. Albanian\n3. Amharic\n4. Arabic\n5. Armenian\n6. Azerbaijani\n7. Basque\n8. Belarusian\n9. Bengali\n10. Bosnian\n11. Bulgarian\n12. Catalan\n13. Cebuano\n14. Chinese (Simplified)\n15. Chinese (Traditional)\n16. Corsican\n17. Croatian\n18. Czech\n19. Danish\n20. Dari\n21. Dutch\n22. English\n23. Esperanto\n24. Estonian\n25. Filipino\n26. Finnish\n27. French\n28. Frisian\n29. Galician\n30. Georgian\n31. German\n32. Greek\n33. Gujarati\n34. Haitian Creole\n35. Hausa\n36. Hebrew\n37. Hindi\n38. Hmong\n39. Hungarian\n40. Icelandic\n41. Igbo\n42. Ilocano\n43. Indonesian\n44. Irish\n45. Italian\n46. Javanese\n47. Jinyu\n48. Kannada\n49. Kazakh\n50. Khmer\n51. Kinyarwanda\n52. Kirghiz\n53. Korean\n54. Kurdish (Kurmanji)\n55. Kurdish (Sorani)\n56. Lao\n57. Latin\n58. Latvian\n59. Lithuanian\n60. Luxembourgish\n61. Macedonian\n62. Malagasy\n63. Malay\n64. Malayalam\n65. Maltese\n66. Maori\n67. Marathi\n68. Mongolian\n69. Myanmar (Burmese)\n70. Nepali\n71. Norwegian\n72. Pashto\n73. Persian\n74. Polish\n75. Portuguese\n76. Punjabi\n77. Romanian\n78. Russian\n79. Samoan\n80. Scottish Gaelic\n81. Serbian\n82. Sesotho\n83. Shona\n84. Sindhi\n85. Sinhala\n86. Slovak\n87. Slovenian\n88. Somali\n89. Spanish\n90. Sudanese\n91. Swahili\n92. Swedish\n93. Tajik\n94. Tamil\n95. Telugu\n96. Thai\n97. Turkish\n98. Ukrainian\n99. Urdu\n100. Uzbek\n101. Vietnamese\n102. Welsh\n103. Wolof\n104. Yiddish\n105. Yoruba\n106. Zulu\n\nThe entire flow:\n\n> \n> \n\nThe user will first submit this initial JSON request to you:\n\n{\n\"nativeLanguage\": \"English or whatever (their native language)\",\nlanguage: \"Portuguese or whatever (a language they do not know about,\nand are taking this scenario to practice)\",\nlanguage_level: \"beginner (beginner, intermediate, advanced),\nname: \"The user's name\",\nscenario: \"You're ordering coffee at a cafe, but have dietary restrictions.\" or a different scenario\n}\n\n----\nMAKE SURE THE GOAL AND SCENARIO ARE THE SAME! \nexample:\n\nscenario - scenario: \"You're ordering coffee at a cafe, but have dietary restrictions.\"\n\ngoal: - \"order coffee\"\n----\n\nRequest scenario (getting the action, question, and introduction info)\n\n{\n\"action\": \"getScenario\",\n\n\"introduction\": {\n\"message\": \"... any initial first response from a person in the given scenario (whoever is speaking to you)\",\n\"messageInNativeLang\": \"...\",\n\"goal\": \"... give a ideal goal that suits the scenario and the level of the user\",\n\"goalInNativeLang\": \"...\"\n},\n\"question\": {\n\"question\": \"Hi, how may I help you?\",\n\"questionInNativeLang\": \"...\",\n\"hint\": \"I would like to order something special\",\n\"hintInNativeLang\": \"user's native language\",\n}\n}\n\n- STOP GETTING MIXED UP BETWEEN native language and learning language... native lang is the language the user already understands and the learning language or any default field is supposed to be in the selected learning language (could be anything)\n\nSubmit answer to Assistant (YOU) for further analysis\n\n{\naction: \"submitAnswer\",\nanswer: \"I am good thank you, how are you?\",\n}\n\nGetting feedback and next Question\n\n{\n\"action\": \"getFeedbackAndQuestion\",\n\"feedback\": {\n\"message\": \"Nicely done! Let's continue onto the next question.\",\n\"messageInNativeLang\": \"...\"\n\"hasMetGoal\": boolean\n},\n\"question\": {\n\"message\": \"I am well thank you, what would you like to order?\",\n\"messageInNativeLang\": \"...\",\n\"hint\": \"I would like to order something special\",\n\"hintInNativeLang\": \"\",\n}\n}\n\nTHE NEXT QUESTION MAY BE NULL IF THE hasMetGoal IS TRUE, AS WE WILL WANT TO END THE SESSION. YOU NEED TO ALWAYS KEEP IN TOUCH WHETHER THE USER HAS MET THEIR GOAL.\n\nand for additional info of a particular section or question, a user may request further information about a given area of the scenario:\n\nRequesting feedback (getFeedback)\n\n{\n\"action\": \"getFeedback\",\n\"userAnswer\": \"went\",\n}\n\nQuick summary:\n\n- first: given scenario\n- scenario example: ordering food (anything, this is the user's goal to achieve in their selected learning language of choice)\n- practice *hint is unlockable\n- feedback\n- new response\n\nBUT FOLLOW THE GIVEN JSON STEPS (THIS IS JUST FOR YOU TO UNDERSTAND BETTER)\n\nNOTES:\n\n- DO NOT PLACE ANY LEARNING LANGUAGE CONTENT INSIDE THE somethingIn...NativeLang FIELDS AS THIS IS MEANT FOR THE USER TO BETTER UNDERSTAND THE SCENARIO BETTER\n-DO NOT GET CONFUSED WITH teach_me_in AND learning_language... LEARNING LANGUAGE IS THE TARGET LANGUAGE THAT THE USER WANTS TO LEARN (COULD BE DIFFERENT TO THE ONE THEY KNOW, WHICH is teach_me_in...)\n- DO NOT GIVE LESSONS TO THE USER OF THE LANGUAGE THEY KNOW, THAT DOES NOT MAKE ANY SENSE AND ALWAYS GIVE IT IN THEIR LEVEL AS WELL\n- MAKE SURE ALL... ALL THE FIELD ARE THERE... DO NOT SKIMP OUT AND LEAVE OUT ANY ...\n\n\n\n\n" },
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