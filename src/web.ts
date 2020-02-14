import { WebPlugin } from '@capacitor/core';
import { SocialSharePlugin } from './definitions';

export class SocialSharePluginWeb extends WebPlugin implements SocialSharePlugin {
  constructor() {
    super({
      name: 'SocialShare',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const SocialShare = new SocialSharePluginWeb();

export { SocialShare };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(SocialShare);
