define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            var _this = this;
            this.jstreeConfig = {
                core: {
                    multiple: false
                },
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
                debugger;
                console.group("Selection was changed");
                console.log(_this);
                console.log(e);
                console.log(data);
                console.groupEnd();
            };
        }
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1lBQUEsaUJBbURDO1lBbERRLGlCQUFZLEdBQUc7Z0JBQ3BCLElBQUksRUFBRTtvQkFDSixRQUFRLEVBQUUsS0FBSztpQkFDaEI7YUFDRixDQUFBO1lBRU0sU0FBSSxHQUFHO2dCQUNaO29CQUNFLElBQUksRUFBRSxhQUFhO29CQUNuQixLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO29CQUN2QixRQUFRLEVBQUUsSUFBSTtvQkFDZCxRQUFRLEVBQUU7d0JBQ1I7NEJBQ0UsSUFBSSxFQUFFLFFBQVE7NEJBQ2QsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTs0QkFDekIsSUFBSSxFQUFFLGFBQWE7eUJBQ3BCO3dCQUNEOzRCQUNFLElBQUksRUFBRSxRQUFROzRCQUNkLElBQUksRUFBRSxhQUFhO3lCQUNwQjt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsV0FBVzs0QkFDakIsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs0QkFDeEIsSUFBSSxFQUFFLGVBQWU7NEJBQ3JCLFFBQVEsRUFBRTtnQ0FDUjtvQ0FDRSxJQUFJLEVBQUUsUUFBUTtvQ0FDZCxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO29DQUN6QixJQUFJLEVBQUUsYUFBYTtpQ0FDcEI7Z0NBQ0Q7b0NBQ0UsSUFBSSxFQUFFLFFBQVE7b0NBQ2QsSUFBSSxFQUFFLGFBQWE7aUNBQ3BCOzZCQUFDOzRCQUVKLFFBQVEsRUFBRSxJQUFJO3lCQUNmO3FCQUNGO2lCQUNGO2FBQ0YsQ0FBQztZQUVGLHVCQUFrQixHQUFHLFVBQUMsQ0FBb0IsRUFBRSxJQUFTO2dCQUNuRCxRQUFRLENBQUM7Z0JBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxDQUFDO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQixDQUFDLENBQUE7UUFDSCxDQUFDO1FBQUQsVUFBQztJQUFELENBbkRBLEFBbURDLElBQUE7SUFuRFksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHB1YmxpYyBqc3RyZWVDb25maWcgPSB7XG4gICAgY29yZToge1xuICAgICAgbXVsdGlwbGU6IGZhbHNlXG4gICAgfSxcbiAgfVxuXG4gIHB1YmxpYyBkYXRhID0gW1xuICAgIHtcbiAgICAgIHRleHQ6IFwiUm9vdCBmb2xkZXJcIixcbiAgICAgIHN0YXRlOiB7IG9wZW5lZDogdHJ1ZSB9LFxuICAgICAgaXNGb2xkZXI6IHRydWUsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJGaWxlIDFcIixcbiAgICAgICAgICBzdGF0ZTogeyBzZWxlY3RlZDogdHJ1ZSB9LFxuICAgICAgICAgIGljb246IFwianN0cmVlLWZpbGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJGaWxlIDJcIixcbiAgICAgICAgICBpY29uOiBcImpzdHJlZS1maWxlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiU3ViZm9sZGVyXCIsXG4gICAgICAgICAgc3RhdGU6IHsgb3BlbmVkOiBmYWxzZSB9LFxuICAgICAgICAgIGljb246IFwianN0cmVlLWZvbGRlclwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiRmlsZSAxXCIsXG4gICAgICAgICAgICAgIHN0YXRlOiB7IHNlbGVjdGVkOiB0cnVlIH0sXG4gICAgICAgICAgICAgIGljb246IFwianN0cmVlLWZpbGVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJGaWxlIDJcIixcbiAgICAgICAgICAgICAgaWNvbjogXCJqc3RyZWUtZmlsZVwiXG4gICAgICAgICAgICB9XVxuICAgICAgICAgICxcbiAgICAgICAgICBpc0ZvbGRlcjogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdO1xuXG4gIG9uU2VsZWN0aW9uQ2hhbmdlZCA9IChlOiBKUXVlcnlFdmVudE9iamVjdCwgZGF0YTogYW55KSA9PiB7XG4gICAgZGVidWdnZXI7XG4gICAgY29uc29sZS5ncm91cChcIlNlbGVjdGlvbiB3YXMgY2hhbmdlZFwiKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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