const  http  =  require("http");

const server  =  http.createServer(function(req, res)   {
    let sum = 0;
    for(let i=0; i<=100000; i++){
        sum = sum + i;
    }
    res.write(sum);
    return res.end()
});

server.listen(3333);