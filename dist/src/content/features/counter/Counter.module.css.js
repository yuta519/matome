import { createHotContext, updateStyle, removeStyle } from '../../../../node_modules/vite/dist/client/client.mjs.js';

import.meta.hot = createHotContext("/src/content/features/counter/Counter.module.css.js");const __vite__id = "/Users/yuta519/work/matome/src/content/features/counter/Counter.module.css";
const __vite__css = "/* stylelint-disable */\n\n._row_zo3xu_3 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n._row_zo3xu_3 > button {\n  margin-left: 4px;\n  margin-right: 8px;\n}\n\n._row_zo3xu_3:not(:last-child) {\n  margin-bottom: 16px;\n}\n\n._value_zo3xu_18 {\n  font-size: 78px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-top: 2px;\n  font-family: 'Courier New', Courier, monospace;\n}\n\n._button_zo3xu_26 {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background: none;\n  font-size: 32px;\n  padding-left: 12px;\n  padding-right: 12px;\n  outline: none;\n  border: 2px solid transparent;\n  color: rgb(112, 76, 182);\n  padding-bottom: 4px;\n  cursor: pointer;\n  background-color: rgba(112, 76, 182, 0.1);\n  border-radius: 2px;\n  transition: all 0.15s;\n}\n\n._textbox_zo3xu_42 {\n  font-size: 32px;\n  padding: 2px;\n  width: 64px;\n  text-align: center;\n  margin-right: 4px;\n}\n\n._button_zo3xu_26:hover,\n._button_zo3xu_26:focus {\n  border: 2px solid rgba(112, 76, 182, 0.4);\n}\n\n._button_zo3xu_26:active {\n  background-color: rgba(112, 76, 182, 0.2);\n}\n\n._asyncButton_zo3xu_59 {\n  position: relative;\n}\n\n._asyncButton_zo3xu_59:after {\n  content: '';\n  background-color: rgba(112, 76, 182, 0.15);\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  transition: width 1s linear, opacity 0.5s ease 1s;\n}\n\n._asyncButton_zo3xu_59:active:after {\n  width: 0%;\n  opacity: 1;\n  transition: 0s;\n}\n";
updateStyle(__vite__id, __vite__css);
const row = "_row_zo3xu_3";
const value = "_value_zo3xu_18";
const button = "_button_zo3xu_26";
const textbox = "_textbox_zo3xu_42";
const asyncButton = "_asyncButton_zo3xu_59 _button_zo3xu_26";
var styles = {
	row: row,
	value: value,
	button: button,
	textbox: textbox,
	asyncButton: asyncButton
};

import.meta.hot.prune(() => removeStyle(__vite__id));

export { asyncButton, button, styles as default, row, textbox, value };
