import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Post } from './post.model';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCardComponent implements OnInit {

  @Input() post: Post;

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() { }

  onToggle(fieldName: string) {
    this.post[fieldName] = !this.post[fieldName];
  }

  async sharePost() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Share Post',
      buttons: [
        {
          text: 'Facebook',
          icon: 'logo-facebook',
          handler: () => {
            console.log('Share on Facebook');
          }
        },
        {
          text: 'Instagram',
          icon: 'logo-instagram',
          handler: () => {
            console.log('Share on Instagram');
          }
        },
        {
          text: 'WhatsApp',
          icon: 'logo-whatsapp',
          handler: () => {
            console.log('Share on WhatsApp');
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    
    await actionSheet.present();
  }

  async showOptions() {
    const actionSheet = await this.actionSheetController.create({
      header: null,
      buttons: [
        {
          text: 'Copy link',
          handler: () => {
            console.log('Copy link');
          }
        },
        {
          text: 'Share to',
          handler: () => {
            console.log('Share to');
          }
        },
        {
          text: 'Unfollow',
          handler: () => {
            console.log('Unfollow');
          }
        },
        {
          text: 'Mute',
          handler: () => {
            console.log('Mute');
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    
    await actionSheet.present();
  }

}
