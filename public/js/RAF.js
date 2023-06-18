var _0x34e3e0 = _0x4d73;
(function(_0x2863f0, _0x1e3e92) {
	var _0x4daa73 = _0x4d73,
		_0x45292b = _0x2863f0();
	while (!![]) {
		try {
			var _0x1d1658 = -parseInt(_0x4daa73(0xb4)) / 0x1 + -parseInt(_0x4daa73(0x9f)) / 0x2 * (-parseInt(_0x4daa73(0xb1)) / 0x3) + parseInt(_0x4daa73(0xb0)) / 0x4 * (-parseInt(_0x4daa73(0xbf)) / 0x5) + parseInt(_0x4daa73(0x95)) / 0x6 * (parseInt(_0x4daa73(0xa8)) / 0x7) + -parseInt(_0x4daa73(0xa5)) / 0x8 + parseInt(_0x4daa73(0xbc)) / 0x9 + parseInt(_0x4daa73(0xb2)) / 0xa;
			if (_0x1d1658 === _0x1e3e92) break;
			else _0x45292b['push'](_0x45292b['shift']());
		} catch (_0x1117a4) {
			_0x45292b['push'](_0x45292b['shift']());
		}
	}
}(_0x23bf, 0xa3c76));
var RAFSelectApp = ['00\x20A4\x2000\x200C\x2002\x203F\x2000', _0x34e3e0(0xac)],
	ReadCertificate = [_0x34e3e0(0xa2), _0x34e3e0(0x9a), _0x34e3e0(0xa1), _0x34e3e0(0xb3)],
	GetChallange = _0x34e3e0(0xa9),
	RAFStatus = null;

function _0x4d73(_0x296f3b, _0x257860) {
	var _0x23bf44 = _0x23bf();
	return _0x4d73 = function(_0x4d73bf, _0x12f461) {
		_0x4d73bf = _0x4d73bf - 0x95;
		var _0x470477 = _0x23bf44[_0x4d73bf];
		return _0x470477;
	}, _0x4d73(_0x296f3b, _0x257860);
}

function _0x23bf() {
	var _0x1edde3 = ['sAPDUCommand', 'resEncryptedData', '820255CgkKMf', 'application/json;\x20charset=utf-8', 'responseVal', 'runRequests\x20Success', 'replace', '1165386pNyzpQ', '/C_SendAPDU', '/S_DecryptDataFrmClient', 'encryptedChanllengeData', 'user', '00\x20B0\x2000\x2000\x2000\x2000\x200A', 'runRequests\x20Error', 'cardStatusVal', 'log', 'length', '10fjMFIb', 'toString', '00\x20B0\x2000\x2000\x2000\x2004\x2000', '00\x20A4\x2000\x200C\x2002\x206F\x2008', '9000', 'substring', '9832904MwjHoh', 'verifyCertSts', 'resDataSts', '21tMtrha', '\x2000\x2084\x2000\x2000\x2008', '\x2000\x20', 'ajax', '00\x20A4\x2000\x200C\x2002\x206F\x2000', 'POST', 'certServer', 'join', '4xMdwAm', '126414UsLVLu', '4681550LPnRsL', '00\x20B0', '6035CRDoif', '0x$1\x20', '00\x2004\x2000', 'stringify', 'split', '/S_DecryptChallenge', 'push', '\x2008\x20', '7276491vQfFZb'];
	_0x23bf = function() {
		return _0x1edde3;
	};
	return _0x23bf();
}

