import{_ as e,a}from"./app.f87454ae.js";const i={},l=a('<h1 id="\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u9898" aria-hidden="true">#</a> \u9762\u8BD5\u9898</h1><h2 id="react-vue-diff\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#react-vue-diff\u7B97\u6CD5" aria-hidden="true">#</a> react vue diff\u7B97\u6CD5</h2><ol><li>\u54CD\u5E94\u5F0F\u6570\u636E\u66F4\u65B0\u540E\uFF0C\u4F1A\u89E6\u53D1Watcher\u7684\u56DE\u8C03\u51FD\u6570\u53BB\u66F4\u65B0\u89C6\u56FE\u3002render\u51FD\u6570\u751F\u6210\u7684\u5C31\u662Fvnode\uFF0Cupdate\u51FD\u6570\u5C31\u662F\u5E26\u7740vnode\u8DD1\u4E00\u6B21patch</li><li>\u5982\u679C\u4E0D\u662F\u76F8\u540C\u8282\u70B9\uFF0C\u76F4\u63A5\u9500\u6BC1\u65E7vnode\uFF0C\u6DFB\u52A0\u65B0vnode</li><li>\u5982\u679C\u662F\u76F8\u540C\u8282\u70B9\uFF0C\u5C3D\u91CF\u590D\u7528</li><li>\u5982\u679C\u65B0vnode\u662F\u6587\u5B57vnode\uFF0C\u76F4\u63A5\u66FF\u6362\u5185\u5BB9</li><li>\u5982\u679C\u4E0D\u662F\uFF0C\u8981\u5BF9\u5B50\u8282\u70B9\u8FDB\u884C\u6BD4\u8F83</li><li>\u6709\u65B0\u8282\u70B9\u5C31\u65B0\u589E\uFF0C\u6709\u65E7\u8282\u70B9\u5C31\u5220\u9664\uFF0C\u5982\u679C\u90FD\u6709\uFF0C\u5C31\u662Fdiff\u7B97\u6CD5\u7684\u8FC7\u7A0B\u4E86</li><li>\u65B0\u65E7\u8282\u70B9\u7684\u9996\u5C3E\u90FD\u4F1A\u6709\u4E00\u4E2A\u6307\u9488\u8FDB\u884C\u6BD4\u8F83\uFF0C\u5E76\u5411\u5185\u90E8\u6536\u7F29\uFF0C\u76F4\u5230\u6CA1\u6709\u8282\u70B9\u53EF\u4EE5\u8FDB\u884C\u6BD4\u8F83</li><li>\u6BD4\u8F83\u65F6\uFF0C\u4F1A\u6709\u4E00\u4E2AsameVnode\u51FD\u6570\uFF0C\u901A\u8FC7key\u6765\u8FDB\u884C\u6BD4\u8F83\uFF0C\u770B\u8282\u70B9\u662F\u5426\u53EF\u7528</li><li>\u5982\u679C\u6709\u4E00\u9879\u547D\u4E2D\uFF0C\u5C31\u9012\u5F52\u7684\u8FDB\u5165patchVnode\u9488\u5BF9\u5355\u4E2Avnode\u7684\u8FC7\u7A0B\uFF0C\u76F4\u5230\u65B0\u65E7\u8282\u70B9\u6709\u4E00\u7AEF\u76F8\u9047\uFF08\u8BF4\u660E\u90FD\u88ABpatch\u8FC7\u4E86\uFF09</li><li>\u5982\u679ColdStartIndex &gt; oldEndIndex\uFF0C\u8BF4\u660E\u65E7\u8282\u70B9\u88ABpatch\u5B8C\u4E86\uFF0C\u9700\u8981\u65B0\u589E</li><li>\u5982\u679CnewStartIndex &gt; newEndIndex\uFF0C\u8BF4\u660E\u65B0\u8282\u70B9\u88ABpatch\u5B8C\u4E86\uFF0C\u9700\u8981\u5220\u9664</li></ol><h2 id="\u7EBF\u4E0A\u8DE8\u57DF" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u4E0A\u8DE8\u57DF" aria-hidden="true">#</a> \u7EBF\u4E0A\u8DE8\u57DF</h2><p>1.jsonp 2.CORS 3.proxy+nginx\u4EE3\u7406</p><h2 id="vuex\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#vuex\u539F\u7406" aria-hidden="true">#</a> vuex\u539F\u7406</h2><ol><li>vuex\u5229\u7528vue\u7684mixin\u6DF7\u5165\u673A\u5236\uFF0C\u5728beforeCreate\u524D\u5F80store\u6CE8\u5165\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u5E76\u6CE8\u518Cstore\u7684\u5F15\u7528\u5C5E\u6027$store</li><li>vuex\u7684state\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u662F\u501F\u52A9\u4E86vue\u7684data\u662F\u54CD\u5E94\u5F0F\uFF0Cgetter\u5219\u662F\u501F\u52A9\u4E86vue\u7684computed\u5B9E\u73B0\u6570\u636E\u76D1\u542C</li></ol><h2 id="vue-router\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#vue-router\u539F\u7406" aria-hidden="true">#</a> vue-router\u539F\u7406</h2><h2 id="https\u548Chttp\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#https\u548Chttp\u533A\u522B" aria-hidden="true">#</a> https\u548Chttp\u533A\u522B</h2><ol><li>http\u662F\u660E\u6587\uFF0Chttps\u6709ssl\u52A0\u5BC6</li><li>https\u9700\u8981\u8BC1\u4E66</li><li>\u7AEF\u53E3\u4E0D\u901A</li><li>\u94FE\u63A5\u65B9\u5F0F\u4E0D\u540C\uFF0Chttp\u662F\u65E0\u72B6\u6001\u7684</li></ol><h2 id="computed\u548Cwatch\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#computed\u548Cwatch\u533A\u522B" aria-hidden="true">#</a> computed\u548Cwatch\u533A\u522B</h2><ol><li>computed\u901A\u5E38\u662F\u591A\u4E2A\u6570\u636E\u5F71\u54CD\u4E00\u4E2A\u6570\u636E\uFF0C\u4E0D\u652F\u6301\u5F02\u6B65\uFF0C\u5E76\u4E14\u6709\u7F13\u5B58\uFF0C\u4F9D\u8D56\u503C\u4E0D\u53D8\u4F1A\u76F4\u63A5\u4F7F\u7528\u7F13\u5B58</li><li>watch\u901A\u5E38\u662F\u4E00\u4E2A\u6570\u636E\u5F71\u54CD\u591A\u4E2A\u6570\u636E\uFF0C\u652F\u6301\u5F02\u6B65</li></ol><h2 id="vue3-teleport" tabindex="-1"><a class="header-anchor" href="#vue3-teleport" aria-hidden="true">#</a> vue3 teleport</h2><ol><li>\u77AC\u79FB\u7EC4\u4EF6\uFF0Cto\u5C5E\u6027\u540E\u9762\u662F\u8981\u77AC\u79FB\u7684\u6807\u7B7E</li><li>disabled\uFF0C\u7981\u7528\u77AC\u79FB\u529F\u80FD</li><li>\u4E0D\u8BBA\u662F\u5426\u77AC\u79FB\uFF0C\u90FD\u53EF\u4EE5\u53D6\u5230teleport\u7684\u5B50\u7EC4\u4EF6\u4E2D\u7684\u6570\u636E</li><li>\u6839\u636Eteleport\u7684\u987A\u5E8F\u8FDB\u884C\u6302\u8F7D</li><li>\u539F\u7406\u5C31\u662F\u5C06teleport\u4E2D\u7684children\u6302\u8F7D\u5230to\u7684DOM\u4E2D</li></ol><h2 id="get\u548Cpost\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#get\u548Cpost\u7684\u533A\u522B" aria-hidden="true">#</a> get\u548Cpost\u7684\u533A\u522B</h2><ol><li>get\u53EA\u8BFB\uFF0Cpost\u53EF\u4EE5\u4FEE\u6539</li><li>get\u7684\u53C2\u6570\u653E\u5728url\u4E2D\uFF0Cpost\u7684\u653E\u5728\u8BF7\u6C42\u4F53\u4E2D</li><li>post\u56DE\u9000\u65F6\u4F1A\u91CD\u65B0\u8BF7\u6C42</li><li>\u6D4F\u89C8\u5668\u4F1A\u4E3B\u52A8\u7F13\u5B58get\u8BF7\u6C42\u5730\u5740</li><li>get\u7684\u8BF7\u6C42\u53C2\u6570\u4F1A\u88AB\u4FDD\u7559\u5728\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\u4E2D</li><li>get\u7684\u53C2\u6570\u6709\u957F\u5EA6\u9650\u5236</li></ol><h2 id="http1\u548Chttp2\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#http1\u548Chttp2\u7684\u533A\u522B" aria-hidden="true">#</a> http1\u548Chttp2\u7684\u533A\u522B</h2><ol><li>http2\u662F\u4E8C\u8FDB\u5236\u4F20\u8F93</li><li>\u5934\u90E8\u538B\u7F29</li><li>\u591A\u8DEF\u590D\u7528</li><li>\u670D\u52A1\u5668\u63A8\u9001</li><li>\u63D0\u9AD8\u5B89\u5168\u6027(https\u57FA\u4E8Ehttp2)</li><li>\u9632\u6B62\u961F\u5934\u963B\u585E</li></ol><h2 id="webpack\u6253\u5305\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#webpack\u6253\u5305\u7B56\u7565" aria-hidden="true">#</a> webpack\u6253\u5305\u7B56\u7565\uFF1A</h2><p>\u641C\u7D22\u65F6\u95F4-\u7F29\u5C0F\u6587\u4EF6\u641C\u7D22\u8303\u56F4\uFF0C\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u7F16\u8BD1\u5DE5\u4F5C \u89E3\u6790\u65F6\u95F4 \u538B\u7F29\u65F6\u95F4 \u4E8C\u6B21\u6253\u5305\u65F6\u95F4</p><p>\u5F00\u542Fthread-loader \u9632\u6B62 webpack\u542F\u52A8\u6162 \u9884\u70ED \u5408\u7406\u4F7F\u7528\u7F13\u5B58 cache-loader\uFF08\u4FDD\u5B58\u548C\u8BFB\u53D6\u7F13\u5B58\u6587\u4EF6\u662F\u5B58\u5728\u65F6\u95F4\u5F00\u9500\u7684\uFF0C\u56E0\u6B64\u53EA\u9488\u5BF9\u76F8\u5BF9\u6765\u8BF4\u5927\u7684loader\uFF09 HardSourceWebpackPlugin \u4F18\u5316\u538B\u7F29\u65F6\u95F4</p><p>\u4F18\u5316loader\u914D\u7F6E\u901A\u8FC7test,include,exclude\u6765\u547D\u4E2D\u9700\u8981\u5E94\u7528\u89C4\u5219\u7684\u6587\u4EF6 \u4F18\u5316 resolve.module \u914D\u7F6Ewebpack\u5BFB\u627E\u7B2C\u4E09\u65B9\u6A21\u5757\u5730\u5740 \u4F18\u5316 resolve.alias \u914D\u7F6E\u522B\u540D\u628A\u539F\u672C\u8DEF\u5F84\u6620\u5C04\u6210\u4E00\u4E2A\u65B0\u7684\u8DEF\u5F84\uFF0C\u51CF\u5C11\u8017\u65F6\u7684\u9012\u5F52\u89E3\u6790</p><h2 id="webpack\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#webpack\u539F\u7406" aria-hidden="true">#</a> webpack\u539F\u7406</h2><ol><li>\u521D\u59CB\u5316\u53C2\u6570\uFF1A\u4ECE\u914D\u7F6E\u6587\u4EF6\u548C Shell \u8BED\u53E5\u4E2D\u8BFB\u53D6\u4E0E\u5408\u5E76\u53C2\u6570\uFF0C\u5F97\u51FA\u6700\u7EC8\u7684\u53C2\u6570\uFF1B</li><li>\u5F00\u59CB\u7F16\u8BD1\uFF1A\u7528\u4E0A\u4E00\u6B65\u5F97\u5230\u7684\u53C2\u6570\u521D\u59CB\u5316 Compiler \u5BF9\u8C61\uFF0C\u52A0\u8F7D\u6240\u6709\u914D\u7F6E\u7684\u63D2\u4EF6\uFF0C\u6267\u884C\u5BF9\u8C61\u7684 run \u65B9\u6CD5\u5F00\u59CB\u6267\u884C\u7F16\u8BD1\uFF1B</li><li>\u786E\u5B9A\u5165\u53E3\uFF1A\u6839\u636E\u914D\u7F6E\u4E2D\u7684 entry \u627E\u51FA\u6240\u6709\u7684\u5165\u53E3\u6587\u4EF6\uFF1B</li><li>\u7F16\u8BD1\u6A21\u5757\uFF1A\u4ECE\u5165\u53E3\u6587\u4EF6\u51FA\u53D1\uFF0C\u8C03\u7528\u6240\u6709\u914D\u7F6E\u7684 Loader \u5BF9\u6A21\u5757\u8FDB\u884C\u7FFB\u8BD1\uFF0C\u518D\u627E\u51FA\u8BE5\u6A21\u5757\u4F9D\u8D56\u7684\u6A21\u5757\uFF0C\u518D\u9012\u5F52\u672C\u6B65\u9AA4\u76F4\u5230\u6240\u6709\u5165\u53E3\u4F9D\u8D56\u7684\u6587\u4EF6\u90FD\u7ECF\u8FC7\u4E86\u672C\u6B65\u9AA4\u7684\u5904\u7406\uFF1B</li><li>\u5B8C\u6210\u6A21\u5757\u7F16\u8BD1\uFF1A\u5728\u7ECF\u8FC7\u7B2C4\u6B65\u4F7F\u7528 Loader \u7FFB\u8BD1\u5B8C\u6240\u6709\u6A21\u5757\u540E\uFF0C\u5F97\u5230\u4E86\u6BCF\u4E2A\u6A21\u5757\u88AB\u7FFB\u8BD1\u540E\u7684\u6700\u7EC8\u5185\u5BB9\u4EE5\u53CA\u5B83\u4EEC\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF1B</li><li>\u8F93\u51FA\u8D44\u6E90\uFF1A\u6839\u636E\u5165\u53E3\u548C\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u7EC4\u88C5\u6210\u4E00\u4E2A\u4E2A\u5305\u542B\u591A\u4E2A\u6A21\u5757\u7684 Chunk\uFF0C\u518D\u628A\u6BCF\u4E2A Chunk \u8F6C\u6362\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u52A0\u5165\u5230\u8F93\u51FA\u5217\u8868\uFF0C\u8FD9\u6B65\u662F\u53EF\u4EE5\u4FEE\u6539\u8F93\u51FA\u5185\u5BB9\u7684\u6700\u540E\u673A\u4F1A\uFF1B</li><li>\u8F93\u51FA\u5B8C\u6210\uFF1A\u5728\u786E\u5B9A\u597D\u8F93\u51FA\u5185\u5BB9\u540E\uFF0C\u6839\u636E\u914D\u7F6E\u786E\u5B9A\u8F93\u51FA\u7684\u8DEF\u5F84\u548C\u6587\u4EF6\u540D\uFF0C\u628A\u6587\u4EF6\u5185\u5BB9\u5199\u5165\u5230\u6587\u4EF6\u7CFB\u7EDF\u3002</li></ol><h2 id="\u4ECE\u8F93\u5165\u4E00\u4E2A-url-\u5730\u5740\u5230\u6D4F\u89C8\u5668\u5B8C\u6210\u6E32\u67D3\u7684\u6574\u4E2A\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u8F93\u5165\u4E00\u4E2A-url-\u5730\u5740\u5230\u6D4F\u89C8\u5668\u5B8C\u6210\u6E32\u67D3\u7684\u6574\u4E2A\u8FC7\u7A0B" aria-hidden="true">#</a> \u4ECE\u8F93\u5165\u4E00\u4E2A URL \u5730\u5740\u5230\u6D4F\u89C8\u5668\u5B8C\u6210\u6E32\u67D3\u7684\u6574\u4E2A\u8FC7\u7A0B</h2><ol><li>\u6D4F\u89C8\u5668\u5730\u5740\u680F\u8F93\u5165 URL \u5E76\u56DE\u8F66</li><li>\u6D4F\u89C8\u5668\u67E5\u627E\u5F53\u524D URL \u662F\u5426\u5B58\u5728\u7F13\u5B58\uFF0C\u5E76\u6BD4\u8F83\u7F13\u5B58\u662F\u5426\u8FC7\u671F</li><li>DNS \u89E3\u6790 URL \u5BF9\u5E94\u7684 IP</li><li>\u6839\u636E IP \u5EFA\u7ACB TCP \u8FDE\u63A5\uFF08\u4E09\u6B21\u63E1\u624B\uFF09</li><li>\u53D1\u9001 http \u8BF7\u6C42</li><li>\u670D\u52A1\u5668\u5904\u7406\u8BF7\u6C42\uFF0C\u6D4F\u89C8\u5668\u63A5\u53D7 HTTP \u54CD\u5E94</li><li>\u6D4F\u89C8\u5668\u89E3\u6790\u5E76\u6E32\u67D3\u9875\u9762</li><li>\u5173\u95ED TCP \u8FDE\u63A5\uFF08\u56DB\u6B21\u63E1\u624B\uFF09</li></ol><h2 id="webpack-plugin-\u548C-loader-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#webpack-plugin-\u548C-loader-\u7684\u533A\u522B" aria-hidden="true">#</a> webpack Plugin \u548C Loader \u7684\u533A\u522B</h2><p>Loader\uFF1A \u7528\u4E8E\u5BF9\u6A21\u5757\u6E90\u7801\u7684\u8F6C\u6362\uFF0Cloader \u63CF\u8FF0\u4E86 webpack \u5982\u4F55\u5904\u7406\u975E javascript \u6A21\u5757\uFF0C\u5E76\u4E14\u5728 build \u4E2D\u5F15\u5165\u8FD9\u4E9B\u4F9D\u8D56\u3002loader \u53EF\u4EE5\u5C06\u6587\u4EF6\u4ECE\u4E0D\u540C\u7684\u8BED\u8A00\uFF08\u5982 TypeScript\uFF09\u8F6C\u6362\u4E3A JavaScript\uFF0C\u6216\u8005\u5C06\u5185\u8054\u56FE\u50CF\u8F6C\u6362\u4E3A data URL\u3002\u6BD4\u5982\u8BF4\uFF1ACSS-Loader\uFF0CStyle-Loader \u7B49\u3002</p><p>Plugin \u76EE\u7684\u5728\u4E8E\u89E3\u51B3 loader \u65E0\u6CD5\u5B9E\u73B0\u7684\u5176\u4ED6\u4E8B,\u5B83\u76F4\u63A5\u4F5C\u7528\u4E8E webpack\uFF0C\u6269\u5C55\u4E86\u5B83\u7684\u529F\u80FD\u3002\u5728 webpack \u8FD0\u884C\u7684\u751F\u547D\u5468\u671F\u4E2D\u4F1A\u5E7F\u64AD\u51FA\u8BB8\u591A\u4E8B\u4EF6\uFF0Cplugin \u53EF\u4EE5\u76D1\u542C\u8FD9\u4E9B\u4E8B\u4EF6\uFF0C\u5728\u5408\u9002\u7684\u65F6\u673A\u901A\u8FC7 webpack \u63D0\u4F9B\u7684 API \u6539\u53D8\u8F93\u51FA\u7ED3\u679C\u3002\u63D2\u4EF6\u7684\u8303\u56F4\u5305\u62EC\uFF0C\u4ECE\u6253\u5305\u4F18\u5316\u548C\u538B\u7F29\uFF0C\u4E00\u76F4\u5230\u91CD\u65B0\u5B9A\u4E49\u73AF\u5883\u4E2D\u7684\u53D8\u91CF\u3002\u63D2\u4EF6\u63A5\u53E3\u529F\u80FD\u6781\u5176\u5F3A\u5927\uFF0C\u53EF\u4EE5\u7528\u6765\u5904\u7406\u5404\u79CD\u5404\u6837\u7684\u4EFB\u52A1\u3002</p>',29);function t(r,d){return l}var o=e(i,[["render",t]]);export{o as default};
