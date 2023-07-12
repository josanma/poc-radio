import {Component} from '@angular/core';
import {Media, MediaObject} from "@awesome-cordova-plugins/media/ngx";
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  mediaObject!: MediaObject;
  isPlaying = false;

  constructor(private platform: Platform, private media: Media) {
    platform.ready().then(() => {
      this.createMediaObject();
    });
  }

  createMediaObject() {
    this.mediaObject = this.media.create('https://streaming.comunicacioneschile.net/8002/;');
    this.mediaObject.onSuccess.subscribe(() => console.log('Action is successful'));
    this.mediaObject.onError.subscribe(error => console.log('Error!', error));
    this.playAudio();
  }

  playAudio() {
    this.isPlaying = true;
    this.mediaObject.play();
  }

  pauseAudio() {
    this.isPlaying = false;
    this.mediaObject.pause();
  }
}
