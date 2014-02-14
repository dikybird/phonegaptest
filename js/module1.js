var module1 = (
  function(module){
    module.go = function(result){
      result.prepend(Date()+" - <br />");  
    }
    return module;  
  }
)(module1 || {});