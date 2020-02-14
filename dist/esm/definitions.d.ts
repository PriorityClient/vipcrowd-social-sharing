declare module "@capacitor/core" {
    interface PluginRegistry {
        SocialSharing: SocialSharingPlugin;
    }
}
export interface SocialSharingPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
