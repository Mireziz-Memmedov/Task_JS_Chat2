"use strict";
$(document).ready(function () {

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
        $('#you').append(a())
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
        $('#you').append(a('class="right"'))
        $('#me').append(a())
        $('#inputyou').val('');

        document.querySelector('#you').scrollTo(0, document.querySelector('#you').scrollHeight)
        document.querySelector('#me').scrollTo(0, document.querySelector('#me').scrollHeight)

    });



});




