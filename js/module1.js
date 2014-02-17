var module1 = (
  function(module){
    module.go = function(result){
      try{
        result.prepend(Date()+" "+ " <br />");  
      }catch(e){
        result.prepend(e+" <br />");
      }
    }
    
    module.go2 = function(result){
      try{
        result.prepend(device.model+" <br />");  
      }catch(e){
        result.prepend(e+" <br />");
      }
    }    
    
    return module;  
  }
)(module1 || {});