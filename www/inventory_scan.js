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

	 
 
 
var inventoryapp = {
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
        inventoryapp.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement  = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
         receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
		
		
		
		
		// inappbrowser-code test
		
		var ref = window.open('https://betaspike.appspot.com/rpc/playerUndecorated/getInventory?json=', '_blank', 'location=no');
        	ref.addEventListener('loadstart', function(event) { 
		 	 //alert('loadstart: ' + event.url);
			});
         
		 ref.addEventListener('loadstop', function(event) { 
		 	
		//ref.executeScript({code: "var img=document.querySelector('#header img'); img.src='http://cordova.apache.org/images/cordova_bot.png';document.body.innerHTML = \"some html\";" }, function() { alert("Image Element Successfully Hijacked");   });
		 	x = new Date();
			ref.executeScript({file: "http://cerebro.botnyx.com/ivjs.js?buster="+x
        }, function() { 
//			alert("2nd Element Successfully Hijacked");   
		});
			
			//alert('loadstop: ' + event.url); 
			//ref.executeSript({"script": "alert('loadstop!!');"});
			//alert('loadstop: after executescript!'); 
			
			
			});
         ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
         ref.addEventListener('exit', function(event) { 
		 //	alert(event.type); 
		});
		 
		
    }
};
