import OpenAI from "openai";
//import  to read the environment variables
import * as Core from "openai/core"

export async function GET() {
    const apiKey = Core.readEnv('OPENAI_API_KEY') || '';
    const openai = new OpenAI({apiKey: apiKey});
    console.log ("openAI: " + openai);
    try {
        const assistantId = Core.readEnv('ASSISTANT_ID') || '';
        const assistant = await openai.beta.assistants.retrieve(assistantId);

        console.log(assistant);

        return Response.json({ assistant: assistant });
    } catch (e) {
        console.log(e);
        return Response.json({ error: e });
    }
}
