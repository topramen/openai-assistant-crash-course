import { NextRequest } from "next/server";
import OpenAI from "openai";
import * as Core from "openai/core"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const threadId = searchParams.get("threadId");
  const runId = searchParams.get("runId");

  if (!threadId)
    return Response.json({ error: "No thread id provided" }, { status: 400 });
  if (!runId)
    return Response.json({ error: "No run id provided" }, { status: 400 });

  const apiKey = Core.readEnv('OPENAI_API_KEY') || '';
  const openai = new OpenAI({apiKey: apiKey});
  try {
    const run = await openai.beta.threads.runs.retrieve(threadId, runId);

    console.log(run);

    return Response.json({ run: run });
  } catch (e) {
    console.log(e);
    return Response.json({ error: e });
  }
}
