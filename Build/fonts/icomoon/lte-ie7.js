/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'ng-ico-fly' : '&#xe000;',
			'ng-ico-shield' : '&#xe001;',
			'ng-ico-arrow-up' : '&#xe002;',
			'ng-ico-tag' : '&#xe003;',
			'ng-ico-group' : '&#xe004;',
			'ng-ico-bubble' : '&#xe005;',
			'ng-ico-direction' : '&#xe006;',
			'ng-ico-art' : '&#xe007;',
			'ng-ico-book' : '&#xe008;',
			'ng-ico-flower' : '&#xe009;',
			'ng-ico-img' : '&#xe00a;',
			'ng-ico-chart' : '&#xe00b;',
			'ng-ico-ng' : '&#xe00d;',
			'ng-ico-search' : '&#xe00e;',
			'ng-ico-arrow-down' : '&#xe00f;',
			'ng-ico-arrow-right' : '&#xe010;',
			'ng-ico-arrow-down-2' : '&#xe011;',
			'ng-ico-arrow-up-2' : '&#xe012;',
			'ng-ico-arrow-left' : '&#xe013;',
			'ng-ico-arrow-left-2' : '&#xe014;',
			'ng-ico-arrow-right-2' : '&#xe015;',
			'ng-ico-arrow-left-3' : '&#xe016;',
			'ng-ico-arrow-down-3' : '&#xe017;',
			'ng-ico-arrow-up-3' : '&#xe018;',
			'ng-ico-arrow-right-3' : '&#xe019;',
			'ng-ico-codetag' : '&#xe00c;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/ng-ico-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};