function Start_RAF_Process() {
	var _0x3524f8 = _0x34e3e0,
		_0x121d37 = new Object();
	_0x121d37[_0x3524f8(0xbd)] = RAFSelectApp[0x0], console[_0x3524f8(0x9d)](JSON[_0x3524f8(0xb7)](_0x121d37)), $[_0x3524f8(0xab)]({
		'type': _0x3524f8(0xad),
		'url': BaseURIClient + _0x3524f8(0x96),
		'data': JSON[_0x3524f8(0xb7)](_0x121d37),
		'contentType': _0x3524f8(0xc0),
		'traditional': !![],
		'success': function(_0x362477) {
			var _0x1e6eac = _0x3524f8;
			if (_0x362477[_0x1e6eac(0x9c)] == '9000') {
				var _0x5b8037 = new Object();
				_0x5b8037[_0x1e6eac(0xbd)] = RAFSelectApp[0x1], console[_0x1e6eac(0x9d)](JSON['stringify'](_0x5b8037)), $['ajax']({
					'type': _0x1e6eac(0xad),
					'url': BaseURIClient + _0x1e6eac(0x96),
					'data': JSON[_0x1e6eac(0xb7)](_0x5b8037),
					'contentType': 'application/json;\x20charset=utf-8',
					'traditional': !![],
					'success': function(_0x10e07e) {
						var _0x38dc88 = _0x1e6eac;
						if (_0x10e07e[_0x38dc88(0x9c)] == _0x38dc88(0xa3)) RAFReadCertificateDongle();
						else {
							RAFStatus = ![];
							return;
						}
					},
					'failure': function(_0x3142bc) {
						RAFStatus = ![];
						return;
					},
					'error': function(_0x35026f) {
						RAFStatus = ![];
					}
				});
			}
		},
		'failure': function(_0x5096c9) {
			RAFStatus = ![];
			return;
		},
		'error': function(_0x1e3d70) {
			RAFStatus = ![];
			return;
		}
	});
}

