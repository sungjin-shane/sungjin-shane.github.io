function myMove() {

    var subm = document.getElementById("submarine");      
    var pos = 760;
    var id = setInterval(frame, 8);

    //playSound('ocean');

    function frame() {
      if (pos == 1000) {
        clearInterval(id); 
        launchMiss();          
      } else {
        pos++;       
        subm.style.left = pos + 'px';
      }
    }

  
  }

  function launchMiss() {
    var seaMissile = document.getElementById("seaMissile");
    var pos = 530;
    var id3 = setInterval(frame, 10);
    seaMissile.width = "100";      
    playSound('bomb0');

    function frame() {
      if (pos == 80) {
        clearInterval(id3); 
        seaMissile.width = "0"; 
        missileMove();          
      } else {
        pos--; 
        seaMissile.style.top = pos + 'px';        
      }
    }

  }
  

function missileMove() {    
    var elem = document.getElementById("missile");   
    var target = document.getElementById("target");   

    var pos = 600;
    var tPos = 150;
    var id2 = setInterval(frame, 13);

    playSound('airstrike');
    elem.width = "100";
    target.width = "100";

    function frame() {
      if (pos == 400) {
        clearInterval(id2);
        showCrash(elem, target);
      } else {
        pos--; 
        elem.style.top = pos + 'px'; 
        elem.style.left = pos + 'px'; 

        tPos++
        target.style.top = tPos + 'px';
        target.style.left = tPos + 'PX';
      }
    }
  }


  function showCrash (elem, target) {
      elem.height = "0";
      target.height = "0";
      playSound('bomb1');
      var crash = document.getElementById("crash"); 
      crash.width = "150";     
      
      var id = setInterval(frame, 3);
      var pos = "355";

      function frame() {
        if (pos == 600) {
            crash.width = "0";         
        } else {
          pos++;       
          crash.style.top = pos + 'px';
        }
      }

      
  }

  
