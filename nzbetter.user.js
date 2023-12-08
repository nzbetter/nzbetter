// ==UserScript==
// @name           NZBetter
// @namespace      https://github.com/nzbetter/nzbetter
// @updateURL      https://github.com/nzbetter/nzbetter/raw/dev/nzbetter.user.js
// @downloadURL    https://github.com/nzbetter/nzbetter/raw/dev/nzbetter.user.js
// @version        0.6.3-dev
// @description:ua Модифікація NZ, яка додає те, чого так бракує.
// @author         n3tael
// @match          https://nz.ua/*
// @icon           data:image/png;base64,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
// @run-at         document-start
// @grant          GM_info
// @grant          GM_addStyle
// @grant          GM_addElement
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          GM_deleteValue
// @grant          GM_registerMenuCommand
// @noframes
// ==/UserScript==

(function() {
    'use strict';
    if (GM_getValue("settings").plugins?.DarkTheme?.enabled || false) {
        document.querySelector("html").style.background = "#000"; // to prevent nz.ua flashbang
    }
    document.querySelector("html").style.opacity = 0; // to prevent the page from being displayed until the mod is fully loaded

    const l = new class Logger {
        _log(level, levelColor, args) {
            console[level](
                `%c NZBetter `,
                `background: ${levelColor}; color: black; font-weight: bold; border-radius: 5px;`
                , ...args
            );
        }

        log(...args) {
            this._log("log", "#a6d189", args);
        }

        info(...args) {
            this._log("info", "#a6d189", args);
        }

        error(...args) {
            this._log("error", "#e78284", args);
        }

        warn(...args) {
            this._log("warn", "#e5c890", args);
        }

        debug(...args) {
            this._log("debug", "#aad2e9", args);
        }
    }

    l.info("Loading with NZBetter v" + GM_info.script.version);

    GM_addStyle(`
        .sb-menu hr {
            margin: 4px 0;
            border-top: 1px #bfbfbf solid;
        }

        .sb-menu p {
            margin: 0 6px;
            color: #888;
            font-size: 10px;
        }
    `);

    const defaultSettings = {
        plugins: []
    };

    let settings = GM_getValue("settings");
    if (!settings) {
        settings = defaultSettings;
        GM_setValue("settings", settings);
    }

    GM_registerMenuCommand("Скинути налаштування", function() {
        const warning = confirm("ПОПЕРЕДЖЕННЯ: Це видаляє всі ваші налаштування. Використовуйте цю функцію у крайніх випадках.\n\nВи хочете продовжити?");
        if (warning) {
            GM_deleteValue("settings");
            window.location.reload();
        }
    }, {
        autoClose: true
    });

    const Plugins = [
        {
            name: "DarkTheme",
            description: "Включає темну тему",
            start: function() {
                if (document.querySelector("html").classList.contains("h-100")) return; // do not apply dark theme to new landing because it makes text gray
                GM_addStyle(`
                  body { background: #000; color: #BAB8B8; }
                  a { color: #3c8fd9; }
                  h2.content-header { color: #2798ce; }
                  h2.content-header-2 { color: #9B2100; }
                  .grid { background: #000; }
                  .wrapper { background-image: linear-gradient(to bottom, #171717, #000 800px); }
                  input, select, textarea { color: #fff; background: #222; border: 1px solid #333; border-radius: 4px; }
                  .ms-button { background-color: #121212; background-image: linear-gradient(to bottom, #121212, #292929) !important; }
                  .submit .delete-lesson span { color: #BAB8B8; }
                  .ms-button > span { color: #BAB8B8; background-color: #010101; background-image: linear-gradient(to bottom, #010101, #181818) !important; }
                  .row label { color: #9B2100; }
                  .pcf-textarea, .pcf-container { background-color: #040404; background-image: linear-gradient(to bottom, #040404, #0C0C0C); }
                  .pcf-textarea > span, .pcf-container > span { background-color: #0a0a0a; background-image: linear-gradient(to bottom, #0a0a0a, #000); box-shadow: 0 -1px 1px #464545; }
                  .pcf-textarea textarea, .pcf-container textarea { color: #B9B7B7; }
                  .pcf-container input, .pcf-container select { color: #B9B7B7; }
                  .pcf-container.error > span { background: #050505; }
                  .tooltip .tooltip-inner { color: #000; background-color: #aaaaaa; border: 1px solid transparent; box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5); }
                  .tooltip.top .tooltip-arrow { border-top-color: #aaaaaa; }
                  .popup { background: #000; border: 1px solid #171717; box-shadow: 0px 0px 10px #aaa; }
                  .popup form h2 span { color: #9B2100; }
                  .errorSummary { background: #feefeb; border: 1px solid #ef5128; }
                  .is-guest { background: #000; }
                  .is-guest .h-bottom { border-radius: 0 0 10px 10px; background: #181818; }
                  .breadcrumb > li + li::before { color: #333; }
                  .content { background: #000; }
                  .sb-menu li a { color: #BABABA !important; }
                  .sb-menu li.projects-menu a, .sb-menu li.reports-menu a { color: #BABABA; }
                  .sb-menu hr { border-top: 1px #3d3d3d solid; }
                  .sb-menu li a strong { color: #3c8fd9; }
                  .sb-menu li.active a { background: #000 !important; }
                  .sb-menu li a span:not(.count-messages) { filter: invert(1); }
                  .sb-menu li.active a, .sb-menu li a:hover { color: #ef5128 !important; }
                  .sb-menu li a:hover strong { color: #ef5128 !important; }
                  .profile-block.brown-bg { background: #050505; }
                  .profile-block.with-border { border-bottom: 1px solid #1d1d1d; }
                  .profile-block > div > a { color: #3c8fd9 !important; }
                  .profile-slogan { color: #a8a8a8; }
                  .form-control { color: #fff; background-color: #111; border: 1px solid #333; }
                  .panel { background-color: #222222; border: 1px solid transparent; }
                  .nav-tabs { border-bottom: 1px solid #282828; }
                  .nav-tabs > li > a { margin-right: 2px; line-height: 1.42857143; border: 1px solid transparent; border-radius: 4px 4px 0 0; }
                  .nav-tabs > li > a:hover { border-color: transparent transparent #282828; }
                  .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus { color: #ffffff; cursor: default; background-color: #464646; border: 1px solid #282828; border-bottom-color: transparent; }
                  .panel-default > .panel-heading { color: #BAB8B8; background-color: #3c3c3c; border-color: #282828; }
                  .plugin-settings, .close { color: #eee !important; opacity: 0.8 !important; }
                  .nav > li > a[role="tab"]:hover, .nav > li > a:focus { color: #fff; background-color: #2b2b2b; }
                  .plugin-settings:hover, .close:hover, .plugin-settings:focus, .close:focus { color: #eee !important; opacity: 0.4 !important; }
                  .modal-content { background-color: #202020; border: 1px solid #464646; }
                  .modal-header { border-bottom: 1px solid #282828; }
                  hr, .modal-footer { border-top: 1px solid #282828; }
                  .btn-default { filter: invert(1); }
                  div[style="border-bottom: 1px solid #e9e9e9; line-height: 28px;"], div[style="border-bottom: 1px solid #e9e9e9; line-height: 28px"] { border-bottom: 1px solid #2b2b2b !important; }
                  .top-arrow-right.krest { background-image: url('../images/close-icon.png'); color: #888; filter: invert(1); }
                  .pb-col { color: #a8a8a8; }
                  .profile-links li a span { color: #a8a8a8; }
                  .pl-school .profile-links li a:hover, .pl-school .profile-links li.active a { background: #154d68; }
                  .pl-school .profile-links li a span { color: #ef5128; }
                  .status-table-row.gray-bg { background: #0a0a0a }
                  .profile-photo { background: none; }
                  .profile-photo-albums li a { border: 1px solid #151515; background: #000; box-shadow: 0px 0px 2px #151515; }
                  .messages h3 { color: #ef5128; }
                  .pmf-col { color: #fff }
                  .pmf-message-container { border: 1px solid #242424; background: #222; }
                  .pmf-message { color: #8a8a8a; }
                  .mla-image img { box-shadow: 0px 0px 2px #515151; }
                  .ml-date { color: #a8a8a8; }
                  .ml-photo a { border: 1px solid #212121; background: #000; }
                  .ml-message { background: #1a1a1a; box-shadow: none; }
                  .messages-list li ul .ml-message { background: #000; border: 1px solid #1a1a1a; }
                  .cf-message-container { border: 1px solid #242424; background: #000; box-shadow: 0px 0px 10px #333; }
                  .cf-message-container span, .ml-message .comment-arrow { filter: invert(1); }
                  .cf-message-container textarea, .cf-message-container input { background: #000; color: #fff; }
                  .white-button { background: #000; color: #B9B6B6; }
                  .messages-list li ul .white-button:hover { color: #464545; }
                  .mp-header { background: transparent; border-bottom: 1px solid #242424; }
                  .mph-nav li a { border-top: 1px solid #DBDBDB; border-left: 1px solid #DBDBDB; border-bottom: 1px solid #DBDBDB; }
                  .mph-nav li a span { filter: invert(1); }
                  .mph-nav li.active a { background-color: #000; border-bottom-color: #000; }
                  .mph-nav li a:hover, .mph-nav li.active a { color: #ef5128; }
                  #ss-form, #user-search-form { background: #111; }
                  .ssf-button, .get_folder, .mph-nav > li { filter: invert(1); }
                  .get_folder span, .mph-nav > li > a span { filter: invert(0) !important; }
                  .mph-nav li.active a { background-color: #fff; border-bottom-color: #fff; }
                  .mph-nav li a:hover, .mph-nav li.active a { color: #10aed7; }
                  .messages-table td.sender-col a { color: #B9B6B6; }
                  .messages-table .not-read td.sender-col a { color: #ef5128; }
                  .messages-table td.title-col a { color: #B9B6B6; }
                  .messages-table .not-even { border: 1px solid #0e0e0e; }
                  .messages-table .not-even td { background: #060606; }
                  .message-text { background: #0f0f0f; }
                  #search_journal { color: #fff; }
                  .journal-choose tr td { border-top: 1px solid #0a0a0a; }
                  .journal-choose tr.tr-hover td { background: #0a0a0a; }
                  .journal-choose tr td a:hover { background: #ef5028; color: #fff; border-color: #ef5028; }
                  .schedule-table thead tr td span { color: #fff; }
                  .schedule-table thead tr td span.sth-today { color: #ef5128; }
                  .schedule-table thead tr td span.sth-date { color: #777; }
                  .schedule-table thead tr td.holiday-day span, .schedule-table thead td.holiday-day span.sth-date { color: #272727; }
                  .time-col span { color: #B9B6B6; }
                  .time-col span.tc-number { color: #fff; }
                  .time-col span.tc-now { color: #ef5128; }
                  .tc-current-time .time-col span.tc-number { color: #ef5128; }
                  .schedule-item { background: #111; border: 1px solid #000; box-shadow: none; }
                  .schedule-item.si-hover, .today-col .schedule-item.si-hover, .tc-current-time .today-col .schedule-item.si-hover { background: #ef5128; color: #000; }
                  .schedule-item.si-hover a, .today-col .schedule-item.si-hover a { color: #000; }
                  .today-col .schedule-item { background: #090807; }
                  .tc-current-time .today-col .schedule-item { background: #1C1715; color: #fff; }
                  .schedule-item .si-title a.sit-class { color: #154D68; background: #000; }
                  .schedule-item .si-title a.sit-class:hover { background: #2B1915; color: #000; }
                  .schedule-item .sit-aud { color: #9B2100; }
                  .arrow-left-link, .arrow-right-link { color: #ef5128; }
                  .view-links > .row a:not(.active), .view-links a:not(.active, .ms-button) { filter: invert(1); }
                  .dropdown-menu { background-color: #181818; }
                  .prev-next-links a { color: #ef5128; }
                  .prev-next-links-2 > a, .prev-next-links-2 > button { filter: invert(1); }
                  .point-table.pt-teacher thead td.pt-theme { color: #777; }
                  .point-table thead td.pt-holiday { color: #161616; }
                  .point-table thead td.pt-point, .point-table thead td.pt-pre-point { border-bottom: 1px solid #161616; }
                  .point-table.pt-teacher tbody td.pt-red-line, .point-table.pt-teacher thead td.pt-red-line { border-left: 1px solid #080504 !important }
                  .point-table thead td.pt-point, .point-table tbody td.pt-point { border: 1px solid #161616; }
                  .point-table tbody tr:hover { background: #111; }
                  .point-table col.pt-hover { background: #0a0a0a; }
                  .point-table thead td.pt-hover { background: #000; color: #ef5128; border-bottom-color: #fff; }
                  .point-table thead td > span span.pt-month { color: #ef5128; }
                  .point-table .pt-kr-head { color: #ef5128; }
                  .point-table .pt-tr-head { color: #1daa5a; }
                  .point-table .pt-sem-head { color: #441daa; }
                  .point-table tbody td.pt-kr { background: #040404; }
                  .point-table tbody td.pt-tr { background: #080909; }
                  .point-table tbody td.pt-sem { background: #181819; }
                  .point-table.pt-teacher thead td.pt-point { border-top: 1px solid #161616; border-left: 1px solid #161616; }
                  .point-table.pt-teacher thead td.ptp-end { border-right: 1px solid #161616; }
                  .point-table.pt-teacher thead td.pt-hover { border-bottom-color: #fff }
                  .point-table tbody tr:not(.c-leave) td.pt-theme:before { background: linear-gradient(to right, transparent, #000); }
                  .point-table.pt-teacher tbody td.pt-point { border-left: 1px solid #161616; }
                  .point-table.pt-teacher tbody td.pt-point:last-child { border-right: 1px solid #161616; }
                  .point-table .c-leave td { background: #141414 !important; border: 1px solid #161616; }
                  #who_rated { color: #9B2100; }
                  .processing { background-color: yellow; }
                  .failture { background-color: red; }
                  .point-table.pt-teacher tbody tr.pt-tr-hover td.pt-hover.point-1 input, .point-table.pt-teacher tbody tr.pt-tr-hover td.pt-hover.point-2 input, .point-table.pt-teacher tbody tr.pt-tr-hover td.pt-hover.point-3 input, .point-table.pt-teacher tbody tr.pt-tr-hover td.pt-hover.point-4 input, .point-table.pt-teacher tbody tr.pt-tr-hover td.pt-hover.point-5 input, .point-table.pt-teacher tbody tr.pt-tr-hover td.pt-hover.point-6 input, .point-table.pt-teacher tbody tr.pt-tr-hover td.pt-hover.point-7 input, .point-table.pt-teacher tbody tr.pt-tr-hover td.pt-hover.point-8 input, .point-table.pt-teacher tbody tr.pt-tr-hover td.pt-hover.point-9 input, .point-table.pt-teacher tbody tr.pt-tr-hover td.pt-hover.point-10 input, .point-table.pt-teacher tbody tr.pt-tr-hover td.pt-hover.point-11 input, .point-table.pt-teacher tbody tr.pt-tr-hover td.pt-hover.point-12 input, .point-table.pt-teacher tbody tr td.pt-input.point-1 input, .point-table.pt-teacher tbody tr td.pt-input.point-2 input, .point-table.pt-teacher tbody tr td.pt-input.point-3 input, .point-table.pt-teacher tbody tr td.pt-input.point-4 input, .point-table.pt-teacher tbody tr td.pt-input.point-5 input, .point-table.pt-teacher tbody tr td.pt-input.point-6 input, .point-table.pt-teacher tbody tr td.pt-input.point-7 input, .point-table.pt-teacher tbody tr td.pt-input.point-8 input, .point-table.pt-teacher tbody tr td.pt-input.point-9 input, .point-table.pt-teacher tbody tr td.pt-input.point-10 input, .point-table.pt-teacher tbody tr td.pt-input.point-11 input, .point-table.pt-teacher tbody tr td.pt-input.point-12 input { color: #000 }
                  .point-table.pt-teacher thead td.ptp-today { border-top: 1px solid #363636; border-left: 1px solid #363636; border-right: 1px solid #363636; color: #ef5128; }
                  .point-table.pt-teacher tbody td.ptp-today { border-left: 1px solid #363636; border-right: 1px solid #363636; }
                  .point-table thead td.ptp-today, .point-table tbody td.ptp-today { border-right: 1px solid red; }
                  .point-table thead td.ptp-today { color: red; }
                  .point-change { background: #000; border: 1px solid #1A1A1A; box-shadow: 0px 0px 10px #525252; }
                  .pc-points a { color: #B9B6B6; }
                  .pc-form { border-top: 1px solid #161616 }
                  .pcf-point-line { color: #641500; }
                  .journal-avg-table td { border: 1px solid #161616; }
                  .dz-header { color: #777; }
                  .dz-container li { background: #050505; box-shadow: none; }
                  .dzc-date { color: #9B2100; border-right: 1px solid #494949; }
                  .dzc-lesson-number { border-right: 1px solid #494949; }
                  .dzc-date span { color: #ef5128 }
                  .dzc-theme { border-right: 1px solid #494949; }
                  .view-links { color: #777; }
                  .dni-arrow-left { color: #ef5128; }
                  .dni-arrow-right { color: #ef5128; }
                  .dn-item h3 { color: #9B2100; }
                  .dn-item.dni-today-tomorrow h3 { color: #ef5128 }
                  .dnip-number { color: #fff; }
                  li.dnip-now .dnip-number { color: #ef5128 }
                  .dnip-now-text { color: #ef5128 }
                  .dnip-data { background: #111; box-shadow: none; }
                  .dn-item.dni-today-tomorrow .dnip-data { background: #0C0C0B; }
                  .dn-item.dni-today-tomorrow li.dnip-now .dnip-data { background: #100F0D; }
                  .part-left span { color: #9B2100; }
                  .separated-horizontal { border-bottom: 1px dashed #4A4A4A; }
                  .dnip-right.have-comment { background: url('../images/point-corner-2.png') 100% 0 no-repeat #000; }
                  .dnip-right { background-color: #000; }
                  .rs-block { background: #000; box-shadow: none; outline: 1px solid #111; }
                  .kp-text { color: #A8A8A8; }
                  .adv-list li a span { color: #A8A8A8; }
                  .adv-list li a span.adv-header { color: #154D68; }
                  .sb-home-work { color: #A8A8A8 }
                  .sb-home-work li li { border-top: 1px solid #0F0F0F; }
                  .hometask-attachments > div > a > img { filter: invert(1); }
                  .sbhw-title { border-top: 1px solid #0F0F0F; }
                  .sb-last-rates { color: #A8A8A8; }
                  .sb-last-rates li { border-top: 1px solid #0F0F0F }
                  .sb-last-rates .sblr-left { border-right: 1px solid #090808; }
                  .gray-button { background: #111; color: #888888; border: #202020; border-bottom-color: #101010; }
                  .row .label { color: #9B2100 }
                  .col .row label { color: #A8A8A8; }
                  .gray-inline-block { background: #0A0A0A; }
                  .gray-block { background: #0A0A0A; box-shadow: none; }
                  .us-left h2, .us-right h2 { color: #9B2100; }
                  .us-delete span { color: #A8A8A8; }
                  .psl-menu li.active a { background: #206f96; color: #000 }
                  .founded { color: #777; }
                  .psri-address { color: #777; }
                  .school-gallery li a img { box-shadow: 1px 1px 4px #525252; }
                  .create-soobsh-right { color: #888 }
                  .created-soobsh-header { color: #ef5128 }
                  .soobsh-data { color: #777 }
                  .soobsh-data h3 { border-bottom: 1px solid #161616; color: #9B2100 }
                  .soobsh-data h3 a { color: #9B2100 }
                  .invitation-soobsh-list li span { color: #9B2100 }
                  .news-list li h3 { color: #9B2100; border-bottom: 1px solid #161616; }
                  .news-image { background: #000; border: 1px solid #212121; }
                  .news-item h2 a { color: #1f7097; }
                  .news-item h2.a { color: #1f7097; }
                  .lge-item h3 { color: #9B2100; border-bottom: 1px solid #161616; }
                  .lge-item h3.active { color: #ef5128; }
                  .lge-item h3 a { color: #9B2100; }
                  .lge-item h3.active a { color: #ef5128; }
                  .pl-image img { box-shadow: 1px 1px 4px #525252; }
                  .paginator li a { color: #B9B6B6; border: 1px solid #151515; }
                  .paginator li a:hover, .paginator li.selected a, .paginator li.active a { color: #000; background: #ef5020; border-color: #ef5020 }
                  .footer-wrapper { background-image: linear-gradient(to right, #181818, #000); background-color: #181818; }
                  .footer-left a { color: #ef5128; }
                  .footer-left span { color: #9B2100; }
                  .footer-right ul li a { color: #2A99CE; }
                  .gallery-top { border-bottom: 1px solid #0F0F0F; }
                  .gt-item { border: 1px solid #151515; box-shadow: 1px 1px 4px #525252; }
                  blockquote { background: none repeat scroll 0 0 #030303; border-color: #999 #999 #999 #FF5A00; color: #ccc; }
                  .pt-point .tooltiptext, .dnip-right .tooltiptext { background-color: #aaa; color: #000; }
                  .pt-point .tooltiptext::after, .dnip-right .tooltiptext::after { border-top-color: #aaa; }
                  .main-info-content { background: #050505; }
                  .region-navigation { background-color: #050505; }
                  .school-wall-table td { border: 1px solid #2A99CE; background: #080808; }
                  .add-news { color: #000; background: #ef5028; box-shadow: 0px 0px 2px #000; }
                  .add-news:hover { color: #000; background-color: #f23a0c; filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e33c12', endColorstr='#e33c12', GradientType=0); background-image: linear-gradient(top, #f23a0c 0%, #e33c12 100%); box-shadow: 0px 0px 2px #000; }
                  .add-news:active { color: #000; background-color: #ef2828; filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fc0d0d', endColorstr='#fc0d0d', GradientType=0); background-image: linear-gradient(top, #ef2828 0%, #fc0d0d 100%); box-shadow: 0px 0px 2px #000; }
                  #form-add-journals label.checked-all-label, #form-add-journals label.checked-half-label { color: #2A99CE; }
                  .mce-content-body { background: #fff; color: #000; }
                  .wg-birth li { border-bottom: 1px solid #0F0F0F; }
                  .user-list-popup { background: #000; border: 1px solid #1A1A1A; box-shadow: 0px 0px 10px #525252; }
                  .user-list-popup ul li { border-bottom: 1px solid #0F0F0F; }
                  .hometask-content { border: .2em solid #161616; }
                  .journal-remark-tbl td, .journal-remark-tbl th, .journal-remark-tbl tr { border: 1px solid #222; }
                  .font-size-btns .font-size-dec, .font-size-btns .font-size-inc { border: 2px solid #fff; background: #000; }
                `);
            }
        },
        {
            name: "Settings",
            description: "Додає налаштування модифікації",
            required: true,
            start: function () {
                if (!document.querySelector(".sb-menu") && !document.querySelector(".content-wrapper")) return;
                if (!settings.plugins.BetterSideMenu?.enabled || settings.plugins.BetterSideMenu?.enabled && !(settings.plugins.BetterSideMenu?.options?.menuItems?.includes("nzbetter") || false)) {
                    const menu = GM_addElement(document.getElementsByClassName("sb-menu")[0], "li", { class: 'reports-menu', id: "nzbetter-menu" });
                    const openSettingsButton = GM_addElement(menu, "a", {
                        href: "#",
                        id: "nzbetter-button"
                    });

                    openSettingsButton.innerHTML = '<i class="glyphicon glyphicon-wrench"></i>NZBetter<span class="sbm-tl"></span><span class="sbm-tr"></span><span class="sbm-br"></span><span class="sbm-bl"></span>';
                }

                function mergeSettings(current, update) {
                    for (const key in update) {
                        if (update[key] instanceof Object) {
                            Object.assign(update[key], mergeSettings(current?.[key], update[key]));
                        }
                    }

                    Object.assign(current || {}, update);
                    return current;
                }

                function restartRequired() {
                    const restartAlert = confirm(`Для прийняття змін треба перезавантажити сторінку.`);

                    if (restartAlert) window.location.reload();
                }

                function openSettings() {
                    document.getElementsByClassName("active")[0]?.classList?.remove("active");
                    document.getElementById("nzbetter-menu")?.classList.add("active");

                    const mainContent = document.getElementsByClassName("content-wrapper")[0];
                    let updateSettings = {
                        plugins: {}
                    };
                    mainContent.replaceChildren();

                    GM_addStyle(`.tab-content > .active {margin: 10px;}`); // fixing margins in tabs
                    GM_addStyle(`.home-panel-title {
                      display: flex;
                      align-items: end;
                      gap: 8px;
                    }
                    .panel-heading {
                      display: flex;
                      justify-content: space-between;
                    }
                    .plugins-grid {
                      display: grid;
                      grid-template-columns: 1fr 1fr 1fr;
                      grid-gap: 8px;
                    }
                    .plugins-grid > .panel {
                      margin: 0;
                    }
                    .panel-heading {
	                  display: flex;
	                  justify-content: space-between;
                    }
                    .plugin-controls {
                      display: flex;
                      gap: 4px;
	                  align-items: center;
                    }
                    .plugin-settings {
                      font-size: 16px;
                      line-height: 1;
                      color: #000;
                      opacity: 0.2;
                      padding: 0;
                      cursor: pointer;
                      background: transparent;
                      border: 0;
                      appearance: none;
                      transition: all 0.5s ease 0s;
                    }
                    .plugin-settings:hover, .plugin-settings:focus {
                      color: #000;
                      text-decoration: none;
                      cursor: pointer;
                      filter: alpha(opacity=50);
                      opacity: 0.5;
                    }
                    .plugin-controls > input {
	                  margin: 0;
                    }
                    .panel-body::after {
                      content: ''
                    }
                    #plugins > hr, #backups > hr {
                      margin: 10px 0;
                    }
                    .plugins-footer {
                      display: flex;
                      justify-content: end
                    }
                    .backups-footer {
                      display: flex;
                      gap: 8px;
                    }
                    .options {
                      display: grid;
	                  grid-gap: 8px;
                    }
                    .option-boolean {
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                    }
                    .option-string, .option-select, .option-color {
                      display: flex;
                      flex-direction: column;
                      gap: 4px;
                    }
                    .option-color > input {
                      height: 32px;
                      padding: 0;
                    }
                    .form-control {
                      height: unset;
                      width: unset;
                    }
                    .option-info > p {
                      margin: 0;
                    }
                    .nzbetter-panel {
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                    }
                    .nzbetter-panel-info {
                      display: flex;
                      flex-direction: column;
                      gap: 2px;
                    }
                    .nzbetter-panel-title {
                      display: flex;
                      align-items: baseline;
                      gap: 6px;
                    }
                    .nzbetter-panel-info > p, .nzbetter-panel-title > h3, .nzbetter-panel-title > p {
                      margin: 0;
                    }
                    .quick-actions-container {
                      display: flex;
                      justify-content: space-around;
                    }`);
                    GM_addElement(mainContent, "h4", {
                        class: "modal-title",
                        id: "settingsModalLabel",
                        textContent: GM_info.script.name
                    });

                    const navTabs = GM_addElement(mainContent, "ul", {
                        class: "nav nav-tabs",
                        role: "tablist"
                    });

                    const navTabHome = GM_addElement(navTabs, "li", {
                        class: "active",
                        role: "presentation"
                    });
                    GM_addElement(navTabHome, "a", {
                        href: "#home",
                        "aria-controls": "home",
                        role: "tab",
                        "data-toggle": "tab",
                        textContent: "Головна"
                    });

                    const navTabPlugins = GM_addElement(navTabs, "li", { role: "presentation" });
                    GM_addElement(navTabPlugins, "a", {
                        href: "#plugins",
                        "aria-controls": "plugins",
                        role: "tab",
                        "data-toggle": "tab",
                        textContent: "Плагіни"
                    });

                    const navTabBackup = GM_addElement(navTabs, "li", { role: "presentation" });
                    GM_addElement(navTabBackup, "a", {
                        href: "#backups",
                        "aria-controls": "backups",
                        role: "tab",
                        "data-toggle": "tab",
                        textContent: "Резервне копіювання"
                    });

                    const tabContent = GM_addElement(mainContent, "div", { class: "tab-content" });

                    const tabHome = GM_addElement(tabContent, "div", {
                        role: "tabpanel",
                        class: "tab-pane active",
                        id: "home"
                    });

                    if (GM.info.script.version.includes("dev")) {
                        GM_addElement(tabHome, "div", {
                            class: "alert alert-info",
                            textContent: "Зверніть увагу на те, що ви використовуєте нестабільну версію, в якій може щось не працювати або бути відсутнім.",
                        });
                    }

                    const nzBetterPanel = GM_addElement(tabHome, "div", { class: "panel panel-default" });
                    const nzBetterPanelBody = GM_addElement(nzBetterPanel, "div", { class: "panel-body" });
                    const nzBetterInfoPanel = GM_addElement(nzBetterPanelBody, "div", { class: "nzbetter-panel" });
                    const nzBetterInfoPanelInfo = GM_addElement(nzBetterInfoPanel, "div", { class: "nzbetter-panel-info" });
                    const nzBetterInfoPanelTitle = GM_addElement(nzBetterInfoPanelInfo, "div", { class: "nzbetter-panel-title" });
                    GM_addElement(nzBetterInfoPanelTitle, "h3", { textContent: GM_info.script.name }); // NZBetter name
                    GM_addElement(nzBetterInfoPanelTitle, "p", { textContent: 'v' + GM_info.script.version }); // Version
                    GM_addElement(nzBetterInfoPanelInfo, "p", { textContent: GM_info.script.description_i18n.ua }); // Description
                    GM_addElement(nzBetterInfoPanel, "img", { src: GM_info.script.icon, width: 64 }); // Icon

                    const quickActionsPanel = GM_addElement(tabHome, "div", { class: "panel panel-default" });
                    const quickActionsPanelBody = GM_addElement(quickActionsPanel, "div", { class: "panel-body" });
                    const quickActionsPanelContainer = GM_addElement(quickActionsPanelBody, "div", { class: "quick-actions-container" });
                    const quickActionsPanelEraseSettingsButton = GM_addElement(quickActionsPanelContainer, "button", {
                        textContent: "Скинути налаштування",
                        class: "btn btn-primary"
                    }); // Erase settings
                    quickActionsPanelEraseSettingsButton.addEventListener("click", () => {
                        const warning = confirm("ПОПЕРЕДЖЕННЯ: Це видаляє всі ваші налаштування. Використовуйте цю функцію у крайніх випадках.\n\nВи хочете продовжити?");
                        if (warning) {
                            GM_deleteValue("settings");
                            window.location.reload();
                        }
                    });

                    const quickActionsPanelTGChannelLink = GM_addElement(quickActionsPanelContainer, "a", { href: "https://t.me/nzbetter" }); // Telegram Link
                    GM_addElement(quickActionsPanelTGChannelLink, "button", { class: "btn btn-primary", textContent: "Телеграм-канал" }); // Telegram button
                    const quickActionsPanelGithubLink = GM_addElement(quickActionsPanelContainer, "a", { href: "https://github.com/nzbetter/nzbetter" }); // Github Link
                    GM_addElement(quickActionsPanelGithubLink, "button", { class: "btn btn-primary", textContent: "GitHub" }); // Github button


                    const tabPlugins = GM_addElement(tabContent, "div", {
                        role: "tabpanel",
                        class: "tab-pane",
                        id: "plugins"
                    });
                    const tabPluginsGrid = GM_addElement(tabPlugins, "div", { class: "plugins-grid" });
                    Plugins.forEach(plugin => {
                        const pluginCard = GM_addElement(tabPluginsGrid, "div", { class: "panel panel-default" });
                        const pluginHeader = GM_addElement(pluginCard, "div", { class: "panel-heading" });
                        const pluginName = GM_addElement(pluginHeader, "h3", {
                            class: "panel-title",
                            textContent: plugin.name,
                        });
                        const pluginControls = GM_addElement(pluginHeader, "div", { class: "plugin-controls" });
                        if (plugin.options) {
                            let updatePluginSettings = {
                                plugins: {
                                    [plugin.name]: {
                                        options: {}
                                    }
                                }
                            };
                            const pluginSettingsButton = GM_addElement(pluginControls, "div", {
                                class: "plugin-settings",
                                "data-toggle": "modal",
                                "data-target": "#modalPluginSettings" + plugin.name
                            });
                            pluginSettingsButton.innerHTML = `<i class="glyphicon glyphicon-cog"></i>`;

                            const modalPluginSettings = GM_addElement(document.body, "div", {
                                class: "modal fade",
                                id: "modalPluginSettings" + plugin.name,
                                tabindex: "-1",
                                role: "dialog",
                                "aria-labelledby": "modalPluginSettingsTitle",
                                style: "display: none;"
                            });

                            const modalPluginSettingsDialog = GM_addElement(modalPluginSettings, "div", {
                                class: "modal-dialog",
                                role: "document"
                            });

                            const modalPluginSettingsContent = GM_addElement(modalPluginSettingsDialog, "div", { class: "modal-content" });

                            const modalPluginSettingsHeader = GM_addElement(modalPluginSettingsContent, "div", { class: "modal-header" });
                            const modalPluginSettingsCloseButtton = GM_addElement(modalPluginSettingsHeader, "button", {
                                type: "button",
                                class: "close",
                                "data-dismiss": "modal",
                                "aria-label": "Закрити",
                                textContent: "×"
                            });
                            const modalPluginSettingsTitle = GM_addElement(modalPluginSettingsHeader, "h4", {
                                class: "modal-title",
                                id: "settingsModalLabel",
                                textContent: plugin.name
                            });

                            const modalPluginSettingsBody = GM_addElement(modalPluginSettingsContent, "div", { class: "modal-body" });
                            const modalPluginSettingsDescription = GM_addElement(modalPluginSettingsBody, "p", { textContent: plugin.description });

                            const modalPluginSettingsFooter = GM_addElement(modalPluginSettingsContent, "div", { class: "modal-footer" });
                            const modalPluginSettingsSaveButton = GM_addElement(modalPluginSettingsFooter, "button", {
                                id: "modalPlugin"+plugin.name+"SaveButton",
                                class: "btn btn-primary",
                                type: "button",
                                textContent: "Зберегти",
                                "data-dismiss": "modal"
                            });
                            modalPluginSettingsSaveButton.addEventListener("click", () => {
                                updateSettings = mergeSettings(updateSettings, updatePluginSettings);
                            });

                            const modalPluginSettingsOptions = GM_addElement(modalPluginSettingsBody, "div", { class: "options" });
                            plugin.options.forEach(option => {
                                switch (option.type) {
                                    case "boolean":
                                        var booleanOption = GM_addElement(modalPluginSettingsOptions, "div", { class: "option-boolean" });
                                        var booleanOptionInfo = GM_addElement(booleanOption, "div", { class: "option-info" });
                                        var booleanOptionSwitch = GM_addElement(booleanOption, "input", { type: "checkbox" });
                                        booleanOptionSwitch.checked = settings.plugins[plugin.name]?.options?.[option.name] || option.defaultValue;
                                        booleanOptionSwitch.addEventListener("change", (e) => {
                                            updatePluginSettings.plugins[plugin.name].options[option.name] = e.target.checked;
                                        });

                                        var booleanOptionName = GM_addElement(booleanOptionInfo, "b", { textContent: option.displayName });
                                        var booleanOptionDescription = GM_addElement(booleanOptionInfo, "p", { textContent: option.description });
                                        break;
                                    case "color":
                                        var colorOption = GM_addElement(modalPluginSettingsOptions, "div", { class: "option-color" });
                                        var colorOptionDescription = GM_addElement(colorOption, "b", { textContent: option.description });
                                        var colorOptionInput = GM_addElement(colorOption, "input", { type: "color", class: "form-control" });
                                        colorOptionInput.value = settings.plugins[plugin.name]?.options?.[option.name] || option.defaultValue;
                                        colorOptionInput.addEventListener("change", (e) => {
                                            updatePluginSettings.plugins[plugin.name].options[option.name] = e.target.value;
                                        });
                                        break;
                                    case "string":
                                        var stringOption = GM_addElement(modalPluginSettingsOptions, "div", { class: "option-string" });
                                        var stringOptionDescription = GM_addElement(stringOption, "b", { textContent: option.description });
                                        var stringOptionInput = GM_addElement(stringOption, "input", { type: "text", class: "form-control" });
                                        stringOptionInput.value = settings.plugins[plugin.name]?.options?.[option.name] || option.defaultValue;
                                        stringOptionInput.addEventListener("change", (e) => {
                                            updatePluginSettings.plugins[plugin.name].options[option.name] = e.target.value;
                                        });
                                        break;
                                    case "select":
                                        var selectOption = GM_addElement(modalPluginSettingsOptions, "div", { class: "option-select" });
                                        GM_addElement(selectOption, "b", { textContent: option.description }); // Option description
                                        var selectOptionInput = GM_addElement(selectOption, "select", { class: "form-control" });
                                        option.options.forEach(optionOption => {
                                            var selectOptionOption = GM_addElement(selectOptionInput, "option", {
                                                value: optionOption.value,
                                                textContent: optionOption.label
                                            });
                                        });
                                        selectOptionInput.value = settings.plugins[plugin.name]?.options?.[option.name] || option.default;
                                        selectOptionInput.addEventListener("change", (e) => {
                                            updatePluginSettings.plugins[plugin.name].options[option.name] = e.target.value;
                                        });
                                        break;
                                    case "component":
                                        var componentOption = GM_addElement(modalPluginSettingsOptions, "div", { class: "option-component" });
                                                try {
                                                    option.component(componentOption, updatePluginSettings);
                                                } catch (e) {
                                                    l.error(`Failed to render component option ${option.name} in ${plugin.name}\n`, e);
                                                }
                                        break;
                                }
                            });
                        }
                        const pluginSwitch = GM_addElement(pluginControls, "input", {
                            type: "checkbox",
                        });
                        pluginSwitch.checked = plugin.required || settings.plugins[plugin.name]?.enabled;
                        pluginSwitch.disabled = plugin.required;
                        pluginSwitch.addEventListener("change", (e) => {
                            if (!updateSettings.plugins[plugin.name]) updateSettings.plugins[plugin.name] = { enabled: e.target.checked };
                            updateSettings.plugins[plugin.name].enabled = e.target.checked;
                        });

                        const pluginCardContent = GM_addElement(pluginCard, "div", {
                            class: "panel-body",
                            textContent: plugin.description,
                        });
                    });
                    GM_addElement(tabPlugins, "hr");
                    const tabPluginsFooter = GM_addElement(tabPlugins, "div", {
                        class: "plugins-footer"
                    });
                    const tabPluginsSaveButton = GM_addElement(tabPluginsFooter, "button", {
                        class: "btn btn-primary",
                        "data-dismiss": "modal",
                        textContent: "Зберегти",
                    });

                    const tabBackups = GM_addElement(tabContent, "div", {
                        role: "tabpanel",
                        class: "tab-pane",
                        id: "backups"
                    });

                    function exportSettings() {
                        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(settings));
                        var downloadAnchorNode = GM_addElement(document.body, "a", {
                            href: dataStr,
                            download: "NZBetterSettings.json",
                            style: "display:none;"
                        });
                        downloadAnchorNode.click();
                        downloadAnchorNode.remove();
                    }

                    function importSettings() {
                        var importAnchorNode = GM_addElement(document.body, "input", {
                            type: "file",
                            accept: "application/json",
                            style: "display:none;",
                        });

                        importAnchorNode.addEventListener("change", (e) => {
                            const file = e.target.files?.[0] || null;
                            if (!file) return;

                            const reader = new FileReader();

                            reader.onload = async () => {
                                try {
                                    GM_setValue("settings", JSON.parse(reader.result));
                                    restartRequired();
                                } catch (err) {
                                    l.error(err);
                                }
                            };

                            reader.readAsText(file);
                        });

                        importAnchorNode.click();
                        importAnchorNode.remove();
                    }

                    GM_addElement(tabBackups, "p", {
                        textContent: "Резервне копіювання налаштуваннь доможе вам дуже просто перенести їх на інишй девайс, поділитися з друзями, чи просто їх зберегти щоб раптом що відновити. Зверніть увагу на те, що імпорт налаштуваннь перезаписує поточні налаштування.",
                    });

                    GM_addElement(tabBackups, "hr");
                    const tabBackupsFooter = GM_addElement(tabBackups, "div", {
                        class: "backups-footer"
                    });

                    const tabBackupsImportButton = GM_addElement(tabBackupsFooter, "button", {
                        class: "btn btn-primary",
                        textContent: "Імпорт",
                    });
                    tabBackupsImportButton.addEventListener("click", importSettings);

                    const tabBackupsExportButton = GM_addElement(tabBackupsFooter, "button", {
                        class: "btn btn-primary",
                        textContent: "Експорт",
                    });
                    tabBackupsExportButton.addEventListener("click", exportSettings);

                    function saveSettings() {
                        settings = mergeSettings(settings, updateSettings);
                        GM_setValue("settings", settings);
                        restartRequired();
                    }

                    tabPluginsSaveButton.addEventListener("click", saveSettings);
                }

                GM_registerMenuCommand("Відкрити налаштування", function() {
                    openSettings();
                }, {
                    autoClose: true
                });

                document.getElementById("nzbetter-button")?.addEventListener("click", openSettings);
            }
        },
        {
            name: "BetterSideMenu",
            description: "Змінює меню зліва під користувача, з додаванням нових іконок",
            options: [
                {
                    type: "boolean",
                    name: "fixBlinkAnimation",
                    displayName: "Виправити мерехтливу анімацію",
                    description: "Виправляє анімацію нових повідомлень або новин"
                },
                {
                    type: "component",
                    name: "menuItems",
                    description: "Елементи меню:",
                    component: function(componentOption, updatePluginSettings) {
                        const selectMenuItems = [
                            {
                                label: "-",
                                value: "null",
                                default: true
                            },
                            {
                                label: "Розділювач",
                                value: "separator",
                            },
                            {
                                label: "Головна",
                                value: "main"
                            },
                            {
                                label: "Профіль",
                                value: "profile"
                            },
                            {
                                label: "Мої новини",
                                value: "news"
                            },
                            {
                                label: "Новини школи",
                                value: "school-news"
                            },
                            {
                                label: "Щоденник (для учнів)",
                                value: "diary"
                            },
                            {
                                label: "Журнал оцінок (для учнів)",
                                value: "journal",
                            },
                            {
                                label: "Журнали (для вчителів)",
                                value: "journal-list"
                            },
                            {
                                label: "Розклад",
                                value: "schedule"
                            },
                            {
                                label: "Друзі",
                                value: "friends"
                            },
                            {
                                label: "Повідомлення",
                                value: "messages"
                            },
                            {
                                label: "Спільноти",
                                value: "communities"
                            },
                            {
                                label: "Звіти",
                                value: "reports"
                            },
                            {
                                label: "Звіти (для вчителів)",
                                value: "reports-class"
                            },
                            {
                                label: "Документи (для вчителів)",
                                value: "documents"
                            },
                            {
                                label: "Діаграми (для вчителів)",
                                value: "charts"
                            },
                            {
                                label: "Адміністратор (для вчителів)",
                                value: "admin"
                            },
                            {
                                label: "Навчання",
                                value: "training-list"
                            },
                            {
                                label: "Вийти",
                                value: "logout"
                            },
                            {
                                label: "Налаштування NZBetter",
                                value: "nzbetter"
                            }
                        ];

                        GM_addStyle(`
                        .betterSideMenu-container {
	                      display: flex;
	                      justify-content: space-between;
	                      align-items: center;
                          margin-bottom: 4px;
                        }
                        .betterSideMenu-options {
                          display: flex;
                          gap: 4px;
                          flex-direction: column;
                        }
                        `);

                        let componentOptionContainer = GM_addElement(componentOption, "div", { class: "betterSideMenu-container" });
                        let componentOptionDescription = GM_addElement(componentOptionContainer, "b", { textContent: this.description });
                        let componentOptionAddSelectButton = GM_addElement(componentOptionContainer, "button", { class: "btn btn-default btn-xs", textContent: "+" });
                        let componentOptionOptions = GM_addElement(componentOption, "div", { class: "betterSideMenu-options"});

                        const plugin = Plugins.find(plugin => plugin.name === "BetterSideMenu");
                        function loadExistingSelects() {
                            if (!settings.plugins[plugin.name]?.options?.menuItems?.length || settings.plugins[plugin.name]?.options?.menuItems?.length == 0) return;
                            settings.plugins[plugin.name].options.menuItems.forEach(option => {
                                let selectOptionInput = GM_addElement(componentOptionOptions, "select", { class: "form-control" });
                                selectMenuItems.forEach(item => {
                                    let selectOption = GM_addElement(selectOptionInput, "option", {
                                        value: item.value,
                                        textContent: item.label
                                    });
                                });
                                selectOptionInput.value = option;
                            });
                        }
                        function addSelect() {
                            let selectOptionInput = GM_addElement(componentOptionOptions, "select", { class: "form-control" });
                            selectMenuItems.forEach(item => {
                                let selectOption = GM_addElement(selectOptionInput, "option", {
                                    value: item.value,
                                    textContent: item.label
                                });
                                selectOption.selected = item.default;
                            });
                        }

                        function grabCurrent() {
                            updatePluginSettings.plugins[plugin.name].options.menuItems = [];
                            Array.from(document.getElementsByClassName("betterSideMenu-options")[0].children).forEach(option => {
                                if (option.value === "null") return;
                                if (!updatePluginSettings.plugins[plugin.name].options.menuItems) updatePluginSettings.plugins[plugin.name].options.menuItems = [];
                                updatePluginSettings.plugins[plugin.name].options.menuItems.push(option.value);
                            });
                        }
                        document.getElementById("modalPlugin"+plugin.name+"SaveButton").addEventListener("click", grabCurrent);

                        componentOptionAddSelectButton.addEventListener("click", () => addSelect());
                        loadExistingSelects();
                    }
                }
            ],
            start: function () {
                if (!document.querySelector(".sb-menu")) return;
                const plugin = Plugins.find(plugin => plugin.name === "BetterSideMenu");

                if (settings.plugins[plugin.name]?.options?.fixBlinkAnimation) {
                    GM_addStyle(`
                      @keyframes blink-count-messages {
                        0% { opacity: 0; }
                        50% { opacity: 1; }
                        100% { opacity: 0; }
                      }`);
                }

                GM_addStyle(`
                .sb-menu li.menu-item a {
                  font-size: 11px;
                  color: #454545;
                  display: block;
                  padding: 0;
                  background: none;
                }
                .sb-menu li.menu-item i {
                  margin:0 8px;
                }
                .sb-menu li.menu-item.active a, .sb-menu li.menu-item a:hover {
                  color: #ef5128;
                }
                .sb-menu li.menu-item.active a {
                  background-color: #fff;
                }
                .sb-menu li.menu-item a span.count-messages {
                  color: red;
                  animation: blink-count-messages 1.5s infinite;
                  margin-left: 4px;
                }
                .content.c-big {
	              width: 1040px;
	              border-radius: 10px 0 0 3px !important;
                }`);

                const dynamicSettings = [];

                dynamicSettings.push(
                    {
                        name: "profile",
                        link: document.getElementsByClassName("profile-menu")[0].children[0].pathname // link to our profile
                    },
                    {
                        name: "schedule",
                        link: document.getElementsByClassName("schedule-menu")[0].children[0].pathname
                    }
                );


                for (const msg of document.getElementsByClassName("count-messages")) {
                    let name;
                    switch(msg.parentElement.parentElement.classList[0]) {
                        case "news-menu":
                            name = "news";
                            break;
                        case "messages-menu":
                            name = "messages";
                            break;
                        case "friends-menu":
                            name = "friends";
                            break;
                    };

                    dynamicSettings.push({
                        name: name,
                        count: msg.textContent // count messages
                    });
                };

                if (!settings.plugins[plugin.name]?.options?.menuItems) return;
                const sbMenu = document.getElementsByClassName("sb-menu")[0];
                sbMenu.replaceChildren();
                settings.plugins[plugin.name].options.menuItems.forEach(item => {
                    if (item == "separator") {
                        GM_addElement(sbMenu, "hr");
                        return;
                    }

                    const itemLi = GM_addElement(sbMenu, "li", { class: "menu-item" });
                    const itemLink = GM_addElement(itemLi, "a");
                    const itemIcon = GM_addElement(itemLink, "i", { class: "glyphicon" });

                    switch(item) {
                        case "main":
                            itemIcon.classList.add("glyphicon-th-large");
                            itemLink.href = "/menu";
                            itemLink.innerHTML += "Головна";
                            break;
                        case "profile":
                            itemIcon.classList.add("glyphicon-user");
                            itemLink.href = dynamicSettings.find(setting => setting.name == "profile").link;
                            itemLink.innerHTML += "Профіль";
                            break;
                        case "news":
                            itemIcon.classList.add("glyphicon-bullhorn");
                            itemLink.href = "/dashboard/news";
                            itemLink.innerHTML += "Новини";
                            if (dynamicSettings.find(setting => setting.name == "news")) {
                                GM_addElement(itemLink, "span", {
                                    class: "count-messages",
                                    textContent: dynamicSettings.find(setting => setting.name == "news").count
                                });
                            }
                            break;
                        case "school-news":
                            itemIcon.classList.add("glyphicon-bullhorn");
                            itemLink.href = "/dashboard/school-news";
                            itemLink.innerHTML += "Новини";
                            if (dynamicSettings.find(setting => setting.name == "news")) {
                                GM_addElement(itemLink, "span", {
                                    class: "count-messages",
                                    textContent: dynamicSettings.find(setting => setting.name == "news").count
                                });
                            }
                            break;
                        case "diary":
                            itemIcon.classList.add("glyphicon-book");
                            itemLink.href = "/schedule/diary";
                            itemLink.innerHTML += "Щоденник";
                            break;
                        case "journal":
                            itemIcon.classList.add("glyphicon-list");
                            itemLink.href = "/schedule/journal";
                            itemLink.innerHTML += "Журнал оцінок";
                            break;
                        case "journal-list":
                            itemIcon.classList.add("glyphicon-book");
                            itemLink.href = "/journal/list";
                            itemLink.innerHTML += "Журнали";
                            break;
                        case "schedule":
                            itemIcon.classList.add("glyphicon-bell");
                            itemLink.href = dynamicSettings.find(setting => setting.name == "schedule").link;
                            itemLink.innerHTML += "Розклад";
                            break;
                        case "friends":
                            itemIcon.classList.add("glyphicon-user");
                            itemLink.href = "/friends";
                            itemLink.innerHTML += "Друзі";
                            if (dynamicSettings.find(setting => setting.name == "friends")) {
                                GM_addElement(itemLink, "span", {
                                    class: "count-messages",
                                    textContent: dynamicSettings.find(setting => setting.name == "friends").count
                                });
                            }
                            break;
                        case "messages":
                            itemIcon.classList.add("glyphicon-envelope");
                            itemLink.href = "/messages";
                            itemLink.innerHTML += "Повідомлення";
                            if (dynamicSettings.find(setting => setting.name == "messages")) {
                                GM_addElement(itemLink, "span", {
                                    class: "count-messages",
                                    textContent: dynamicSettings.find(setting => setting.name == "messages").count
                                });
                            }
                            break;
                        case "communities":
                            itemIcon.classList.add("glyphicon-user");
                            itemLink.href = "/communities";
                            itemLink.innerHTML += "Спільноти";
                            break;
                        case "reports":
                            itemIcon.classList.add("glyphicon-stats");
                            itemLink.href = "/reports/children-report/performance";
                            itemLink.innerHTML += "Звіти";
                            break;
                        case "reports-class":
                             itemIcon.classList.add("glyphicon-list-alt");
                            itemLink.href = "/reports/default/class-attendance";
                            itemLink.innerHTML += "Звіти";
                            break;
                        case "documents":
                            itemIcon.classList.add("glyphicon-file");
                            itemLink.href = "/docs";
                            itemLink.innerHTML += "Документи";
                            break;
                        case "charts":
                            itemIcon.classList.add("glyphicon-stats");
                            itemLink.href = "/reports/charts/student-performance";
                            itemLink.innerHTML += "Діаграми";
                            break;
                        case "admin":
                            itemIcon.classList.add("glyphicon-briefcase");
                            itemLink.href = "/admin/users";
                            itemLink.innerHTML += "Адміністратор";
                            break;
                        case "training-list":
                            itemIcon.classList.add("glyphicon-education");
                            itemLink.href = "/pages/training-list";
                            itemLink.innerHTML += "Навчання";
                            break;
                        case "logout":
                            itemIcon.classList.add("glyphicon-log-out");
                            itemLink.href = "/logout";
                            itemLink.innerHTML += "Вийти";
                            break;
                        case "nzbetter":
                            itemLi.id = "nzbetter-menu";
                            itemLink.id = "nzbetter-button";
                            itemIcon.classList.add("glyphicon-wrench");
                            itemLink.href = "#";
                            itemLink.innerHTML += "NZBetter";
                            break;
                    }

                    if (document.location.pathname.match(`${itemLink.pathname}(\\?|#|$)`) && !itemLink.href.includes("#")) itemLi.classList.add("active");

                    GM_addElement(itemLink, "span", { class: "sbm-tl" }); //
                    GM_addElement(itemLink, "span", { class: "sbm-tr" }); // corners in menus..
                    GM_addElement(itemLink, "span", { class: "sbm-br" }); //
                    GM_addElement(itemLink, "span", { class: "sbm-bl" }); //
                });
            }
        },
        {
            name: "HideRightSidebar",
            description: "Приховати/розмити елементи у правій панелі (корисно для скріншотів)",
            options: [
                {
                    type: "select",
                    name: "homeworkElement",
                    description: "Домашні завдання",
                    options: [
                        {
                            label: "Показати",
                            value: "show",
                            default: true
                        },
                        {
                            label: "Скрити",
                            value: "hide"
                        },
                        {
                            label: "Розмити",
                            value: "blur"
                        }
                    ]
                },
                {
                    type: "select",
                    name: "lastMarksElement",
                    description: "Останні оцінки",
                    options: [
                        {
                            label: "Показати",
                            value: "show",
                            default: true
                        },
                        {
                            label: "Скрити",
                            value: "hide"
                        },
                        {
                            label: "Розмити",
                            value: "blur"
                        }
                    ]
                },
                {
                    type: "select",
                    name: "birthdayElement",
                    description: "Найближчі дні народження",
                    options: [
                        {
                            label: "Показати",
                            value: "show",
                            default: true
                        },
                        {
                            label: "Скрити",
                            value: "hide"
                        },
                        {
                            label: "Розмити",
                            value: "blur"
                        }
                    ]
                },
                {
                    type: "boolean",
                    name: "techSupportButtonHide",
                    displayName: "Скрити кнопку тех. підтримка",
                    description: "Скриває кнопку технічної підтримки, хтось цим користується?"
                },
                {
                    type: "boolean",
                    name: "advListHide",
                    displayName: "Скрити \"adv-list\"",
                    description: "Скриває так званий \"adv-list\", який по суті є блоком реклами"
                }
            ],
            start: function() {
                if (!document.querySelector(".right-sidebar")) return;
                GM_addStyle(`
                .blur-on {
                  transition: all 0.5s ease 0s;
                  filter: blur(4px);
                }

                .blur-on:hover {
                  filter: blur(0px);
                }
                `);

                const options = settings.plugins[this.name]?.options;
                for (const option in options) {
                    var element;
                    switch (option) {
                        case "homeworkElement":
                            if (!document.querySelector("ul.sb-home-work")) break;
                            element = document.querySelector("ul.sb-home-work").parentElement;
                            break;
                        case "lastMarksElement":
                            if (!document.querySelector("ul.sb-last-rates")) break;
                            element = document.querySelector("ul.sb-last-rates").parentElement;
                            break;
                        case "birthdayElement":
                            if (!document.querySelector("ul.wg-birth")) break;
                            element = document.querySelector("ul.wg-birth").parentElement;
                            break;
                        default:
                            element = null;
                            break;
                    }

                    if (!element) continue;

                    switch (options[option]) {
                        case "blur":
                            element.children[1].classList.add("blur-on");
                            break;
                        case "hide":
                            element.remove();
                            break;
                    }
                };

                if (settings.plugins[this.name]?.options?.techSupportButtonHide) {
                    document.querySelector("button[data-target='#support-modal']").remove();
                    document.querySelector("#support-modal").remove();
                }
                if (settings.plugins[this.name]?.options?.advListHide) {
                    document.querySelector("ul.adv-list").parentElement.remove();
                }
            }
        },
        {
            name: "AutoOpenLoginPage",
            description: "Автоматично відкриває панель авторизації на головній сторінці",
            start: function() {
                const loginPopup = document.querySelector("div.login.js--login-popup");
                if (loginPopup) loginPopup.classList.add("login--show");
            }
        },
        {
            name: "HeaderEdit",
            description: "Змінює назву сайту зверху, додає можливиість скрти непотрібну кнопку і міняє градієнт на обраний користувачем колір",
            options: [
                {
                    type: "string",
                    name: "siteHeaderName",
                    description: "Назва сайту зверху:",
                    defaultValue: "НЗ",
                },
                {
                    type: "boolean",
                    name: "changeVisionHide",
                    displayName: "Скрити кнопку \"Людям із порушеннями зору\"",
                    description: "Ця функція не збільшує потрібні елементи, то навіщо вона?",
                    defaultValue: false
                },
                {
                    type: "boolean",
                    name: "enableCustomColor",
                    displayName: "Замінити градієнт (картинку) на свій колір",
                    description: "Включити заміну кольору на свій",
                    defaultValue: false
                },
                {
                    type: "color",
                    name: "headerCustomColor",
                    description: "Свій колір у шапці сайту (потребує включення опції зверху)",
                    defaultValue: "#000"
                },
                {
                    type: "boolean",
                    name: "headerInvertElements",
                    displayName: "Зробити чорними елементи шапки?",
                    description: "Деякі кольори фону не поєднуються з білими іконками, тому ця опція зробе їх чорними",
                    defaultValue: false
                }
            ],
            start: function() {
                if (!document.querySelector(".h-top")) return;
                const pluginSettings = settings.plugins[this.name]?.options;

                if (pluginSettings?.siteHeaderName) {
                    document.querySelector(".logo").textContent = settings.plugins[this.name]?.options?.siteHeaderName;
                }

                if (pluginSettings?.changeVisionHide && document.querySelector("#changeVision")) {
                    GM_addStyle(".h-top { height: 1.87rem; }");
                    document.querySelector("#changeVision").remove();
                    document.querySelector(".font-size-btns").remove();
                }

                if (pluginSettings?.enableCustomColor && pluginSettings?.headerCustomColor) {
                    document.querySelector(".h-top").style.background = pluginSettings.headerCustomColor;
                }

                if (pluginSettings?.headerInvertElements) GM_addStyle(`.h-top > * { filter: invert(1); }`);
            }
        },
        {
            name: "DiarySelectDate",
            description: "Додає можливість вибрати дату на яку треба перейти в щоденнику & журналі оцінок",
            start: function() {
                const prevNextButtons = document.querySelector(".prev-next-links-2");
                if (!prevNextButtons) return;

                GM_addStyle(`
                #collapseDateSelect {
                  margin: 4px 0 0 0;
                }
                #collapseDateSelect > input {
                  margin: 0 4px 0 0;
                }`);

                GM_addElement(prevNextButtons, "button", {
                    type: "button",
                    "data-toggle": "collapse",
                    "data-target": "#collapseDateSelect",
                    "aria-expanded": "false",
                    "aria-controls": "collapseDateSelect",
                    class: "btn btn-default btn-xs",
                    textContent: "Дата"
                });

                const dateForm = GM_addElement(prevNextButtons, "form", {
                    id: "collapseDateSelect",
                    class: "collapse",
                    method: "GET"
                });

                GM_addElement(dateForm, "input", {
                    type: "date",
                    name: "start_date",
                    min: "2017-09-01",
                    required: true
                });

                GM_addElement(dateForm, "button", {
                    type: "submit",
                    class: "btn btn-primary btn-xs",
                    textContent: "Перейти"
                });
            }
        },
        {
            name: "LogoutConfirm",
            description: "Додає запитання перед виходом з акаунту",
            start: function() {
                const logoutButton = document.querySelector("a[href='/logout']");
                if (logoutButton) {
                    logoutButton.href = "#";
                    logoutButton.addEventListener("click", () => {
                        const exitConfirm = confirm("Ви впевнені що хочете вийти з акаунту?");
                        if (exitConfirm) document.location.pathname = "/logout";
                    });
                }
            }
        }
    ];

    function startPlugin(p) {
        try {
            p.start();
            return true;
        } catch (e) {
            l.error(`Failed to start plugin ${p.name}\n`, e);
            return false;
        }
    }

    function isPluginEnabled(p) {
        return (
            Plugins.find(plugin => plugin.name == p).required || settings.plugins[p]?.enabled
        );
    }

    function startAllPlugins() {
        for (const plugin of Plugins.sort((a) => a.required) ) { // required plugins loads after not required
            if (isPluginEnabled(plugin.name)) {
                startPlugin(plugin);
            }
        }
    }

    document.addEventListener("DOMContentLoaded", async () => {
        l.info("DOM Content loaded, starting plugins...");
        await startAllPlugins();
        document.querySelector("html").style.background = null;
        document.querySelector("html").style.opacity = null;
        l.info("Plugins started. Page displayed.");
    })

    window.addEventListener("load", () => {
        l.debug(GM_getValue("settings"));
        l.info("Page loaded.");
    });
})();
