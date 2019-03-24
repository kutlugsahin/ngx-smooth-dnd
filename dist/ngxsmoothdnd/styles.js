(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "*{\r\n  font-family: 'Oxygen', sans-serif;\r\n}\r\n\r\nbody{\r\n  height: 100%;\r\n\twidth: 100%;\r\n\tpadding: 0;\r\n\tmargin:0;\r\n}\r\n\r\n.app{\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n}\r\n\r\n.nav-button{\r\n  display: none;\r\n\tposition: fixed;\r\n\tleft: 10px;\r\n\ttop: 20px;\r\n\tz-index: 3;\r\n\twidth: 30px;\r\n  height: 30px;\r\n  -webkit-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n  transition: .3s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-button.open{\r\n\tleft: 310px;\r\n}\r\n\r\n.nav-button.open span{\r\n  background: #ccc;\r\n}\r\n\r\n.nav-button span{\r\n\tdisplay: block;\r\n  position: absolute;\r\n  height: 4px;\r\n  width: 100%;\r\n  background: #fff;\r\n  border-radius: 4px;\r\n  opacity: 1;\r\n  left: 0;\r\n  -webkit-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n/* Icon 3 */\r\n\r\n.nav-button  span:nth-child(1) {\r\n  top: 0px;\r\n}\r\n\r\n.nav-button  span:nth-child(2),.nav-button  span:nth-child(3) {\r\n  top: 8px;\r\n}\r\n\r\n.nav-button  span:nth-child(4) {\r\n  top: 16px;\r\n}\r\n\r\n.nav-button.open span:nth-child(1) {\r\n  top: 18px;\r\n  width: 0%;\r\n  left: 50%;\r\n}\r\n\r\n.nav-button.open span:nth-child(2) {\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.nav-button.open span:nth-child(3) {\r\n  -webkit-transform: rotate(-45deg);\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.nav-button.open span:nth-child(4) {\r\n  top: 8px;\r\n  width: 0%;\r\n  left: 50%;\r\n}\r\n\r\n.navigator{\r\n  width: 350px;\r\n  flex-shrink: 0;\r\n\tbox-shadow: 0px 2px 5px #ccc;\r\n\tbackground-color: white;\r\n\tz-index: 1;\r\n  transition: width .3s ease-in-out;\r\n  overflow: hidden;\r\n}\r\n\r\n.navigator.closed{\r\n  width: 0;\r\n}\r\n\r\n.navigator-content{\r\n  padding-top: 0px;\r\n  width: 350px;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.navigator-header h3{\r\n  padding-left: 10px;\r\n}\r\n\r\n.divider{\r\n  height: 1px;\r\n  border-bottom: 1px solid #ddd;\r\n  margin-top: -2px;\r\n}\r\n\r\n.menu-section h4{\r\n  color: #444;\r\n  padding-left: 10px;\r\n}\r\n\r\n.menu-section ul{\r\n  color: #666;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.menu-section li{\r\n  font-size: 14px;\r\n  margin: 0;\r\n  padding: 10px;\r\n  padding-left: 30px;\r\n  cursor: pointer;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.menu-section li:hover{\r\n  background-color: ghostwhite;\r\n}\r\n\r\n.menu-section li.selected{\r\n  background-color: ghostwhite;  \r\n}\r\n\r\n.content{\r\n  display: flex;\r\n  flex-direction: column;\r\n\tflex: 1 1 auto;\r\n\tbackground-color: #f8f9fa;\r\n  min-width: 0;\r\n}\r\n\r\n.demo {\r\n  flex: 1;\r\n  overflow: auto;\r\n  min-width: 0;\r\n}\r\n\r\n.header{\r\n\theight: 60px;\r\n\tbackground-color: rgb(221, 0, 49);\r\n\tbox-shadow: 2px 0px 4px #ccc;\r\n\tz-index: 0;\r\n\tcolor: white;\r\n\tfont-size: 20px;\r\n\tpadding: 0 50px;\r\n\tvertical-align: middle;\r\n\tline-height: 60px;\r\n}\r\n\r\n.header.open{\r\n\tpadding: 0 20px;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n\t.navigator {\r\n\t\tposition: fixed;\r\n\t\theight: 100%;\r\n\t\tleft: 0;\r\n\t\ttop: 0;\r\n\t\tbottom: 0;\r\n  }\r\n  \r\n  .nav-button {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.demo-panel{\r\n  flex:1;\r\n  overflow-x: auto;\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n.nav-panel{\r\n  flex-shrink: 0;\r\n  width: 300px;\r\n}\r\n\r\n.demo-navigator{\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n  position: fixed;\r\n  width: 300px;\r\n  bottom: 0px;\r\n  top: 0px;\r\n  left: 0px;\r\n  padding: 0px;\r\n  margin: 0;\r\n  box-shadow: 1px 0px 5px #ccc;\r\n  z-index: 1;  \r\n}\r\n\r\n.demo-navigator li{\r\n  height: 50px;\r\n  display: block;\r\n}\r\n\r\n.demo-header {\r\n  height: 50px;\r\n  background-color: #eee;\r\n}\r\n\r\n.source-code{  \r\n  float: right;\r\n  height: 60px;\r\n  line-height: 60px;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n}\r\n\r\n.source-code img{\r\n  width: 30px;\r\n  height: 30px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.source-code span{\r\n  font-size: 14px;\r\n  color: #eee;\r\n  margin-left: 10px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.demo-navigator button {\r\n  border: 1px solid #348;\r\n  text-align: center;\r\n  height: 100%;\r\n  width : 100%;\r\n  display: block;\r\n  background-color: rgb(64, 105, 182);\r\n  cursor: pointer;\r\n  outline: 0;\r\n  color: white;\r\n  border-top: 1px solid rgb(116, 137, 223);\r\n  border-bottom: 1px solid rgb(43, 76, 185);\r\n  transition: all .2s ease;\r\n  font-size: 16px;\r\n}\r\n\r\n.demo-navigator button:hover {\r\n  background-color: rgb(47, 94, 182);\r\n}\r\n\r\n.simple-page{\r\n  max-width: 500px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.simple-page-scroller{\r\n  max-width: 500px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 50px;\r\n  overflow-y: auto;\r\n  height: 80vh;\r\n}\r\n\r\n.draggable-item{\r\n  height: 50px;\r\n  line-height: 50px;\r\n  text-align: center;\r\n  width : 100%;\r\n  display: block;\r\n  background-color: #fff;\r\n  outline: 0;\r\n  border: 1px solid rgba(0,0,0,.125);\r\n  margin-bottom: 2px;\r\n  margin-top: 2px;\r\n}\r\n\r\n.draggable-item-horizontal{\r\n    height: 300px;\r\n    padding: 10px;\r\n    line-height: 100px;\r\n    text-align: center;\r\n    /* width : 200px; */\r\n    display: block;\r\n    background-color: #fff;\r\n    outline: 0;\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    margin-right: 4px;\r\n}\r\n\r\n.form-demo{\r\n  width: 650px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 50px;\r\n  display: flex\r\n}\r\n\r\n.form{\r\n  flex: 3;\r\n  /* width: 500px; */\r\n  /* background-color: #f3f3f3; */\r\n  border: 1px solid rgba(0,0,0,.125);\r\n  border-radius: 6px;\r\n  box-shadow: 3px 3px 3px rgba(0,0,0,0.08), 0px 3px 3px rgba(0,0,0,0.08);\r\n}\r\n\r\n.form-fields-panel{\r\n  flex: 1;\r\n  margin-right: 50px;\r\n}\r\n\r\n.form-field{\r\n  height: 50px;\r\n  width: 250px;\r\n  line-height: 30px;\r\n  vertical-align: middle;\r\n  padding: 10px;\r\n  background-color: #fff;\r\n  border: 1px solid #eee;\r\n  border-top: 1px solid #fff;\r\n  border-bottom: 1px solid #ddd;\r\n  /* background-color: #eee; */\r\n  cursor: move;\r\n  \r\n}\r\n\r\n.form-line {\r\n  padding: 20px 30px;\r\n  background-color: #f8f9fa;\r\n  border: 1px solid transparent;\r\n  border-radius: 6px;\r\n  transition: all .3s ease;\r\n  transition-property: border-color, background-color;\r\n  cursor: move;\r\n}\r\n\r\n.form-line.selected {\r\n  /* border: 1px solid #ddd; */\r\n  background-color: #f8f9fa;\r\n  /* box-shadow: 0px 0px 10px 10px #ccc; */\r\n}\r\n\r\n.form-ghost{\r\n  transition: 0.18s ease;\r\n  box-shadow: 1px 1px 5px 2px rgba(0,0,0,0.08);\r\n}\r\n\r\n.form-ghost-drop{\r\n  box-shadow: 0 0 2px 5px rgba(0,0,0,0.0);\r\n}\r\n\r\n.form-submit-button{\r\n  border: 0;\r\n  width: 100%;\r\n  vertical-align: middle;\r\n  height: 40px;\r\n  color: #eee;\r\n  background-color: cornflowerblue;\r\n  cursor: pointer;\r\n}\r\n\r\n.label {\r\n  margin-bottom: 5px; \r\n}\r\n\r\n.field {\r\n  cursor: auto;\r\n}\r\n\r\n.field input, .field textarea, .field select {\r\n  width: 100%;\r\n  padding: 10px;\r\n  border: 1px solid #ddd;\r\n  border-radius: 3px;\r\n  outline: none;\r\n  transition: border-color .3s ease;\r\n}\r\n\r\n.field input[type=\"radio\"], .field input[type=\"checkbox\"] {\r\n  width: auto;\r\n}\r\n\r\n.field input:focus, textarea:focus {\r\n  border: 1px solid #80bdff;\r\n  box-shadow: 0 0 3px 0px #80bdff;\r\n}\r\n\r\n.field-group input, .field-group textarea, .field-group select{\r\n  width: 49%;\r\n  margin-right: 2%;\r\n}\r\n\r\ninput:last-child{\r\n  margin-right: 0;\r\n}\r\n\r\n.dragging {\r\n  background-color: yellow;\r\n}\r\n\r\n.card-scene{\r\n  padding: 50px;\r\n  /* background-color: #fff; */\r\n}\r\n\r\n.card-container{\r\n  width: 320px;\r\n  padding: 10px;\r\n  margin: 5px;\r\n  margin-right: 45px;\r\n  background-color: #f3f3f3;\r\n  box-shadow: 0 1px 1px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24);\r\n}\r\n\r\n.card{\r\n  margin: 5px;\r\n  /* border: 1px solid #ccc; */\r\n  background-color: white;\r\n  box-shadow: 0 1px 1px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24);\r\n  padding: 10px;\r\n}\r\n\r\n.card-column-header{\r\n  font-size: 18px;\r\n}\r\n\r\n.column-drag-handle{\r\n  cursor: move;\r\n  padding: 5px; \r\n}\r\n\r\n.card-ghost {\r\n  transition: -webkit-transform 0.18s ease;\r\n  transition: transform 0.18s ease;\r\n  transition: transform 0.18s ease, -webkit-transform 0.18s ease;\r\n  -webkit-transform: rotateZ(5deg);\r\n          transform: rotateZ(5deg)\r\n}\r\n\r\n.card-ghost-drop{\r\n  transition: -webkit-transform 0.18s ease-in-out;\r\n  transition: transform 0.18s ease-in-out;\r\n  transition: transform 0.18s ease-in-out, -webkit-transform 0.18s ease-in-out;\r\n  -webkit-transform: rotateZ(0deg);\r\n          transform: rotateZ(0deg)\r\n}\r\n\r\n.opacity-ghost {\r\n  transition: all .18s ease;\r\n  opacity: 0.8;\r\n  cursor: ns-resize;\r\n  /* transform: rotateZ(5deg); */\r\n  background-color: cornflowerblue;\r\n  box-shadow: 3px 3px 10px 3px rgba(0,0,0,0.3);\r\n}\r\n\r\n.opacity-ghost-drop {\r\n  opacity: 1;\r\n  /* transform: rotateZ(0deg); */\r\n  background-color: white;\r\n  box-shadow: 3px 3px 10px 3px rgba(0,0,0,0.0);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,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QjtFQUM1Qix1QkFBdUI7RUFDdkIsa0VBQWtFO0VBQ2xFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0NBQWdDO0VBQWhDLGdDQUFnQztFQUFoQyw4REFBZ0M7RUFDaEMsZ0NBQXVCO1VBQXZCO0FBQ0Y7O0FBRUE7RUFDRSwrQ0FBdUM7RUFBdkMsdUNBQXVDO0VBQXZDLDRFQUF1QztFQUN2QyxnQ0FBdUI7VUFBdkI7QUFDRjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixnQ0FBZ0M7RUFDaEMsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsNENBQTRDO0FBQzlDIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bWFyZ2luOjA7XHJcbn1cclxuXHJcbi5hcHB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubmF2LWJ1dHRvbntcclxuICBkaXNwbGF5OiBub25lO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRsZWZ0OiAxMHB4O1xyXG5cdHRvcDogMjBweDtcclxuXHR6LWluZGV4OiAzO1xyXG5cdHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9uLm9wZW57XHJcblx0bGVmdDogMzEwcHg7XHJcbn1cclxuLm5hdi1idXR0b24ub3BlbiBzcGFue1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9uIHNwYW57XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgbGVmdDogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi8qIEljb24gMyAqL1xyXG5cclxuLm5hdi1idXR0b24gIHNwYW46bnRoLWNoaWxkKDEpIHtcclxuICB0b3A6IDBweDtcclxufVxyXG5cclxuLm5hdi1idXR0b24gIHNwYW46bnRoLWNoaWxkKDIpLC5uYXYtYnV0dG9uICBzcGFuOm50aC1jaGlsZCgzKSB7XHJcbiAgdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9uICBzcGFuOm50aC1jaGlsZCg0KSB7XHJcbiAgdG9wOiAxNnB4O1xyXG59XHJcblxyXG4ubmF2LWJ1dHRvbi5vcGVuIHNwYW46bnRoLWNoaWxkKDEpIHtcclxuICB0b3A6IDE4cHg7XHJcbiAgd2lkdGg6IDAlO1xyXG4gIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLm5hdi1idXR0b24ub3BlbiBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuLm5hdi1idXR0b24ub3BlbiBzcGFuOm50aC1jaGlsZCgzKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9uLm9wZW4gc3BhbjpudGgtY2hpbGQoNCkge1xyXG4gIHRvcDogOHB4O1xyXG4gIHdpZHRoOiAwJTtcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi5uYXZpZ2F0b3J7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG5cdGJveC1zaGFkb3c6IDBweCAycHggNXB4ICNjY2M7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0ei1pbmRleDogMTtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm5hdmlnYXRvci5jbG9zZWR7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5uYXZpZ2F0b3ItY29udGVudHtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLm5hdmlnYXRvci1oZWFkZXIgaDN7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZGl2aWRlcntcclxuICBoZWlnaHQ6IDFweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICBtYXJnaW4tdG9wOiAtMnB4O1xyXG59XHJcblxyXG4ubWVudS1zZWN0aW9uIGg0e1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLm1lbnUtc2VjdGlvbiB1bHtcclxuICBjb2xvcjogIzY2NjtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubWVudS1zZWN0aW9uIGxpe1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLm1lbnUtc2VjdGlvbiBsaTpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xyXG59XHJcblxyXG4ubWVudS1zZWN0aW9uIGxpLnNlbGVjdGVke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdob3N0d2hpdGU7ICBcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGZsZXg6IDEgMSBhdXRvO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uZGVtbyB7XHJcbiAgZmxleDogMTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtaW4td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcblx0aGVpZ2h0OiA2MHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDAsIDQ5KTtcclxuXHRib3gtc2hhZG93OiAycHggMHB4IDRweCAjY2NjO1xyXG5cdHotaW5kZXg6IDA7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRwYWRkaW5nOiAwIDUwcHg7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRsaW5lLWhlaWdodDogNjBweDtcclxufVxyXG5cclxuLmhlYWRlci5vcGVue1xyXG5cdHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcblx0Lm5hdmlnYXRvciB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG4gIH1cclxuICBcclxuICAubmF2LWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5kZW1vLXBhbmVse1xyXG4gIGZsZXg6MTtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcbi5uYXYtcGFuZWx7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uZGVtby1uYXZpZ2F0b3J7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNoYWRvdzogMXB4IDBweCA1cHggI2NjYztcclxuICB6LWluZGV4OiAxOyAgXHJcbn1cclxuXHJcbi5kZW1vLW5hdmlnYXRvciBsaXtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5kZW1vLWhlYWRlciB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbn1cclxuXHJcbi5zb3VyY2UtY29kZXsgIFxyXG4gIGZsb2F0OiByaWdodDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zb3VyY2UtY29kZSBpbWd7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5zb3VyY2UtY29kZSBzcGFue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogI2VlZTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZGVtby1uYXZpZ2F0b3IgYnV0dG9uIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMzQ4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGggOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NCwgMTA1LCAxODIpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDExNiwgMTM3LCAyMjMpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNDMsIDc2LCAxODUpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5kZW1vLW5hdmlnYXRvciBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0NywgOTQsIDE4Mik7XHJcbn1cclxuXHJcblxyXG4uc2ltcGxlLXBhZ2V7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uc2ltcGxlLXBhZ2Utc2Nyb2xsZXJ7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGhlaWdodDogODB2aDtcclxufVxyXG5cclxuLmRyYWdnYWJsZS1pdGVte1xyXG4gIGhlaWdodDogNTBweDtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGggOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgb3V0bGluZTogMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5kcmFnZ2FibGUtaXRlbS1ob3Jpem9udGFse1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvKiB3aWR0aCA6IDIwMHB4OyAqL1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufVxyXG5cclxuLmZvcm0tZGVtb3tcclxuICB3aWR0aDogNjUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgZGlzcGxheTogZmxleFxyXG59XHJcblxyXG4uZm9ybXtcclxuICBmbGV4OiAzO1xyXG4gIC8qIHdpZHRoOiA1MDBweDsgKi9cclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzOyAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwwLDAsMC4wOCksIDBweCAzcHggM3B4IHJnYmEoMCwwLDAsMC4wOCk7XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkcy1wYW5lbHtcclxuICBmbGV4OiAxO1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG5cclxuLmZvcm0tZmllbGR7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNlZWU7ICovXHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG4gIFxyXG59XHJcblxyXG4uZm9ybS1saW5lIHtcclxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvcmRlci1jb2xvciwgYmFja2dyb3VuZC1jb2xvcjtcclxuICBjdXJzb3I6IG1vdmU7XHJcbn1cclxuXHJcbi5mb3JtLWxpbmUuc2VsZWN0ZWQge1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAvKiBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMTBweCAjY2NjOyAqL1xyXG59XHJcblxyXG4uZm9ybS1naG9zdHtcclxuICB0cmFuc2l0aW9uOiAwLjE4cyBlYXNlO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDJweCByZ2JhKDAsMCwwLDAuMDgpO1xyXG59XHJcblxyXG4uZm9ybS1naG9zdC1kcm9we1xyXG4gIGJveC1zaGFkb3c6IDAgMCAycHggNXB4IHJnYmEoMCwwLDAsMC4wKTtcclxufVxyXG5cclxuLmZvcm0tc3VibWl0LWJ1dHRvbntcclxuICBib3JkZXI6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgY29sb3I6ICNlZWU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDsgXHJcbn1cclxuXHJcbi5maWVsZCB7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG59XHJcblxyXG4uZmllbGQgaW5wdXQsIC5maWVsZCB0ZXh0YXJlYSwgLmZpZWxkIHNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuM3MgZWFzZTtcclxufVxyXG5cclxuLmZpZWxkIGlucHV0W3R5cGU9XCJyYWRpb1wiXSwgLmZpZWxkIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5maWVsZCBpbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MGJkZmY7XHJcbiAgYm94LXNoYWRvdzogMCAwIDNweCAwcHggIzgwYmRmZjtcclxufVxyXG5cclxuLmZpZWxkLWdyb3VwIGlucHV0LCAuZmllbGQtZ3JvdXAgdGV4dGFyZWEsIC5maWVsZC1ncm91cCBzZWxlY3R7XHJcbiAgd2lkdGg6IDQ5JTtcclxuICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG59XHJcblxyXG5pbnB1dDpsYXN0LWNoaWxke1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLmRyYWdnaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi5jYXJkLXNjZW5le1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgKi9cclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVye1xyXG4gIHdpZHRoOiAzMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAxcHggcmdiYSgwLDAsMCwwLjI0KTtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgI2NjYzsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4yNCk7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmNhcmQtY29sdW1uLWhlYWRlcntcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5jb2x1bW4tZHJhZy1oYW5kbGV7XHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG4gIHBhZGRpbmc6IDVweDsgXHJcbn1cclxuXHJcbi5jYXJkLWdob3N0IHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xOHMgZWFzZTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVooNWRlZylcclxufVxyXG5cclxuLmNhcmQtZ2hvc3QtZHJvcHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xOHMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpXHJcbn1cclxuXHJcbi5vcGFjaXR5LWdob3N0IHtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjE4cyBlYXNlO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBjdXJzb3I6IG5zLXJlc2l6ZTtcclxuICAvKiB0cmFuc2Zvcm06IHJvdGF0ZVooNWRlZyk7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IDNweCByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuXHJcbi5vcGFjaXR5LWdob3N0LWRyb3Age1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLyogdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCAzcHggcmdiYSgwLDAsMCwwLjApO1xyXG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kutlu\Desktop\ngx-smooth-dnd\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map