'use strict';
// import 'jquery.inputmask';

$(document).ready(() => {
    // Кнопка бургер-меню
    $('.burger-menu').eq(0).click(function() {
        $(this).toggleClass('open');
        $('nav').toggleClass('open');
    });
    //
    // Переход по ссылкам из открытого бургер меню при ши рине экрана меньше 768px
    if ($(window).width() < 768) {
        $('nav ul li a').click(() => {
            $('nav').toggleClass('open');
            $('.burger-menu').toggleClass('open');
        });
    }

    // Кнопка "Посмотреть меню" с главного экрана
    $('button').eq(0).click(() => {
        $('#menu')[0].scrollIntoView();
    });
    //

    // Кнопки оформить заказ => скролл к блоку "Оформление заказа" и заполнение поля с заказываемой едой
    const menuButtons = $('.menu-button');
    for (let i = 0; i < menuButtons.length; i++) {
        menuButtons.eq(i).click(() => {
            $('input.choice').val(menuButtons.eq(i).prev().prev().prev().text());
            $('#order')[0].scrollIntoView();
        });
    }
    //

    // Ввод в input-ы с именем и предметом заказа
    function forTextInput(selector, expression) {
        $(selector).on('input', function() {
            let input = $(this).val();
            let filteredInput = input.replace(expression, '').toLowerCase();
            if (filteredInput.length > 0) filteredInput = filteredInput.charAt(0).toUpperCase() + filteredInput.slice(1);
            $(this).val(filteredInput);
        });
    }
    forTextInput('.name', /[^a-zA-Zа-яА-Я]/g);
    forTextInput('.choice', /[^а-яА-Я]/g);
    //

    // Номер телефона
    $('.tel').inputmask({
        mask: "+7 (999) 999-99-99",
        placeholder: "_",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true
    });
    //

    // Форма
    const form = $('form');
    $('.form-button').click(() => {
        if ($('.name').val() && $('.tel').val().length === 18 && $('.choice').val()) {
            $('.form-button').css('transition', 'unset');
            form.css('visibility', 'hidden');
            $('.order-confirm').css('display', 'flex');
            $('.invalid').hide();
            form[0].reset();
        } else {
            let inputs = $('input');
            for (let i = 0; i < inputs.length; i++) {
                if (!inputs.eq(i).val()) inputs.eq(i).prev().show();
                else inputs.eq(i).prev().hide();
            }
        }
    });
    //






});