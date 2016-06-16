/**
* Licensed to the Symphony Software Foundation (SSF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The SSF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
**/

"use strict";

require("./styles/main.css");

var addImButton = require('./actions/addIMButton'),
    registerTopic = require('./actions/registerTopic'),
    showBanner = require('./actions/showBanner'),
    startConversation = require('./actions/startConversation');

var ws = null,
    openBtn = document.getElementById('open'),
    closeBtn = document.getElementById('close'),
    addToProfileBtn = document.getElementById('add-profile-button'),
    registerTopicBtn = document.getElementById('register-topic'),
    announceBtn = document.getElementById('announce'),
    talkBtn = document.getElementById('talk');

function openWebSocket() {
    ws = new WebSocket("ws://localhost:65534/");

    ws.onerror = function(e) {
        console.log("Error: ", e)
    };

    ws.onmessage = function(e) {
        console.log("Message received: ", e)
    };

    ws.onopen = function() {
        console.log('Opened WS')
    };

    ws.onclose = function(e) {
        console.log('Closed WS: ', e)
    };
}

//initiate the WebSocket connection to the message broker
openBtn.addEventListener('click', function() {
    openWebSocket();
});

//add a button to the profile and IM modules
addToProfileBtn.addEventListener('click', function(){
    addImButton(ws);
});

//register an interest in the topic (note the address matches the data.responseAddress of the addImButton method
registerTopicBtn.addEventListener('click', function() {
    registerTopic(ws);
});

//show a message banner on the Symphony client UI
announceBtn.addEventListener('click', function(){
    showBanner(ws);
});

//start a conversation with a user in the Symphony UI
talkBtn.addEventListener('click', function(){
    startConversation(ws)
});

//close the WebSocket connection
closeBtn.addEventListener('click', function() {
    ws.close();
});


