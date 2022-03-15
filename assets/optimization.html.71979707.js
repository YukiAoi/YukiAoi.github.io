import{_ as n,a}from"./app.4126fc48.js";const s={},e=a(`<h2 id="\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5316" aria-hidden="true">#</a> \u4F18\u5316</h2><ol><li>\u4F18\u5316<code>Webpack</code>\u7684\u6784\u5EFA\u901F\u5EA6</li></ol><ul><li>\u4F7F\u7528\u9AD8\u7248\u672C\u7684 Webpack \uFF08\u4F7F\u7528webpack4\uFF09</li><li>\u591A\u7EBF\u7A0B/\u591A\u5B9E\u4F8B\u6784\u5EFA\uFF1AHappyPack(\u4E0D\u7EF4\u62A4\u4E86)\u3001thread-loader</li><li>\u7F29\u5C0F\u6253\u5305\u4F5C\u7528\u57DF\uFF1A exclude/include (\u786E\u5B9A loader \u89C4\u5219\u8303\u56F4) resolve.modules \u6307\u660E\u7B2C\u4E09\u65B9\u6A21\u5757\u7684\u7EDD\u5BF9\u8DEF\u5F84 (\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u67E5\u627E) resolve.extensions \u5C3D\u53EF\u80FD\u51CF\u5C11\u540E\u7F00\u5C1D\u8BD5\u7684\u53EF\u80FD\u6027 noParse \u5BF9\u5B8C\u5168\u4E0D\u9700\u8981\u89E3\u6790\u7684\u5E93\u8FDB\u884C\u5FFD\u7565 (\u4E0D\u53BB\u89E3\u6790\u4F46\u4ECD\u4F1A\u6253\u5305\u5230 bundle \u4E2D\uFF0C\u6CE8\u610F\u88AB\u5FFD\u7565\u6389\u7684\u6587\u4EF6\u91CC\u4E0D\u5E94\u8BE5\u5305\u542B import\u3001require\u3001define \u7B49\u6A21\u5757\u5316\u8BED\u53E5) IgnorePlugin (\u5B8C\u5168\u6392\u9664\u6A21\u5757) \u5408\u7406\u4F7F\u7528alias</li><li>\u5145\u5206\u5229\u7528\u7F13\u5B58\u63D0\u5347\u4E8C\u6B21\u6784\u5EFA\u901F\u5EA6\uFF1A babel-loader \u5F00\u542F\u7F13\u5B58 terser-webpack-plugin \u5F00\u542F\u7F13\u5B58 \u4F7F\u7528 cache-loader \u6216\u8005 hard-source-webpack-plugin <strong>\u6CE8\u610F\uFF1Athread-loader \u548C cache-loader \u4E24\u4E2A\u8981\u4E00\u8D77\u4F7F\u7528\u7684\u8BDD\uFF0C\u5148\u653E cache-loader \u63A5\u7740\u662F thread-loader \u6700\u540E\u624D\u662F heavy-loader</strong></li><li>DLL\uFF1A \u4F7F\u7528 DllPlugin \u8FDB\u884C\u5206\u5305\uFF0C\u4F7F\u7528 DllReferencePlugin(\u7D22\u5F15\u94FE\u63A5) \u5BF9 manifest.json \u5F15\u7528\uFF0C\u8BA9\u4E00\u4E9B\u57FA\u672C\u4E0D\u4F1A\u6539\u52A8\u7684\u4EE3\u7801\u5148\u6253\u5305\u6210\u9759\u6001\u8D44\u6E90\uFF0C\u907F\u514D\u53CD\u590D\u7F16\u8BD1\u6D6A\u8D39\u65F6\u95F4</li></ul><ol start="2"><li>\u4F7F\u7528<code>webpack4</code>\u4F18\u5316\u539F\u56E0</li></ol><ul><li>V8\u5E26\u6765\u7684\u4F18\u5316\uFF08for of\u66FF\u4EE3forEach\u3001Map\u548CSet\u66FF\u4EE3Object\u3001includes\u66FF\u4EE3indexOf\uFF09</li><li>\u9ED8\u8BA4\u4F7F\u7528\u66F4\u5FEB\u7684md4 hash\u7B97\u6CD5</li><li>webpacks AST\u53EF\u4EE5\u76F4\u63A5\u4ECEloader\u4F20\u9012\u7ED9AST\uFF0C\u51CF\u5C11\u89E3\u6790\u65F6\u95F4</li><li>\u4F7F\u7528\u5B57\u7B26\u4E32\u65B9\u6CD5\u66FF\u4EE3\u6B63\u5219\u8868\u8FBE\u5F0F</li></ul><ol start="3"><li>\u4F18\u5316<code>Webpack</code>\u6253\u5305\u4F53\u79EF</li></ol><ul><li>\u538B\u7F29\u4EE3\u7801</li><li>\u63D0\u53D6\u9875\u9762\u516C\u5171\u8D44\u6E90</li><li>Tree shaking</li><li>Scope hoisting</li><li>\u56FE\u7247\u538B\u7F29</li><li>\u52A8\u6001Polyfill</li></ul><ol start="4"><li><code>speed-measure-webpack-plugin</code> \u7B80\u79F0 SMP\uFF0C\u5206\u6790\u51FA Webpack \u6253\u5305\u8FC7\u7A0B\u4E2D Loader \u548C Plugin \u7684\u8017\u65F6\uFF0C\u6709\u52A9\u4E8E\u627E\u5230\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u7684\u6027\u80FD\u74F6\u9888</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> TerserPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;terser-webpack-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">TerserPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">parallel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">terserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">ecma</span><span class="token operator">:</span> <span class="token number">6</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,9);function l(p,o){return e}var t=n(s,[["render",l]]);export{t as default};
