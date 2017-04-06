var redis = require('redis');
var client  = redis.createClient('6379', '192.168.56.101');

// redis 链接错误
client.on("error", function(error) {
    console.log(error);
});

// redis 验证 (reids.conf未开启验证，此项可不需要)
//client.auth("foobared");

client.select('15', function(error){
    if(error) {
        console.log(error);
    } else {
        // get
        client.get('str_key_0', function(error, res){
            if(error) {
                console.log(error);
            } else {
                console.log(res);
            }

            // 关闭链接
            client.end();
        });
    }
});