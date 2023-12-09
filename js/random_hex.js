/*jslint browser: true*/
/*global $*/
var current_class = "is-1";

function setColumnSize() {
    var $columns = $(".column");
    if (window.innerWidth <= 700) {
      $columns.removeClass(current_class);
      $columns.addClass("is-4");
      current_class = "is-4";
    } else if (window.innerWidth <= 1000) {
      $columns.removeClass(current_class);
      $columns.addClass("is-3");
      current_class = "is-3";
    } else if (window.innerWidth <= 1200) {
      $columns.removeClass(current_class);
      $columns.addClass("is-2");
      current_class = "is-2";
    } else {
      $columns.removeClass(current_class);
      $columns.addClass("is-1");
      current_class = "is-1";
    }
}

$(document).ready(function () {
    'use strict';

    var i, j, s, html, div_num = document.getElementById('div_num');

    function dec2hex(c) {
        if (c < 10) {
            return String.fromCharCode('0'.charCodeAt(0) + c);
        }
        return String.fromCharCode('A'.charCodeAt(0) + c - 10);
    }

    html = '';
    html += '<div class="columns is-multiline is-mobile">';
    for (i = 0; i < 480; i += 1) {
        s = '';
        for (j = 0; j < 8; j += 1) {
            s += dec2hex(Math.floor(Math.random() * 16));
        }
        html += '<div class="column">' + s + "</div>";
    }
    html += '</div>';
    div_num.innerHTML = html;
    setColumnSize();
});

$(window).resize(setColumnSize);
