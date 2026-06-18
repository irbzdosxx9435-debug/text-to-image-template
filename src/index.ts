export default {
	async fetch(_request: Request, env: Env): Promise<Response> {
		const inputs = {
			prompt: "油画风格的富士山",
			num_steps: 30,
			guidance: 7.5,
			seed: Math.floor(Math.random() * 1000)
		} satisfies AiTextToImageInput;

		const response =
			await env.AI.run<"@cf/stabilityai/stable-diffusion-xl-base-1.0">(
				"@cf/stabilityai/stable-diffusion-xl-base-1.0",
				inputs,
			);

		return new Response(response, {
			headers: {
				"content-type": "image/png",
			},
		});
	},
} satisfies ExportedHandler<Env>;
