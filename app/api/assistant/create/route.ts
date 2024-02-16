import OpenAI from "openai";

export async function GET() {
  const openai = new OpenAI();

  try {
    const assistant = await openai.beta.assistants.create({
      instructions: `
        You are good at inspecting resumes.
        `,
      name: "App - Resume Inspector",
      tools: [{ type: "retrieval" }],
      model: "gpt-4-turbo-preview",
    });

    console.log(assistant);

    return Response.json({ assistant: assistant });
  } catch (e) {
    console.log(e);
    return Response.json({ error: e });
  }
}
