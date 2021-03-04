<img src="http://bitcore.io/css/images/module-message.png" alt="powerblockcore message" height="35">
# Powerblockcoin Message Verification and Signing for Powerblockcore


[![NPM Package](https://img.shields.io/npm/v/powerblockcore-message.svg?style=flat-square)](https://www.npmjs.org/package/powerblockcore-message)
[![Build Status](https://img.shields.io/travis/powerblockcoin-project/powerblockcore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/powerblockcoin-project/powerblockcore-message)
[![Coverage Status](https://img.shields.io/coveralls/powerblockcoin-project/powerblockcore-message.svg?style=flat-square)](https://coveralls.io/r/powerblockcoin-project/powerblockcore-message?branch=master)

powerblockcore-message adds support for verifying and signing powerblockcoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main powerblockcore repo](https://github.com/powerblockcoin-project/powerblockcore) for more information.

## Getting Started

```sh
npm install powerblockcore-message
```

```sh
bower install powerblockcore-message
```

To sign a message:

```javascript
var powerblockcore = require('powerblockcore-lib');
var Message = require('powerblockcore-message');

var privateKey = powerblockcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H9XORZInM3B3a8BNS65kwgmbnqEuq73rjAQ5VKyVzTrzPOdHdHOY2lfoph5auvMgLSr7bh+nEQSG/f2kv9TnsbY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/powerblockcoin-project/powerblockcore/blob/master/CONTRIBUTING.md) on the main powerblockcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/powerblockcoin-project/powerblockcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
Copyright 2016 The Powerblockcoin Core Developers

