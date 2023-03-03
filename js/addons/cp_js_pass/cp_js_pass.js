(function(_, $) {

$.ceEvent('on', 'ce.commoninit', function(context) {
	if (!$('#cp_js_pass').length) {
		$("#password1").after('<i title="Сгенерировать пароль" id="cp_js_pass" class="fa fa-key"></i>');
		$('#cp_js_pass').on('click', cp_js_generate_pass);
	}
	
	function cp_js_pass_pass_gen(len) {
		var temp = '';
		var keylist = "abcdhijkl123nuvwxyz012345UVW6789!@#opqrst$%efg^&*(){[STUV]\:;?,./-=ABCDEFGHIJ()_KLMNOP_+}QRWXYZ";
		for (i = 0; i < len; i++) {
			temp += keylist.charAt(Math.floor(Math.random()*keylist.length));
		}
		return temp;
	}
	
	function cp_js_generate_pass() {
		pass = cp_js_pass_pass_gen(characters_amount);
		$('#password1').val(pass);
		$('#password2').val(pass);
		$.ceNotification('show', {
			type: 'N',
			title: _.tr('cp_gen_pass'),
			message: _.tr('cp_pass_copy_clipboard')+'<br>'+pass
		});
	}
});
$.ceEvent('on', 'ce.dialogshow', function(context) {
	if (!$('#cp_js_pass').length) {
		$("#password1").after('<i title="Сгенерировать пароль" id="cp_js_pass" class="fa fa-key"></i>');
		$('#cp_js_pass').on('click', cp_js_generate_pass);
	}
	
	function cp_js_pass_pass_gen(len) {
		var temp = '';
		var keylist = "abcdhijkl123nuvwxyz012345UVW6789!@#opqrst$%efg^&*(){[STUV]\:;?,./-=ABCDEFGHIJ()_KLMNOP_+}QRWXYZ";
		for (i = 0; i < len; i++) {
			temp += keylist.charAt(Math.floor(Math.random()*keylist.length));
		}
		return temp;
	}
	
	function cp_js_generate_pass() {
		pass = cp_js_pass_pass_gen(characters_amount);
		$('#password1').val(pass);
		$('#password2').val(pass);
		$.ceNotification('show', {
			type: 'N',
			title: _.tr('cp_gen_pass'),
			message: _.tr('cp_pass_copy_clipboard')+'<br>'+pass
		});
	}
});
}(Tygh, Tygh.$));
