var _0x248cb6 = _0x4ca9;
(function(_0xbde628, _0x3484ad) {
	var _0x11fa45 = _0x4ca9,
		_0x257f14 = _0xbde628();
	while (!![]) {
		try {
			var _0x5ae867 = -parseInt(_0x11fa45(0xa9)) / 0x1 * (parseInt(_0x11fa45(0xb6)) / 0x2) + parseInt(_0x11fa45(0x92)) / 0x3 + parseInt(_0x11fa45(0x89)) / 0x4 + -parseInt(_0x11fa45(0x98)) / 0x5 + parseInt(_0x11fa45(0xaf)) / 0x6 + parseInt(_0x11fa45(0xb2)) / 0x7 * (parseInt(_0x11fa45(0x8a)) / 0x8) + parseInt(_0x11fa45(0x8d)) / 0x9 * (-parseInt(_0x11fa45(0xb5)) / 0xa);
			if (_0x5ae867 === _0x3484ad) break;
			else _0x257f14['push'](_0x257f14['shift']());
		} catch (_0x4d945f) {
			_0x257f14['push'](_0x257f14['shift']());
		}
	}
}(_0x1ab4, 0x4c899));
var HCFSelectApp = [_0x248cb6(0x88), _0x248cb6(0x9e)],
	HCFReadCertificate = [_0x248cb6(0x8f), _0x248cb6(0xa5), _0x248cb6(0x93)],
	HCFStatus = null,
	cardstatus = null;

function Start_HCF_Process() {
	var _0x15944b = _0x248cb6,
		_0x4c279b = new Object();
	_0x4c279b[_0x15944b(0xa0)] = HCFSelectApp[0x0], $[_0x15944b(0x8c)]({
		'type': _0x15944b(0xb3),
		'url': BaseURIClient + _0x15944b(0x97),
		'data': JSON['stringify'](_0x4c279b),
		'contentType': _0x15944b(0xaa),
		'traditional': !![],
		'success': function(_0x24591b) {
			var _0xbed448 = _0x15944b;
			if (_0x24591b[_0xbed448(0xac)] == _0xbed448(0xa2)) {
				var _0x253f5a = new Object();
				_0x253f5a[_0xbed448(0xa0)] = HCFSelectApp[0x1], $[_0xbed448(0x8c)]({
					'type': 'POST',
					'url': BaseURIClient + _0xbed448(0x97),
					'data': JSON[_0xbed448(0x9b)](_0x253f5a),
					'contentType': _0xbed448(0xaa),
					'traditional': !![],
					'success': function(_0x15dd65) {
						var _0x357c2a = _0xbed448;
						_0x15dd65[_0x357c2a(0xac)] == _0x357c2a(0xa2) ? HCFReadCertificateDongle() : HCFStatus = ![];
					},
					'failure': function(_0x3e9ef8) {
						HCFStatus = ![];
						return;
					},
					'error': function(_0x143887) {
						HCFStatus = ![];
						return;
					}
				});
			} else cardstatus = _0x24591b[_0xbed448(0xac)], HCFStatus = ![];
		},
		'failure': function(_0x49ceb5) {
			HCFStatus = ![];
			return;
		},
		'error': function(_0x14bb00) {
			HCFStatus = ![];
			return;
		}
	});
}

