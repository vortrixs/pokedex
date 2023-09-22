import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig[] = [
	{
		testDir: './tests/lib',
		testMatch: /(.+\.)?(test)\.[jt]s/
	},
	{
		webServer: {
			command: 'npm run build && npm run preview',
			port: 4173
		},
		testDir: './tests/e2e',
		testMatch: /(.+\.)?(test)\.[jt]s/
	}
];

export default config;
