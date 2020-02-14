
  Pod::Spec.new do |s|
    s.name = 'VipcrowdSocialShare'
    s.version = '0.0.1'
    s.summary = 'Share on social sites such as Facebook, Twitter, and LinkedIn'
    s.license = 'MIT'
    s.homepage = 'vipcrowd-social-sharing'
    s.author = 'Pat Murray'
    s.source = { :git => 'vipcrowd-social-sharing', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end