function HCFReadCertificateDongle() {
	var _0x5c0feb = _0x248cb6,
		_0x34adb6 = new Object();
	_0x34adb6[_0x5c0feb(0xa0)] = HCFReadCertificate[0x0], $['ajax']({
		'type': 'POST',
		'url': BaseURIClient + _0x5c0feb(0x97),
		'data': JSON['stringify'](_0x34adb6),
		'contentType': _0x5c0feb(0xaa),
		'traditional': !![],
		'success': function(_0x9243c0) {
			var _0x112afe = _0x5c0feb;
			if (_0x9243c0[_0x112afe(0xac)] == _0x112afe(0xa2)) {
				var _0x10b1f9 = new Object();
				_0x10b1f9[_0x112afe(0xa0)] = HCFReadCertificate[0x1], $[_0x112afe(0x8c)]({
					'type': _0x112afe(0xb3),
					'url': BaseURIClient + '/C_SendAPDU',
					'data': JSON[_0x112afe(0x9b)](_0x10b1f9),
					'contentType': _0x112afe(0xaa),
					'traditional': !![],
					'success': function(_0x3f6e15) {
						var _0x42e93f = _0x112afe;
						CalculateCertLength(_0x3f6e15['responseVal']);
						if (_0x3f6e15[_0x42e93f(0xac)] == _0x42e93f(0xa2)) {
							var _0x2e63ca = new Object(),
								_0x4fccf4 = parseInt(CertificateLength, 0x10),
								_0x2edcd5 = _0x4fccf4['toString'](0x10);
							if (_0x2edcd5[_0x42e93f(0xa6)] == 0x2) var _0x2edcd5 = '00' + _0x2edcd5;
							else {
								if (_0x2edcd5['length'] == 0x3) var _0x2edcd5 = '0' + _0x2edcd5;
								else {
									if (_0x2edcd5[_0x42e93f(0xa6)] == 0x4) var _0x2edcd5 = _0x2edcd5;
								}
							}
							var _0x367ef3 = _0x2edcd5[_0x42e93f(0xa4)](0x0, 0x2),
								_0x38a31a = _0x2edcd5['substring'](0x2, 0x4),
								_0x33e2ac = 0x0;
							if (_0x4fccf4 > 0x400) {
								_0x33e2ac = parseInt(_0x4fccf4 / 0x400);
								var _0x5b42ae = _0x4fccf4 % 0x400,
									_0x391bda = _0x42e93f(0x91),
									_0xda60f0 = '',
									_0x25570d = '00\x2004\x2000',
									_0x47887f = 0x0,
									_0x1cdccd = 0x1,
									_0x1faf34, _0x13db70, _0x55a1a5 = '',
									_0x412dff = [];
								for (_0x13db70 = 0x0; _0x13db70 < _0x33e2ac; _0x13db70++) {
									var _0x41f05a = new Object();
									_0x41f05a[_0x42e93f(0xa0)] = ReadCertificate[0x3] + _0x391bda + _0x25570d, _0x412dff[_0x42e93f(0xa7)](_0x41f05a);
									_0x13db70 > 0x0 ? _0x47887f += 0x400 : _0x47887f += 0x400 + 0x4;
									var _0x50696f = _0x47887f[_0x42e93f(0x99)](0x10);
									console[_0x42e93f(0xb7)](_0x50696f);
									if (_0x50696f[_0x42e93f(0xa6)] == 0x2) var _0x50696f = '00' + _0x50696f;
									else {
										if (_0x50696f[_0x42e93f(0xa6)] == 0x3) var _0x50696f = '0' + _0x50696f;
										else {
											if (_0x50696f['length'] == 0x4) var _0x50696f = _0x50696f;
										}
									}
									var _0x367ef3 = _0x50696f[_0x42e93f(0xa4)](0x0, 0x2),
										_0x38a31a = _0x50696f[_0x42e93f(0xa4)](0x2, 0x4);
									_0x391bda = _0x367ef3 + _0x38a31a, console[_0x42e93f(0xb7)](JSON[_0x42e93f(0x9b)](_0x412dff));
								}
								if (_0x5b42ae != 0x0) {
									var _0x50696f = _0x5b42ae[_0x42e93f(0x99)](0x10);
									console['log'](_0x50696f);
									if (_0x50696f[_0x42e93f(0xa6)] == 0x2) var _0x50696f = '00' + _0x50696f;
									else {
										if (_0x50696f[_0x42e93f(0xa6)] == 0x3) var _0x50696f = '0' + _0x50696f;
										else {
											if (_0x50696f[_0x42e93f(0xa6)] == 0x4) var _0x50696f = _0x50696f;
										}
									}
									var _0x367ef3 = _0x50696f[_0x42e93f(0xa4)](0x0, 0x2),
										_0x38a31a = _0x50696f[_0x42e93f(0xa4)](0x2, 0x4);
									_0x25570d = _0x367ef3 + _0x38a31a;
									var _0x423c88 = new Object();
									_0x423c88[_0x42e93f(0xa0)] = ReadCertificate[0x3] + _0x391bda + '\x2000\x20' + _0x25570d, _0x412dff[_0x42e93f(0xa7)](_0x423c88);
								}
								var _0x460f76 = function(_0x38a6af) {
									var _0x4df5c9 = _0x42e93f;
									if (_0x412dff[_0x4df5c9(0xa6)] == _0x38a6af) {
										console[_0x4df5c9(0xb7)](_0x4df5c9(0xad), _0x412dff), HCFVerifyCertificateData(hexToBase64(_0x55a1a5));
										return;
									}
									var _0x3c68d8 = _0x412dff[_0x38a6af];
									$[_0x4df5c9(0x8c)]({
										'type': _0x4df5c9(0xb3),
										'url': BaseURIClient + _0x4df5c9(0x97),
										'data': JSON[_0x4df5c9(0x9b)](_0x3c68d8),
										'contentType': _0x4df5c9(0xaa),
										'traditional': !![],
										'success': function(_0x560119) {
											var _0x5174e4 = _0x4df5c9;
											console[_0x5174e4(0xb7)](_0x560119), _0x560119[_0x5174e4(0xac)] == 0x2328 && (_0x55a1a5 += Base64ToHex(_0x560119[_0x5174e4(0xb0)]), console['log'](_0x55a1a5));
										},
										'error': function() {
											var _0x3fe7fc = _0x4df5c9;
											_0x412dff[_0x3fe7fc(0xa7)]({}), console['error'](_0x3fe7fc(0x8e), _0x3fe7fc(0xab), arguments);
										},
										'complete': function() {
											_0x460f76(++_0x38a6af);
										}
									});
								};
								_0x460f76(0x0);
							} else _0x2e63ca[_0x42e93f(0xa0)] = ReadCertificate[0x2], console[_0x42e93f(0xb7)](JSON[_0x42e93f(0x9b)](_0x2e63ca)), $[_0x42e93f(0x8c)]({
								'type': _0x42e93f(0xb3),
								'url': BaseURIClient + '/C_SendAPDU',
								'data': JSON[_0x42e93f(0x9b)](_0x2e63ca),
								'contentType': _0x42e93f(0xaa),
								'traditional': !![],
								'success': function(_0x135fb0) {
									var _0x4a7e2b = _0x42e93f;
									_0x135fb0[_0x4a7e2b(0xac)] == _0x4a7e2b(0xa2) && HCFVerifyCertificateData(_0x135fb0[_0x4a7e2b(0xb0)]);
								}
							});
						} else {
							HCFStatus = ![];
							return;
						}
					},
					'failure': function(_0x27f181) {
						HCFStatus = ![];
						return;
					},
					'error': function(_0x283840) {
						HCFStatus = ![];
						return;
					}
				});
			}
		},
		'failure': function(_0x277ce6) {
			HCFStatus = ![];
			return;
		},
		'error': function(_0x171a57) {
			HCFStatus = ![];
			return;
		}
	});
}

