"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_audio_1 = require("nativescript-audio");
var file_system_1 = require("tns-core-modules/file-system");
var platform = require("tns-core-modules/platform");
var app = require("tns-core-modules/application");
var AudioSampleComponent = /** @class */ (function () {
    //private _slider: Slider;
    function AudioSampleComponent() {
        this.audioMeter = '0';
        this._audioUrls = [
            {
                name: 'Fight Club',
                pic: '~/pics/canoe_girl.jpeg',
                url: 'http://www.noiseaddicts.com/samples_1w72b820/2514.mp3'
            },
            {
                name: 'To The Bat Cave!!!',
                pic: '~/pics/bears.jpeg',
                url: 'http://www.noiseaddicts.com/samples_1w72b820/17.mp3'
            },
            {
                name: 'Marlon Brando',
                pic: '~/pics/northern_lights.jpeg',
                url: 'http://www.noiseaddicts.com/samples_1w72b820/47.mp3'
            }
        ];
        this._recorder = new nativescript_audio_1.TNSRecorder();
    }
    AudioSampleComponent.prototype.startRecording = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var audioFolder, androidFormat, androidEncoder, recordingPath, recorderOptions;
            return __generator(this, function (_a) {
                try {
                    if (!nativescript_audio_1.TNSRecorder.CAN_RECORD()) {
                        alert('This device cannot record audio.');
                        return [2 /*return*/];
                    }
                    audioFolder = file_system_1.knownFolders.currentApp().getFolder('audio');
                    console.log(JSON.stringify(audioFolder));
                    androidFormat = void 0;
                    androidEncoder = void 0;
                    if (platform.isAndroid) {
                        // m4a
                        // static constants are not available, using raw values here
                        // androidFormat = android.media.MediaRecorder.OutputFormat.MPEG_4;
                        androidFormat = 2;
                        // androidEncoder = android.media.MediaRecorder.AudioEncoder.AAC;
                        androidEncoder = 3;
                    }
                    recordingPath = audioFolder.path + "/recording." + this.platformExtension();
                    recorderOptions = {
                        filename: recordingPath,
                        format: androidFormat,
                        encoder: androidEncoder,
                        metering: true,
                        infoCallback: function (infoObject) {
                            console.log(JSON.stringify(infoObject));
                        },
                        errorCallback: function (errorObject) {
                            console.log(JSON.stringify(errorObject));
                        }
                    };
                    this._recorder.start(recorderOptions);
                    this.isRecording = true;
                    if (recorderOptions.metering) {
                        //this._initMeter();
                    }
                }
                catch (err) {
                    this.isRecording = false;
                    //this._resetMeter();
                    alert(err);
                }
                return [2 /*return*/];
            });
        });
    };
    AudioSampleComponent.prototype.stopRecording = function () {
        this._recorder.stop();
    };
    AudioSampleComponent.prototype.platformExtension = function () {
        // 'mp3'
        return "" + (app.android ? 'm4a' : 'caf');
    };
    AudioSampleComponent = __decorate([
        core_1.Component({
            selector: 'AudioSample',
            moduleId: module.id,
            templateUrl: "./audio-sample.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], AudioSampleComponent);
    return AudioSampleComponent;
}());
exports.AudioSampleComponent = AudioSampleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8tc2FtcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1ZGlvLXNhbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMseURBQXNHO0FBQ3RHLDREQUFrRTtBQUNsRSxvREFBc0Q7QUFDdEQsa0RBQW9EO0FBUXBEO0lBK0JJLDBCQUEwQjtJQUUxQjtRQTdCTyxlQUFVLEdBQUcsR0FBRyxDQUFDO1FBU2hCLGVBQVUsR0FBZTtZQUMvQjtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsR0FBRyxFQUFFLHdCQUF3QjtnQkFDN0IsR0FBRyxFQUFFLHVEQUF1RDthQUM3RDtZQUNEO2dCQUNFLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLEdBQUcsRUFBRSxtQkFBbUI7Z0JBQ3hCLEdBQUcsRUFBRSxxREFBcUQ7YUFDM0Q7WUFDRDtnQkFDRSxJQUFJLEVBQUUsZUFBZTtnQkFDckIsR0FBRyxFQUFFLDZCQUE2QjtnQkFDbEMsR0FBRyxFQUFFLHFEQUFxRDthQUMzRDtTQUNGLENBQUM7UUFLRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksZ0NBQVcsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFWSw2Q0FBYyxHQUEzQixVQUE0QixJQUFJOzs7O2dCQUM1QixJQUFJLENBQUM7b0JBQ0gsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQ0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7d0JBQzFDLE1BQU0sZ0JBQUM7b0JBQ1QsQ0FBQztvQkFDSyxXQUFXLEdBQUcsMEJBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUVyQyxhQUFhLFNBQUEsQ0FBQztvQkFDZCxjQUFjLFNBQUEsQ0FBQztvQkFDbkIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZCLE1BQU07d0JBQ04sNERBQTREO3dCQUM1RCxtRUFBbUU7d0JBQ25FLGFBQWEsR0FBRyxDQUFDLENBQUM7d0JBQ2xCLGlFQUFpRTt3QkFDakUsY0FBYyxHQUFHLENBQUMsQ0FBQztvQkFDckIsQ0FBQztvQkFFSyxhQUFhLEdBQU0sV0FBVyxDQUFDLElBQUksbUJBQWMsSUFBSSxDQUFDLGlCQUFpQixFQUFJLENBQUM7b0JBRTVFLGVBQWUsR0FBeUI7d0JBQzVDLFFBQVEsRUFBRSxhQUFhO3dCQUV2QixNQUFNLEVBQUUsYUFBYTt3QkFFckIsT0FBTyxFQUFFLGNBQWM7d0JBRXZCLFFBQVEsRUFBRSxJQUFJO3dCQUVkLFlBQVksRUFBRSxVQUFBLFVBQVU7NEJBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUMxQyxDQUFDO3dCQUVELGFBQWEsRUFBRSxVQUFBLFdBQVc7NEJBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUMzQyxDQUFDO3FCQUNGLENBQUM7b0JBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUN4QixFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDN0Isb0JBQW9CO29CQUN0QixDQUFDO2dCQUNILENBQUM7Z0JBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDYixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztvQkFDekIscUJBQXFCO29CQUNyQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsQ0FBQzs7OztLQUNGO0lBRUgsNENBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVPLGdEQUFpQixHQUF6QjtRQUNJLFFBQVE7UUFDUixNQUFNLENBQUMsTUFBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBRSxDQUFDO0lBQzFDLENBQUM7SUFoR00sb0JBQW9CO1FBTGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLCtCQUErQjtTQUMvQyxDQUFDOztPQUNXLG9CQUFvQixDQWtHaEM7SUFBRCwyQkFBQztDQUFBLEFBbEdELElBa0dDO0FBbEdZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXVkaW9QbGF5ZXJPcHRpb25zLCBBdWRpb1JlY29yZGVyT3B0aW9ucywgVE5TUGxheWVyLCBUTlNSZWNvcmRlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hdWRpbyc7XG5pbXBvcnQgeyBGaWxlLCBrbm93bkZvbGRlcnMgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtJztcbmltcG9ydCAqIGFzIHBsYXRmb3JtIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnQXVkaW9TYW1wbGUnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IGAuL2F1ZGlvLXNhbXBsZS5jb21wb25lbnQuaHRtbGBcbn0pXG5leHBvcnQgY2xhc3MgQXVkaW9TYW1wbGVDb21wb25lbnQge1xuICAgIHByaXZhdGUgX3JlY29yZGVyOiBUTlNSZWNvcmRlcjtcbiAgICBwdWJsaWMgaXNQbGF5aW5nOiBib29sZWFuO1xuICAgIHB1YmxpYyBpc1JlY29yZGluZzogYm9vbGVhbjtcbiAgICBwdWJsaWMgYXVkaW9NZXRlciA9ICcwJztcbiAgICBwdWJsaWMgcmVjb3JkZWRBdWRpb0ZpbGU6IHN0cmluZztcbiAgICBwdWJsaWMgY3VycmVudFZvbHVtZTtcbiAgICBwdWJsaWMgYXVkaW9UcmFja0R1cmF0aW9uO1xuICAgIHB1YmxpYyByZW1haW5pbmdEdXJhdGlvbjsgLy8gdXNlZCB0byBzaG93IHRoZSByZW1haW5pbmcgdGltZSBvZiB0aGUgYXVkaW8gdHJhY2tcbiAgICAvL3ByaXZhdGUgX3JlY29yZGVyO1xuICAgIHByaXZhdGUgX3BsYXllcjogVE5TUGxheWVyO1xuICAgIHByaXZhdGUgX2F1ZGlvU2Vzc2lvbklkO1xuICAgIHByaXZhdGUgX3BhZ2U7XG4gICAgcHJpdmF0ZSBfYXVkaW9VcmxzOiBBcnJheTxhbnk+ID0gW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnRmlnaHQgQ2x1YicsXG4gICAgICAgIHBpYzogJ34vcGljcy9jYW5vZV9naXJsLmpwZWcnLFxuICAgICAgICB1cmw6ICdodHRwOi8vd3d3Lm5vaXNlYWRkaWN0cy5jb20vc2FtcGxlc18xdzcyYjgyMC8yNTE0Lm1wMydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdUbyBUaGUgQmF0IENhdmUhISEnLFxuICAgICAgICBwaWM6ICd+L3BpY3MvYmVhcnMuanBlZycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly93d3cubm9pc2VhZGRpY3RzLmNvbS9zYW1wbGVzXzF3NzJiODIwLzE3Lm1wMydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdNYXJsb24gQnJhbmRvJyxcbiAgICAgICAgcGljOiAnfi9waWNzL25vcnRoZXJuX2xpZ2h0cy5qcGVnJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL3d3dy5ub2lzZWFkZGljdHMuY29tL3NhbXBsZXNfMXc3MmI4MjAvNDcubXAzJ1xuICAgICAgfVxuICAgIF07XG4gICAgcHJpdmF0ZSBfbWV0ZXJJbnRlcnZhbDogYW55O1xuICAgIC8vcHJpdmF0ZSBfc2xpZGVyOiBTbGlkZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcmVjb3JkZXIgPSBuZXcgVE5TUmVjb3JkZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RhcnRSZWNvcmRpbmcoYXJncykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghVE5TUmVjb3JkZXIuQ0FOX1JFQ09SRCgpKSB7XG4gICAgICAgICAgICBhbGVydCgnVGhpcyBkZXZpY2UgY2Fubm90IHJlY29yZCBhdWRpby4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgYXVkaW9Gb2xkZXIgPSBrbm93bkZvbGRlcnMuY3VycmVudEFwcCgpLmdldEZvbGRlcignYXVkaW8nKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShhdWRpb0ZvbGRlcikpO1xuICAgIFxuICAgICAgICAgIGxldCBhbmRyb2lkRm9ybWF0O1xuICAgICAgICAgIGxldCBhbmRyb2lkRW5jb2RlcjtcbiAgICAgICAgICBpZiAocGxhdGZvcm0uaXNBbmRyb2lkKSB7XG4gICAgICAgICAgICAvLyBtNGFcbiAgICAgICAgICAgIC8vIHN0YXRpYyBjb25zdGFudHMgYXJlIG5vdCBhdmFpbGFibGUsIHVzaW5nIHJhdyB2YWx1ZXMgaGVyZVxuICAgICAgICAgICAgLy8gYW5kcm9pZEZvcm1hdCA9IGFuZHJvaWQubWVkaWEuTWVkaWFSZWNvcmRlci5PdXRwdXRGb3JtYXQuTVBFR180O1xuICAgICAgICAgICAgYW5kcm9pZEZvcm1hdCA9IDI7XG4gICAgICAgICAgICAvLyBhbmRyb2lkRW5jb2RlciA9IGFuZHJvaWQubWVkaWEuTWVkaWFSZWNvcmRlci5BdWRpb0VuY29kZXIuQUFDO1xuICAgICAgICAgICAgYW5kcm9pZEVuY29kZXIgPSAzO1xuICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICBjb25zdCByZWNvcmRpbmdQYXRoID0gYCR7YXVkaW9Gb2xkZXIucGF0aH0vcmVjb3JkaW5nLiR7dGhpcy5wbGF0Zm9ybUV4dGVuc2lvbigpfWA7XG4gICAgXG4gICAgICAgICAgY29uc3QgcmVjb3JkZXJPcHRpb25zOiBBdWRpb1JlY29yZGVyT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGZpbGVuYW1lOiByZWNvcmRpbmdQYXRoLFxuICAgIFxuICAgICAgICAgICAgZm9ybWF0OiBhbmRyb2lkRm9ybWF0LFxuICAgIFxuICAgICAgICAgICAgZW5jb2RlcjogYW5kcm9pZEVuY29kZXIsXG4gICAgXG4gICAgICAgICAgICBtZXRlcmluZzogdHJ1ZSxcbiAgICBcbiAgICAgICAgICAgIGluZm9DYWxsYmFjazogaW5mb09iamVjdCA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGluZm9PYmplY3QpKTtcbiAgICAgICAgICAgIH0sXG4gICAgXG4gICAgICAgICAgICBlcnJvckNhbGxiYWNrOiBlcnJvck9iamVjdCA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yT2JqZWN0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICB0aGlzLl9yZWNvcmRlci5zdGFydChyZWNvcmRlck9wdGlvbnMpO1xuICAgICAgICAgIHRoaXMuaXNSZWNvcmRpbmcgPSB0cnVlO1xuICAgICAgICAgIGlmIChyZWNvcmRlck9wdGlvbnMubWV0ZXJpbmcpIHtcbiAgICAgICAgICAgIC8vdGhpcy5faW5pdE1ldGVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICB0aGlzLmlzUmVjb3JkaW5nID0gZmFsc2U7XG4gICAgICAgICAgLy90aGlzLl9yZXNldE1ldGVyKCk7XG4gICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgc3RvcFJlY29yZGluZygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVjb3JkZXIuc3RvcCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcGxhdGZvcm1FeHRlbnNpb24oKSB7XG4gICAgICAgIC8vICdtcDMnXG4gICAgICAgIHJldHVybiBgJHthcHAuYW5kcm9pZCA/ICdtNGEnIDogJ2NhZid9YDtcbiAgICAgIH1cblxufSJdfQ==