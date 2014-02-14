var module1 = (
  function(module){
    module.go = function(result){
      try{
        console.log(window.device);  
      }catch(e){
        result.prepend(e+" - <br />");
      }
      try{
        result.prepend(window.device.uuid+" - <br />");  
      }catch(e){
        result.prepend(e+" - <br />");
      }
    }
    return module;  
  }
)(module1 || {});