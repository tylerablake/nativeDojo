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
            var audioFolder, androidFormat, androidEncoder, recordingPath, recorderOptions, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
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
                        return [4 /*yield*/, this._recorder.start(recorderOptions)];
                    case 1:
                        _a.sent();
                        this.isRecording = true;
                        if (recorderOptions.metering) {
                            //this._initMeter();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        this.isRecording = false;
                        //this._resetMeter();
                        alert(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8tc2FtcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1ZGlvLXNhbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMseURBQXNHO0FBQ3RHLDREQUFrRTtBQUNsRSxvREFBc0Q7QUFDdEQsa0RBQW9EO0FBUXBEO0lBK0JJLDBCQUEwQjtJQUUxQjtRQTdCTyxlQUFVLEdBQUcsR0FBRyxDQUFDO1FBU2hCLGVBQVUsR0FBZTtZQUMvQjtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsR0FBRyxFQUFFLHdCQUF3QjtnQkFDN0IsR0FBRyxFQUFFLHVEQUF1RDthQUM3RDtZQUNEO2dCQUNFLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLEdBQUcsRUFBRSxtQkFBbUI7Z0JBQ3hCLEdBQUcsRUFBRSxxREFBcUQ7YUFDM0Q7WUFDRDtnQkFDRSxJQUFJLEVBQUUsZUFBZTtnQkFDckIsR0FBRyxFQUFFLDZCQUE2QjtnQkFDbEMsR0FBRyxFQUFFLHFEQUFxRDthQUMzRDtTQUNGLENBQUM7UUFLRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksZ0NBQVcsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFWSw2Q0FBYyxHQUEzQixVQUE0QixJQUFJOzs7Ozs7O3dCQUUxQixFQUFFLENBQUMsQ0FBQyxDQUFDLGdDQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUM5QixLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQzs0QkFDMUMsTUFBTSxnQkFBQzt3QkFDVCxDQUFDO3dCQUNLLFdBQVcsR0FBRywwQkFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBRXJDLGFBQWEsU0FBQSxDQUFDO3dCQUNkLGNBQWMsU0FBQSxDQUFDO3dCQUNuQixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs0QkFDdkIsTUFBTTs0QkFDTiw0REFBNEQ7NEJBQzVELG1FQUFtRTs0QkFDbkUsYUFBYSxHQUFHLENBQUMsQ0FBQzs0QkFDbEIsaUVBQWlFOzRCQUNqRSxjQUFjLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQixDQUFDO3dCQUVLLGFBQWEsR0FBTSxXQUFXLENBQUMsSUFBSSxtQkFBYyxJQUFJLENBQUMsaUJBQWlCLEVBQUksQ0FBQzt3QkFFNUUsZUFBZSxHQUF5Qjs0QkFDNUMsUUFBUSxFQUFFLGFBQWE7NEJBRXZCLE1BQU0sRUFBRSxhQUFhOzRCQUVyQixPQUFPLEVBQUUsY0FBYzs0QkFFdkIsUUFBUSxFQUFFLElBQUk7NEJBRWQsWUFBWSxFQUFFLFVBQUEsVUFBVTtnQ0FDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7NEJBQzFDLENBQUM7NEJBRUQsYUFBYSxFQUFFLFVBQUEsV0FBVztnQ0FDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7NEJBQzNDLENBQUM7eUJBQ0YsQ0FBQzt3QkFFRixxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBQTs7d0JBQTNDLFNBQTJDLENBQUM7d0JBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO3dCQUN4QixFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs0QkFDN0Isb0JBQW9CO3dCQUN0QixDQUFDOzs7O3dCQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO3dCQUN6QixxQkFBcUI7d0JBQ3JCLEtBQUssQ0FBQyxLQUFHLENBQUMsQ0FBQzs7Ozs7O0tBRWQ7SUFFSCw0Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sZ0RBQWlCLEdBQXpCO1FBQ0ksUUFBUTtRQUNSLE1BQU0sQ0FBQyxNQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUM7SUFDMUMsQ0FBQztJQWhHTSxvQkFBb0I7UUFMaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1NBQy9DLENBQUM7O09BQ1csb0JBQW9CLENBa0doQztJQUFELDJCQUFDO0NBQUEsQUFsR0QsSUFrR0M7QUFsR1ksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdWRpb1BsYXllck9wdGlvbnMsIEF1ZGlvUmVjb3JkZXJPcHRpb25zLCBUTlNQbGF5ZXIsIFROU1JlY29yZGVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWF1ZGlvJztcbmltcG9ydCB7IEZpbGUsIGtub3duRm9sZGVycyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0nO1xuaW1wb3J0ICogYXMgcGxhdGZvcm0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbic7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdBdWRpb1NhbXBsZScsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogYC4vYXVkaW8tc2FtcGxlLmNvbXBvbmVudC5odG1sYFxufSlcbmV4cG9ydCBjbGFzcyBBdWRpb1NhbXBsZUNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfcmVjb3JkZXI6IFROU1JlY29yZGVyO1xuICAgIHB1YmxpYyBpc1BsYXlpbmc6IGJvb2xlYW47XG4gICAgcHVibGljIGlzUmVjb3JkaW5nOiBib29sZWFuO1xuICAgIHB1YmxpYyBhdWRpb01ldGVyID0gJzAnO1xuICAgIHB1YmxpYyByZWNvcmRlZEF1ZGlvRmlsZTogc3RyaW5nO1xuICAgIHB1YmxpYyBjdXJyZW50Vm9sdW1lO1xuICAgIHB1YmxpYyBhdWRpb1RyYWNrRHVyYXRpb247XG4gICAgcHVibGljIHJlbWFpbmluZ0R1cmF0aW9uOyAvLyB1c2VkIHRvIHNob3cgdGhlIHJlbWFpbmluZyB0aW1lIG9mIHRoZSBhdWRpbyB0cmFja1xuICAgIC8vcHJpdmF0ZSBfcmVjb3JkZXI7XG4gICAgcHJpdmF0ZSBfcGxheWVyOiBUTlNQbGF5ZXI7XG4gICAgcHJpdmF0ZSBfYXVkaW9TZXNzaW9uSWQ7XG4gICAgcHJpdmF0ZSBfcGFnZTtcbiAgICBwcml2YXRlIF9hdWRpb1VybHM6IEFycmF5PGFueT4gPSBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdGaWdodCBDbHViJyxcbiAgICAgICAgcGljOiAnfi9waWNzL2Nhbm9lX2dpcmwuanBlZycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly93d3cubm9pc2VhZGRpY3RzLmNvbS9zYW1wbGVzXzF3NzJiODIwLzI1MTQubXAzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1RvIFRoZSBCYXQgQ2F2ZSEhIScsXG4gICAgICAgIHBpYzogJ34vcGljcy9iZWFycy5qcGVnJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL3d3dy5ub2lzZWFkZGljdHMuY29tL3NhbXBsZXNfMXc3MmI4MjAvMTcubXAzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ01hcmxvbiBCcmFuZG8nLFxuICAgICAgICBwaWM6ICd+L3BpY3Mvbm9ydGhlcm5fbGlnaHRzLmpwZWcnLFxuICAgICAgICB1cmw6ICdodHRwOi8vd3d3Lm5vaXNlYWRkaWN0cy5jb20vc2FtcGxlc18xdzcyYjgyMC80Ny5tcDMnXG4gICAgICB9XG4gICAgXTtcbiAgICBwcml2YXRlIF9tZXRlckludGVydmFsOiBhbnk7XG4gICAgLy9wcml2YXRlIF9zbGlkZXI6IFNsaWRlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9yZWNvcmRlciA9IG5ldyBUTlNSZWNvcmRlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzdGFydFJlY29yZGluZyhhcmdzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFUTlNSZWNvcmRlci5DQU5fUkVDT1JEKCkpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdUaGlzIGRldmljZSBjYW5ub3QgcmVjb3JkIGF1ZGlvLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBhdWRpb0ZvbGRlciA9IGtub3duRm9sZGVycy5jdXJyZW50QXBwKCkuZ2V0Rm9sZGVyKCdhdWRpbycpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGF1ZGlvRm9sZGVyKSk7XG4gICAgXG4gICAgICAgICAgbGV0IGFuZHJvaWRGb3JtYXQ7XG4gICAgICAgICAgbGV0IGFuZHJvaWRFbmNvZGVyO1xuICAgICAgICAgIGlmIChwbGF0Zm9ybS5pc0FuZHJvaWQpIHtcbiAgICAgICAgICAgIC8vIG00YVxuICAgICAgICAgICAgLy8gc3RhdGljIGNvbnN0YW50cyBhcmUgbm90IGF2YWlsYWJsZSwgdXNpbmcgcmF3IHZhbHVlcyBoZXJlXG4gICAgICAgICAgICAvLyBhbmRyb2lkRm9ybWF0ID0gYW5kcm9pZC5tZWRpYS5NZWRpYVJlY29yZGVyLk91dHB1dEZvcm1hdC5NUEVHXzQ7XG4gICAgICAgICAgICBhbmRyb2lkRm9ybWF0ID0gMjtcbiAgICAgICAgICAgIC8vIGFuZHJvaWRFbmNvZGVyID0gYW5kcm9pZC5tZWRpYS5NZWRpYVJlY29yZGVyLkF1ZGlvRW5jb2Rlci5BQUM7XG4gICAgICAgICAgICBhbmRyb2lkRW5jb2RlciA9IDM7XG4gICAgICAgICAgfVxuICAgIFxuICAgICAgICAgIGNvbnN0IHJlY29yZGluZ1BhdGggPSBgJHthdWRpb0ZvbGRlci5wYXRofS9yZWNvcmRpbmcuJHt0aGlzLnBsYXRmb3JtRXh0ZW5zaW9uKCl9YDtcbiAgICBcbiAgICAgICAgICBjb25zdCByZWNvcmRlck9wdGlvbnM6IEF1ZGlvUmVjb3JkZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgZmlsZW5hbWU6IHJlY29yZGluZ1BhdGgsXG4gICAgXG4gICAgICAgICAgICBmb3JtYXQ6IGFuZHJvaWRGb3JtYXQsXG4gICAgXG4gICAgICAgICAgICBlbmNvZGVyOiBhbmRyb2lkRW5jb2RlcixcbiAgICBcbiAgICAgICAgICAgIG1ldGVyaW5nOiB0cnVlLFxuICAgIFxuICAgICAgICAgICAgaW5mb0NhbGxiYWNrOiBpbmZvT2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoaW5mb09iamVjdCkpO1xuICAgICAgICAgICAgfSxcbiAgICBcbiAgICAgICAgICAgIGVycm9yQ2FsbGJhY2s6IGVycm9yT2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3JPYmplY3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgIFxuICAgICAgICAgIGF3YWl0IHRoaXMuX3JlY29yZGVyLnN0YXJ0KHJlY29yZGVyT3B0aW9ucyk7XG4gICAgICAgICAgdGhpcy5pc1JlY29yZGluZyA9IHRydWU7XG4gICAgICAgICAgaWYgKHJlY29yZGVyT3B0aW9ucy5tZXRlcmluZykge1xuICAgICAgICAgICAgLy90aGlzLl9pbml0TWV0ZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHRoaXMuaXNSZWNvcmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAvL3RoaXMuX3Jlc2V0TWV0ZXIoKTtcbiAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICBzdG9wUmVjb3JkaW5nKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9yZWNvcmRlci5zdG9wKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybUV4dGVuc2lvbigpIHtcbiAgICAgICAgLy8gJ21wMydcbiAgICAgICAgcmV0dXJuIGAke2FwcC5hbmRyb2lkID8gJ200YScgOiAnY2FmJ31gO1xuICAgICAgfVxuXG59Il19