# webpack-env-loader
--------------------

Load app settings in JSON format depending on running environment. You can set multiple apps with their own environments settings.


# Add it to your project
------------------------

    npm install webpack-env-loader --save-dev

# How to use it ?
-----------------

1. in your webpack.config.js

        module.exports = {
            entry: ...,
            loader: {
                appSettings: {
                    name: {myAppName}, // string, default to 'app'
                    env: {myEnv} // string, default to 'development'
                }
            },
            output: ...
        }

2. in your file

        var settings = require('webpack-env-loader!./path/to/settings')


# Settings examples
-------------------

+ with app support

        module.exports = {
            "app1": {
                "development": {
                    "api": "dev.api.com",
                    "key": "apiKey"
                },
                "production": {
                    "api": "live.api.com",
                    "key": "apiKey"
                }
            },
            "app2": {
                "development": {
                    "api": "dev.api.com",
                    "key": "apiKey"
                },
                "production": {
                    "api": "live.api.com",
                    "key": "apiKey"
                }
            }
        }

    only the app and environment specified in your webpack.config.js will be compiled

+ without app support

        module.exports = {
            "development": {
                "api": "dev.api.com",
                "key": "apiKey"
            },
            "test": {
                "api": "test.api.com",
                "key": "apiKey"
            },
            "production": {
                "api": "live.api.com",
                "key": "apiKey"
            }
        }

    only the environment specified in your webpack.config.js will be compiled
