const PROD_SERVER= {
  url: 'https://margaridafp.github.io/qr-invoice-reader',
  allowNavigation: ['margaridafp.github.io/qr-invoice-reader'],
};

const DEV_SERVER = {
  url: 'http://localhost:3000',
  allowNavigation: ['localhost'],
  clearText: true,
};

const server = process.env.CI ? PROD_SERVER : DEV_SERVER;

export default {
  appId: 'margaridafp.github.io',
  appName: 'qr-invoice-reader',
  bundledWebRuntime: false,
  npmClient: 'yarn',
  server,
  cordova: {},
};
