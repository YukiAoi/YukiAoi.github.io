import{_ as t,r as o,o as c,c as l,b as n,d as p,F as r,a as e,e as s}from"./app.4126fc48.js";const i={},u=e(`<h2 id="\u624B\u5199webpack\u7CFB\u5217" tabindex="-1"><a class="header-anchor" href="#\u624B\u5199webpack\u7CFB\u5217" aria-hidden="true">#</a> \u624B\u5199webpack\u7CFB\u5217</h2><h3 id="\u624B\u5199webpack-loader" tabindex="-1"><a class="header-anchor" href="#\u624B\u5199webpack-loader" aria-hidden="true">#</a> \u624B\u5199webpack loader</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>loader\u4ECE\u672C\u8D28\u4E0A\u6765\u8BF4\u5176\u5B9E\u5C31\u662F\u4E00\u4E2Anode\u6A21\u5757\u3002
\u76F8\u5F53\u4E8E\u4E00\u53F0\u69A8\u6C41\u673A(loader)\u5C06\u76F8\u5173\u7C7B\u578B\u7684\u6587\u4EF6\u4EE3\u7801(code)\u7ED9\u5B83\u3002
\u6839\u636E\u6211\u4EEC\u8BBE\u7F6E\u7684\u89C4\u5219\uFF0C\u7ECF\u8FC7\u5B83\u7684\u4E00\u7CFB\u5217\u52A0\u5DE5\u540E\u8FD8\u7ED9\u6211\u4EEC\u52A0\u5DE5\u597D\u7684\u679C\u6C41(code)\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>loader</code>\u7F16\u5199\u539F\u5219\uFF1A</p><ul><li>\u5355\u4E00\u539F\u5219: \u6BCF\u4E2A<code>Loader</code>\u53EA\u505A\u4E00\u4EF6\u4E8B</li><li>\u94FE\u5F0F\u8C03\u7528: <code>Webpack</code>\u4F1A\u6309\u987A\u5E8F\u94FE\u5F0F\u8C03\u7528\u6BCF\u4E2A<code>Loader</code></li><li>\u7EDF\u4E00\u539F\u5219: \u9075\u5FAA<code>Webpack</code>\u5236\u5B9A\u7684\u8BBE\u8BA1\u89C4\u5219\u548C\u7ED3\u6784\uFF0C\u8F93\u5165\u4E0E\u8F93\u51FA\u5747\u4E3A\u5B57\u7B26\u4E32\uFF0C\u5404\u4E2A<code>Loader</code>\u5B8C\u5168\u72EC\u7ACB\uFF0C\u5373\u63D2\u5373\u7528</li></ul><p>\u5728\u65E5\u5E38\u5F00\u53D1\u73AF\u5883\u4E2D\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u8C03\u8BD5\u6211\u4EEC\u5F80\u5F80\u4F1A\u52A0\u5165\u8BB8\u591A<code>console</code>\u3002\u4F46\u662F\u6211\u4EEC\u4E0D\u5E0C\u671B\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u5B58\u5728\u6253\u5370\u7684\u503C\u3002\u90A3\u4E48\u8FD9\u91CC\u6211\u4EEC\u81EA\u5DF1\u5B9E\u73B0\u4E00\u4E2A<code>loader</code>\u53BB\u9664\u4EE3\u7801\u4E2D\u7684<code>console</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u77E5\u8BC6\u70B9\u666E\u53CA\u4E4BAST\u3002
\u5047\u8BBE\u6211\u4EEC\u6709\u4E00\u4E2A\u6587\u4EF6a.js\uFF0C\u6211\u4EEC\u5BF9a.js\u91CC\u9762\u76841000\u884C\u8FDB\u884C\u4E00\u4E9B\u64CD\u4F5C\u5904\u7406\uFF0C\u6BD4\u5982\u4E3A\u6240\u6709\u7684await \u589E\u52A0try catch\uFF0C\u4EE5\u53CA\u5176\u4ED6\u64CD\u4F5C\u3002
\u4F46\u662Fa.js\u91CC\u9762\u7684\u4EE3\u7801\u672C\u8D28\u4E0A\u6765\u8BF4\u5C31\u662F\u4E00\u5806\u5B57\u7B26\u4E32\u3002
\u90A3\u6211\u4EEC\u600E\u4E48\u529E\u5462\uFF0C\u90A3\u5C31\u662F\u8F6C\u6362\u4E3A\u5E26\u6807\u8BB0\u4FE1\u606F\u7684\u5BF9\u8C61(\u62BD\u8C61\u8BED\u6CD5\u6811)\u6211\u4EEC\u65B9\u4FBF\u8FDB\u884C\u589E\u5220\u6539\u67E5\u3002
\u8FD9\u4E2A\u5E26\u6807\u8BB0\u7684\u5BF9\u8C61(\u62BD\u8C61\u8BED\u6CD5\u6811)\u5C31\u662FAST
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,7),k={href:"https://segmentfault.com/a/1190000016231512",target:"_blank",rel:"noopener noreferrer"},d=s("AST\u5FEB\u901F\u5165\u95E8"),b=e(`<p><code>npm i -D @babel/parser @babel/traverse @babel/generator @babel/types</code></p><ul><li><code>@babel/parser</code> \u5C06\u6E90\u4EE3\u7801\u89E3\u6790\u6210 <code>AST</code></li><li><code>@babel/traverse</code> \u5BF9<code>AST</code>\u8282\u70B9\u8FDB\u884C\u9012\u5F52\u904D\u5386\uFF0C\u751F\u6210\u4E00\u4E2A\u4FBF\u4E8E\u64CD\u4F5C\u3001\u8F6C\u6362\u7684<code>path</code>\u5BF9\u8C61</li><li><code>@babel/generator</code> \u5C06<code>AST</code>\u89E3\u7801\u751F\u6210<code>js</code>\u4EE3\u7801</li><li><code>@babel/types</code>\u901A\u8FC7\u8BE5\u6A21\u5757\u5BF9\u5177\u4F53\u7684<code>AST</code>\u8282\u70B9\u8FDB\u884C\u8FDB\u884C\u589E\u3001\u5220\u3001\u6539\u3001\u67E5</li></ul><p>\u65B0\u5EFA<code>drop-console.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> parser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/parser&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> traverse <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/traverse&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default
<span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/generator&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default
<span class="token keyword">const</span> t <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/types&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> ast <span class="token operator">=</span> parser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span><span class="token punctuation">{</span> <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token function">CallExpression</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
      <span class="token keyword">if</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">isMemberExpression</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>callee<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> t<span class="token punctuation">.</span><span class="token function">isIdentifier</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>callee<span class="token punctuation">.</span>object<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;console&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        path<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> output <span class="token operator">=</span> <span class="token function">generator</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> source<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> output<span class="token punctuation">.</span>code
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5982\u4F55\u4F7F\u7528</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;index.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">&#39;[name].[contenthash].js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">use</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;drop-console.js&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,6),m=s("\u5B9E\u9645\u4E0A\u5728"),g=n("code",null,"webpack4",-1),h=s("\u4E2D\u5DF2\u7ECF\u96C6\u6210\u4E86\u53BB\u9664"),f=n("code",null,"console",-1),_=s("\u529F\u80FD\uFF0C\u5728"),w=n("code",null,"minimizer",-1),v=s("\u4E2D\u53EF\u914D\u7F6E"),y={href:"https://webpack.js.org/plugins/terser-webpack-plugin/#root",target:"_blank",rel:"noopener noreferrer"},x=s("\u53BB\u9664console"),j={href:"https://webpack.docschina.org/contribute/writing-a-loader/",target:"_blank",rel:"noopener noreferrer"},P=s("\u5982\u4F55\u7F16\u5199\u4E00\u4E2Aloader"),S=e(`<h3 id="\u624B\u5199webpack-plugin" tabindex="-1"><a class="header-anchor" href="#\u624B\u5199webpack-plugin" aria-hidden="true">#</a> \u624B\u5199webpack plugin</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728 Webpack \u8FD0\u884C\u7684\u751F\u547D\u5468\u671F\u4E2D\u4F1A\u5E7F\u64AD\u51FA\u8BB8\u591A\u4E8B\u4EF6\uFF0CPlugin \u53EF\u4EE5\u76D1\u542C\u8FD9\u4E9B\u4E8B\u4EF6\uFF0C\u5728\u5408\u9002\u7684\u65F6\u673A\u901A\u8FC7Webpack\u63D0\u4F9B\u7684API\u6539\u53D8\u8F93\u51FA\u7ED3\u679C\u3002
\u901A\u4FD7\u6765\u8BF4\uFF1A\u4E00\u76D8\u7F8E\u5473\u7684\u76D0\u8C46\u7092\u9E21\u86CB\u9700\u8981\u7ECF\u5386\u70E7\u6CB9\uFF0C\u7092\u5236\uFF0C\u8C03\u5473\u5230\u6700\u540E\u7684\u88C5\u76D8\u7B49\u8FC7\u7A0B\u3002
\u800Cplugin\u76F8\u5F53\u4E8E\u53EF\u4EE5\u76D1\u63A7\u6BCF\u4E2A\u73AF\u8282\u5E76\u8FDB\u884C\u64CD\u4F5C\uFF0C\u6BD4\u5982\u53EF\u4EE5\u5199\u4E00\u4E2A\u5C11\u653E\u80E1\u6912\u7C89plugin\uFF0C\u76D1\u63A7webpack\u66B4\u9732\u51FA\u7684\u751F\u547D\u5468\u671F\u4E8B\u4EF6(\u8C03\u5473)\uFF0C\u5728\u8C03\u5473\u7684\u65F6\u5019\u6267\u884C\u5C11\u653E\u80E1\u6912\u7C89\u64CD\u4F5C\u3002
\u90A3\u4E48\u5B83\u4E0Eloader\u7684\u533A\u522B\u662F\u4EC0\u4E48\u5462\uFF1F
\u4E0A\u9762\u6211\u4EEC\u4E5F\u63D0\u5230\u4E86loader\u7684\u5355\u4E00\u539F\u5219,loader\u53EA\u80FD\u4E00\u4EF6\u4E8B\uFF0C\u6BD4\u5982\u8BF4less-loader,\u53EA\u80FD\u89E3\u6790less\u6587\u4EF6\uFF0Cplugin\u5219\u662F\u9488\u5BF9\u6574\u4E2A\u6D41\u7A0B\u6267\u884C\u5E7F\u6CDB\u7684\u4EFB\u52A1\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E00\u4E2A\u57FA\u672C\u7684plugin\u63D2\u4EF6\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">firstPlugin</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;firstPlugin options&#39;</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">apply</span> <span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    compiler<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">&#39;done&#39;</span><span class="token punctuation">,</span> <span class="token parameter">compilation</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;firstPlugin&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> firstPlugin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><code>compiler \u3001compilation\u662F\u4EC0\u4E48\uFF1F</code></p><ul><li><code>compiler</code> \u5BF9\u8C61\u5305\u542B\u4E86<code>Webpack</code> \u73AF\u5883\u6240\u6709\u7684\u7684\u914D\u7F6E\u4FE1\u606F\u3002\u8FD9\u4E2A\u5BF9\u8C61\u5728\u542F\u52A8 <code>webpack</code> \u65F6\u88AB\u4E00\u6B21\u6027\u5EFA\u7ACB\uFF0C\u5E76\u914D\u7F6E\u597D\u6240\u6709\u53EF\u64CD\u4F5C\u7684\u8BBE\u7F6E\uFF0C\u5305\u62EC <code>options</code>\uFF0C<code>loader</code> \u548C <code>plugin</code>\u3002\u5F53\u5728 <code>webpack</code> \u73AF\u5883\u4E2D\u5E94\u7528\u4E00\u4E2A\u63D2\u4EF6\u65F6\uFF0C\u63D2\u4EF6\u5C06\u6536\u5230\u6B64 <code>compiler</code> \u5BF9\u8C61\u7684\u5F15\u7528\u3002\u53EF\u4EE5\u4F7F\u7528\u5B83\u6765\u8BBF\u95EE <code>webpack</code> \u7684\u4E3B\u73AF\u5883\u3002</li><li><code>compilation</code>\u5BF9\u8C61\u5305\u542B\u4E86\u5F53\u524D\u7684\u6A21\u5757\u8D44\u6E90\u3001\u7F16\u8BD1\u751F\u6210\u8D44\u6E90\u3001\u53D8\u5316\u7684\u6587\u4EF6\u7B49\u3002\u5F53\u8FD0\u884C<code>webpack</code> \u5F00\u53D1\u73AF\u5883\u4E2D\u95F4\u4EF6\u65F6\uFF0C\u6BCF\u5F53\u68C0\u6D4B\u5230\u4E00\u4E2A\u6587\u4EF6\u53D8\u5316\uFF0C\u5C31\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 <code>compilation</code>\uFF0C\u4ECE\u800C\u751F\u6210\u4E00\u7EC4\u65B0\u7684\u7F16\u8BD1\u8D44\u6E90\u3002<code>compilation</code> \u5BF9\u8C61\u4E5F\u63D0\u4F9B\u4E86\u5F88\u591A\u5173\u952E\u65F6\u673A\u7684\u56DE\u8C03\uFF0C\u4EE5\u4F9B\u63D2\u4EF6\u505A\u81EA\u5B9A\u4E49\u5904\u7406\u65F6\u9009\u62E9\u4F7F\u7528\u3002</li></ul><p><strong>compiler\u548C compilation\u7684\u533A\u522B\u5728\u4E8E</strong></p><ul><li><code>compiler</code>\u4EE3\u8868\u4E86\u6574\u4E2A<code>webpack</code>\u4ECE\u542F\u52A8\u5230\u5173\u95ED\u7684\u751F\u547D\u5468\u671F\uFF0C\u800C<code>compilation</code>\u53EA\u662F\u4EE3\u8868\u4E86\u4E00\u6B21\u65B0\u7684\u7F16\u8BD1\u8FC7\u7A0B</li><li><code>compiler</code>\u548C<code>compilation</code>\u66B4\u9732\u51FA\u8BB8\u591A\u94A9\u5B50\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u9700\u6C42\u7684\u573A\u666F\u8FDB\u884C\u81EA\u5B9A\u4E49\u5904\u7406</li></ul>`,8),q={href:"https://www.webpackjs.com/api/compiler-hooks/",target:"_blank",rel:"noopener noreferrer"},T=s("compiler\u94A9\u5B50\u6587\u6863"),A={href:"https://www.webpackjs.com/api/compilation-hooks/",target:"_blank",rel:"noopener noreferrer"},z=s("compilation\u94A9\u5B50\u6587\u6863"),E=e(`<p>\u4E0B\u9762\u6211\u4EEC\u624B\u52A8\u5F00\u53D1\u4E00\u4E2A\u7B80\u5355\u7684\u9700\u6C42,\u5728\u751F\u6210\u6253\u5305\u6587\u4EF6\u4E4B\u524D\u81EA\u52A8\u751F\u6210\u4E00\u4E2A\u5173\u4E8E\u6253\u5305\u51FA\u6587\u4EF6\u7684\u5927\u5C0F\u4FE1\u606F</p><p>\u65B0\u5EFA\u4E00\u4E2A<code>webpack-firstPlugin.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">firstPlugin</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options
  <span class="token punctuation">}</span>
  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    compiler<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">&#39;emit&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span>callback</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> filename <span class="token keyword">in</span> compilation<span class="token punctuation">.</span>assets<span class="token punctuation">)</span><span class="token punctuation">{</span>
        str <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u6587\u4EF6:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>filename<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">  \u5927\u5C0F</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>compilation<span class="token punctuation">.</span>assets<span class="token punctuation">[</span>filename<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;size&#39;</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u901A\u8FC7compilation.assets\u53EF\u4EE5\u83B7\u53D6\u6253\u5305\u540E\u9759\u6001\u8D44\u6E90\u4FE1\u606F\uFF0C\u540C\u6837\u4E5F\u53EF\u4EE5\u5199\u5165\u8D44\u6E90</span>
      compilation<span class="token punctuation">.</span>assets<span class="token punctuation">[</span><span class="token string">&#39;fileSize.md&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">source</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">return</span> str
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">size</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">return</span> str<span class="token punctuation">.</span>length
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> firstPlugin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u5982\u4F55\u4F7F\u7528</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> firstPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-firstPlugin.js&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u5176\u4ED6\u4EE3\u7801</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">firstPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u6267\u884C<code>npm run build</code>\u5373\u53EF\u770B\u5230\u5728<code>dist</code>\u6587\u4EF6\u5939\u4E2D\u751F\u6210\u4E86\u4E00\u4E2A\u5305\u542B\u6253\u5305\u6587\u4EF6\u4FE1\u606F\u7684<code>fileSize.md</code></p>`,6),L={href:"https://www.webpackjs.com/contribute/writing-a-plugin/",target:"_blank",rel:"noopener noreferrer"},W=s("\u5982\u4F55\u7F16\u5199\u4E00\u4E2Aplugin");function I(N,V){const a=o("ExternalLinkIcon");return c(),l(r,null,[u,n("p",null,[n("a",k,[d,p(a)])]),b,n("p",null,[m,g,h,f,_,w,v,n("a",y,[x,p(a)])]),n("p",null,[n("a",j,[P,p(a)])]),S,n("p",null,[n("a",q,[T,p(a)]),n("a",A,[z,p(a)])]),E,n("p",null,[n("a",L,[W,p(a)])])],64)}var $=t(i,[["render",I]]);export{$ as default};
