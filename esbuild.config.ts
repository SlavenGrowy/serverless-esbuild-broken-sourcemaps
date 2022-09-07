const { esbuildDecorators } = require('@anatine/esbuild-decorators')

module.exports = (serverless) => ({
    plugins: [
        esbuildDecorators()
    ],
    bundle: true,
    minify: false,
    logLevel: 'info',
    sourcemap: 'inline',
    format: 'cjs',
    platform: '',
    keepOutputDirectory: true,
    exclude: ['aws-sdk']
})
