import OpenAI from "openai";
//import  to read the environment variables
import * as Core from "openai/core"

export async function GET() {
    const openai = new OpenAI();

    try {
        const assistantId = Core.readEnv('OPENAI_API_KEY') || '';
        const assistant = await openai.beta.assistants.retrieve(assistantId);

        console.log(assistant);

        return Response.json({ assistant: assistant });
    } catch (e) {
        console.log(e);
        return Response.json({ error: e });
    }
}
