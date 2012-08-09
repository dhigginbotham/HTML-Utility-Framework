/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'IcoMoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-home' : '&#x22;',
			'icon-box-add' : '&#x21;',
			'icon-user' : '&#x23;',
			'icon-busy' : '&#x24;',
			'icon-loading' : '&#x25;',
			'icon-diamond' : '&#x26;',
			'icon-cog' : '&#x27;',
			'icon-pie' : '&#x28;',
			'icon-comments' : '&#x29;',
			'icon-grid-view' : '&#x2a;',
			'icon-thumbs-up' : '&#x2b;',
			'icon-thumbs-down' : '&#x2c;',
			'icon-twitter' : '&#x2e;',
			'icon-github' : '&#x2d;',
			'icon-chrome' : '&#x2f;',
			'icon-IE' : '&#x30;',
			'icon-libreoffice' : '&#x31;',
			'icon-share' : '&#x32;',
			'icon-arrow-right' : '&#x33;',
			'icon-arrow-left' : '&#x34;',
			'icon-plus' : '&#x35;',
			'icon-minus' : '&#x36;',
			'icon-cancel' : '&#x38;',
			'icon-info' : '&#x37;',
			'icon-bookmark' : '&#x39;',
			'icon-bookmark-2' : '&#x3a;',
			'icon-fire' : '&#x3b;',
			'icon-rocket' : '&#x3c;',
			'icon-equalizer' : '&#x3d;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^s'"]+/);
		if (c) {
			addIcon(el, icons[c[0]]);
		}
	}
};