var redis = require('redis');
var client  = redis.createClient('6379', '192.168.56.101');

// redis ���Ӵ���
client.on("error", function(error) {
    console.log(error);
});

// redis ��֤ (reids.confδ������֤������ɲ���Ҫ)
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

            // �ر�����
            client.end();
        });
    }
});