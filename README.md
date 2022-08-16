### Development
```shell
npm link aws-lambda-handyman
```

### Installing sls plugins



```sh
serverless plugin install -n serverless-plugin-typescript

serverless plugin install -n serverless-offline
```



### Starter Project

https://www.serverless.com/examples/aws-node-typescript-rest-api-with-dynamodb


### Debugging 
```json
     "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
```
in conjunction with
```json
    "local": "SLS_DEBUG=* sls offline start",
```
