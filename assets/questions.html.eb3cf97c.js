import{a as n}from"./app.281392b5.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<ol><li>vue\u7684router\u4EE5\u53CA\u8DEF\u7531\u5B88\u536B</li><li>\u7BAD\u5934\u51FD\u6570\u7684\u539F\u7406\uFF08\u5E94\u8BE5\u662F\u4E0E\u666E\u901A\u51FD\u6570\u7684\u533A\u522B\uFF09</li></ol><ul><li>\u6CA1\u6709\u81EA\u5DF1\u7684<code>this</code></li><li>\u6CA1\u6709<code>constructor</code></li><li>\u4E0D\u80FD\u901A\u8FC7<code>new</code>\u8C03\u7528\uFF0C\u4E5F\u6CA1\u6709<code>new.target</code></li><li>\u6CA1\u6709<code>arguments</code>\u5BF9\u8C61</li><li><code>call()</code>\uFF0C<code>bind()</code>\u548C<code>apply()</code>\u90FD\u53EA\u4F20\u5165\u4E00\u4E2A\u53C2\u6570</li><li>\u6CA1\u6709<code>\u539F\u578B\u5C5E\u6027</code></li><li>\u4E0D\u80FD\u5F53\u4F5C<code>generator</code>\u51FD\u6570</li></ul><ol><li>promise\u5BF9\u8C61</li><li>\u6570\u7EC4\u53BB\u91CD\u65B9\u6CD5</li></ol><ul><li>Set</li><li>[...new Set(arr)]</li><li>\u53CC\u91CD\u5FAA\u73AF+splice</li><li>\u65B0\u5EFA\u7A7A\u6570\u7EC4\uFF0Cindexof\u5224\u65AD\u662F\u5426\u4E3A-1\uFF0C\u662F\u5C31push\u8FDB\u65B0\u6570\u7EC4</li><li>sort\u6392\u5E8F\uFF0C\u6BD4\u8F83\u76F8\u90BB\u5143\u7D20\u662F\u5426\u76F8\u540C</li><li>\u603B\u7ED3\u4E00\u4E0B\uFF0C\u5C31\u662F\u4E24\u79CD\uFF1A1.\u53CC\u91CD\u5FAA\u73AF\uFF0C2.\u81EA\u8EAB\u952E\u4E0D\u53EF\u91CD\u590D</li></ul><ol><li>\u6570\u7EC4\u67E5\u627E\u5143\u7D20\u65B9\u6CD5</li></ol><ul><li>indexOf\uFF0C\u8FD4\u56DE\u4E0B\u6807\u6216-1</li><li>includes\uFF0C\u8FD4\u56DEboolean</li><li>lastIndexOf\uFF0C\u8FD4\u56DE\uFF08\u6700\u540E\u4E00\u6B21\u51FA\u73B0\u7684\uFF09\u4E0B\u6807\u6216-1</li><li>some\uFF0C\u8FD4\u56DEboolean\uFF08\u662F\u5426\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5143\u7D20\uFF09</li><li>every\uFF0C\u8FD4\u56DEboolean\uFF08\u6240\u6709\u5143\u7D20\u662F\u5426\u7B26\u5408\u6761\u4EF6\uFF09</li><li>filter\uFF0C\u8FD4\u56DE\u7B26\u5408\u6761\u4EF6\u7684\u5143\u7D20\u7EC4\u6210\u7684\u6570\u7EC4</li><li>find\uFF0C\u8FD4\u56DE\u7B26\u5408\u6761\u4EF6\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u6216undefined</li><li>findIndex\uFF0C\u548CindexOf\u4E00\u6837</li></ul><ol><li>\u6570\u7EC4\u5FAA\u73AF\u65B9\u6CD5</li></ol><ul><li>for</li><li>forEach</li><li>map</li><li>forof</li><li>keys\uFF0Cvalues\uFF0Centries\uFF08keys\u662F\u7D22\u5F15\uFF0Cvalues\u662F\u503C\uFF0Centris\u662F\u4E24\u4E2A\u4E00\u8D77\uFF09</li></ul><ol><li>\u5224\u65AD\u6570\u636E\u7C7B\u578B</li></ol><ul><li>typeof\uFF0C\u4E0D\u80FD\u5224\u65ADobject\uFF0Carray\uFF0Cnull\u548Carguments</li><li>instanceof\uFF0C\u4E0D\u80FD\u5224\u65ADstring\uFF0Cnumber\uFF0Cboolean</li><li>object.prototype.toString.call()</li><li>isArray\uFF0CisNAN\u548CisFinite</li></ul><ol><li>promise\u4F18\u7F3A\u70B9</li></ol><ul><li>\u5BF9\u8C61\u7684\u72B6\u6001\u4E0D\u53D7\u5916\u754C\u5F71\u54CD</li><li>\u4E00\u65E6\u72B6\u6001\u6539\u53D8\uFF0C\u5C31\u4E0D\u4F1A\u518D\u53D8\uFF0C\u4EFB\u4F55\u65F6\u5019\u90FD\u53EF\u4EE5\u5F97\u5230\u8FD9\u4E2A\u7ED3\u679C</li><li>\u65E0\u6CD5\u53D6\u6D88Promise</li><li>\u5982\u679C\u4E0D\u8BBE\u7F6E\u56DE\u8C03\u51FD\u6570\uFF0CPromise\u5185\u90E8\u629B\u51FA\u7684\u9519\u8BEF\uFF0C\u4E0D\u4F1A\u53CD\u5E94\u5230\u5916\u90E8</li><li>\u5904\u4E8Epending\u72B6\u6001\u65F6\uFF0C\u65E0\u6CD5\u5F97\u77E5\u76EE\u524D\u8FDB\u5C55\u5230\u54EA\u4E00\u4E2A\u9636\u6BB5</li></ul><ol><li><code>&lt;script&gt;&lt;script async&gt;&lt;script defer&gt;</code>\u7684\u533A\u522B</li></ol><ul><li><code>async</code>\u548C<code>defer</code>\u90FD\u4E0D\u4F1A\u963B\u585E\u9875\u9762\u6E32\u67D3</li><li><code>async</code>\u7684\u52A0\u8F7D\u987A\u5E8F\u662F\u5148\u52A0\u8F7D\u5B8C\u6210\u7684\u5148\u6267\u884C\uFF0C\u4E00\u822C\u7528\u4E8E\u72EC\u7ACB\u811A\u672C</li><li><code>defer</code>\u662F\u6309\u7167\u4ED6\u4EEC\u5728\u6587\u6863\u4E2D\u7684\u987A\u5E8F\u52A0\u8F7D\uFF0C\u4E00\u822C\u7528\u4E8E\u6574\u4E2Adom\u7684\u811A\u672C</li></ul><ol><li>\u539F\u578B\u7EE7\u627F</li></ol><ul><li>\u5B9A\u4E49\u65B0\u7684\u6784\u9020\u51FD\u6570\uFF0C\u5E76\u5728\u5185\u90E8\u7528<code>call()</code>\u8C03\u7528\u5E0C\u671B\u7EE7\u627F\u7684\u6784\u9020\u51FD\u6570\uFF0C\u5E76\u7ED1\u5B9A<code>this</code></li><li>\u501F\u52A9\u4E00\u4E2A\u4E2D\u95F4\u51FD\u6570\u6765\u5B9E\u73B0\u539F\u578B\u94FE\u7EE7\u627F</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">inherits</span><span class="token punctuation">(</span><span class="token parameter">Child<span class="token punctuation">,</span> Parent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token function-variable function">F</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
  <span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Child</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Child<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>\u7EE7\u7EED\u5728\u65B0\u7684\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u4E0A\u5B9A\u4E49\u65B0\u65B9\u6CD5</li></ul><ol><li>arguments</li></ol><ul><li>\u7B80\u5355\u8BF4\u5C31\u662F\u6240\u6709\uFF08\u975E\u7BAD\u5934\uFF09\u51FD\u6570\u7684\u5B9E\u53C2\uFF08\u662F\u4E2A\u7C7B\u6570\u7EC4\uFF0C\u5373arguments\uFF09</li><li>\u9664\u4E86length\u548C\u7D22\u5F15\u5143\u7D20\u5916\u6CA1\u6709\u4EFB\u4F55array\u5C5E\u6027</li><li>\u53EF\u4EE5\u88AB\u8F6C\u6362\u4E3Aarray<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token constant">ES6</span> <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li>typeof\u8FD4\u56DEobject</li></ul><ol><li>\u62D6\u52A8\u7A97\u53E3\u4FDD\u6301\u6B63\u65B9\u5F62</li></ol><ul><li>\u4F7F\u7528vh</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>  <span class="token selector">.a</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>100vh<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>\u4F7F\u7528\u5782\u76F4\u65B9\u5411\u7684padding</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.a</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>\u4F7F\u7528\u4F2A\u5143\u7D20\u7684margin-top</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.a</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
  &lt;!-- BFC\u95EE\u9898\uFF0C\u6E05\u9664\u6D6E\u52A8 --&gt;
  <span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.a:after</span><span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span><span class="token property">block</span><span class="token punctuation">:</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,27);function l(e,t){return p}var i=s(a,[["render",l]]);export{i as default};
