import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  mediaObject!: MediaObject;

  constructor(private platform: Platform, private media: Media) {
    platform.ready().then(() => {
      this.createMediaObject();
    });
  }

  createMediaObject() {
    console.log('createMediaObject')
    this.mediaObject = this.media.create('https://streaming.comunicacioneschile.net/8002/;');
    this.mediaObject.onSuccess.subscribe(() => console.log('Action is successful'));
    this.mediaObject.onError.subscribe(error => console.log('Error!', error));
    this.mediaObject.play()
  }

  playAudio() {
    console.log('playAudio')
    this.mediaObject.play();
  }

}