function HCFVerifyCertificateData(_0x481d7b) {
	var _0x2dfd5c = _0x248cb6,
		_0x386d83 = new Object();
	_0x386d83[_0x2dfd5c(0xa8)] = _0x481d7b, $[_0x2dfd5c(0x8c)]({
		'type': _0x2dfd5c(0xb3),
		'url': BaseURIServer + _0x2dfd5c(0x9a),
		'data': JSON[_0x2dfd5c(0x9b)](_0x386d83),
		'contentType': _0x2dfd5c(0xaa),
		'traditional': !![],
		'success': function(_0x11d3f0) {
			var _0x35eaa1 = _0x2dfd5c;
			if (_0x11d3f0['certServer'] != undefined || _0x11d3f0[_0x35eaa1(0x8b)] != null) EncryptHBeat(_0x11d3f0[_0x35eaa1(0xb4)]);
			else {
				HCFStatus = ![];
				return;
			}
		},
		'failure': function(_0x4695e6) {
			HCFStatus = ![];
			return;
		},
		'error': function(_0x248f45) {
			HCFStatus = ![];
			return;
		}
	});
}

function EncryptHBeat(_0x24878b) {
	var _0x3bd4ae = _0x248cb6,
		_0x3ac965 = new Object();
	_0x3ac965[_0x3bd4ae(0x94)] = _0x24878b, $[_0x3bd4ae(0x8c)]({
		'type': _0x3bd4ae(0xb3),
		'url': BaseURIServer + _0x3bd4ae(0x9f),
		'data': JSON[_0x3bd4ae(0x9b)](_0x3ac965),
		'contentType': _0x3bd4ae(0xaa),
		'traditional': !![],
		'success': function(_0x473376) {
			var _0x3ce124 = _0x3bd4ae;
			if (_0x473376[_0x3ce124(0x90)] != null || _0x473376[_0x3ce124(0x90)] != undefined) DecryptHeartBeat(_0x473376[_0x3ce124(0x90)]);
			else {
				HCFStatus = ![];
				return;
			}
		},
		'failure': function(_0x1cbd7d) {
			HCFStatus = ![];
			return;
		},
		'error': function(_0x2b6f57) {
			HCFStatus = ![];
			return;
		}
	});
}

