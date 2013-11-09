/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
$( document ).ready(function() {
   $("#save").click(function() {
    	$("#playername").val();
		alert( $("#playername").val() );
		alert( $("#verification").val() );
		alert($("#slider").val() );
		
    });
	$("#slider").on("slidestop", function(e){
		alert( $("#slider").val() );
	})

	$("#checkbox-gps").on("change", function(e){
		alert ( $("input#checkbox-gps").val() );
	})
	$("#checkbox-loc").on("change", function(e){
		alert ( $("input#checkbox-loc").val() );
	})
	$("#checkbox-share").on("change", function(e){
		alert ( $("input#checkbox-share").val() );
	})
});

var settingsapp = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        settingsapp.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
		
		
		
		localStorage['scanradius'];
		

		
		
		$("#name2b").val();
		//var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

		
		// check if username is set.
		// no:
		// check if user is verified
		// no:
		
		
		//check if localStorage['settings'] is set
				
		//check if localStorage['inventory'] is set
		
		//check if localStorage['achievements'] is set
		
		
		
		
		
		

        
    }
};
settingsapp.onDeviceReady();