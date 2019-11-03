//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Bien hecho."; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QWN0aXZpZGFk"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["1. Por donde se propagan los virus informaticos en su computadora?","2. Porque es importante la seguridad informatica?","3. Cual es la funcion de un antivirus?","4. Para que sirve el Firewall?"];
var answers1=["MXNvZnR3YXJl","MEhhcmR3YXJl","MGZhY2Vib29r","MHlvdXR1YmU"];
var answers2=["MVByb3RlZ2UgbGEgaW5mb3JtYWNpb24u","MFByb3RlZ2UgbnVlc3RhIHNhbHVkLg"];
var answers3=["MUFuYWxpemFyIGxhIGluZm9ybWFjaW9uLg","MURlY3RlcnRhciB2aXJ1cy4","MExpbXBpYXIgbWkgY2ltcHV0YWRvcmEu"];
var answers4=["MUJsb3F1ZWFyIGFjY2VzbyBhIHR1cyBkYXRvcy4","MFBhcmFyIGVsIGZ1ZWdvLg","MEVzY3VkbyBjb250cmEgZWwgZnVlZ28u"];
var ans=[answers1,answers2,answers3,answers4];
var err=["Vuelve a intentar.","vuelve a intentar.","vuelve a intentar","Vuelve a intentar."];
var ima=["","","",""];
var mp4=["","","",""];
var ogv=["","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="Actividad_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
