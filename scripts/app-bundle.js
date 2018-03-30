var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.jstreeConfig = {
                plugins: ["wholerow"],
                check_callback: true,
                core: {
                    multiple: false
                }
            };
            this.onSelectionChanged = function (e, data) {
                console.log(data);
                debugger;
            };
        }
        App.prototype.activate = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.data = {
                        url: "//localhost:3000/ItemDiretorioApiDtos",
                        data: function (node) {
                            return node.id === "#"
                                ? { PastaId: 0 }
                                : { PastaId: node.id };
                        }
                    };
                    return [2];
                });
            });
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBO1FBQUE7WUFHUyxpQkFBWSxHQUFHO2dCQUNwQixPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ3JCLGNBQWMsRUFBRSxJQUFJO2dCQUNwQixJQUFJLEVBQUU7b0JBQ0osUUFBUSxFQUFFLEtBQUs7aUJBQ2hCO2FBQ0YsQ0FBQTtZQWFELHVCQUFrQixHQUFHLFVBQUMsQ0FBb0IsRUFBRSxJQUFTO2dCQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixRQUFRLENBQUM7WUFDWCxDQUFDLENBQUE7UUFDSCxDQUFDO1FBZk8sc0JBQVEsR0FBZDs7O29CQUNFLElBQUksQ0FBQyxJQUFJLEdBQUc7d0JBQ1YsR0FBRyxFQUFFLHVDQUF1Qzt3QkFDNUMsSUFBSSxFQUFFLFVBQVUsSUFBSTs0QkFDbEIsT0FBTyxJQUFJLENBQUMsRUFBRSxLQUFLLEdBQUc7Z0NBQ3BCLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7Z0NBQ2hCLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUE7d0JBQzFCLENBQUM7cUJBQ0YsQ0FBQTs7OztTQUNGO1FBTUgsVUFBQztJQUFELENBMUJBLEFBMEJDLElBQUE7SUExQlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgZGF0YTtcclxuXHJcbiAgcHVibGljIGpzdHJlZUNvbmZpZyA9IHtcclxuICAgIHBsdWdpbnM6IFtcIndob2xlcm93XCJdLFxyXG4gICAgY2hlY2tfY2FsbGJhY2s6IHRydWUsXHJcbiAgICBjb3JlOiB7XHJcbiAgICAgIG11bHRpcGxlOiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgYWN0aXZhdGUoKSB7XHJcbiAgICB0aGlzLmRhdGEgPSB7XHJcbiAgICAgIHVybDogXCIvL2xvY2FsaG9zdDozMDAwL0l0ZW1EaXJldG9yaW9BcGlEdG9zXCIsXHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5vZGUuaWQgPT09IFwiI1wiXHJcbiAgICAgICAgICA/IHsgUGFzdGFJZDogMCB9XHJcbiAgICAgICAgICA6IHsgUGFzdGFJZDogbm9kZS5pZCB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2VsZWN0aW9uQ2hhbmdlZCA9IChlOiBKUXVlcnlFdmVudE9iamVjdCwgZGF0YTogYW55KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGRlYnVnZ2VyO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgZGVidWc6IHRydWUsXHJcbiAgdGVzdGluZzogdHJ1ZVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('main',["require", "exports", "./environment", "jstree"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.use.plugin("aurelia-jstree");
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBSUEsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLElBQUkscUJBQVcsQ0FBQyxLQUFLLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQ2xDO1FBRUQsSUFBSSxxQkFBVyxDQUFDLE9BQU8sRUFBRTtZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUVwQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBaEJELDhCQWdCQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXJlbGlhfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yaydcclxuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xyXG5pbXBvcnQgXCJqc3RyZWVcIjsgLy8gPC0tLS0tLS0tLS0tLSBNQUtFIFNVUkUgVE8gSU1QT1JUIEpTVFJFRVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XHJcbiAgYXVyZWxpYS51c2VcclxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxyXG4gICAgLmZlYXR1cmUoJ3Jlc291cmNlcycpO1xyXG5cclxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcclxuICAgIGF1cmVsaWEudXNlLmRldmVsb3BtZW50TG9nZ2luZygpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGVudmlyb25tZW50LnRlc3RpbmcpIHtcclxuICAgIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS10ZXN0aW5nJyk7XHJcbiAgfVxyXG5cclxuIGF1cmVsaWEudXNlLnBsdWdpbihcImF1cmVsaWEtanN0cmVlXCIpOyAgLy8gPC0tLS0tIFJFR0lTVEVSIFRIRSBQTFVHSU5cclxuXHJcbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KCkpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24pIHtcclxuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('app.html!text', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"aurelia-jstree/styles.css\"></require>\r\n  <require from=\"jstree/dist/themes/default/style.css\"></require>\r\n  <au-js-tree settings.bind=\"jstreeConfig\"\r\n            data.bind=\"data\"\r\n            selection-changed.bind=\"onSelectionChanged\"\r\n            node-moved.bind=\"onNodeMoved\"></au-js-tree>\r\n</template>\r\n"; });
//# sourceMappingURL=app-bundle.js.map