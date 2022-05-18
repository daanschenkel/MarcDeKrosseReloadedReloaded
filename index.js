const path = require('path');
const express = require('express');
const getPort = require('get-port');
const open = require('open');

(async function() {

    // create express application
    const app = express();

    // find available port (if not 3000)
    const port = await getPort({ port: 3000 });
    const host = `http://127.0.0.1:${ port }`;

    /*-------------------*/

    app.use('/assets', express.static(path.join(__dirname, './assets')));

    app.get('/', )

    /*-------------------*/

    app.listen(port, async() => {
        console.log('Express server stared!');
        await open(`${ host }/`); // opens `web/index.html` page
    });

})();