const { openai } = require('../openai')

/**
 * Route handler for GET chat-example
 *
 * @param { import("gadget-server").RouteContext } request context - Everything for handling this route, like the api client, Fastify request, Fastify reply, etc. More on effect context: https://docs.gadget.dev/guides/extending-with-code#effect-context
 *
 * @see {@link https://www.fastify.io/docs/latest/Reference/Request}
 * @see {@link https://www.fastify.io/docs/latest/Reference/Reply}
 */
module.exports = async ({ request, reply, api, logger, connections }) => {
  const completionResponse = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "user", content: request.query.message }
    ],
  });

  const textResponse = completionResponse.data.choices[0].message.content
  logger.info({ textResponse }, "got response from LLM")
  await reply.send(textResponse);
}