function RAFReadCertificateDongle() {
	var _0x37f5e3 = _0x34e3e0,
		_0xc12e90 = new Object();
	_0xc12e90[_0x37f5e3(0xbd)] = ReadCertificate[0x0], console[_0x37f5e3(0x9d)](JSON[_0x37f5e3(0xb7)](_0xc12e90)), $[_0x37f5e3(0xab)]({
		'type': 'POST',
		'url': BaseURIClient + _0x37f5e3(0x96),
		'data': JSON[_0x37f5e3(0xb7)](_0xc12e90),
		'contentType': _0x37f5e3(0xc0),
		'traditional': !![],
		'success': function(_0x9a344b) {
			var _0x30d11d = _0x37f5e3;
			if (_0x9a344b[_0x30d11d(0x9c)] == _0x30d11d(0xa3)) {
				var _0x4a8d82 = new Object();
				_0x4a8d82['sAPDUCommand'] = ReadCertificate[0x1], console[_0x30d11d(0x9d)](JSON[_0x30d11d(0xb7)](_0x4a8d82)), $['ajax']({
					'type': _0x30d11d(0xad),
					'url': BaseURIClient + '/C_SendAPDU',
					'data': JSON[_0x30d11d(0xb7)](_0x4a8d82),
					'contentType': 'application/json;\x20charset=utf-8',
					'traditional': !![],
					'success': function(_0x2ccd34) {
						var _0x1a0075 = _0x30d11d;
						CalculateCertLength(_0x2ccd34[_0x1a0075(0xc1)]);
						if (_0x2ccd34[_0x1a0075(0x9c)] == _0x1a0075(0xa3)) {
							var _0x55e517 = new Object(),
								_0x144a6b = parseInt(CertificateLength, 0x10),
								_0x3cd6ca = _0x144a6b[_0x1a0075(0xa0)](0x10);
							if (_0x3cd6ca[_0x1a0075(0x9e)] == 0x2) var _0x3cd6ca = '00' + _0x3cd6ca;
							else {
								if (_0x3cd6ca['length'] == 0x3) var _0x3cd6ca = '0' + _0x3cd6ca;
								else {
									if (_0x3cd6ca['length'] == 0x4) var _0x3cd6ca = _0x3cd6ca;
								}
							}
							var _0x4398ea = _0x3cd6ca[_0x1a0075(0xa4)](0x0, 0x2),
								_0x20b10c = _0x3cd6ca[_0x1a0075(0xa4)](0x2, 0x4),
								_0x1381ea = 0x0;
							if (_0x144a6b > 0x400) {
								_0x1381ea = parseInt(_0x144a6b / 0x400);
								var _0x140ef4 = _0x144a6b % 0x400,
									_0x561d6c = '00\x2004',
									_0x429fd2 = '',
									_0x3daeee = _0x1a0075(0xb6),
									_0xfd9f22 = 0x0,
									_0x1e32aa = 0x1,
									_0x1713ec, _0xe020b2, _0xea4428 = '',
									_0x270d56 = [];
								for (_0xe020b2 = 0x0; _0xe020b2 < _0x1381ea; _0xe020b2++) {
									var _0x1a3a5d = new Object();
									_0x1a3a5d[_0x1a0075(0xbd)] = ReadCertificate[0x3] + _0x561d6c + _0x3daeee, _0x270d56[_0x1a0075(0xba)](_0x1a3a5d);
									_0xe020b2 > 0x0 ? _0xfd9f22 += 0x400 : _0xfd9f22 += 0x400 + 0x4;
									var _0x3d932e = _0xfd9f22[_0x1a0075(0xa0)](0x10);
									console['log'](_0x3d932e);
									if (_0x3d932e[_0x1a0075(0x9e)] == 0x2) var _0x3d932e = '00' + _0x3d932e;
									else {
										if (_0x3d932e[_0x1a0075(0x9e)] == 0x3) var _0x3d932e = '0' + _0x3d932e;
										else {
											if (_0x3d932e[_0x1a0075(0x9e)] == 0x4) var _0x3d932e = _0x3d932e;
										}
									}
									var _0x4398ea = _0x3d932e[_0x1a0075(0xa4)](0x0, 0x2),
										_0x20b10c = _0x3d932e[_0x1a0075(0xa4)](0x2, 0x4);
									_0x561d6c = _0x4398ea + _0x20b10c, console[_0x1a0075(0x9d)](JSON['stringify'](_0x270d56));
								}
								if (_0x140ef4 != 0x0) {
									var _0x3d932e = _0x140ef4['toString'](0x10);
									console['log'](_0x3d932e);
									if (_0x3d932e[_0x1a0075(0x9e)] == 0x2) var _0x3d932e = '00' + _0x3d932e;
									else {
										if (_0x3d932e['length'] == 0x3) var _0x3d932e = '0' + _0x3d932e;
										else {
											if (_0x3d932e['length'] == 0x4) var _0x3d932e = _0x3d932e;
										}
									}
									var _0x4398ea = _0x3d932e[_0x1a0075(0xa4)](0x0, 0x2),
										_0x20b10c = _0x3d932e['substring'](0x2, 0x4);
									_0x3daeee = _0x4398ea + _0x20b10c;
									var _0x44fe82 = new Object();
									_0x44fe82[_0x1a0075(0xbd)] = ReadCertificate[0x3] + _0x561d6c + _0x1a0075(0xaa) + _0x3daeee, _0x270d56[_0x1a0075(0xba)](_0x44fe82);
								}
								var _0x42d638 = function(_0x380468) {
									var _0x26e977 = _0x1a0075;
									if (_0x270d56[_0x26e977(0x9e)] == _0x380468) {
										console['log'](_0x26e977(0xc2), _0x270d56), RAFVerifyCertificateData(hexToBase64(_0xea4428));
										return;
									}
									var _0x4726cf = _0x270d56[_0x380468];
									$[_0x26e977(0xab)]({
										'type': _0x26e977(0xad),
										'url': BaseURIClient + _0x26e977(0x96),
										'data': JSON[_0x26e977(0xb7)](_0x4726cf),
										'contentType': 'application/json;\x20charset=utf-8',
										'traditional': !![],
										'success': function(_0x4ecd64) {
											var _0x407c3d = _0x26e977;
											console['log'](_0x4ecd64), _0x4ecd64[_0x407c3d(0x9c)] == 0x2328 && (_0xea4428 += Base64ToHex(_0x4ecd64[_0x407c3d(0xc1)]), console[_0x407c3d(0x9d)](_0xea4428));
										},
										'error': function() {
											var _0x3c0019 = _0x26e977;
											_0x270d56[_0x3c0019(0xba)]({}), console['error'](_0x3c0019(0x9b), _0x3c0019(0x99), arguments);
										},
										'complete': function() {
											_0x42d638(++_0x380468);
										}
									});
								};
								_0x42d638(0x0);
							} else _0x55e517[_0x1a0075(0xbd)] = ReadCertificate[0x2], console[_0x1a0075(0x9d)](JSON['stringify'](_0x55e517)), $[_0x1a0075(0xab)]({
								'type': _0x1a0075(0xad),
								'url': BaseURIClient + _0x1a0075(0x96),
								'data': JSON[_0x1a0075(0xb7)](_0x55e517),
								'contentType': _0x1a0075(0xc0),
								'traditional': !![],
								'success': function(_0x17c1d4) {
									var _0x203b98 = _0x1a0075;
									console[_0x203b98(0x9d)]('Certificate' + _0x17c1d4[_0x203b98(0xc1)]), _0x17c1d4[_0x203b98(0x9c)] == _0x203b98(0xa3) && RAFVerifyCertificateData(_0x17c1d4[_0x203b98(0xc1)]);
								}
							});
						} else {
							RAFStatus = ![];
							return;
						}
					},
					'failure': function(_0x511e97) {
						RAFStatus = ![];
						return;
					},
					'error': function(_0x168932) {
						RAFStatus = ![];
						return;
					}
				});
			}
		},
		'failure': function(_0x17a6f4) {
			RAFStatus = ![];
			return;
		},
		'error': function(_0x4c0763) {
			RAFStatus = ![];
			return;
		}
	});
}

