import OpenAI from "openai";
import * as Core from "openai/core"

export async function GET() {
  const assistantId = process.env.ASSISTANT_ID || '';
  const openai = new OpenAI({apiKey: assistantId});
  try {
    const thread = await openai.beta.threads.create();

    console.log(thread);

    return Response.json({ thread: thread });
  } catch (e) {
    console.log(e);
    return Response.json({ error: e });
  }
}
