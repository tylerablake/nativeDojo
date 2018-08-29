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
                    // if (recorderOptions.metering) {
                    //   //this._initMeter();
                    // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8tc2FtcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1ZGlvLXNhbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMseURBQXNHO0FBQ3RHLDREQUFrRTtBQUNsRSxvREFBc0Q7QUFDdEQsa0RBQW9EO0FBUXBEO0lBK0JJLDBCQUEwQjtJQUUxQjtRQTdCTyxlQUFVLEdBQUcsR0FBRyxDQUFDO1FBU2hCLGVBQVUsR0FBZTtZQUMvQjtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsR0FBRyxFQUFFLHdCQUF3QjtnQkFDN0IsR0FBRyxFQUFFLHVEQUF1RDthQUM3RDtZQUNEO2dCQUNFLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLEdBQUcsRUFBRSxtQkFBbUI7Z0JBQ3hCLEdBQUcsRUFBRSxxREFBcUQ7YUFDM0Q7WUFDRDtnQkFDRSxJQUFJLEVBQUUsZUFBZTtnQkFDckIsR0FBRyxFQUFFLDZCQUE2QjtnQkFDbEMsR0FBRyxFQUFFLHFEQUFxRDthQUMzRDtTQUNGLENBQUM7UUFLRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksZ0NBQVcsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFWSw2Q0FBYyxHQUEzQixVQUE0QixJQUFJOzs7O2dCQUM1QixJQUFJLENBQUM7b0JBQ0gsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQ0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7d0JBQzFDLE1BQU0sZ0JBQUM7b0JBQ1QsQ0FBQztvQkFDSyxXQUFXLEdBQUcsMEJBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUVyQyxhQUFhLFNBQUEsQ0FBQztvQkFDZCxjQUFjLFNBQUEsQ0FBQztvQkFDbkIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZCLE1BQU07d0JBQ04sNERBQTREO3dCQUM1RCxtRUFBbUU7d0JBQ25FLGFBQWEsR0FBRyxDQUFDLENBQUM7d0JBQ2xCLGlFQUFpRTt3QkFDakUsY0FBYyxHQUFHLENBQUMsQ0FBQztvQkFDckIsQ0FBQztvQkFFSyxhQUFhLEdBQU0sV0FBVyxDQUFDLElBQUksbUJBQWMsSUFBSSxDQUFDLGlCQUFpQixFQUFJLENBQUM7b0JBRTVFLGVBQWUsR0FBeUI7d0JBQzVDLFFBQVEsRUFBRSxhQUFhO3dCQUV2QixNQUFNLEVBQUUsYUFBYTt3QkFFckIsT0FBTyxFQUFFLGNBQWM7d0JBRXZCLFFBQVEsRUFBRSxJQUFJO3dCQUVkLFlBQVksRUFBRSxVQUFBLFVBQVU7NEJBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUMxQyxDQUFDO3dCQUVELGFBQWEsRUFBRSxVQUFBLFdBQVc7NEJBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUMzQyxDQUFDO3FCQUNGLENBQUM7b0JBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUN4QixrQ0FBa0M7b0JBQ2xDLHlCQUF5QjtvQkFDekIsSUFBSTtnQkFDTixDQUFDO2dCQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLHFCQUFxQjtvQkFDckIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNiLENBQUM7Ozs7S0FDRjtJQUVILDRDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTyxnREFBaUIsR0FBekI7UUFDSSxRQUFRO1FBQ1IsTUFBTSxDQUFDLE1BQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQztJQUMxQyxDQUFDO0lBaEdNLG9CQUFvQjtRQUxoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7U0FDL0MsQ0FBQzs7T0FDVyxvQkFBb0IsQ0FrR2hDO0lBQUQsMkJBQUM7Q0FBQSxBQWxHRCxJQWtHQztBQWxHWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1ZGlvUGxheWVyT3B0aW9ucywgQXVkaW9SZWNvcmRlck9wdGlvbnMsIFROU1BsYXllciwgVE5TUmVjb3JkZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYXVkaW8nO1xuaW1wb3J0IHsgRmlsZSwga25vd25Gb2xkZXJzIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbSc7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcbmltcG9ydCAqIGFzIGFwcCBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ0F1ZGlvU2FtcGxlJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBgLi9hdWRpby1zYW1wbGUuY29tcG9uZW50Lmh0bWxgXG59KVxuZXhwb3J0IGNsYXNzIEF1ZGlvU2FtcGxlQ29tcG9uZW50IHtcbiAgICAvL3ByaXZhdGUgX3JlY29yZGVyOiBUTlNSZWNvcmRlcjtcbiAgICBwdWJsaWMgaXNQbGF5aW5nOiBib29sZWFuO1xuICAgIHB1YmxpYyBpc1JlY29yZGluZzogYm9vbGVhbjtcbiAgICBwdWJsaWMgYXVkaW9NZXRlciA9ICcwJztcbiAgICBwdWJsaWMgcmVjb3JkZWRBdWRpb0ZpbGU6IHN0cmluZztcbiAgICBwdWJsaWMgY3VycmVudFZvbHVtZTtcbiAgICBwdWJsaWMgYXVkaW9UcmFja0R1cmF0aW9uO1xuICAgIHB1YmxpYyByZW1haW5pbmdEdXJhdGlvbjsgLy8gdXNlZCB0byBzaG93IHRoZSByZW1haW5pbmcgdGltZSBvZiB0aGUgYXVkaW8gdHJhY2tcbiAgICBwcml2YXRlIF9yZWNvcmRlcjtcbiAgICBwcml2YXRlIF9wbGF5ZXI6IFROU1BsYXllcjtcbiAgICBwcml2YXRlIF9hdWRpb1Nlc3Npb25JZDtcbiAgICBwcml2YXRlIF9wYWdlO1xuICAgIHByaXZhdGUgX2F1ZGlvVXJsczogQXJyYXk8YW55PiA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0ZpZ2h0IENsdWInLFxuICAgICAgICBwaWM6ICd+L3BpY3MvY2Fub2VfZ2lybC5qcGVnJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL3d3dy5ub2lzZWFkZGljdHMuY29tL3NhbXBsZXNfMXc3MmI4MjAvMjUxNC5tcDMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVG8gVGhlIEJhdCBDYXZlISEhJyxcbiAgICAgICAgcGljOiAnfi9waWNzL2JlYXJzLmpwZWcnLFxuICAgICAgICB1cmw6ICdodHRwOi8vd3d3Lm5vaXNlYWRkaWN0cy5jb20vc2FtcGxlc18xdzcyYjgyMC8xNy5tcDMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTWFybG9uIEJyYW5kbycsXG4gICAgICAgIHBpYzogJ34vcGljcy9ub3J0aGVybl9saWdodHMuanBlZycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly93d3cubm9pc2VhZGRpY3RzLmNvbS9zYW1wbGVzXzF3NzJiODIwLzQ3Lm1wMydcbiAgICAgIH1cbiAgICBdO1xuICAgIHByaXZhdGUgX21ldGVySW50ZXJ2YWw6IGFueTtcbiAgICAvL3ByaXZhdGUgX3NsaWRlcjogU2xpZGVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3JlY29yZGVyID0gbmV3IFROU1JlY29yZGVyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN0YXJ0UmVjb3JkaW5nKGFyZ3MpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIVROU1JlY29yZGVyLkNBTl9SRUNPUkQoKSkge1xuICAgICAgICAgICAgYWxlcnQoJ1RoaXMgZGV2aWNlIGNhbm5vdCByZWNvcmQgYXVkaW8uJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGF1ZGlvRm9sZGVyID0ga25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKS5nZXRGb2xkZXIoJ2F1ZGlvJyk7XG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoYXVkaW9Gb2xkZXIpKTtcbiAgICBcbiAgICAgICAgICBsZXQgYW5kcm9pZEZvcm1hdDtcbiAgICAgICAgICBsZXQgYW5kcm9pZEVuY29kZXI7XG4gICAgICAgICAgaWYgKHBsYXRmb3JtLmlzQW5kcm9pZCkge1xuICAgICAgICAgICAgLy8gbTRhXG4gICAgICAgICAgICAvLyBzdGF0aWMgY29uc3RhbnRzIGFyZSBub3QgYXZhaWxhYmxlLCB1c2luZyByYXcgdmFsdWVzIGhlcmVcbiAgICAgICAgICAgIC8vIGFuZHJvaWRGb3JtYXQgPSBhbmRyb2lkLm1lZGlhLk1lZGlhUmVjb3JkZXIuT3V0cHV0Rm9ybWF0Lk1QRUdfNDtcbiAgICAgICAgICAgIGFuZHJvaWRGb3JtYXQgPSAyO1xuICAgICAgICAgICAgLy8gYW5kcm9pZEVuY29kZXIgPSBhbmRyb2lkLm1lZGlhLk1lZGlhUmVjb3JkZXIuQXVkaW9FbmNvZGVyLkFBQztcbiAgICAgICAgICAgIGFuZHJvaWRFbmNvZGVyID0gMztcbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgY29uc3QgcmVjb3JkaW5nUGF0aCA9IGAke2F1ZGlvRm9sZGVyLnBhdGh9L3JlY29yZGluZy4ke3RoaXMucGxhdGZvcm1FeHRlbnNpb24oKX1gO1xuICAgIFxuICAgICAgICAgIGNvbnN0IHJlY29yZGVyT3B0aW9uczogQXVkaW9SZWNvcmRlck9wdGlvbnMgPSB7XG4gICAgICAgICAgICBmaWxlbmFtZTogcmVjb3JkaW5nUGF0aCxcbiAgICBcbiAgICAgICAgICAgIGZvcm1hdDogYW5kcm9pZEZvcm1hdCxcbiAgICBcbiAgICAgICAgICAgIGVuY29kZXI6IGFuZHJvaWRFbmNvZGVyLFxuICAgIFxuICAgICAgICAgICAgbWV0ZXJpbmc6IHRydWUsXG4gICAgXG4gICAgICAgICAgICBpbmZvQ2FsbGJhY2s6IGluZm9PYmplY3QgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShpbmZvT2JqZWN0KSk7XG4gICAgICAgICAgICB9LFxuICAgIFxuICAgICAgICAgICAgZXJyb3JDYWxsYmFjazogZXJyb3JPYmplY3QgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvck9iamVjdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgdGhpcy5fcmVjb3JkZXIuc3RhcnQocmVjb3JkZXJPcHRpb25zKTtcbiAgICAgICAgICB0aGlzLmlzUmVjb3JkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAvLyBpZiAocmVjb3JkZXJPcHRpb25zLm1ldGVyaW5nKSB7XG4gICAgICAgICAgLy8gICAvL3RoaXMuX2luaXRNZXRlcigpO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgdGhpcy5pc1JlY29yZGluZyA9IGZhbHNlO1xuICAgICAgICAgIC8vdGhpcy5fcmVzZXRNZXRlcigpO1xuICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIHN0b3BSZWNvcmRpbmcoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3JlY29yZGVyLnN0b3AoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYXRmb3JtRXh0ZW5zaW9uKCkge1xuICAgICAgICAvLyAnbXAzJ1xuICAgICAgICByZXR1cm4gYCR7YXBwLmFuZHJvaWQgPyAnbTRhJyA6ICdjYWYnfWA7XG4gICAgICB9XG5cbn0iXX0=