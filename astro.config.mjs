import {defineConfig} from 'astro/config';

export default defineConfig({
	outDir: './docs',
	base: process.env.NODE_ENV === 'production' ? '/cube-instructions/' : '/',
	build: {
		assets: 'assets',
	}
});
