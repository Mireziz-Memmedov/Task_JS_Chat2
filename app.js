"use strict";
$(document).ready(function () {

    // $('.btn').click(function (e) {
    //     e.preventDefault();
    //     let text = $('input').val().trim();
    //     if (text === '') return;
    //     if (isNaN(text)) {
    //         $('.col-md-12').append(`<button>${text}</button>`);
    //     } else {
    //         let a = parseInt(text);
    //         for (let i = 1; i <= a; i++) {
    //             $('.col-md-12').append(`<button>${i}</button>`);
    //         }
    //     }
    //     $('input').val('');
    // });


    // $('.btn').click(function (e) {
    //     e.preventDefault();
    //     let a = $('input').val().trim();

    //     if (isNaN(a)) {
    //         $('.col-md-12').append(`<button>${a}</button>`);
    //     } else {
    //         let r = parseFloat(a);
    //         for (let i = 1; i <= r; i++) {
    //             $('.col-md-12').append(`<button>${i}</button>`);

    //         }
    //     }
    //     $('input').val('');

    // });




    // $('.btn').click(function (e) {
    //     e.preventDefault();

    //     let a = (m) => {
    //         if (isNaN(m)) {
    //             $('.col-md-12').append(`<button>${m}</button>`);
    //         } else {
    //             for (let i = 1; i <= m; i++) {
    //                 $('.col-md-12').append(`<button>${i}</button>`);
    //             }
    //         }
    //     }
    //     a($('input').val());
    //     $('input').val('');
    // });



    // $('.btn').click(function (e) {
    //     e.preventDefault();

    //     let a = (m) => {
    //         m = parseFloat(m);
    //         for (let i = 1; i <= m; i++) {
    //             $('.col-md-12').append(`<button>${m}</button>`);

    //         }
    //     }
    //     a($('input').val());
    // });


    // $('.btn').click(function (e) {
    //     e.preventDefault();

    //     let a = m => {
    //         if (!isNaN(m)) {
    //             for (let i = 1; i <= m; i++) {
    //                 $('.col-md-12').append(`<div class="minibox">${m}</div>`);
    //             }
    //         } else if (!$.trim($('input').val()) == '') {
    //             $('.col-md-12').append(`<div class="minibox">${m}</div>`);
    //         }
    //     }
    //     a($('input').val());
    //     $('input').val('');
    // });


    // $('.btn').click(function (e) {
    //     e.preventDefault();

    //     if (!$.trim($('input').val()) == '') {

    //         let n = (m) => {
    //             for (let i = 1; i <= m; i++) {
    //                 $('.col-md-12').append(`<div class="minibox">${m}</div>`);
    //             }
    //         }

    //         let s = (h) => isNaN(h)
    //             ? $('.col-md-12').append(`<div class="minibox">${h}</div>`)
    //             : '';

    //         n($('input').val());
    //         s($('input').val());
    //     }

    //     $('input').val('');

    // });

    // $('.btn').click(function (e) {
    //     e.preventDefault();
    //     if (!$.trim($('input').val()) == '') {
    //         let a = b => {
    //             for (let i = 1; i <= b; i++) {
    //                 $('.minibox').append(`<h2>${b}</h2>`);
    //             }
    //         }
    //         let v = f => parseFloat(f) == f
    //             ? a(f)
    //             : $('.minibox').append(`<h2>${f}</h2>`);

    //         v($('input').val());
    //     }
    //     $('input').val('');
    // });

    // $('.btn').click(function (e) {
    //     e.preventDefault();

    //     if (!$.trim($('input').val()) == '') {
    //         let a = (b) => {
    //             for (let i = 1; i <= b; i++) {
    //                 $('.minibox').append(`<h2>${b}</h2>`);
    //             }
    //         }
    //         let s = (m) => Number(m)
    //             ? a(m)
    //             : $('.minibox').append(`<h2>${m}</h2>`);

    //         s($('input').val());
    //     }
    //     $('input').val('');
    // });

    // $('.btn').click(function (e) {
    //     e.preventDefault();

    //     if (!$.trim($('input').val()) == '') {

    //         let a = b => Number(b)
    //             ? $('.minibox').append(`<h2>${b}</h2>`)
    //             : $('.minibox').append(`<h2>${'Error'}</h2>`)

    //         a($('input').val());


    //     }
    //     $('input').val('');

    // });

    // let a = [1, 'salam', 5, 4]

    // for (let i = 0; i < a.length; i++) {
    //     console.log(a.length)
    // }


    // $('.btn').click(function (e) {
    //     e.preventDefault();

    //     let a = b => Number(b) ? $('.minibox').append(`<h2>${Number(b) + 5}</h2>`) : '';
    //     a($('input').val())
    //     $('input').val('');



    // });

    // $('#sentme').click(function (e) {
    //     e.preventDefault();

    //     if (!$.trim($('#inputme').val()) == '') {

    //         let a = b => {
    //             $('#me').append(`<h2 class="right">${b}</h2>`)
    //             $('#you').append(`<h2 class="left">${b}</h2>`)
    //         }
    //         a($('#inputme').val());

    //     }
    //     $('#inputme').val('');

    //     document.querySelector('#me').scrollTo(0, document.querySelector('#me').scrollHeight)
    //     document.querySelector('#you').scrollTo(0, document.querySelector('#you').scrollHeight)
    // });

    // $('#sentyou').click(function (e) {
    //     e.preventDefault();

    //     if (!$.trim($('#inputyou').val()) == '') {

    //         let a = b => {
    //             $('#you').append(`<h2 class="right">${b}</h2>`)
    //             $('#me').append(`<h2 class="left">${b}</h2>`)
    //         }
    //         a($('#inputyou').val());

    //     }
    //     else {
    //         return
    //     }
    //     $('#inputyou').val('');

    //     document.querySelector('#you').scrollTo(0, document.querySelector('#you').scrollHeight)
    //     document.querySelector('#me').scrollTo(0, document.querySelector('#me').scrollHeight)

    // });

    $('#sentme').click(function (e) {
        e.preventDefault();
        function a(b = '') {
            if (!$.trim($('#inputme').val()) == '') {
                let val = $('#inputme').val()
                    , newh2 = $('<h2></h2>')
                    , div = $(`<div ${b}></div>`)
                $(newh2).append(val)
                $(div).append(newh2)

                return div
            }
            else {
                return
            }
        }
        $('#you').append(a('class="right"'))
        $('#me').append(a('class="right"'))
        $('#inputme').val('');

        document.querySelector('#you').scrollTo(0, document.querySelector('#you').scrollHeight)
        document.querySelector('#me').scrollTo(0, document.querySelector('#me').scrollHeight)

    });

    $('#sentyou').click(function (e) {
        e.preventDefault();
        function a(b = '') {
            if (!$.trim($('#inputyou').val()) == '') {
                let val = $('#inputyou').val()
                    , newh2 = $('<h2></h2>')
                    , div = $(`<div ${b}></div>`)
                $(newh2).append(val)
                $(div).append(newh2)

                return div
            }
            else {
                return
            }
        }
        $('#you').append(a('class="left"'))
        $('#me').append(a('class="left"'))
        $('#inputyou').val('');

        document.querySelector('#you').scrollTo(0, document.querySelector('#you').scrollHeight)
        document.querySelector('#me').scrollTo(0, document.querySelector('#me').scrollHeight)

    });







});




