import Foundation
import Capacitor
import FBSDKShareKit

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(SocialShare)
public class SocialShare: CAPPlugin {

    @objc func echo(_ call: CAPPluginCall) {
        let url = call.getString("url") ?? ""
        let quote = call.getString("quote") ?? ""
        
        let shareContent = ShareLinkContent()
        shareContent.contentURL = URL.init(string: url)!
        shareContent.quote = quote
        let shareDialog = ShareDialog()
        shareDialog.shareContent = shareContent
        shareDialog.mode = .automatic
        
        do {
            try shareDialog.show()
            call.resolve([
                url: url,
                quote: quote
            ])
        } catch let error {
            call.reject("FB failure", error)
        }
    }
}
