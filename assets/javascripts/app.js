/*
* Theme Name: ATSimpleBlog Theme
* Author: Ali Tajari
* Author URL: http://alitajari.ir/
* Version: 1.0.0
*/

$(document).ready(function(){

    setTimeout(function(){
        $('.preloader').fadeOut();
    }, 500);

    $('[data-toggle="tooltip"]').tooltip();

    $('.scrollToTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    $(document).on('click', '.menuSmallSizeBtn svg, .closeMenuBtn', function(e){
        e.preventDefault();

        const menuEl = $(this).parents('.topmenu').find('.menuList');
        if($(this).parents('.topmenu').find('.closeMenuBtn').length == 0){
            $(this).parents('.topmenu').append('<a href="#" class="closeMenuBtn"> بستن </li>');
        }else{
            $(this).parents('.topmenu').find('.closeMenuBtn').remove();
        }
        if(menuEl.hasClass('active')){
            menuEl.removeClass('active');
        }else {
            menuEl.addClass('active');
        }
    });

    $(document).on('click', '.commentReply', function(e){
        e.preventDefault();
        const commentSerial = $(this).attr('data-commentSerial'),
        buildHtml = 'پاسخ به <strong>' + $(this).parent().find('h4').text() + '</strong> . <button type="button" class="btn btn-danger btn-sm cancelReplyBtn float-left">لغو</button><input type="hidden" name="replyTo" id="commentSerialInp" value="' + commentSerial + '">';
        if($('.commentform .repliedtoTxt').length == 0){
            $('.commentform').find('.input-group:eq(0)').before('<div class="repliedtoTxt" style="display: none;">' + buildHtml + '</div>');
            $('.commentform .repliedtoTxt').slideDown();
        }else{
            $('.commentform .repliedtoTxt').html(buildHtml).slideDown();
        }
        $('html').animate({
            scrollTop: $('.commentform .repliedtoTxt').offset().top - 50
        }, 400);
    });

    $(document).on('click', '.cancelReplyBtn', function(e){
        e.preventDefault();

        $('.commentform .repliedtoTxt').slideUp().html('');
    });

    $(document).on('submit', 'form', function(e){
        const inpElem = $(this).find('[data-validate]'),
        lengthInputs = inpElem.length;
        var getErrorArray = [];
        
        for(var counter = 0; counter < lengthInputs; counter++){
            var multiValidation = [], inpErrorStatus = false;
            const inpValidateAttr = inpElem.eq(counter).attr('data-validate');
            if(inpValidateAttr.indexOf(',') !== -1){
                multiValidation = inpValidateAttr.split(',');
            }else{
                multiValidation.push(inpValidateAttr);
            }
            
            backFlag:
            for(var counterValidation = 0; counterValidation < multiValidation.length; counterValidation++){
                if(multiValidation[counterValidation].trim() === 'required') {
                    if(inpElem.eq(counter).val().length == 0){
                        inpErrorStatus = true;
                        if(getErrorArray.indexOf('emptyErr') == -1){
                            getErrorArray.push('emptyErr');
                            break backFlag;
                        }
                    }
                }
                if(multiValidation[counterValidation].trim() === 'email'){
                    if(inpElem.eq(counter).val().length !== 0 || getErrorArray.indexOf('emptyErr') !== -1){
                        if(!validateEmail(inpElem.eq(counter).val())){
                            getErrorArray.push('emailErr');
                            inpErrorStatus = true;
                        }
                    }
                }
            }
        
            if(inpErrorStatus == true){
                inpElem.eq(counter).addClass('hasError');
            }else{
                inpElem.eq(counter).removeClass('hasError');
            }
        }
        
        if(getErrorArray.length !== 0){
            e.preventDefault();

            var ErrText = {
                'emailErr': 'ایمیل وارد شده صحیح نمی باشد.',
                'emptyErr': 'فیلد های مشخص شده را پر نمایید.'
            }, htmlErr = '';

            if(getErrorArray.indexOf('emptyErr') !== -1){
                htmlErr += ErrText.emptyErr;
            }
            if(getErrorArray.length > 1){
                htmlErr += '<br>';
            }
            if(getErrorArray.indexOf('emailErr') !== -1){
                htmlErr += ErrText.emailErr;
            }

            if($(this).find('.alert-danger').length == 0){
                $(this).find('h5').after('<div class="alert alert-danger" role="alert" style="display: none;">' + htmlErr + '</div>');
                $(this).find('.alert.alert-danger').slideDown();
            }else{
                $(this).find('.alert-danger').html(htmlErr);
            }
        }else{
            $(this).find('.alert.alert-danger').slideUp();
            $(this).submit();
        }
    });
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}