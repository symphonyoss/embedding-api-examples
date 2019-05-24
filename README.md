[![Build Status](https://travis-ci.org/symphonyoss/embedding-api-examples)](https://travis-ci.org/symphonyoss/embedding-api-examples)

# Client Embedding API Examples

This repo contains examples of the Symphony Embedding API. This API allows you to communicate with 
the Symphony UI over Websocks. Via the WebSocket you can add buttons throughout the UI, show message 
banners, and even start a conversation. This requires the native desktop wrapper, since it sets up a
localhost which acts as a message broker between Symphony and your own app!


## Prerequisites 


* Symphony running on your machine in the native wrapper
* [You've followed these instructions to set up the message broker](https://developers.symphony.com/documentation/client_embedding_api_guide)
* Have `node` and `npm` running


## Run the example project


* Clone this repo and `cd` into the directory
* `npm i webpack -g`
* `npm i webpack-dev-server -g`
* `npm i`
* `webpack-dev-server --content-base dist\`
* Visit https://localhost:8080 in your web browser


## Now what?

You must click "Open WebSocket" before the other actions will work. This is necessary to establish 
a connection with the message broker. After that you're free to click the other buttons and observe
the code to see how it works.

## Contributing

1. Fork it (<https://github.com/symphonyoss/embedding-api-examples/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Read our [contribution guidelines](.github/CONTRIBUTING.md) and [Community Code of Conduct](https://www.finos.org/code-of-conduct)
4. Commit your changes (`git commit -am 'Add some fooBar'`)
5. Push to the branch (`git push origin feature/fooBar`)
6. Create a new Pull Request

## License

The code in this repository is distributed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

Copyright 2016-2019 Symphony LLC