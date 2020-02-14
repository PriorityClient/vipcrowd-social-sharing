import { WebPlugin } from '@capacitor/core';
import { SocialSharingPlugin } from './definitions';
export declare class SocialSharingPluginWeb extends WebPlugin implements SocialSharingPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const SocialSharing: SocialSharingPluginWeb;
export { SocialSharing };
