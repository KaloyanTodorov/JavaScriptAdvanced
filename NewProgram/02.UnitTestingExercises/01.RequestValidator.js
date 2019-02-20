function validateRequest(request) {
    const uriRegex = /^([A-Za-z0-9\.]+|\*)$/;
    const messageRegex = /([<>\\&'"]+)/;

    if(!request.hasOwnProperty('method') || 
            !(request.method === 'GET' ||
            request.method === 'POST' ||
            request.method === 'DELETE' ||
            request.method === 'CONNECT')) {
                throwError('Method');
    }

    if(!request.hasOwnProperty('uri') || 
        !uriRegex.test(request.uri)) {
        throwError('URI');
    }

    if(!request.hasOwnProperty('version') || 
        !(request.version === 'HTTP/0.9' ||
        request.version === 'HTTP/1.0' ||
        request.version === 'HTTP/1.1' ||
        request.version === 'HTTP/2.0')) {
        throwError('Version');
    }

    if(!request.hasOwnProperty('message') || 
        messageRegex.test(request.message)) {
            throwError('Message');
    }

    return request;

    function throwError(header) {
        throw new Error(`Invalid request header: Invalid ${header}`);
    }
}





const request01 = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
};

const request02 = {
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
};

const request03 = {
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}

let obj = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'qwertyuiopasdfghjklzxcvbnm1234567890`~!@#$%^*()-=_+[]{};:|,./? '
};

let obj2 = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'asd<sdf'
};

console.log(validateRequest(obj2));
