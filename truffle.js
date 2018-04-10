// See <http://truffleframework.com/docs/advanced/configuration>
// to customize your Truffle configuration!

const config = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*"
        }
    }
}

const _ = require('lodash')

try {
    _.merge(config, require('./truffle-local'))
} catch(e) {
    if(e.code === 'MODULE_NOT_FOUND') {
        // eslint-disable-next-line no-console
        console.log('No local truffle config found. Using all defaults...')
    } else {
        // eslint-disable-next-line no-console
        console.warn('Tried processing local config but got error:', e)
    }
}

module.exports = config