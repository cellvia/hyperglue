var hyperglue = require('../../');
var test = require('tape');

test('text/html update of :first of multiple selected elements', function (t) {
	t.plan(3);

    var res;

    res = hyperglue('<div></div>', { 'div:first': { _text: 'world' } }).outerHTML;
    t.equal(res, '<div>world</div>');

    //fails
    res = hyperglue('<div></div><div></div>', { 'div:first': { _text: 'world' } }).outerHTML;
    t.equal(res, '<div>world</div><div></div>');

    res = hyperglue('<div></div><div></div>', { 'div:first': { 'data-test': 'world' } }).outerHTML;
    t.equal(res, '<div data-test="world"></div><div></div>');

});