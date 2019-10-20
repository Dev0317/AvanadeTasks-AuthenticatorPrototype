function mainToTime()
{
    document.getElementById("Homepage").style.zIndex="1";
    document.getElementById("Time").style.zIndex="10";
}

function timeToPin()
{
    document.getElementById("Time").style.zIndex="1";
    document.getElementById("Pin").style.zIndex="10";
}

function pinToCode()
{
    document.getElementById("Pin").style.zIndex="1";
    document.getElementById("Code").style.zIndex="10";
}

function codeToMain()
{
    document.getElementById("Code").style.zIndex="1";
    document.getElementById("Homepage").style.zIndex="10";
}

function timeToMessage()
{
    document.getElementById("Time").style.zIndex="1";
    document.getElementById("Message").style.zIndex="10";
}

function messageToMain()
{
    document.getElementById("Message").style.zIndex="1";
    document.getElementById("Homepage").style.zIndex="10";
}