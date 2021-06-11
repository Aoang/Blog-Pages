/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/about-personal-blog.html","aa4ee75f40995acaf97f791b66a0ea36"],["/2017/http.html","dc97f8b6d820fe37c8c816d37045b555"],["/2017/owasp-1.html","8c7d5117156e44f9718cd720e0fc517a"],["/2017/owasp-2.html","d1aea4af1a79bf5768021754d6804de2"],["/2019/bitwarden.html","56d9cd5d7b2e1fb5f4e614527f8c4f21"],["/2020/search-engine-usage.html","1c619b6042383e560a20b66b3e8fb791"],["/2020/summary-2020.html","c0783d5e9b60b6ce15451ace4de16862"],["/2020/tsct.html","ccc000a2d8d59ba694f31fa3a08ceaee"],["/2021/kayabuki-no-yane-ga-akikaze-ni-kowasa-reta-koto-o-utau.html","8ce065f77ee963c811972b4e7011bcdc"],["/404.html","b998b816dce2afa036d473e0e6e71a08"],["/about.html","337a84cfd6597dcf99a914a2cbca603d"],["/archives/2017/03/index.html","bc9c4b0a76327f67a67212d5bf65473a"],["/archives/2017/04/index.html","bada8e03055dcdcfdb63e71363406748"],["/archives/2017/05/index.html","b07cc7c66703146f1bd4ab71bf714605"],["/archives/2017/index.html","7f5c6091ae2986905e38b91e995c16a9"],["/archives/2019/12/index.html","f9b719d220ceeb9df622534c3a925126"],["/archives/2019/index.html","a90fa2bd6ada36774e37fd519b9e0fcf"],["/archives/2020/06/index.html","1bcf00358e45817267659970a55e5807"],["/archives/2020/08/index.html","91604bf2b722cb9dc19b91a958159255"],["/archives/2020/12/index.html","b15d8c89a0d27d368190d2926428cae5"],["/archives/2020/index.html","cef95001b1934d4a788da1bd9c99a7a4"],["/archives/2021/06/index.html","defd08ba3544a5e7692683a87e29d19e"],["/archives/2021/index.html","83830dd9ddf081b186499c6b9314a9c1"],["/archives/index.html","e2a2505d4b45d560d389f3ab3afdba51"],["/css/highlight/agate.min.css","a3d91c43c0f242f9a603f39c50f3f5a2"],["/css/highlight/an-old-hope.min.css","ea8c4c851556015d950962077f62a77d"],["/css/highlight/androidstudio.min.css","e4652cbc77daedc85fcabcc6dedc809d"],["/css/highlight/arduino-light.min.css","fe60c2a5b51526d2640439f272b90930"],["/css/highlight/arta.min.css","6f10edda00161ee941d802d3549335e5"],["/css/highlight/ascetic.min.css","cb149eac37845082ba8c4ca06a2fe8e7"],["/css/highlight/atelier-cave-dark.min.css","ac5b608e1dfd00f3bd4de7deacd5166c"],["/css/highlight/atelier-cave-light.min.css","20371ac24e873369b301ed5fc112a64c"],["/css/highlight/atelier-dune-dark.min.css","dc346d106507d45b543634c53686c2cb"],["/css/highlight/atelier-dune-light.min.css","ef52cbf25d1fd9a03869b02ee44451ed"],["/css/highlight/atelier-estuary-dark.min.css","be35e6b9203a30b4a670bfd701904874"],["/css/highlight/atelier-estuary-light.min.css","379cf6a31700cd23437ddc5a13e47a6b"],["/css/highlight/atelier-forest-dark.min.css","2bc04ec24eae1cde46b4202338899540"],["/css/highlight/atelier-forest-light.min.css","8a3ab7299fdb232fccc170a2980770c3"],["/css/highlight/atelier-heath-dark.min.css","5b1f67791d72b901dce8fe669cb08d8c"],["/css/highlight/atelier-heath-light.min.css","af32ab3e59bcae29afaa94329df284a0"],["/css/highlight/atelier-lakeside-dark.min.css","e5e2fe9b92d7a595784953b21caa951f"],["/css/highlight/atelier-lakeside-light.min.css","06f3e54050d81151ec4dc9758d8c649e"],["/css/highlight/atelier-plateau-dark.min.css","9c1cf82dad3dab2cb0c2a2dbb8a483ac"],["/css/highlight/atelier-plateau-light.min.css","4ed7513f96c250aa48bc6155dea86005"],["/css/highlight/atelier-savanna-dark.min.css","29751f59b941259ca1c27783f14436a1"],["/css/highlight/atelier-savanna-light.min.css","61a39fd3f27e230f5e0d67276eaf8f99"],["/css/highlight/atelier-seaside-dark.min.css","2f75a1a6eb992c6a233fa73bf19b53e9"],["/css/highlight/atelier-seaside-light.min.css","7f62da405d3f3e24df824130401d986b"],["/css/highlight/atelier-sulphurpool-dark.min.css","326d046e2b458f40a95428cfdaca6a31"],["/css/highlight/atelier-sulphurpool-light.min.css","6a8522b3110e5cc21b12e567e631d8cf"],["/css/highlight/atom-one-dark.min.css","22fc1a9d206e2b5a583da9a9e50eae54"],["/css/highlight/atom-one-light.min.css","a52114e1143ec3a7ac038f492cd1f04e"],["/css/highlight/brown-paper.min.css","1d18f962d83f15f44dc21103158c9973"],["/css/highlight/codepen-embed.min.css","7b18b9e3f5e1b0ae182b4f10a3de1811"],["/css/highlight/color-brewer.min.css","2322a9e6897d2902c6ee3f90bbeda55f"],["/css/highlight/darcula.min.css","7fd4c54418a80c9eb84189794458ee94"],["/css/highlight/dark.min.css","44cefa59f6d5677e34ca75df7513b712"],["/css/highlight/darkula.min.css","7fd4c54418a80c9eb84189794458ee94"],["/css/highlight/default.min.css","4f1264443de9227c96fa58a4bba9fc4a"],["/css/highlight/docco.min.css","25e3c9f575e30bca1b650d810ba09191"],["/css/highlight/dracula.min.css","4de96e648c55aeca1b50510df2a5271a"],["/css/highlight/far.min.css","26f33541fa23d5720433fb5da698fcce"],["/css/highlight/foundation.min.css","0ace50056c53b9612469aea48566441b"],["/css/highlight/github-gist.min.css","4983bb357263cde4abd1d54b4a9bcbb0"],["/css/highlight/github.min.css","034d9352e85e4d9eba23bc7ba04d2dcf"],["/css/highlight/googlecode.min.css","3d1b06feffa66cb0587f0198fc15d72a"],["/css/highlight/grayscale.min.css","f90a87daf51e0b12c0347898e08acf88"],["/css/highlight/gruvbox-dark.min.css","9d480a508542851e8e3372b6bd4f4645"],["/css/highlight/gruvbox-light.min.css","a82470a69a0690832baaca4f2b820dab"],["/css/highlight/hopscotch.min.css","f2e0beef004a2fe0b818e8c7fcf3a982"],["/css/highlight/hybrid.min.css","b9188eebb24a187f9bf5304bcd2a7fa8"],["/css/highlight/idea.min.css","9f0e73d90cdfc2f3732db1fc0b11e4f4"],["/css/highlight/ir-black.min.css","c67a3756f1fe554981c465dd7038dbf5"],["/css/highlight/kimbie.dark.min.css","55aff14552ece703b9a2f2b03676059b"],["/css/highlight/kimbie.light.min.css","7becff468b0d361b11ef6534adb25d43"],["/css/highlight/lightfair.min.css","3ae6d9478a38e541f6a1b93855e086cf"],["/css/highlight/magula.min.css","7c7a6b567d97489c446b0c055a7133aa"],["/css/highlight/mono-blue.min.css","950e77617cb3d77c566dc3847e82dcd8"],["/css/highlight/monokai-sublime.min.css","00ccb224f2bd2f579bd95ed00cf540eb"],["/css/highlight/monokai.min.css","563ce868060f51e0095bce4da229c747"],["/css/highlight/obsidian.min.css","8cf633a24f8c77b2c590dd29d714113d"],["/css/highlight/ocean.min.css","03878813a2c23fecde260b26034b6af7"],["/css/highlight/paraiso-dark.min.css","b4ffd03dcbff4aead7bc9ba39f6148d5"],["/css/highlight/paraiso-light.min.css","aeaae3f9d6fe249e382f78907478e629"],["/css/highlight/pojoaque.min.css","467ef1b92bcf3732d6288f1565972f2b"],["/css/highlight/purebasic.min.css","6ce5cfe97594d452e599f454f827f396"],["/css/highlight/qtcreator_dark.min.css","cf0b5e5795ffee113e7c7280db759b0e"],["/css/highlight/qtcreator_light.min.css","af5954d314b12a4f498cb453dacef20b"],["/css/highlight/railscasts.min.css","7ef35cf78e9dca3d8b74d80260592b1f"],["/css/highlight/rainbow.min.css","6743cfdc24aa781316ac0f1b1233efd4"],["/css/highlight/routeros.min.css","541f1c4f105d53ad320cfd1bfabd52ea"],["/css/highlight/school-book.min.css","22d1d345a3ad0c1e46feb9ec58a4dbdb"],["/css/highlight/shades-of-purple.min.css","39ce58d49df7a9c68b8eb5a9d5efca98"],["/css/highlight/solarized-dark.min.css","4f71e01cbdab8a8546a7ce34c70dc884"],["/css/highlight/solarized-light.min.css","020e6462bdd72a74eb678dd0553398c8"],["/css/highlight/solarized-white.min.css","3ca89fbbe4e1fa3e5057f4c47050d27d"],["/css/highlight/sunburst.min.css","f0e103fc0f31e6ce24116d5f12e80515"],["/css/highlight/tomorrow-night-blue.min.css","87ffbb099d2ec8cdbdf4f161ba0739e0"],["/css/highlight/tomorrow-night-bright.min.css","905c64e496f7ebeb392fcfe821d1af5b"],["/css/highlight/tomorrow-night-eighties.min.css","ae8fa3b7c8868ceb2bc65511bf020ef3"],["/css/highlight/tomorrow-night.min.css","783de1c29c04ebec392d77be0d2fb9e6"],["/css/highlight/tomorrow.min.css","545da62ee478a43df71e036acacc6e73"],["/css/highlight/vs.min.css","64fc5de288e00f6abe075587c136ed8e"],["/css/highlight/vs2015.min.css","6393baf0cad343ba44323ee1bd6736ac"],["/css/highlight/xcode.min.css","92fa290b0bd3776a56c3855c4d9e87cf"],["/css/highlight/xt256.min.css","adc0bbcd8c5c20f06278a197dc0e813b"],["/css/highlight/zenburn.min.css","558958f2af38c629aeb6521e2d7e0ab7"],["/css/style.min.css","93ca93fc0b7f26b852f4ee2ce6d95552"],["/img/default_avatar.png","12c0ae421e8d6e9b4623876a5ab2eb62"],["/img/favicon/android-chrome-192x192.png","d27a0cde24cc0bb630c136810bd3f51e"],["/img/favicon/android-chrome-512x512.png","fe79d25478fc6b31e8a224b3d841acdd"],["/img/favicon/apple-touch-icon.png","be6ab598c144e504a9b6b52411f3078e"],["/img/favicon/favicon-16x16.png","a469c0d5cbdfb3de3887fa270ff85325"],["/img/favicon/favicon-32x32.png","f0c26c37acbe0fde7caea328fd06e537"],["/img/favicon/mstile-150x150.png","73e356c66773c09375c6a5accd01d2a3"],["/img/favicon/safari-pinned-tab.svg","f47cfceb4341401290350e9f637b4e7e"],["/img/http2/http-http2-1.svg","df996e422a6fc50dba363967d1f7136d"],["/img/http2/http-http2-2.svg","f70970cf1ffb51dbccacb43bde5d6430"],["/img/http2/http-http2-3.png","9e31dc2583a4a6b5d3ffb65ac47e7b3d"],["/img/img.png","5c1da82291d7e7b8f5848985c9a78761"],["/img/links/Yc.jpg","c4ee4b5be04c0ad48faf8de46a42b7eb"],["/img/links/atssr.png","2d7597d77fd3f74cb700d77e4e7b4cde"],["/img/links/gracecode.png","bcb59f991db407b4f08bcd4a549adf92"],["/img/links/hanxv.jpg","925fe31b2849c9a0e2325594a29576a2"],["/img/links/hexo.png","90c1a1e76b22046f48b3140f567a3e69"],["/img/links/lostyu.jpg","0cfe1f0dab310b65810eac2a25e23cf6"],["/img/links/rjlipton.png","f9797465cedb90bc270112c571bbe7bb"],["/img/links/sukka.png","a3d9a93113a21ca3b283bc3f68b9414d"],["/img/suka-favicon.png","5622d07d255824085b6d16334761837f"],["/img/suka-lazyload.gif","28d6814f309ea289f847c69cf91194c6"],["/index.html","ed2281d2fa4b35af53fe40eee0ec7cf8"],["/js/hanabi-browser.min.js","03940890202967fc10a9eb18b14c8025"],["/js/local-search.min.js","d8f743cbb291f15ee6c5468d5575f188"],["/js/lsloader.min.js","9afd58babeeda5a78f25a48c2487b36e"],["/lib/hanabi/hanabi.js","d3941e38025e7669331274d843282dfc"],["/lib/hanabi/hanabi.min.js","f7ad42c3eca15ea750218f84a82317fa"],["/lib/prettify/prettify.css","a128a8c786e4cee17ef66342d24c12fe"],["/lib/prettify/prettify.js","f7387b55d316e50f02cfafefb6926843"],["/lib/prettify/themes/atelier-cave-dark.min.css","0477cd2c06d8079ec111283d0033e8f4"],["/lib/prettify/themes/atelier-cave-light.min.css","6e5c97b450f13979e56ee86cd072e734"],["/lib/prettify/themes/atelier-dune-dark.min.css","41de3ba99f17d8eb6d681a6ee51a8591"],["/lib/prettify/themes/atelier-dune-light.min.css","f8f03f7c9657e7d92777460aa76f885e"],["/lib/prettify/themes/atelier-estuary-dark.min.css","bcf6d44540d8466e0c4263a6bdad385c"],["/lib/prettify/themes/atelier-estuary-light.min.css","a3f55207d8d99f4e3eac9601bd626a8a"],["/lib/prettify/themes/atelier-forest-dark.min.css","087e8dd840879d0d24940e8bd711653b"],["/lib/prettify/themes/atelier-forest-light.min.css","974d78fd6eed699503b6d9189ce5b26d"],["/lib/prettify/themes/atelier-heath-dark.min.css","9aaa86586e8faabbc10887d595ab2560"],["/lib/prettify/themes/atelier-heath-light.min.css","f92113adfa8efb7fb1d20b661188a26e"],["/lib/prettify/themes/atelier-lakeside-dark.min.css","f09304c4cd1b6d23daab7ff031e181bc"],["/lib/prettify/themes/atelier-lakeside-light.min.css","6a982baf2d6c77abd72b9eeb253bcd20"],["/lib/prettify/themes/atelier-plateau-dark.min.css","e1d21af5adc9f9ca074fe756e90cd5fb"],["/lib/prettify/themes/atelier-plateau-light.min.css","f68a4635627af17c33dd01b1fe5ff441"],["/lib/prettify/themes/atelier-savanna-dark.min.css","2fb0a2b5eae4cba1bc85f565e0de09c5"],["/lib/prettify/themes/atelier-savanna-light.min.css","f340b5832975bae0fb45ca317f816408"],["/lib/prettify/themes/atelier-seaside-dark.min.css","1003ecbfd698fad53bf35bebbc94cf2b"],["/lib/prettify/themes/atelier-seaside-light.min.css","d40dc15b9220740a6bc53b65d1cba54b"],["/lib/prettify/themes/atelier-sulphurpool-dark.min.css","f0308b63211069a150bdbf25f6456f46"],["/lib/prettify/themes/atelier-sulphurpool-light.min.css","c116dbdb73cddd15a16f70f17e7d6287"],["/lib/prettify/themes/github-v2.min.css","cb8a94fef6e1a4989578e55bfdd88662"],["/lib/prettify/themes/github.min.css","904ad0a35113d17784853e4b35b0aa33"],["/lib/prettify/themes/hemisu-dark.min.css","392933c5db53a9a7b962dd93f1e61bcd"],["/lib/prettify/themes/hemisu-light.min.css","8a1a8034e57b3da04959e97766419e89"],["/lib/prettify/themes/tomorrow-night-blue.min.css","2e039838bca43dd4f813c81d71899c4f"],["/lib/prettify/themes/tomorrow-night-bright.min.css","eb0e7d7b2d2976b74efeaf12bd892f1d"],["/lib/prettify/themes/tomorrow-night-eighties.min.css","e23469b6f6fd71c28fe2243bb077f5c7"],["/lib/prettify/themes/tomorrow-night.min.css","ffc63f59e084c40e7dfbab7a9c2528ce"],["/lib/prettify/themes/tomorrow.min.css","3e44003c0079b54e82b5d330b8de597f"],["/lib/prettify/themes/tranquil-heart.min.css","d2727a1c0aa443f3a0710ab21e3bfbf2"],["/lib/prettify/themes/vibrant-ink.min.css","0c1bdb67c1d33c81f086e8d5b9482ce6"],["/lib/prism/prism-a11y-dark.min.css","68b5ff06ed7d7761da6c8dff8c5723b1"],["/lib/prism/prism-atom-dark.min.css","2215c137b2b91b675ecaffa41faab6fe"],["/lib/prism/prism-base16-ateliersulphurpool.light.min.css","59e258be60c167ea1f409c20a881ec72"],["/lib/prism/prism-cb.min.css","df1e33b5a1e3b9027c252e6284e24af9"],["/lib/prism/prism-coy.min.css","35cfa33d7275cb16f389c78e75b403c9"],["/lib/prism/prism-darcula.min.css","521b0e3c9c98fe1660ddc5ac692476c2"],["/lib/prism/prism-dark.min.css","c5948a202be6700933f78b27409a96c8"],["/lib/prism/prism-default.min.css","e4b0302f0ed46d6fb7198b91e3b45c55"],["/lib/prism/prism-duotone-dark.min.css","7ce221b04f91834004df8b7f74eaf82d"],["/lib/prism/prism-duotone-earth.min.css","99645b8bdbf3831c1df2d781f3fc3925"],["/lib/prism/prism-duotone-forest.min.css","c101cf00be1573dd139adde59f12792f"],["/lib/prism/prism-duotone-light.min.css","6bb52a6ad8f9b263af58e0a6df1a5aed"],["/lib/prism/prism-duotone-sea.min.css","0ad11078798f4a7dd9e955e5513748c1"],["/lib/prism/prism-duotone-space.min.css","20d99449e44431e6f84718814a572ad1"],["/lib/prism/prism-funky.min.css","10fa38844e856ecd139cd127910b921f"],["/lib/prism/prism-ghcolors.min.css","331e19aa0f046fed26a99065c9842551"],["/lib/prism/prism-hopscotch.min.css","939c51db50e094df3edf1f2bc49f3485"],["/lib/prism/prism-line-numbers.min.css","e690a9b079409bfb523cbc2003d14768"],["/lib/prism/prism-okaidia.min.css","ce5ce585d706240122a70346b5f08e59"],["/lib/prism/prism-pojoaque.min.css","387483ce57f749955ecbf89fc050810f"],["/lib/prism/prism-solarizedlight.min.css","af9d2d6d90405c8bc95f96fc2b8040bc"],["/lib/prism/prism-tomorrow.min.css","55439a9bffaf1becd065bd5cd56e9ab1"],["/lib/prism/prism-twilight.min.css","57ba630e40006041dab7275a7b4ae402"],["/lib/prism/prism-vs.min.css","066f2332bef7ef24c2ab5b129f7883fc"],["/lib/prism/prism-xonokai.min.css","17bd6e0285b8165445de3bbc4b174603"],["/lib/spectre/spectre-exp.css","fc9d76b57e27de64333ef80d18520634"],["/lib/spectre/spectre-exp.min.css","40268c1bd17d045316e8afae59e83e64"],["/lib/spectre/spectre-icons.css","fa284d3daf2fdc3df0cd385e7752da9b"],["/lib/spectre/spectre-icons.min.css","2bcc8567321e7ae3d7a2890b12710d3b"],["/lib/spectre/spectre.css","513e7a9c3e1475633261e18e59ae46d6"],["/lib/spectre/spectre.min.css","c7765d30511c21559bd8704293ea179f"],["/lib/vanilla-lazyload/lazyload.min.js","aecfffb30edbaa504f663dd4391fb7eb"],["/links.html","e0c4e86e456f261db28270f61aa99665"],["/project.html","9931daa79b53e0147a9cb91f66995a3f"],["/search.html","4cdfff09e67c37249da90b15b355feb9"],["/sw-register.js","bb9d827d694cbb08c2ad6a99e22f0f0c"],["/tags.html","ad5cdc74e98f64c7779007e49bb3b739"],["/tags/Authentication/index.html","f20d1e2e888c9e0e0ccdc02fe938154f"],["/tags/Bitwarden/index.html","60e569a38300bc777996cb8d2a6ab61d"],["/tags/Google/index.html","c13263546b1e716f35b197a2b2a10054"],["/tags/Injection/index.html","2d18fef0dac014699ae44b392670fd2f"],["/tags/KeePass/index.html","36f08932e0fca8fba57d5ea50b373a31"],["/tags/OWASP/index.html","cf83621fbe385c4285983a65050adb33"],["/tags/Password/index.html","2822b46ee6614afcce79a01257b61cf6"],["/tags/QQ安全中心/index.html","39b5eb26a7646f0331c63a25b4709d16"],["/tags/Serverless/index.html","74487b5cd0fcb7e5cc1cb2f3632e1f33"],["/tags/Session/index.html","2b75777835fd397b08ee58d0983da964"],["/tags/Telegram/index.html","1068333e22cd9533f3d807308913692c"],["/tags/Vercel/index.html","0ee04efabec58d3db6ce50004f9945d6"],["/tags/密码管理/index.html","fa7c74660fac0005d7102c7d998e5592"],["/tags/搜索引擎/index.html","d4fc9ee6c9cde5e21300f7a6fc8c899a"],["/tags/注入/index.html","3006c793d4dbe0cc653379bd25be3a42"],["/tags/网络安全/index.html","14a4eb155d4d55ba6b691f1b5acfb3fd"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
