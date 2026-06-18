export default {
	async fetch(_request: Request, env: Env): Promise<Response> {
		const inputs = {
			prompt: "油画风格的全球各大城市地标,带城市名称",
			num_steps: 30,		  // 增加步数可以提高画质
			guidance: 7.5,        // 调整与提示词的贴合度
			seed: Math.floor(Math.random() * 1000) // 随机种子，每次生成都不一样
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
