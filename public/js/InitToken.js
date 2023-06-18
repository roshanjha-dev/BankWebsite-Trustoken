var _0xf5ddfb = _0xd382;
(function(_0x66f0d3, _0x311b07) {
    var _0x1bc20e = _0xd382,
        _0x2d6565 = _0x66f0d3();
    while (!![]) {
        try {
            var _0x25beef = parseInt(_0x1bc20e(0x144)) / 0x1 + parseInt(_0x1bc20e(0x14b)) / 0x2 * (parseInt(_0x1bc20e(0x149)) / 0x3) + -parseInt(_0x1bc20e(0x15a)) / 0x4 + -parseInt(_0x1bc20e(0x143)) / 0x5 + -parseInt(_0x1bc20e(0x14f)) / 0x6 * (parseInt(_0x1bc20e(0x145)) / 0x7) + -parseInt(_0x1bc20e(0x159)) / 0x8 + parseInt(_0x1bc20e(0x14d)) / 0x9;
            if (_0x25beef === _0x311b07) break;
            else _0x2d6565['push'](_0x2d6565['shift']());
        } catch (_0x5d13eb) {
            _0x2d6565['push'](_0x2d6565['shift']());
        }
    }
}(_0x30ce, 0xbc49b));
var BaseURIClient = _0xf5ddfb(0x146),
    BaseURIServer = 'http://10.1.34.108:5005',   //'https://framework.uat.dcservices.in',
    VPNServerUrl = 'https://vpn.uat.dcservices.in',
    MSERestore = [_0xf5ddfb(0x155), _0xf5ddfb(0x147)],
    EncryptData = ['00\x202A\x2086\x2080\x2000\x2000'],
    DecryptData = ['00\x202A\x2080\x2086\x2000\x2001\x2001\x20'],
    VerifyCertificate = [_0xf5ddfb(0x154)],
    le = '\x20FF\x20FF',
    TokenConnectStatus, CertificateLength = null,
    ClientListReader;

function _0xd382(_0xf9ced5, _0x5c463a) {
    var _0x30ceaf = _0x30ce();
    return _0xd382 = function(_0xd3820e, _0x51361f) {
        _0xd3820e = _0xd3820e - 0x143;
        var _0x3541ad = _0x30ceaf[_0xd3820e];
        return _0x3541ad;
    }, _0xd382(_0xf9ced5, _0x5c463a);
}

function CalculateCertLength(_0xfa10b4) {
    var _0x48f236 = _0xf5ddfb,
        _0x3beb6b = Base64ToHex(_0xfa10b4);
    if (_0x3beb6b[_0x48f236(0x148)](0x2, 0x4) == '81') CertificateLength = _0x3beb6b[_0x48f236(0x148)](0x4, 0x6);
    else _0x3beb6b[_0x48f236(0x148)](0x2, 0x4) == '82' && (CertificateLength = _0x3beb6b['substring'](0x4, 0x8));
}

function ListReader() {
    console.log("Hey there, I have been called")
    var _0x1d70dc = _0xf5ddfb;
    $[_0x1d70dc(0x150)]({
        'type': _0x1d70dc(0x14c),
        'url': BaseURIClient + _0x1d70dc(0x14a),
        'contentType': _0x1d70dc(0x14e),
        'dataType': _0x1d70dc(0x152),
        'success': function(_0x10ce23) {
            ClientListReader = _0x10ce23;
        },
        'failure': function(_0x4360e6) {},
        'error': function(_0x34ed17) {}
    });
}

function _0x30ce() {
    var _0x4c4214 = ['toString', '6797410HSzNVW', '721887BOmHEX', '38528EXmfJg', 'http://localhost:5001', '00\x2022\x20F3\x2001', 'substring', '40158MArHJT', '/C_ListOfTokens', '186KLvlmV', 'GET', '37328931qIYidn', 'application/json;\x20charset=utf-8', '1368XMYsQX', 'ajax', 'stringify', 'json', 'reader', '00\x202A\x2000\x20BE\x2000\x20', '00\x2022\x20F3\x2002', '/C_ConnectToken1', 'toUpperCase', 'log', '9872480pQzSAN', '5979052VHRllf'];
    _0x30ce = function() {
        return _0x4c4214;
    };
    return _0x30ce();
}

function Connect(_0x12f4ec) {
    var _0x10be60 = _0xf5ddfb,
        _0x74ba45 = new Object();
    _0x74ba45[_0x10be60(0x153)] = _0x12f4ec, console[_0x10be60(0x158)](JSON[_0x10be60(0x151)](_0x74ba45)), $[_0x10be60(0x150)]({
        'type': 'POST',
        'url': BaseURIClient + _0x10be60(0x156),
        'data': JSON['stringify'](_0x74ba45),
        'contentType': _0x10be60(0x14e),
        'traditional': !![],
        'success': function(_0xe1fae9) {
            TokenConnectStatus = _0xe1fae9;
        },
        'failure': function(_0x44228d) {},
        'error': function(_0x2bd5e9) {}
    });
}

function Base64ToHex(_0x13312d) {
    var _0xb6275a = _0xf5ddfb;
    const _0x136450 = atob(_0x13312d);
    let _0x4787a5 = '';
    for (let _0x4a11be = 0x0; _0x4a11be < _0x136450['length']; _0x4a11be++) {
        const _0x1ee7ee = _0x136450['charCodeAt'](_0x4a11be)[_0xb6275a(0x15b)](0x10);
        _0x4787a5 += _0x1ee7ee['length'] === 0x2 ? _0x1ee7ee : '0' + _0x1ee7ee;
    }
    return _0x4787a5[_0xb6275a(0x157)]();
}


window.exports = ListReader;
window.exports = Connect;