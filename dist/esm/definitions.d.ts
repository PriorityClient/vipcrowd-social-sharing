declare module "@capacitor/core" {
    interface PluginRegistry {
        SocialShare: SocialSharePlugin;
    }
}
export interface SocialSharePlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
