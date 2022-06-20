"use strict";
(self["webpackChunkgetting_started_using_a_configuration"] = self["webpackChunkgetting_started_using_a_configuration"] || []).push([["main"],{

/***/ "./src/new_index.ts":
/*!**************************!*\
  !*** ./src/new_index.ts ***!
  \**************************/
/***/ (() => {


var wrapper = document.createElement('div');
wrapper.className = "wrapper";
wrapper.innerHTML = "\n    <h1>Finance Logger</h1>\n\n    <!-- output list -->\n    <ul class=\"item-list\">\n\n    </ul>";
var footer = document.createElement('footer');
footer.innerHTML = "\n    <form class=\"new-item-form\">\n        <div class=\"field\">\n            <label>Type:</label>\n            <select id=\"type\">\n                <option value=\"invoice\">Invoice</option>\n                <option value=\"payment\">Payment</option>\n            </select>\n        </div>\n        <div class=\"field\">\n            <label>To / From:</label>\n            <input type=\"text\" id=\"tofrom\">\n        </div>\n        <div class=\"field\">\n            <label>Details:</label>\n            <input type=\"text\" id=\"details\">\n        </div>\n        <div class=\"field\">\n            <label>Amount (\u00A3):</label>\n            <input type=\"number\" id=\"amount\">\n        </div>\n        <button>Add</button>\n    </form>\n\n    <a href=\"https://www.thenetninja.co.uk\">The Net Ninja</a>";


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/new_index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQU0sT0FBTyxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlELE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzlCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsc0dBTVYsQ0FBQztBQUVYLElBQU0sTUFBTSxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdELE1BQU0sQ0FBQyxTQUFTLEdBQUcsa3pCQXdCMkMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9zcmMvbmV3X2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdyYXBwZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbndyYXBwZXIuY2xhc3NOYW1lID0gXCJ3cmFwcGVyXCI7XHJcbndyYXBwZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgPGgxPkZpbmFuY2UgTG9nZ2VyPC9oMT5cclxuXHJcbiAgICA8IS0tIG91dHB1dCBsaXN0IC0tPlxyXG4gICAgPHVsIGNsYXNzPVwiaXRlbS1saXN0XCI+XHJcblxyXG4gICAgPC91bD5gO1xyXG5cclxuY29uc3QgZm9vdGVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG5mb290ZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgPGZvcm0gY2xhc3M9XCJuZXctaXRlbS1mb3JtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5UeXBlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJ0eXBlXCI+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW52b2ljZVwiPkludm9pY2U8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwYXltZW50XCI+UGF5bWVudDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgPGxhYmVsPlRvIC8gRnJvbTo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRvZnJvbVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+RGV0YWlsczo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRldGFpbHNcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgPGxhYmVsPkFtb3VudCAowqMpOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJhbW91bnRcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uPkFkZDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG5cclxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50aGVuZXRuaW5qYS5jby51a1wiPlRoZSBOZXQgTmluamE8L2E+YDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=