function hexToBase64(_0x34fe81) {
	var _0x324a51 = _0x34e3e0;
	return btoa(String['fromCharCode']['apply'](null, _0x34fe81[_0x324a51(0xc3)](/\r|\n/g, '')[_0x324a51(0xc3)](/([\da-fA-F]{2}) ?/g, _0x324a51(0xb5))[_0x324a51(0xc3)](/ +$/, '')[_0x324a51(0xb8)]('\x20')));
}

function RAFVerifyCertificateData(_0x15fa81) {
	var _0x1fedd6 = _0x34e3e0,
		_0x5725eb = new Object();
	_0x5725eb['certDongle'] = _0x15fa81, $[_0x1fedd6(0xab)]({
		'type': _0x1fedd6(0xad),
		'url': BaseURIServer + '/S_VerifyCertClient',
		'data': JSON['stringify'](_0x5725eb),
		'contentType': _0x1fedd6(0xc0),
		'traditional': !![],
		'success': function(_0x1c2cf6) {
			var _0x2f9dc7 = _0x1fedd6;
			if (_0x1c2cf6[_0x2f9dc7(0xa6)] == !![] && _0x1c2cf6[_0x2f9dc7(0xae)] != undefined || _0x1c2cf6[_0x2f9dc7(0xae)] != null) RAFClientVerifyCertServer(_0x1c2cf6['certServer']);
			else {
				RAFStatus = ![];
				return;
			}
		},
		'failure': function(_0x4da330) {
			RAFStatus = ![];
			return;
		},
		'error': function(_0x283d01) {
			RAFStatus = ![];
			return;
		}
	});
}

