/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"student00/com/sap/training/ux402/qunit/ux402_qunit/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});