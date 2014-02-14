var module1 = (
  function(module){
    module.go = function(result){
      try{
        result.prepend(device.uuid+" - <br />");  
      }catch(e){
        result.prepend(e+" - <br />");
      }
    }
    return module;  
  }
)(module1 || {});