function RAFClientVerifyCertServer(_0x1017c7) {
	var _0x28dc17 = _0x34e3e0,
		_0x1142c7 = new Object();
	_0x1142c7[_0x28dc17(0xbd)] = MSERestore[0x0], $['ajax']({
		'type': _0x28dc17(0xad),
		'url': BaseURIClient + _0x28dc17(0x96),
		'data': JSON[_0x28dc17(0xb7)](_0x1142c7),
		'contentType': 'application/json;\x20charset=utf-8',
		'traditional': !![],
		'success': function(_0x581e2d) {
			var _0x3e0d13 = _0x28dc17,
				_0x4e5fa1 = Base64ToHex(_0x1017c7);
			if (_0x4e5fa1[_0x3e0d13(0xa4)](0x2, 0x4) == '81') var _0x42af12 = _0x4e5fa1['substring'](0x4, 0x6);
			else {
				if (_0x4e5fa1[_0x3e0d13(0xa4)](0x2, 0x4) == '82') var _0x42af12 = _0x4e5fa1['substring'](0x4, 0x8);
			}
			if (_0x581e2d[_0x3e0d13(0x9c)] == _0x3e0d13(0xa3)) {
				var _0x298025 = parseInt(_0x42af12, 0x10),
					_0x1175ff = _0x298025 + 0x4,
					_0x3e00c2 = _0x1175ff[_0x3e0d13(0xa0)](0x10);
				if (_0x3e00c2[_0x3e0d13(0x9e)] == 0x2) var _0x3e00c2 = '00' + _0x3e00c2;
				else {
					if (_0x3e00c2[_0x3e0d13(0x9e)] == 0x3) var _0x3e00c2 = '0' + _0x3e00c2;
					else {
						if (_0x3e00c2[_0x3e0d13(0x9e)] == 0x4) var _0x3e00c2 = _0x3e00c2;
					}
				}
				var _0x55412e = _0x3e00c2[_0x3e0d13(0xa4)](0x0, 0x2),
					_0x3df9a9 = _0x3e00c2['substring'](0x2, 0x4),
					_0x5510f4 = new Object();
				_0x5510f4[_0x3e0d13(0xbd)] = VerifyCertificate + _0x55412e + '\x20' + _0x3df9a9 + '\x20' + _0x4e5fa1, $[_0x3e0d13(0xab)]({
					'type': _0x3e0d13(0xad),
					'url': BaseURIClient + _0x3e0d13(0x96),
					'data': JSON[_0x3e0d13(0xb7)](_0x5510f4),
					'contentType': 'application/json;\x20charset=utf-8',
					'traditional': !![],
					'success': function(_0x189caf) {
						var _0x5bba28 = _0x3e0d13;
						if (_0x189caf[_0x5bba28(0x9c)] == _0x5bba28(0xa3)) RAFGetChallengeData();
						else {
							RAFStatus = ![];
							return;
						}
					},
					'failure': function(_0x47296f) {
						RAFStatus = ![];
						return;
					},
					'error': function(_0x5c00db) {
						RAFStatus = ![];
						return;
					}
				});
			}
		},
		'failure': function(_0x5d17e7) {
			RAFStatus = ![];
			return;
		},
		'error': function(_0x472000) {
			RAFStatus = ![];
			return;
		}
	});
}

function RAFGetChallengeData() {
	var _0x37f6f8 = _0x34e3e0,
		_0x1b74bb = new Object();
	_0x1b74bb[_0x37f6f8(0xbd)] = GetChallange, $[_0x37f6f8(0xab)]({
		'type': _0x37f6f8(0xad),
		'url': BaseURIClient + _0x37f6f8(0x96),
		'data': JSON[_0x37f6f8(0xb7)](_0x1b74bb),
		'contentType': 'application/json;\x20charset=utf-8',
		'traditional': !![],
		'success': function(_0x5ba13e) {
			var _0x4c98a6 = _0x37f6f8;
			if (_0x5ba13e[_0x4c98a6(0x9c)] == _0x4c98a6(0xa3)) RAFEncryptDataMSE(_0x5ba13e[_0x4c98a6(0xc1)]);
			else {
				RAFStatus = ![];
				return;
			}
		},
		'failure': function(_0x1518cc) {
			RAFStatus = ![];
			return;
		},
		'error': function(_0x601f21) {
			RAFStatus = ![];
			return;
		}
	});
}

