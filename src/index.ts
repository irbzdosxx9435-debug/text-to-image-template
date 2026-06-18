export default {
	async fetch(_request: Request, env: Env): Promise<Response> {
		const inputs = {
			prompt: "油画风格的全球各大城市地标,带城市名称",
		} satisfies AiTextToImageInput;

		const response =
			await env.AI.run<"@cf/runwayml/stable-diffusion-v1-5-img2img">(
				"@cf/runwayml/stable-diffusion-v1-5-img2img",
				inputs,
			);

		return new Response(response, {
			headers: {
				"content-type": "image/png",
			},
		});
	},
} satisfies ExportedHandler<Env>;
