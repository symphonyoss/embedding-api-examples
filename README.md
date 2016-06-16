[![Build Status](https://travis-ci.org/symphonyoss/embedding-api-examples)](https://travis-ci.org/symphonyoss/embedding-api-examples)

# embedding-api-examples

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
