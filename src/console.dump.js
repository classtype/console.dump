global.console.dump = (function() {
    var red = '\033[31m';
    var blue = '\033[34m';
    var green = '\x1b[32m';
    var yellow = '\x1b[33m';
    var reset = '\033[0m';
    
    var header = function(message) {
        console.log(blue);
        console.log(message, green);
    };
    var content = function(message) {
        console.log(message);
    };
    
    return function(obj) {
        console.log(blue);
        console.log('----------------------------------------------------------------------------');
        
        header('Console.log:');
        content(obj);
        
        if (typeof obj == 'function' || typeof obj == 'object') {
            header('For in:');
            var msg = '---';
            for (var field in obj) {
                if (msg == '---') {
                    msg = field;
                } else {
                    msg += "\n"+''+field;
                }
            }
            content(msg);
            
            header('Keys:');
            content(Object.keys(obj));
            
            header('GetOwnPropertyNames:');
            content(Object.getOwnPropertyNames(obj));
            
            header('GetPrototypeOf:');
            content(Object.getPrototypeOf(obj));
        }
    };
})();

console.dump({});