function DecryptHeartBeat(_0x3d8edc) {
	var _0x1103f1 = _0x248cb6,
		_0x91dbcd = new Object();
	_0x91dbcd[_0x1103f1(0xa0)] = MSERestore[0x1], $[_0x1103f1(0x8c)]({
		'type': _0x1103f1(0xb3),
		'url': BaseURIClient + _0x1103f1(0x97),
		'data': JSON[_0x1103f1(0x9b)](_0x91dbcd),
		'contentType': _0x1103f1(0xaa),
		'traditional': !![],
		'success': function(_0x137a36) {
			var _0x29d240 = _0x1103f1;
			if (_0x137a36[_0x29d240(0xac)] == _0x29d240(0xa2)) {
				var _0xa89a34 = new Object();
				_0xa89a34['sAPDUCommand'] = DecryptData + _0x29d240(0xb1) + Base64ToHex(_0x3d8edc) + le, $[_0x29d240(0x8c)]({
					'type': _0x29d240(0xb3),
					'url': BaseURIClient + _0x29d240(0x97),
					'data': JSON[_0x29d240(0x9b)](_0xa89a34),
					'contentType': _0x29d240(0xaa),
					'traditional': !![],
					'success': function(_0x2885ae) {
						var _0x3e9e8b = _0x29d240;
						if (_0x2885ae[_0x3e9e8b(0xac)] == '9000') {
							var _0x1e2f07 = Generate_RdsBeat(_0x2885ae[_0x3e9e8b(0xb0)]),
								_0x450f5f = arrayBufferToBase64(_0x1e2f07);
							VerifyRdsBeat(_0x450f5f);
						} else {
							HCFStatus = ![];
							return;
						}
					},
					'failure': function(_0x48be82) {
						HCFStatus = ![];
						return;
					},
					'error': function(_0x2f84fa) {
						HCFStatus = ![];
						return;
					}
				});
			}
		},
		'failure': function(_0x23735f) {
			HCFStatus = ![];
			return;
		},
		'error': function(_0x2b8e47) {
			HCFStatus = ![];
			return;
		}
	});
}

