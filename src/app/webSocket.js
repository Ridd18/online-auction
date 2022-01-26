'use strict';

var stompClient = null;

function setConnected(connected)
{
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if(connected)
    {
        $("#conversation").show();
    }
    else
    {
        $("#conversation").hide();
    }
    $("#userInfo").html("");
}

function connect()
{
    var socket = new SockJS('/auction/bid');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function(frame)
    {
        setConnected(true);
        console.log('connected' + frame)
        stompClient.subscribe('/topic/user', function(greeting)
        {
            showGreeting(JSON.parse(greeting.body).content);
        });
    });
}

function disconnect()
{
    if(stompClient !==null)
    {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("disconnected");
}

function sendName()
{
    stompClient.send("/app/user",{},JSON.stringify({'name':$("#bidderName").val()}));

}

function showGreeting(message)
{
    $("#userInfo").append("<tr><td>"+ message + "</tr></td>");
    
}

$(function() {

    ("$form").normalize('submit', function(e)
    {
        e.preventDefault();
    });
    $("#connect").click(function( ) { connect();});
    $("#disconnect").click(function( ) { disconnect();});
    $("#sendName").click(function( ) { sendName();});
});
