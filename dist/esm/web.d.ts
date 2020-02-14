import { WebPlugin } from '@capacitor/core';
import { SocialSharePlugin } from './definitions';
export declare class SocialSharePluginWeb extends WebPlugin implements SocialSharePlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const SocialShare: SocialSharePluginWeb;
export { SocialShare };