function _0x1ab4() {
	var _0x1ca505 = ['toString', '/S_VerifyCertClient', 'stringify', 'substr', 'Base64ToHex', '00\x20A4\x2000\x200C\x2002\x206F\x2000', '/S_heartbeatRbeat', 'sAPDUCommand', 'call', '9000', 'slice', 'substring', '00\x20B0\x2000\x2000\x2000\x2000\x200A', 'length', 'push', 'certDongle', '4449lbMmeD', 'application/json;\x20charset=utf-8', 'user', 'cardStatusVal', 'runRequests\x20Success', 'btoa', '951714czjILm', 'responseVal', '\x2002\x20', '119644vhedKQ', 'POST', 'verifyCertSts', '10KJhQbo', '206UVqKDK', 'log', '00\x20A4\x2000\x200C\x2002\x203F\x2000', '819860KkgMNd', '80hSTCXi', 'certServer', 'ajax', '1283427HwuruL', 'runRequests\x20Error', '00\x20A4\x2000\x200C\x2002\x206F\x2008', 'encryptRbeat', '00\x2004', '1235136BwgbBM', '00\x20B0\x2000\x2000\x2000', 'EncryptSts', 'rDsBeat', '/S_VerifyRbeat', '/C_SendAPDU', '159345XFhpfk'];
	_0x1ab4 = function() {
		return _0x1ca505;
	};
	return _0x1ab4();
}

function VerifyRdsBeat(_0x32c7dd) {
	var _0x2c8167 = _0x248cb6,
		_0x48295c = new Object();
	_0x48295c[_0x2c8167(0x95)] = _0x32c7dd, $['ajax']({
		'type': _0x2c8167(0xb3),
		'url': BaseURIServer + _0x2c8167(0x96),
		'data': JSON[_0x2c8167(0x9b)](_0x48295c),
		'contentType': 'application/json;\x20charset=utf-8',
		'traditional': !![],
		'success': function(_0x966b4) {
			if (_0x966b4 != null || _0x966b4 != undefined) HCFStatus = !![];
			else {
				HCFStatus = ![];
				return;
			}
		},
		'failure': function(_0x34977e) {
			HCFStatus = ![];
			return;
		},
		'error': function(_0xaee435) {
			HCFStatus = ![];
			return;
		}
	});
}

function _0x4ca9(_0xc194cc, _0x5533de) {
	var _0x1ab44a = _0x1ab4();
	return _0x4ca9 = function(_0x4ca951, _0x14ad77) {
		_0x4ca951 = _0x4ca951 - 0x88;
		var _0x209148 = _0x1ab44a[_0x4ca951];
		return _0x209148;
	}, _0x4ca9(_0xc194cc, _0x5533de);
}

function Generate_RdsBeat(_0x2751ab) {
	var _0x5a9a34 = _0x248cb6;
	_0x2751ab = this[_0x5a9a34(0x9d)](_0x2751ab), _0x2751ab = hexToBytes(_0x2751ab);
	var _0x3bccac = _0x2751ab['slice'](),
		_0x42bd66 = _0x3bccac[_0x3bccac[_0x5a9a34(0xa6)] - 0x1]++,
		_0x204048 = new Uint8Array(_0x3bccac);
	return _0x204048;
}

function arrayBufferToBase64(_0x43e213) {
	var _0x50ede0 = _0x248cb6,
		_0x5b5c68 = '',
		_0x12d2ca = [][_0x50ede0(0xa3)][_0x50ede0(0xa1)](new Uint8Array(_0x43e213));
	return _0x12d2ca['forEach'](_0x370a1e => _0x5b5c68 += String['fromCharCode'](_0x370a1e)), window[_0x50ede0(0xae)](_0x5b5c68);
}

function hexToBytes(_0x11fc22) {
	var _0x352a35 = _0x248cb6;
	for (var _0x20622a = [], _0x2683e3 = 0x0; _0x2683e3 < _0x11fc22[_0x352a35(0xa6)]; _0x2683e3 += 0x2) _0x20622a[_0x352a35(0xa7)](parseInt(_0x11fc22[_0x352a35(0x9c)](_0x2683e3, 0x2), 0x10));
	return _0x20622a;
}

window.exports = Start_HCF_Process;