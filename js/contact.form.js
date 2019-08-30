$(function() {

	"use strict";

	$('.contact-form').on("submit", function(){
		var $this = $(this);
						   
		$('.invalid').removeClass('invalid');						   
		var msg = 'Наступні поля необхідно заповнити:',
			successMessage = "Дякуємо що зв\'язалися з нами. Ваше повідомлення є дуже важливим для нас і ми з Вами сконтактуємося найближчим часом.",
			error = 0,
			pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);


		if ($.trim($('.contact-form input[name="name"]').val()) === '') {error = 1; $this.find('input[name="name"]').addClass('invalid'); msg = msg +  '\n - Ваше ім\'я';}
        if (!pattern.test($.trim($('.contact-form input[name="email"]').val()))) {error = 1; $this.find('input[name="email"]').addClass('invalid'); msg = msg +  '\n - Ваш Email';}
        if ($.trim($('.contact-form input[name="phone"]').val()) === '') {error = 1; $this.find('input[name="phone"]').addClass('invalid'); msg = msg +  '\n - Ваш телефон';}
        if ($.trim($('.contact-form select[name="type"]').val()) === '') {error = 1; $this.find('select[name="type"]').addClass('invalid'); msg = msg +  '\n - Вид палетів';}
        if ($.trim($('.contact-form select[name="size"]').val()) === '') {error = 1; $this.find('select[name="size"]').addClass('invalid'); msg = msg +  '\n - Розмір палетів';}
        if ($.trim($('.contact-form select[name="from"]').val()) === '') {error = 1; $this.find('select[name="from"]').addClass('invalid'); msg = msg +  '\n - Кількість палетів (Від)';}
        if ($.trim($('.contact-form select[name="to"]').val()) === '') {error = 1; $this.find('select[name="to"]').addClass('invalid'); msg = msg +  '\n - Кількість палетів (До)';}

		//if ($.trim($('.contact-form textarea[name="message"]').val()) === '') {error = 1; $this.find('textarea[name="message"]').parent().addClass('invalid'); msg = msg +  '\n - Your Message';}

        if (error){
        	updateTextPopup('Помилка', msg);
        }else{
            var url = 'send_mail.php',
            	name = $.trim($this.find('input[name="name"]').val()),
            	email = $.trim($this.find('input[name="email"]').val()),
            	phone = $.trim($this.find('input[name="phone"]').val()),
            	type = $.trim($this.find('select[name="type"]').val()),
            	size = $.trim($this.find('select[name="size"]').val()),
            	from = $.trim($this.find('select[name="from"]').val()),
            	to = $.trim($this.find('select[name="to"]').val()),
            	message = $.trim($this.find('textarea[name="message"]').val());

            $.post(url,{'name':name,'email':email,'phone':phone,'type':type,'size':size,'from':from,'to':to,'message':message},function(data){
	        	updateTextPopup('<b>Дякуємо</b><br> за ваше замовлення!', successMessage);
	        	$this.append('<input type="reset" class="reset-button"/>');
	        	$('.reset-button').click().remove();
	        	$this.find('.focus').removeClass('focus');
			});
        }
	  	return false;
	});

	$(document).on('keyup', 'input', function(){
		$(this).removeClass('invalid');
	});

	$(document).on('change', 'select', function(){
		$(this).removeClass('invalid');
	});

	function updateTextPopup(title, text){
		$('.thankTitle').html(title);
		$('.thankContent').html(text);
		$('.popup-content').removeClass('active');
		$('.popup-wrapper, .popup-content[data-rel="1"]').addClass('active');
		$('html').addClass('overflow-hidden');
	}

});