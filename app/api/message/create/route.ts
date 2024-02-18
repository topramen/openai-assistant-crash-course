import { NextRequest } from "next/server";
import OpenAI from "openai";
import * as Core from "openai/core"

export async function POST(req: NextRequest) {
  const { message, threadId } = await req.json();

  if (!threadId || !message)
    return Response.json({ error: "Invalid message" }, { status: 400 });

  const apiKey = Core.readEnv('OPENAI_API_KEY') || '';
  const openai = new OpenAI({apiKey: apiKey});
  try {
    const threadMessage = await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: message,
    });

    console.log(threadMessage);

    return Response.json({ message: threadMessage });
  } catch (e) {
    console.log(e);
    return Response.json({ error: e });
  }
}
