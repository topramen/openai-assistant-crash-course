import OpenAI from "openai";
import * as Core from "openai/core"

export async function GET() {
  const apiKey = Core.readEnv('OPENAI_API_KEY') || '';
  const openai = new OpenAI({apiKey: apiKey});
  try {
    const thread = await openai.beta.threads.create();

    console.log(thread);

    return Response.json({ thread: thread });
  } catch (e) {
    console.log(e);
    return Response.json({ error: e });
  }
}
