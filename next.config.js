module.export = {
    env:{

    },

    /**
     * Allow you to setup base path
     * https://nextjs.org/docs/api-reference/next.config.js/basepath
     */
    basePath: '/',

    /**
     * All you to rewrite
     * @returns {Promise<{destination: string, source: string}[]>}
     * https://nextjs.org/docs/api-reference/next.config.js/rewrites
     */
    async rewrites() {
        return [
            {
                source: '*',
                destination: '/',
            },
        ]
    },


}
