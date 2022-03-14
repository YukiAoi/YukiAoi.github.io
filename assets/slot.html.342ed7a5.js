import{_ as s,a as n}from"./app.98a8c9b9.js";const a={},t=n(`<h2 id="\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a> \u63D2\u69FD</h2><p>slot\u5C31\u662F\u4E00\u4E2A\u5360\u4F4D\u7684\u3002\u57282.6\u4E2D\uFF0C\u5C06<code>slot\u6807\u7B7E</code>\u66F4\u6539\u4E3A<code>v-slot\u6307\u4EE4</code>\uFF0C\u53EA\u80FD\u5728<code>template\u6807\u7B7E</code>\u4E2D\u4F7F\u7528\u3002vue\u5F53\u4E2D\u63D2\u69FD\u5305\u542B\u4E09\u79CD\uFF1A</p><ol><li>\u9ED8\u8BA4\uFF08\u533F\u540D\uFF09\u63D2\u69FD</li><li>\u5177\u540D\u63D2\u69FD</li><li>\u4F5C\u7528\u57DF\u63D2\u69FD</li></ol><h3 id="\u9ED8\u8BA4-\u533F\u540D-\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4-\u533F\u540D-\u63D2\u69FD" aria-hidden="true">#</a> \u9ED8\u8BA4\uFF08\u533F\u540D\uFF09\u63D2\u69FD</h3><p>\u533F\u540D\u63D2\u69FD\u5C31\u662F\u6CA1\u6709\u540D\u5B57\u7684slot\uFF0C\u53EA\u8981\u9ED8\u8BA4\u7684\u90FD\u662F\u533F\u540D\u63D2\u69FD</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>default</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u5177\u540D\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u5177\u540D\u63D2\u69FD" aria-hidden="true">#</a> \u5177\u540D\u63D2\u69FD</h3><p>\u6307\u7684\u662F\u5177\u6709\u540D\u5B57\u7684slot\uFF0C\u7ED9slot\u7684name\u5C5E\u6027\u8D4B\u503C</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>header</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>footer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u4F5C\u7528\u57DF\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF\u63D2\u69FD" aria-hidden="true">#</a> \u4F5C\u7528\u57DF\u63D2\u69FD</h3><p><code>slot-scope</code>\uFF0C\u53EF\u4EE5\u8BA9\u7236\u7EC4\u4EF6\u8BBF\u95EE\u5B50\u7EC4\u4EF6\u4E2D\u7684\u5C5E\u6027</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- \u5047\u8BBE\u7EC4\u4EF6\u4E2D\u6709
user = {
firstName:&#39;1&#39;,
lastName:&#39;2&#39;
} --&gt;</span>
<span class="token comment">&lt;!-- \u65E0\u6548 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span><span class="token punctuation">&gt;</span></span>
  {{ user.firstName }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- \u6709\u6548 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ slotProps.user.firstName }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="\u7F29\u5199\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7F29\u5199\u8BED\u6CD5" aria-hidden="true">#</a> \u7F29\u5199\u8BED\u6CD5</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- \u7F29\u5199\u8BED\u6CD5\uFF0C\u5F53\u88AB\u63D0\u4F9B\u7684\u5185\u5BB9\u53EA\u6709\u9ED8\u8BA4\u63D2\u69FD\u65F6\uFF0C\u7EC4\u4EF6\u7684\u6807\u7B7E\u624D\u53EF\u4EE5\u88AB\u5F53\u4F5C\u63D2\u69FD\u7684\u6A21\u677F\u6765\u4F7F\u7528 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ slotProps.user.firstName }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- \u8FDB\u4E00\u6B65\u7F29\u5199 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ slotProps.user.firstName }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- \u9ED8\u8BA4\u63D2\u69FD\u7684\u7F29\u5199\u8BED\u6CD5\u4E0D\u80FD\u4E0E\u5177\u540D\u63D2\u69FD\u6DF7\u7528
\u65E0\u6548\uFF0C\u4F1A\u5BFC\u81F4\u8B66\u544A --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ slotProps.user.firstName }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>other</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>otherSlotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    slotProps is NOT available here
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- \u53EA\u8981\u51FA\u73B0\u591A\u4E2A\u63D2\u69FD\uFF0C\u8BF7\u59CB\u7EC8\u4E3A\u6240\u6709\u7684\u63D2\u69FD\u4F7F\u7528\u5B8C\u6574\u7684\u57FA\u4E8E &lt;template&gt; \u7684\u8BED\u6CD5 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ slotProps.user.firstName }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>other</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>otherSlotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,14);function p(e,l){return t}var o=s(a,[["render",p]]);export{o as default};