function RAFEncryptDataMSE(_0x142999) {
	var _0x1abd47 = _0x34e3e0,
		_0x33d6a3 = new Object();
	_0x33d6a3[_0x1abd47(0xbd)] = MSERestore[0x1], $['ajax']({
		'type': _0x1abd47(0xad),
		'url': BaseURIClient + _0x1abd47(0x96),
		'data': JSON[_0x1abd47(0xb7)](_0x33d6a3),
		'contentType': _0x1abd47(0xc0),
		'traditional': !![],
		'success': function(_0x45fda5) {
			var _0x3df34a = _0x1abd47;
			if (_0x45fda5[_0x3df34a(0x9c)] == _0x3df34a(0xa3)) RAFEncryptDataChallenge(_0x142999);
			else {
				RAFStatus = ![];
				return;
			}
		},
		'failure': function(_0x906ef3) {
			RAFStatus = ![];
			return;
		},
		'error': function(_0x117b35) {
			RAFStatus = ![];
			return;
		}
	});
}

function RAFEncryptDataChallenge(_0x49f3aa) {
	var _0x111198 = _0x34e3e0,
		_0x47895a = new Object();
	_0x47895a[_0x111198(0xbd)] = EncryptData + '\x2008\x20' + Base64ToHex(_0x49f3aa) + le, $['ajax']({
		'type': _0x111198(0xad),
		'url': BaseURIClient + '/C_SendAPDU',
		'data': JSON['stringify'](_0x47895a),
		'contentType': _0x111198(0xc0),
		'traditional': !![],
		'success': function(_0x4d96ec) {
			var _0x233f7c = _0x111198;
			if (_0x4d96ec['cardStatusVal'] == _0x233f7c(0xa3)) RAFDecryptChallengeData(_0x4d96ec['responseVal']);
			else {
				RAFStatus = ![];
				return;
			}
		},
		'failure': function(_0x573d20) {
			RAFStatus = ![];
			return;
		},
		'error': function(_0x37a965) {
			RAFStatus = ![];
			return;
		}
	});
}

function RAFDecryptChallengeData(_0x5392c7) {
	var _0x50902d = _0x34e3e0,
		_0x2c2dd4 = new Object();
	_0x2c2dd4[_0x50902d(0x98)] = _0x5392c7, $['ajax']({
		'type': _0x50902d(0xad),
		'url': BaseURIServer + _0x50902d(0xb9),
		'data': JSON[_0x50902d(0xb7)](_0x2c2dd4),
		'contentType': 'application/json;\x20charset=utf-8',
		'traditional': !![],
		'success': function(_0x41a73c) {
			var _0x1dfceb = _0x50902d;
			if (_0x41a73c['resEncryptedData'] != undefined || null) RAFDecryptChallengefrmServer(_0x41a73c[_0x1dfceb(0xbe)]);
			else {
				RAFStatus = ![];
				return;
			}
		},
		'failure': function(_0x4ebf86) {
			RAFStatus = ![];
			return;
		},
		'error': function(_0x4b27db) {
			RAFStatus = ![];
			return;
		}
	});
}

