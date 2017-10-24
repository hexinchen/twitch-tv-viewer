$(document).ready(function(){
  
  var clientID = "q7o59yh85j37d5388bmvdqc66cyxu1";
  var offlineLogo = "https://i0.wp.com/www.flawd.se/wp-content/uploads/offline.jpg?fit=822%2C657";
  var channels=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  
  for(var i = 0; i < channels.length; i++){
    var url = "https://api.twitch.tv/kraken/streams/"+channels[i]+"?client_id="+clientID;
    $.getJSON(url, function(data){
      var logo;
      var name;
      var status;
      var link;
      if(data.stream != null){
        logo = data.stream.channel.logo;
        name = data.stream.channel.display_name;
        status = data.stream.channel.status;
        link = data.stream.channel.url;
        $("#listInfo").append("<div class='row'><div class='col-md-4'><img src=" + logo + "></div>"+"<div class='col-md-4'><a href ="+link+" target='_blank'>"+name+"</a></div>"+"<div class='col-md-4'>"+status+"</div>");
      }
    });
  }
  
  for(var i = 0; i < channels.length; i++){
    var url = "https://api.twitch.tv/kraken/streams/"+channels[i]+"?client_id="+clientID;
    $.getJSON(url, function(data){
      var name;
      var status;
      var logo;
      if(data.stream === null){
        $.getJSON(data._links.channel+"?client_id="+clientID, function(data2){
          logo = offlineLogo;
          status = "Offline";
          name = data2.display_name;
          link = data2.url;
          $("#listInfo").append("<div class='row'><div class='col-md-4'><img src=" + logo + "></div>"+"<div class='col-md-4'><a href ="+link+" target='_blank'>"+name+"</a></div>"+"<div class='col-md-4'>"+status+"</div>");
        })
      }
    });
  }
  

  
  
  
  
 
    
 
  
      
      
   
    
  

  
  
    
   
  
  
});