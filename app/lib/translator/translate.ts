import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";

const parser = new StringOutputParser();
const model = new ChatOpenAI({ model: "gpt-4" });
const systemTemplate = "Translate the following into {language}:";
const promptTemplate = ChatPromptTemplate.fromMessages([
    ["system", systemTemplate],
    ["user", "{text}"],
]);

const llmChain = promptTemplate.pipe(model).pipe(parser);

export async function translate(text: string, language: string) {
    const promptValue = {
        language,
        text,
    };

    const result = await llmChain.invoke(promptValue);
    return result;
}

