import path from 'path';

export default (() => {

    const prod = process.argv.indexOf('prod') > -1;
    const https = process.argv.indexOf('https') > -1;
    const root = path.join(__dirname, '../../');
    const clientRoot = path.join('builds', prod ? 'prod' : 'dev');
    const bowerComponents = 'bower_components';
    const favicon = `${clientRoot}/shared/images/favicon.png`;
    const serverRoot = 'server';
    const ports = {
        'http': 8008,
        'https': 3443
    };

    return {
        root,
        clientRoot,
        bowerComponents,
        favicon,
        serverRoot,
        https,
        prod,
        ports
    };

})();
