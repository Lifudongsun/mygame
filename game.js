/**
 * 
 */
//获取键盘事件
$(document).keydown(function(event){switch(event.keyCode){case 74:if(board[3][0]==1&&score==0){timeRun();clearText();moveDown()}else{if(board[3][0]==1&&score>0&&score<50){moveDown()}else{isgameover()}}break;case 75:if(board[3][1]==1&&score==0){timeRun();clearText();moveDown()}else{if(board[3][1]==1&&score>0&&score<50){moveDown()}else{isgameover()}}break;case 76:if(board[3][2]==1&&score==0){timeRun();clearText();moveDown()}else{if(board[3][2]==1&&score>0&&score<50){moveDown()}else{isgameover()}}break}});function timeRun(){timerun+=0.001;$("span").text(timerun.toString().substr(0,5));t=setTimeout("timeRun()",1)}function clearText(){$("#block-3-0").text("");$("#block-3-1").text("");$("#block-3-2").text("")}function moveDown(){for(var i=3;i>=0;i--){for(var j=2;j>=0;j--){if(board[i][j]==1){if(i==3){$("#block-"+i+"-"+j).css("background-color","#fff");board[i][j]=0}else{$("#block-"+i+"-"+j).css("background-color","#fff");board[i][j]=0;$("#block-"+(i+1)+"-"+j).css("background-color","#000");board[i+1][j]=1}}}}var randy=parseInt(Math.floor(Math.random()*3));var block=$("#block-0-"+randy);block.css("background-color","#000");board[0][randy]=1;score+=1}function isgameover(){clearTimeout(t);$("#box_container").append("<div id='gameover' class='gameover'><p>本次用时</p><span>"+timerun.toString().substr(0,5)+"秒</span><a href='javascript:restartgame();' id='restartgamebutton'>Restart</a></div>");var gameover=$("#gameover");gameover.css("width","300px");gameover.css("height","400px");gameover.css("background-color","rgba(0, 0, 0, 0.5)")}function restartgame(){$("#gameover").remove();$("#time_box").html("<span>0.000</span>"+"秒");$(".block").remove();score=0;init()};