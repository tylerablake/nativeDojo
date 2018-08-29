import { Component } from '@angular/core';
import { AudioPlayerOptions, AudioRecorderOptions, TNSPlayer, TNSRecorder } from 'nativescript-audio';
import { File, knownFolders } from 'tns-core-modules/file-system';
import * as platform from 'tns-core-modules/platform';
import * as app from 'tns-core-modules/application';


@Component({
    selector: 'AudioSample',
    moduleId: module.id,
    templateUrl: `./audio-sample.component.html`
})
export class AudioSampleComponent {
    //private _recorder: TNSRecorder;
    public isPlaying: boolean;
    public isRecording: boolean;
    public audioMeter = '0';
    public recordedAudioFile: string;
    public currentVolume;
    public audioTrackDuration;
    public remainingDuration; // used to show the remaining time of the audio track
    private _recorder;
    private _player: TNSPlayer;
    private _audioSessionId;
    private _page;
    private _audioUrls: Array<any> = [
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
    private _meterInterval: any;
    //private _slider: Slider;

    constructor() {
        this._recorder = new TNSRecorder();
    }

    public async startRecording(args) {
        try {
          if (!TNSRecorder.CAN_RECORD()) {
            alert('This device cannot record audio.');
            return;
          }
          const audioFolder = knownFolders.currentApp().getFolder('audio');
          console.log(JSON.stringify(audioFolder));
    
          let androidFormat;
          let androidEncoder;
          if (platform.isAndroid) {
            // m4a
            // static constants are not available, using raw values here
            // androidFormat = android.media.MediaRecorder.OutputFormat.MPEG_4;
            androidFormat = 2;
            // androidEncoder = android.media.MediaRecorder.AudioEncoder.AAC;
            androidEncoder = 3;
          }
    
          const recordingPath = `${audioFolder.path}/recording.${this.platformExtension()}`;
    
          const recorderOptions: AudioRecorderOptions = {
            filename: recordingPath,
    
            format: androidFormat,
    
            encoder: androidEncoder,
    
            metering: true,
    
            infoCallback: infoObject => {
              console.log(JSON.stringify(infoObject));
            },
    
            errorCallback: errorObject => {
              console.log(JSON.stringify(errorObject));
            }
          };
    
          this._recorder.start(recorderOptions);
          this.isRecording = true;
          // if (recorderOptions.metering) {
          //   //this._initMeter();
          // }
        } catch (err) {
          this.isRecording = false;
          //this._resetMeter();
          alert(err);
        }
      }

    stopRecording(): void {
        this._recorder.stop();
    }

    private platformExtension() {
        // 'mp3'
        return `${app.android ? 'm4a' : 'caf'}`;
      }

}