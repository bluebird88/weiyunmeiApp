var http = require('http');
var qs = require('querystring');
var env = require('../env');

var Promise = require('bluebird');

var urlFormat = function(url,data){
    for(var key in data){
        if(url.indexOf(':'+key)!=-1){
            url.replace(':'+key,data[key]);
            delete data[key];
        }
    }
    return url;
};

var request = function(url,method,data,callback){
    url = urlFormat(url,data);

    var options = {
        hostname : env.host,
        port : env.port,
        path : url,
        method : 'POST'
    };

    data = data || {};
    data['_clientId_'] = env.clientId;
    data['_clientKey_'] = env.clientKey;

    if(method=='GET' || method=='get'){
        options.method = 'GET';
        if(url.indexOf('?')!=-1){
            options.path+="?";
        }
        options.path+=qs.stringify(data);
    }else if(method=='PUT' || method=='put'){
        options['headers'] = options['headers'] | {};
        options['headers']['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        data['_method'] = 'PUT';
    }else if(method=='DELETE' || method=='delete'){
        options['headers'] = options['headers'] | {};
        options['headers']['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        data['_method'] = 'DELETE';
    }

    var req = http.request(options,function(res){

        res.setEncoding('utf-8');
        res.on('data',function(chunk){

        });
    });

    req.on('error',function(e){

    });

    if(options.method!='GET'){
        req.write(qs.stringify(data));
    };

    req.end();
};
var requestAsync = Promise.promisify(request);
var methods = {
    get : function(url,data){
        return requestAsync(url,'GET',data);
    },
    post : function(url,data){
        return requestAsync(url,'POST',data);
    },
    put : function(url,data){
        return requestAsync(url,'PUT',data);
    },
    delete : function(url,data){
        return requestAsync(url,'DELETE',data);
    }
};


module.exports = methods;