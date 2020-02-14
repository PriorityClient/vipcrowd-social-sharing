import { WebPlugin } from '@capacitor/core';
import { SocialSharingPlugin } from './definitions';

export class SocialSharingPluginWeb extends WebPlugin implements SocialSharingPlugin {
  constructor() {
    super({
      name: 'SocialSharing',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const SocialSharing = new SocialSharingPluginWeb();

export { SocialSharing };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(SocialSharing);