function RAFDecryptChallengefrmServer(_0x3022f8) {
	var _0x354238 = _0x34e3e0;
	_0x3022f8 = _0x3022f8['toString']()[_0x354238(0xb8)](',')[_0x354238(0xaf)]('\x20');
	var _0x35eb1e = new Object();
	_0x35eb1e[_0x354238(0xbd)] = MSERestore[0x1], $[_0x354238(0xab)]({
		'type': _0x354238(0xad),
		'url': BaseURIClient + '/C_SendAPDU',
		'data': JSON[_0x354238(0xb7)](_0x35eb1e),
		'contentType': _0x354238(0xc0),
		'traditional': !![],
		'success': function(_0x3f811f) {
			var _0x4c6390 = _0x354238,
				_0x9c3d3d = Base64ToHex(_0x3022f8);
			if (_0x3f811f[_0x4c6390(0x9c)] == _0x4c6390(0xa3)) {
				var _0x16a799 = new Object();
				_0x16a799[_0x4c6390(0xbd)] = DecryptData + _0x9c3d3d + '\x20' + le, $['ajax']({
					'type': _0x4c6390(0xad),
					'url': BaseURIClient + _0x4c6390(0x96),
					'data': JSON[_0x4c6390(0xb7)](_0x16a799),
					'contentType': 'application/json;\x20charset=utf-8',
					'traditional': !![],
					'success': function(_0x2cd13e) {
						var _0x1fb2c4 = _0x4c6390,
							_0x590420 = Base64ToHex(_0x2cd13e[_0x1fb2c4(0xc1)]),
							_0x37d1bf = _0x590420['slice'](0x0, 0xf),
							_0x596569 = _0x590420['slice'](0x10, 0x2f);
						if (_0x2cd13e['cardStatusVal'] == '9000') RAFEncryptDataToServer(_0x596569);
						else {
							RAFStatus = ![];
							return;
						}
					},
					'failure': function(_0x2920b2) {
						RAFStatus = ![];
						return;
					},
					'error': function(_0x14c41b) {
						RAFStatus = ![];
						return;
					}
				});
			}
		},
		'failure': function(_0x29bf65) {
			RAFStatus = ![];
			return;
		},
		'error': function(_0xf21b12) {
			RAFStatus = ![];
			return;
		}
	});
}

function RAFEncryptDataToServer(_0x4a357e) {
	var _0x2b51f4 = _0x34e3e0,
		_0x585722 = new Object();
	_0x4a357e = _0x4a357e[_0x2b51f4(0xa0)]()['split'](',')[_0x2b51f4(0xaf)]('\x20'), _0x585722[_0x2b51f4(0xbd)] = EncryptData + _0x2b51f4(0xbb) + _0x4a357e + le, $[_0x2b51f4(0xab)]({
		'type': 'POST',
		'url': BaseURIClient + '/C_SendAPDU',
		'data': JSON[_0x2b51f4(0xb7)](_0x585722),
		'contentType': _0x2b51f4(0xc0),
		'traditional': !![],
		'success': function(_0x4e5318) {
			var _0x17e0ec = _0x2b51f4;
			if (_0x4e5318[_0x17e0ec(0x9c)] == '9000') RAFDecryptChallengefrmClient(_0x4e5318[_0x17e0ec(0xc1)]);
			else {
				RAFStatus = ![];
				return;
			}
		},
		'failure': function(_0x577483) {
			RAFStatus = ![];
			return;
		},
		'error': function(_0x41c0d4) {
			RAFStatus = ![];
			return;
		}
	});
}

function RAFDecryptChallengefrmClient(_0x5976cd) {
	var _0x2ea07e = _0x34e3e0,
		_0x2efe59 = new Object();
	_0x2efe59[_0x2ea07e(0x98)] = _0x5976cd, $[_0x2ea07e(0xab)]({
		'type': _0x2ea07e(0xad),
		'url': BaseURIServer + _0x2ea07e(0x97),
		'data': JSON[_0x2ea07e(0xb7)](_0x2efe59),
		'contentType': 'application/json;\x20charset=utf-8',
		'traditional': !![],
		'success': function(_0x2837fa) {
			var _0x336ab7 = _0x2ea07e;
			if (_0x2837fa[_0x336ab7(0xa7)] != null || undefined) RAFStatus = !![];
			else {
				RAFStatus = ![];
				return;
			}
		},
		'failure': function(_0x56cb14) {
			RAFStatus = ![];
			return;
		},
		'error': function(_0x4fb29f) {
			RAFStatus = ![];
			return;
		}
	});
}