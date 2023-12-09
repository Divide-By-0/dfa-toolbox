/*jslint browser: true*/
/*global $*/

$(document).ready(function () {
    'use strict';
    var i, encoded, html,
        specialChars = {
            '0': 'NUL',
            '1': 'SOH',
            '2': 'STX',
            '3': 'ETX',
            '4': 'EOT',
            '5': 'ENQ',
            '6': 'ACK',
            '7': 'BEL',
            '8': 'BS',
            '9': 'TAB',
            '10': 'LF',
            '11': 'VT',
            '12': 'FF',
            '13': 'CR',
            '14': 'SO',
            '15': 'SI',
            '16': 'DLE',
            '17': 'DC1',
            '18': 'DC2',
            '19': 'DC3',
            '20': 'DC4',
            '21': 'NAK',
            '22': 'SYN',
            '23': 'ETB',
            '24': 'CAN',
            '25': 'EM',
            '26': 'SUB',
            '27': 'ESC',
            '28': 'FS',
            '29': 'GS',
            '30': 'RS',
            '31': 'US',
            '32': 'Space',
            '127': 'DEL'
        },
        ascii = document.getElementById('ascii');
    html = '';
    html += '<table class="table is-bordered is-striped is-fullwidth">';
    html += '<thead>';
    html += '<tr>';

    html += '<th>Bin</th>';
    html += "<th>Oct</th>";
    html += "<th>Dec</th>";
    html += "<th>Hex</th>";
    html += "<th>Char</th>";
    html += "<th>HTML</th>";

    html += '<tr>';
    html += '<thead>';

    function paddingLeft(str, len) {
        var pad;
        if (str.length === len) {
            return str;
        }
        pad = new [].constructor((len - str.length) + 1);
        return pad.join('0') + str;
    }

    function htmlEncode(html) {
        return document.createElement('a').appendChild(document.createTextNode(html)).parentNode.innerHTML;
    }
    html += "<tbody>";

    for (i = 0; i < 128; i += 1) {
        html += '<tr>';
        html += "<td>" + paddingLeft(i.toString(2), 8) + "</td>";
        html += "<td>" + paddingLeft(i.toString(8), 3) + "</td>";
        html += "<td>" + paddingLeft(i.toString(10), 3) + "</td>";
        html += "<td>" + paddingLeft(i.toString(16), 2) + "</td>";
        if (specialChars.hasOwnProperty(i.toString())) {
            html += "<td>" + specialChars[i.toString()] + "</td>";
        } else {
            html += "<td>" + String.fromCharCode(i) + "</td>";
        }
        encoded = htmlEncode(String.fromCharCode(i));
        if (!encoded || encoded[0] !== '&') {
            encoded = '&#' + i;
        }
        html += "<td>" + htmlEncode(encoded) + "</td>";
        html += "</tr>";
    }
    html += "</tbody>";
    html += "</table>";
    ascii.innerHTML = html;
});
