import path from 'path';

export default (() => {

    let cfg = {
        paths: {
            client: {
                root: path.join('client', path.sep)
            },
            builds: {
                root: path.join('builds', path.sep)
            }
        },
        https: process.argv.indexOf('https') > -1
    };

    ['dev', 'prod', 'tmp'].forEach(build => {
        let builds = cfg.paths.builds;
        builds[build] = {};
        builds[build].root = path.join(builds.root, build, path.sep);
    });

    return cfg;

})();
