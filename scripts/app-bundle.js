define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            var _this = this;
            this.jstreeConfig = {
                plugins: ["dnd"],
                core: {
                    check_callback: function (operation, node, node_parent, node_position, more) {
                        console.log(operation);
                        if (operation === "move_node") {
                            console.group("D&D");
                            console.log("node", node);
                            console.log("parent", node_parent);
                            console.log("position", node_position);
                            console.log("more", more);
                            console.log(node_parent.original.isFolder);
                            console.groupEnd();
                            return node_parent.original.isFolder === true;
                        }
                        return true;
                    }
                },
                dnd: {
                    check_while_dragging: true
                }
            };
            this.data = [
                {
                    text: "Root folder",
                    state: { opened: true },
                    isFolder: true,
                    children: [
                        {
                            text: "File 1",
                            state: { selected: true },
                            icon: "jstree-file"
                        },
                        {
                            text: "File 2",
                            icon: "jstree-file"
                        },
                        {
                            text: "Subfolder",
                            state: { opened: false },
                            icon: "jstree-folder",
                            children: [
                                {
                                    text: "File 1",
                                    state: { selected: true },
                                    icon: "jstree-file"
                                },
                                {
                                    text: "File 2",
                                    icon: "jstree-file"
                                }
                            ],
                            isFolder: true
                        }
                    ]
                }
            ];
            this.onSelectionChanged = function (e, data) {
                console.group("Selection was changed");
                console.log(_this);
                console.log(e);
                console.log(data);
                console.groupEnd();
            };
            this.onNodeMoved = function (e, data) {
                console.group("Node was moved");
                console.log(e);
                console.log(data);
                console.groupEnd();
            };
        }
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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T0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3JCLENBQUMsQ0FBQTtRQUNILENBQUM7UUFBRCxVQUFDO0lBQUQsQ0E1RUEsQUE0RUMsSUFBQTtJQTVFWSxrQkFBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXBwIHtcbiAgcHVibGljIGpzdHJlZUNvbmZpZyA9IHtcbiAgICBwbHVnaW5zOiBbXCJkbmRcIl0sXG4gICAgY29yZToge1xuICAgICAgY2hlY2tfY2FsbGJhY2s6IGZ1bmN0aW9uIChvcGVyYXRpb24sIG5vZGUsIG5vZGVfcGFyZW50LCBub2RlX3Bvc2l0aW9uLCBtb3JlKSB7XG4gICAgICAgIC8vIG9wZXJhdGlvbiBjYW4gYmUgJ2NyZWF0ZV9ub2RlJywgJ3JlbmFtZV9ub2RlJywgJ2RlbGV0ZV9ub2RlJywgJ21vdmVfbm9kZScgb3IgJ2NvcHlfbm9kZSdcbiAgICAgICAgY29uc29sZS5sb2cob3BlcmF0aW9uKTtcbiAgICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gXCJtb3ZlX25vZGVcIikge1xuICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoXCJEJkRcIik7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJub2RlXCIsIG5vZGUpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwicGFyZW50XCIsIG5vZGVfcGFyZW50KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInBvc2l0aW9uXCIsIG5vZGVfcG9zaXRpb24pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwibW9yZVwiLCBtb3JlKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhub2RlX3BhcmVudC5vcmlnaW5hbC5pc0ZvbGRlcik7XG4gICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuXG4gICAgICAgICAgcmV0dXJuIG5vZGVfcGFyZW50Lm9yaWdpbmFsLmlzRm9sZGVyID09PSB0cnVlOyAvL29ubHkgYWxsb3cgZHJvcHBpbmcgaW5zaWRlIGZvbGRlcnNcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTsgIC8vYWxsb3cgYWxsIG90aGVyIG9wZXJhdGlvbnNcbiAgICAgIH1cbiAgICB9LFxuICAgIGRuZDoge1xuICAgICAgY2hlY2tfd2hpbGVfZHJhZ2dpbmc6IHRydWVcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGF0YSA9IFtcbiAgICB7XG4gICAgICB0ZXh0OiBcIlJvb3QgZm9sZGVyXCIsXG4gICAgICBzdGF0ZTogeyBvcGVuZWQ6IHRydWUgfSxcbiAgICAgIGlzRm9sZGVyOiB0cnVlLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiRmlsZSAxXCIsXG4gICAgICAgICAgc3RhdGU6IHsgc2VsZWN0ZWQ6IHRydWUgfSxcbiAgICAgICAgICBpY29uOiBcImpzdHJlZS1maWxlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiRmlsZSAyXCIsXG4gICAgICAgICAgaWNvbjogXCJqc3RyZWUtZmlsZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlN1YmZvbGRlclwiLFxuICAgICAgICAgIHN0YXRlOiB7IG9wZW5lZDogZmFsc2UgfSxcbiAgICAgICAgICBpY29uOiBcImpzdHJlZS1mb2xkZXJcIixcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIkZpbGUgMVwiLFxuICAgICAgICAgICAgICBzdGF0ZTogeyBzZWxlY3RlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgICBpY29uOiBcImpzdHJlZS1maWxlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiRmlsZSAyXCIsXG4gICAgICAgICAgICAgIGljb246IFwianN0cmVlLWZpbGVcIlxuICAgICAgICAgICAgfV1cbiAgICAgICAgICAsXG4gICAgICAgICAgaXNGb2xkZXI6IHRydWVcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXTtcblxuICBvblNlbGVjdGlvbkNoYW5nZWQgPSAoZTogSlF1ZXJ5RXZlbnRPYmplY3QsIGRhdGE6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUuZ3JvdXAoXCJTZWxlY3Rpb24gd2FzIGNoYW5nZWRcIik7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xuICB9XG5cbiAgb25Ob2RlTW92ZWQgPSAoZTogSlF1ZXJ5RXZlbnRPYmplY3QsIGRhdGE6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUuZ3JvdXAoXCJOb2RlIHdhcyBtb3ZlZFwiKTtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBSUEsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLElBQUkscUJBQVcsQ0FBQyxLQUFLLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQ2xDO1FBRUQsSUFBSSxxQkFBVyxDQUFDLE9BQU8sRUFBRTtZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUVwQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBaEJELDhCQWdCQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXJlbGlhfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yaydcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcbmltcG9ydCBcImpzdHJlZVwiOyAvLyA8LS0tLS0tLS0tLS0tIE1BS0UgU1VSRSBUTyBJTVBPUlQgSlNUUkVFXG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gYXVyZWxpYS51c2UucGx1Z2luKFwiYXVyZWxpYS1qc3RyZWVcIik7ICAvLyA8LS0tLS0gUkVHSVNURVIgVEhFIFBMVUdJTlxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('app.html!text', ['module'], function(module) { module.exports = "<template>\n  <require from=\"aurelia-jstree/styles.css\"></require>\n  <require from=\"jstree/dist/themes/default/style.css\"></require>\n  <au-js-tree settings.bind=\"jstreeConfig\"\n            data.bind=\"data\"\n            selection-changed.bind=\"onSelectionChanged\"\n            node-moved.bind=\"onNodeMoved\"></au-js-tree>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map