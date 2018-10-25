module.exports = {
    parser: false,
    plugins: {
        'postcss-cssnext': {
            browsers: ['> 1%', 'last 2 versions', 'iOS >= 7', 'Android >= 4']
        },
        'postcss-pxtorem': {
            rootValue: 37.5,
            propWhiteList: []
        }
    }
}
