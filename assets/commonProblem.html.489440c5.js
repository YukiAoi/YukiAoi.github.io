import{_ as n,a as s}from"./app.51f47d0e.js";const a={},p=s(`<h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h2><h3 id="\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D" aria-hidden="true">#</a> \u6C34\u5E73\u5782\u76F4\u5C45\u4E2D</h3><h4 id="\u6C34\u5E73\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u6C34\u5E73\u5C45\u4E2D" aria-hidden="true">#</a> \u6C34\u5E73\u5C45\u4E2D</h4><ol><li>\u884C\u5185\u5143\u7D20\uFF1A<code>text-align: center</code></li><li>\u786E\u5B9A\u5BBD\u5EA6\u7684\u5757\u7EA7\u5143\u7D20</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* width\u548Cmargin\u5B9E\u73B0 */</span>
<span class="token selector">.a</span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto
<span class="token punctuation">}</span>
<span class="token comment">/* \u7EDD\u5BF9\u5B9A\u4F4D\u548Cmargin-left */</span>
<span class="token selector">.father</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>\u7236width - \u5B50width\uFF09/2
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="3"><li>\u5BBD\u5EA6\u672A\u77E5\u7684\u5757\u7EA7\u5143\u7D20</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* table\u6807\u7B7E\u914D\u5408margin\u5DE6\u53F3auto\u5B9E\u73B0\u6C34\u5E73\u5C45\u4E2D */</span>
<span class="token selector">table</span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u6216\u8005\u4FEE\u6539display\u4E3Atable */</span>
<span class="token selector">.a</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>table<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* inline-block\u52A0text-align:center */</span>
<span class="token selector">.a</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u7EDD\u5BF9\u5B9A\u4F4D\u52A0translate */</span>
<span class="token selector">.a</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
  <span class="token property">translate</span><span class="token punctuation">:</span>50% 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* flex\u5E03\u5C40 */</span>
<span class="token selector">.a</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h4 id="\u5782\u76F4\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u5782\u76F4\u5C45\u4E2D" aria-hidden="true">#</a> \u5782\u76F4\u5C45\u4E2D</h4><ol><li>\u5355\u884C\u6587\u5B57\uFF1A<code>line-height</code> = <code>height</code></li><li>\u76F8\u5BF9\u5B9A\u4F4D\u52A0\u7EDD\u5BF9\u5B9A\u4F4D</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.father</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u6216\u8005\u5B50\u7EA7\u4F7F\u7528translate */</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
  <span class="token property">translate</span><span class="token punctuation">:</span>50% 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol start="3"><li>flex\u52A0margin</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.father</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="4"><li>table\u5E03\u5C40</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* vertical-align: middle\u4F7F\u7528\u7684\u524D\u63D0\u6761\u4EF6\u662F\u5185\u8054\u5143\u7D20\u4EE5\u53CAdisplay\u503C\u4E3Atable-cell\u7684\u5143\u7D20 */</span>
<span class="token selector">.father</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>table<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span>middle
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u9690\u85CF" tabindex="-1"><a class="header-anchor" href="#\u9690\u85CF" aria-hidden="true">#</a> \u9690\u85CF</h3><ol><li><code>opacity\uFF1A0</code> \u8BE5\u5143\u7D20\u9690\u85CF\u8D77\u6765\u4E86\uFF0C\u4F46\u4E0D\u4F1A\u6539\u53D8\u9875\u9762\u5E03\u5C40\u3002\u5982\u679C\u8BE5\u5143\u7D20\u5DF2\u7ECF\u7ED1\u5B9A\u4E00\u4E9B\u4E8B\u4EF6\uFF0C\u5982click\u4E8B\u4EF6\uFF0C\u90A3\u4E48\u70B9\u51FB\u8BE5\u533A\u57DF\uFF0C\u4E5F\u80FD\u89E6\u53D1\u70B9\u51FB\u4E8B\u4EF6</li><li><code>visibility\uFF1Ahidden</code> \u8BE5\u5143\u7D20\u9690\u85CF\u8D77\u6765\u4E86\uFF0C\u4F46\u4E0D\u4F1A\u6539\u53D8\u9875\u9762\u5E03\u5C40\uFF0C\u4F46\u662F\u4E0D\u4F1A\u89E6\u53D1\u8BE5\u5143\u7D20\u5DF2 \u7ECF\u7ED1\u5B9A\u7684\u4E8B\u4EF6\uFF0C\u5728\u6587\u6863\u5E03\u5C40\u4E2D\u4ECD\u4FDD\u7559\u539F\u6765\u7684\u7A7A\u95F4\uFF08\u91CD\u7ED8\uFF09</li><li><code>display\uFF1Anone</code> \u8BE5\u5143\u7D20\u5728\u9875\u9762\u4E2D\u4E0D\u5B58\u5728\uFF0C\u5E76\u4E14\u4F1A\u6539\u53D8\u9875\u9762\u5E03\u5C40\uFF0C\u5728\u6587\u6863\u5E03\u5C40\u4E2D\u4E0D\u518D\u5206\u914D\u7A7A\u95F4\uFF08\u56DE\u6D41+\u91CD\u7ED8\uFF09</li></ol><h3 id="\u4E09\u89D2\u7B26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u4E09\u89D2\u7B26\u53F7" aria-hidden="true">#</a> \u4E09\u89D2\u7B26\u53F7</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div:after</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
  <span class="token property">border-right</span><span class="token punctuation">:</span> 100px solid transparent<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 100px solid #ff0<span class="token punctuation">;</span>
  <span class="token property">border-left</span><span class="token punctuation">:</span> 100px solid transparent<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 100px solid transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u6E05\u9664\u6D6E\u52A8" tabindex="-1"><a class="header-anchor" href="#\u6E05\u9664\u6D6E\u52A8" aria-hidden="true">#</a> \u6E05\u9664\u6D6E\u52A8</h3><ol><li>\u6DFB\u52A0\u989D\u5916\u6807\u7B7E</li></ol><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u6DFB\u52A0\u989D\u5916\u6807\u7B7E\u5E76\u4E14\u6DFB\u52A0clear\u5C5E\u6027 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">clear</span><span class="token punctuation">:</span>both</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u4E5F\u53EF\u4EE5\u52A0\u4E00\u4E2Abr\u6807\u7B7E --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2"><li>\u7236\u7EA7\u6DFB\u52A0overflow\u5C5E\u6027\uFF0C\u6216\u8005\u8BBE\u7F6E\u9AD8\u5EA6</li><li>\u5EFA\u7ACB\u4F2A\u7C7B\u9009\u62E9\u5668\u6E05\u9664\u6D6E\u52A8</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.parent:after</span><span class="token punctuation">{</span>
  <span class="token comment">/* \u8BBE\u7F6E\u6DFB\u52A0\u5B50\u5143\u7D20\u7684\u5185\u5BB9\u662F\u7A7A */</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">/* \u8BBE\u7F6E\u6DFB\u52A0\u5B50\u5143\u7D20\u4E3A\u5757\u7EA7\u5143\u7D20 */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token comment">/* \u8BBE\u7F6E\u6DFB\u52A0\u7684\u5B50\u5143\u7D20\u7684\u9AD8\u5EA60 */</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token comment">/* \u8BBE\u7F6E\u6DFB\u52A0\u5B50\u5143\u7D20\u770B\u4E0D\u89C1 */</span>
  <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token comment">/* \u8BBE\u7F6Eclear\uFF1Aboth */</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,23);function e(t,l){return p}var o=n(a,[["render",e]]);export{o as default};
