'use strict'
function headerParser () {

  this.process = function(data){
    var addr = data.connection.remoteAddress.toString();
    var addrA = addr.split(':');
    
    var re = /\([^=\)]*\)/;
    var ua = data.headers['user-agent'].toString();
    var soft = re.exec(ua)[0]; 
    soft = soft.replace('(', '').replace(')', '');
    
    
    var lang = data.headers['accept-language'].toString();
    var langA = lang.split(',');
    
    var result = {
        
        ipaddress: addrA[3], 
        language: langA[0], 
        software: soft
    };
    
    
    var ret =  JSON.stringify(result);
    
    return ret;
    
  }
}

module.exports = headerParser;

//{"ipaddress":"110.143.236.19","language":"en-US","software":"Windows NT 10.0; WOW64"}