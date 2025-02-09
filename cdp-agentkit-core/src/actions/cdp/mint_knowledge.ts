import { CdpAction } from "./cdp_action";
import { Wallet } from "@coinbase/coinbase-sdk";
import { z } from "zod";

const MINT_KNOWLEDGE_PROMPT = `
This is a placeholder action for minting knowledge.
For now, it simply returns "success".
`;

/**
 * Input schema for mint knowledge action.
 * Currently, it does not expect any specific input.
 */
export const MintKnowledgeInput = z
  .object({})
  .strip()
  .describe("Placeholder input for mint knowledge action");

/**
 * Placeholder function for minting knowledge.
 *
 * @param wallet - The wallet to use (not used in this placeholder).
 * @param args - The input arguments (not used in this placeholder).
 * @returns A promise that resolves to a success message.
 */
export async function mintKnowledge(
  wallet: Wallet,
  args: z.infer<typeof MintKnowledgeInput>,
): Promise<string> {
  return "success";
}

/**
 * Mint knowledge action.
 */
export class MintKnowledgeAction implements CdpAction<typeof MintKnowledgeInput> {
  public name = "mint_knowledge";
  public description = MINT_KNOWLEDGE_PROMPT;
  public argsSchema = MintKnowledgeInput;
  public func = mintKnowledge;
}
