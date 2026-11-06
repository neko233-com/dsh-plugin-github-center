import { createCommunityTool } from './agent.mjs'
export const name = 'dsh-plugin-github-center'
export const inject = ['tools']
export function apply(ctx) { ctx.tools.register(createCommunityTool(ctx)) }
