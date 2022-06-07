module.exports = {
    lintOnSave:false,
    css:{
        loaderOptions:{
            postcss:{
                plugins:[
                    require('postcss-pxtorem')({
                        // remUnit:75,
                        rootValue:75,
                        propList:['*']
                    })
                ]
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
}
