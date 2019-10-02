(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "*{\r\n  font-family: 'Oxygen', sans-serif;\r\n}\r\n\r\nbody{\r\n  height: 100%;\r\n\twidth: 100%;\r\n\tpadding: 0;\r\n\tmargin:0;\r\n}\r\n\r\n.app{\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n}\r\n\r\n.nav-button{\r\n  display: none;\r\n\tposition: fixed;\r\n\tleft: 10px;\r\n\ttop: 20px;\r\n\tz-index: 3;\r\n\twidth: 30px;\r\n  height: 30px;\r\n  transform: rotate(0deg);\r\n  transition: .3s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-button.open{\r\n\tleft: 310px;\r\n}\r\n\r\n.nav-button.open span{\r\n  background: #ccc;\r\n}\r\n\r\n.nav-button span{\r\n\tdisplay: block;\r\n  position: absolute;\r\n  height: 4px;\r\n  width: 100%;\r\n  background: #fff;\r\n  border-radius: 4px;\r\n  opacity: 1;\r\n  left: 0;\r\n  transform: rotate(0deg);\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n/* Icon 3 */\r\n\r\n.nav-button  span:nth-child(1) {\r\n  top: 0px;\r\n}\r\n\r\n.nav-button  span:nth-child(2),.nav-button  span:nth-child(3) {\r\n  top: 8px;\r\n}\r\n\r\n.nav-button  span:nth-child(4) {\r\n  top: 16px;\r\n}\r\n\r\n.nav-button.open span:nth-child(1) {\r\n  top: 18px;\r\n  width: 0%;\r\n  left: 50%;\r\n}\r\n\r\n.nav-button.open span:nth-child(2) {\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.nav-button.open span:nth-child(3) {\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.nav-button.open span:nth-child(4) {\r\n  top: 8px;\r\n  width: 0%;\r\n  left: 50%;\r\n}\r\n\r\n.navigator{\r\n  width: 350px;\r\n  flex-shrink: 0;\r\n\tbox-shadow: 0px 2px 5px #ccc;\r\n\tbackground-color: white;\r\n\tz-index: 1;\r\n  transition: width .3s ease-in-out;\r\n  overflow: hidden;\r\n}\r\n\r\n.navigator.closed{\r\n  width: 0;\r\n}\r\n\r\n.navigator-content{\r\n  padding-top: 0px;\r\n  width: 350px;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.navigator-header h3{\r\n  padding-left: 10px;\r\n}\r\n\r\n.divider{\r\n  height: 1px;\r\n  border-bottom: 1px solid #ddd;\r\n  margin-top: -2px;\r\n}\r\n\r\n.menu-section h4{\r\n  color: #444;\r\n  padding-left: 10px;\r\n}\r\n\r\n.menu-section ul{\r\n  color: #666;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.menu-section li{\r\n  font-size: 14px;\r\n  margin: 0;\r\n  padding: 10px;\r\n  padding-left: 30px;\r\n  cursor: pointer;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.menu-section li:hover{\r\n  background-color: ghostwhite;\r\n}\r\n\r\n.menu-section li.selected{\r\n  background-color: ghostwhite;  \r\n}\r\n\r\n.content{\r\n  display: flex;\r\n  flex-direction: column;\r\n\tflex: 1 1 auto;\r\n\tbackground-color: #f8f9fa;\r\n  min-width: 0;\r\n}\r\n\r\n.demo {\r\n  flex: 1;\r\n  overflow: auto;\r\n  min-width: 0;\r\n}\r\n\r\n.header{\r\n\theight: 60px;\r\n\tbackground-color: rgb(221, 0, 49);\r\n\tbox-shadow: 2px 0px 4px #ccc;\r\n\tz-index: 0;\r\n\tcolor: white;\r\n\tfont-size: 20px;\r\n\tpadding: 0 50px;\r\n\tvertical-align: middle;\r\n\tline-height: 60px;\r\n}\r\n\r\n.header.open{\r\n\tpadding: 0 20px;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n\t.navigator {\r\n\t\tposition: fixed;\r\n\t\theight: 100%;\r\n\t\tleft: 0;\r\n\t\ttop: 0;\r\n\t\tbottom: 0;\r\n  }\r\n  \r\n  .nav-button {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.demo-panel{\r\n  flex:1;\r\n  overflow-x: auto;\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n.nav-panel{\r\n  flex-shrink: 0;\r\n  width: 300px;\r\n}\r\n\r\n.demo-navigator{\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n  position: fixed;\r\n  width: 300px;\r\n  bottom: 0px;\r\n  top: 0px;\r\n  left: 0px;\r\n  padding: 0px;\r\n  margin: 0;\r\n  box-shadow: 1px 0px 5px #ccc;\r\n  z-index: 1;  \r\n}\r\n\r\n.demo-navigator li{\r\n  height: 50px;\r\n  display: block;\r\n}\r\n\r\n.demo-header {\r\n  height: 50px;\r\n  background-color: #eee;\r\n}\r\n\r\n.source-code{  \r\n  float: right;\r\n  height: 60px;\r\n  line-height: 60px;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n}\r\n\r\n.source-code img{\r\n  width: 30px;\r\n  height: 30px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.source-code span{\r\n  font-size: 14px;\r\n  color: #eee;\r\n  margin-left: 10px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.demo-navigator button {\r\n  border: 1px solid #348;\r\n  text-align: center;\r\n  height: 100%;\r\n  width : 100%;\r\n  display: block;\r\n  background-color: rgb(64, 105, 182);\r\n  cursor: pointer;\r\n  outline: 0;\r\n  color: white;\r\n  border-top: 1px solid rgb(116, 137, 223);\r\n  border-bottom: 1px solid rgb(43, 76, 185);\r\n  transition: all .2s ease;\r\n  font-size: 16px;\r\n}\r\n\r\n.demo-navigator button:hover {\r\n  background-color: rgb(47, 94, 182);\r\n}\r\n\r\n.simple-page{\r\n  max-width: 500px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.simple-page-scroller{\r\n  max-width: 500px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 50px;\r\n  overflow-y: auto;\r\n  height: 80vh;\r\n}\r\n\r\n.draggable-item{\r\n  height: 50px;\r\n  line-height: 50px;\r\n  text-align: center;\r\n  width : 100%;\r\n  display: block;\r\n  background-color: #fff;\r\n  outline: 0;\r\n  border: 1px solid rgba(0,0,0,.125);\r\n  margin-bottom: 2px;\r\n  margin-top: 2px;\r\n}\r\n\r\n.draggable-item-horizontal{\r\n    height: 300px;\r\n    padding: 10px;\r\n    line-height: 100px;\r\n    text-align: center;\r\n    /* width : 200px; */\r\n    display: block;\r\n    background-color: #fff;\r\n    outline: 0;\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    margin-right: 4px;\r\n}\r\n\r\n.form-demo{\r\n  width: 650px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 50px;\r\n  display: flex\r\n}\r\n\r\n.form{\r\n  flex: 3;\r\n  /* width: 500px; */\r\n  /* background-color: #f3f3f3; */\r\n  border: 1px solid rgba(0,0,0,.125);\r\n  border-radius: 6px;\r\n  box-shadow: 3px 3px 3px rgba(0,0,0,0.08), 0px 3px 3px rgba(0,0,0,0.08);\r\n}\r\n\r\n.form-fields-panel{\r\n  flex: 1;\r\n  margin-right: 50px;\r\n}\r\n\r\n.form-field{\r\n  height: 50px;\r\n  width: 250px;\r\n  line-height: 30px;\r\n  vertical-align: middle;\r\n  padding: 10px;\r\n  background-color: #fff;\r\n  border: 1px solid #eee;\r\n  border-top: 1px solid #fff;\r\n  border-bottom: 1px solid #ddd;\r\n  /* background-color: #eee; */\r\n  cursor: move;\r\n  \r\n}\r\n\r\n.form-line {\r\n  padding: 20px 30px;\r\n  background-color: #f8f9fa;\r\n  border: 1px solid transparent;\r\n  border-radius: 6px;\r\n  transition: all .3s ease;\r\n  transition-property: border-color, background-color;\r\n  cursor: move;\r\n}\r\n\r\n.form-line.selected {\r\n  /* border: 1px solid #ddd; */\r\n  background-color: #f8f9fa;\r\n  /* box-shadow: 0px 0px 10px 10px #ccc; */\r\n}\r\n\r\n.form-ghost{\r\n  transition: 0.18s ease;\r\n  box-shadow: 1px 1px 5px 2px rgba(0,0,0,0.08);\r\n}\r\n\r\n.form-ghost-drop{\r\n  box-shadow: 0 0 2px 5px rgba(0,0,0,0.0);\r\n}\r\n\r\n.form-submit-button{\r\n  border: 0;\r\n  width: 100%;\r\n  vertical-align: middle;\r\n  height: 40px;\r\n  color: #eee;\r\n  background-color: cornflowerblue;\r\n  cursor: pointer;\r\n}\r\n\r\n.label {\r\n  margin-bottom: 5px; \r\n}\r\n\r\n.field {\r\n  cursor: auto;\r\n}\r\n\r\n.field input, .field textarea, .field select {\r\n  width: 100%;\r\n  padding: 10px;\r\n  border: 1px solid #ddd;\r\n  border-radius: 3px;\r\n  outline: none;\r\n  transition: border-color .3s ease;\r\n}\r\n\r\n.field input[type=\"radio\"], .field input[type=\"checkbox\"] {\r\n  width: auto;\r\n}\r\n\r\n.field input:focus, textarea:focus {\r\n  border: 1px solid #80bdff;\r\n  box-shadow: 0 0 3px 0px #80bdff;\r\n}\r\n\r\n.field-group input, .field-group textarea, .field-group select{\r\n  width: 49%;\r\n  margin-right: 2%;\r\n}\r\n\r\ninput:last-child{\r\n  margin-right: 0;\r\n}\r\n\r\n.dragging {\r\n  background-color: yellow;\r\n}\r\n\r\n.card-scene{\r\n  padding: 50px;\r\n  /* background-color: #fff; */\r\n}\r\n\r\n.card-container{\r\n  width: 320px;\r\n  padding: 10px;\r\n  margin: 5px;\r\n  margin-right: 45px;\r\n  background-color: #f3f3f3;\r\n  box-shadow: 0 1px 1px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24);\r\n}\r\n\r\n.card{\r\n  margin: 5px;\r\n  /* border: 1px solid #ccc; */\r\n  background-color: white;\r\n  box-shadow: 0 1px 1px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24);\r\n  padding: 10px;\r\n}\r\n\r\n.card-column-header{\r\n  font-size: 18px;\r\n}\r\n\r\n.column-drag-handle{\r\n  cursor: move;\r\n  padding: 5px; \r\n}\r\n\r\n.card-ghost {\r\n  transition: transform 0.18s ease;\r\n  transform: rotateZ(5deg)\r\n}\r\n\r\n.card-ghost-drop{\r\n  transition: transform 0.18s ease-in-out;\r\n  transform: rotateZ(0deg)\r\n}\r\n\r\n.opacity-ghost {\r\n  transition: all .18s ease;\r\n  opacity: 0.8;\r\n  cursor: ns-resize;\r\n  /* transform: rotateZ(5deg); */\r\n  background-color: cornflowerblue;\r\n  box-shadow: 3px 3px 10px 3px rgba(0,0,0,0.3);\r\n}\r\n\r\n.opacity-ghost-drop {\r\n  opacity: 1;\r\n  /* transform: rotateZ(0deg); */\r\n  background-color: white;\r\n  box-shadow: 3px 3px 10px 3px rgba(0,0,0,0.0);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,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Q0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEM7QUFDRjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QztBQUNGOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLGdDQUFnQztFQUNoQyw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2Qiw0Q0FBNEM7QUFDOUMiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYm9keXtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZzogMDtcclxuXHRtYXJnaW46MDtcclxufVxyXG5cclxuLmFwcHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9ue1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGxlZnQ6IDEwcHg7XHJcblx0dG9wOiAyMHB4O1xyXG5cdHotaW5kZXg6IDM7XHJcblx0d2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdi1idXR0b24ub3BlbntcclxuXHRsZWZ0OiAzMTBweDtcclxufVxyXG4ubmF2LWJ1dHRvbi5vcGVuIHNwYW57XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxufVxyXG5cclxuLm5hdi1idXR0b24gc3BhbntcclxuXHRkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICBsZWZ0OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLyogSWNvbiAzICovXHJcblxyXG4ubmF2LWJ1dHRvbiAgc3BhbjpudGgtY2hpbGQoMSkge1xyXG4gIHRvcDogMHB4O1xyXG59XHJcblxyXG4ubmF2LWJ1dHRvbiAgc3BhbjpudGgtY2hpbGQoMiksLm5hdi1idXR0b24gIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuICB0b3A6IDhweDtcclxufVxyXG5cclxuLm5hdi1idXR0b24gIHNwYW46bnRoLWNoaWxkKDQpIHtcclxuICB0b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9uLm9wZW4gc3BhbjpudGgtY2hpbGQoMSkge1xyXG4gIHRvcDogMThweDtcclxuICB3aWR0aDogMCU7XHJcbiAgbGVmdDogNTAlO1xyXG59XHJcblxyXG4ubmF2LWJ1dHRvbi5vcGVuIHNwYW46bnRoLWNoaWxkKDIpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4ubmF2LWJ1dHRvbi5vcGVuIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG5cclxuLm5hdi1idXR0b24ub3BlbiBzcGFuOm50aC1jaGlsZCg0KSB7XHJcbiAgdG9wOiA4cHg7XHJcbiAgd2lkdGg6IDAlO1xyXG4gIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLm5hdmlnYXRvcntcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcblx0Ym94LXNoYWRvdzogMHB4IDJweCA1cHggI2NjYztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHR6LWluZGV4OiAxO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIC4zcyBlYXNlLWluLW91dDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubmF2aWdhdG9yLmNsb3NlZHtcclxuICB3aWR0aDogMDtcclxufVxyXG5cclxuLm5hdmlnYXRvci1jb250ZW50e1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ubmF2aWdhdG9yLWhlYWRlciBoM3tcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5kaXZpZGVye1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gIG1hcmdpbi10b3A6IC0ycHg7XHJcbn1cclxuXHJcbi5tZW51LXNlY3Rpb24gaDR7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ubWVudS1zZWN0aW9uIHVse1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5tZW51LXNlY3Rpb24gbGl7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ubWVudS1zZWN0aW9uIGxpOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdob3N0d2hpdGU7XHJcbn1cclxuXHJcbi5tZW51LXNlY3Rpb24gbGkuc2VsZWN0ZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTsgIFxyXG59XHJcblxyXG4uY29udGVudHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0ZmxleDogMSAxIGF1dG87XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICBtaW4td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5kZW1vIHtcclxuICBmbGV4OiAxO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIG1pbi13aWR0aDogMDtcclxufVxyXG5cclxuLmhlYWRlcntcclxuXHRoZWlnaHQ6IDYwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMCwgNDkpO1xyXG5cdGJveC1zaGFkb3c6IDJweCAwcHggNHB4ICNjY2M7XHJcblx0ei1pbmRleDogMDtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdHBhZGRpbmc6IDAgNTBweDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLm9wZW57XHJcblx0cGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuXHQubmF2aWdhdG9yIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLmRlbW8tcGFuZWx7XHJcbiAgZmxleDoxO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxufVxyXG5cclxuLm5hdi1wYW5lbHtcclxuICBmbGV4LXNocmluazogMDtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5kZW1vLW5hdmlnYXRvcntcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBib3R0b206IDBweDtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2hhZG93OiAxcHggMHB4IDVweCAjY2NjO1xyXG4gIHotaW5kZXg6IDE7ICBcclxufVxyXG5cclxuLmRlbW8tbmF2aWdhdG9yIGxpe1xyXG4gIGhlaWdodDogNTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRlbW8taGVhZGVyIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxufVxyXG5cclxuLnNvdXJjZS1jb2RleyAgXHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNvdXJjZS1jb2RlIGltZ3tcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLnNvdXJjZS1jb2RlIHNwYW57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjZWVlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5kZW1vLW5hdmlnYXRvciBidXR0b24ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNDg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aCA6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY0LCAxMDUsIDE4Mik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMTE2LCAxMzcsIDIyMyk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig0MywgNzYsIDE4NSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmRlbW8tbmF2aWdhdG9yIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCA5NCwgMTgyKTtcclxufVxyXG5cclxuXHJcbi5zaW1wbGUtcGFnZXtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5zaW1wbGUtcGFnZS1zY3JvbGxlcntcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG59XHJcblxyXG4uZHJhZ2dhYmxlLWl0ZW17XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aCA6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLmRyYWdnYWJsZS1pdGVtLWhvcml6b250YWx7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qIHdpZHRoIDogMjAwcHg7ICovXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcblxyXG4uZm9ybS1kZW1ve1xyXG4gIHdpZHRoOiA2NTBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBkaXNwbGF5OiBmbGV4XHJcbn1cclxuXHJcbi5mb3Jte1xyXG4gIGZsZXg6IDM7XHJcbiAgLyogd2lkdGg6IDUwMHB4OyAqL1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7ICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLDAsMCwwLjA4KSwgMHB4IDNweCAzcHggcmdiYSgwLDAsMCwwLjA4KTtcclxufVxyXG5cclxuLmZvcm0tZmllbGRzLXBhbmVse1xyXG4gIGZsZXg6IDE7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uZm9ybS1maWVsZHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2VlZTsgKi9cclxuICBjdXJzb3I6IG1vdmU7XHJcbiAgXHJcbn1cclxuXHJcbi5mb3JtLWxpbmUge1xyXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm9yZGVyLWNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGN1cnNvcjogbW92ZTtcclxufVxyXG5cclxuLmZvcm0tbGluZS5zZWxlY3RlZCB7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgI2RkZDsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gIC8qIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxMHB4ICNjY2M7ICovXHJcbn1cclxuXHJcbi5mb3JtLWdob3N0e1xyXG4gIHRyYW5zaXRpb246IDAuMThzIGVhc2U7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMnB4IHJnYmEoMCwwLDAsMC4wOCk7XHJcbn1cclxuXHJcbi5mb3JtLWdob3N0LWRyb3B7XHJcbiAgYm94LXNoYWRvdzogMCAwIDJweCA1cHggcmdiYSgwLDAsMCwwLjApO1xyXG59XHJcblxyXG4uZm9ybS1zdWJtaXQtYnV0dG9ue1xyXG4gIGJvcmRlcjogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjb2xvcjogI2VlZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4OyBcclxufVxyXG5cclxuLmZpZWxkIHtcclxuICBjdXJzb3I6IGF1dG87XHJcbn1cclxuXHJcbi5maWVsZCBpbnB1dCwgLmZpZWxkIHRleHRhcmVhLCAuZmllbGQgc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4zcyBlYXNlO1xyXG59XHJcblxyXG4uZmllbGQgaW5wdXRbdHlwZT1cInJhZGlvXCJdLCAuZmllbGQgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmZpZWxkIGlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwYmRmZjtcclxuICBib3gtc2hhZG93OiAwIDAgM3B4IDBweCAjODBiZGZmO1xyXG59XHJcblxyXG4uZmllbGQtZ3JvdXAgaW5wdXQsIC5maWVsZC1ncm91cCB0ZXh0YXJlYSwgLmZpZWxkLWdyb3VwIHNlbGVjdHtcclxuICB3aWR0aDogNDklO1xyXG4gIG1hcmdpbi1yaWdodDogMiU7XHJcbn1cclxuXHJcbmlucHV0Omxhc3QtY2hpbGR7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uZHJhZ2dpbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxufVxyXG5cclxuLmNhcmQtc2NlbmV7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDMyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0NXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMjQpO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICBtYXJnaW46IDVweDtcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAxcHggcmdiYSgwLDAsMCwwLjI0KTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb2x1bW4taGVhZGVye1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmNvbHVtbi1kcmFnLWhhbmRsZXtcclxuICBjdXJzb3I6IG1vdmU7XHJcbiAgcGFkZGluZzogNXB4OyBcclxufVxyXG5cclxuLmNhcmQtZ2hvc3Qge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE4cyBlYXNlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWig1ZGVnKVxyXG59XHJcblxyXG4uY2FyZC1naG9zdC1kcm9we1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE4cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZylcclxufVxyXG5cclxuLm9wYWNpdHktZ2hvc3Qge1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMThzIGVhc2U7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIGN1cnNvcjogbnMtcmVzaXplO1xyXG4gIC8qIHRyYW5zZm9ybTogcm90YXRlWig1ZGVnKTsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggM3B4IHJnYmEoMCwwLDAsMC4zKTtcclxufVxyXG5cclxuLm9wYWNpdHktZ2hvc3QtZHJvcCB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAvKiB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IDNweCByZ2JhKDAsMCwwLDAuMCk7XHJcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ksahin\Desktop\ngx-smooth-dnd\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map