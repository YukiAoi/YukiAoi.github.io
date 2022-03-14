import{_ as e,a}from"./app.98a8c9b9.js";const d={},t=a('<h2 id="\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F</h2><h3 id="create\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#create\u9636\u6BB5" aria-hidden="true">#</a> create\u9636\u6BB5</h3><p>vue\u5B9E\u4F8B\u88AB\u521B\u5EFA</p><ol><li><code>beforeCreate</code>\uFF1A\u6700\u521D\u8C03\u7528\u89E6\u53D1\uFF0C\u521B\u5EFA\u524D\uFF0C\u6B64\u65F6data\u548Cmethods\u4E2D\u7684\u6570\u636E\u90FD\u8FD8\u6CA1\u6709\u521D\u59CB\u5316\uFF0Cdata\u548Cevents\u90FD\u4E0D\u80FD\u7528</li><li><code>created</code>\uFF1A\u521B\u5EFA\u5B8C\u6BD5\uFF0Cdata\u4E2D\u6709\u503C\uFF0C\u672A\u6302\u8F7D\uFF0Cdata\u548Cevents\u5DF2\u7ECF\u521D\u59CB\u5316\u597D\uFF0Cdata\u5DF2\u7ECF\u5177\u6709\u54CD\u5E94\u5F0F\uFF1B\u5728\u8FD9\u91CC\u53EF\u4EE5\u53D1\u9001\u8BF7\u6C42</li></ol><h3 id="mount\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#mount\u9636\u6BB5" aria-hidden="true">#</a> mount\u9636\u6BB5</h3><p>vue\u5B9E\u4F8B\u88AB\u6302\u8F7D\u5230\u771F\u5B9EDOM\u8282\u70B9</p><ol><li><code>beforeMount</code>\uFF1A\u5728\u6A21\u7248\u7F16\u8BD1\u4E4B\u540E\uFF0C\u6E32\u67D3\u4E4B\u524D\u89E6\u53D1\uFF0C\u53EF\u4EE5\u53D1\u8D77\u670D\u52A1\u7AEF\u8BF7\u6C42\uFF0C\u53BB\u6570\u636E\uFF0Cssr\u4E2D\u4E0D\u53EF\u7528</li><li><code>mounted</code>\uFF1A\u5728\u6E32\u67D3\u4E4B\u540E\u89E6\u53D1\uFF0C\u6B64\u65F6\u53EF\u4EE5\u64CD\u4F5CDOM\uFF0C\u5E76\u80FD\u8BBF\u95EE\u7EC4\u4EF6\u4E2D\u7684DOM\u4EE5\u53CA$ref\uFF0Cssr\u4E2D\u4E0D\u53EF\u7528</li></ol><h3 id="update\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#update\u9636\u6BB5" aria-hidden="true">#</a> update\u9636\u6BB5</h3><p>\u5F53vue\u5B9E\u4F8B\u91CC\u9762\u7684data\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u89E6\u53D1\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3</p><ol><li><code>beforeUpdate</code>\uFF1A\u66F4\u65B0\u524D\uFF0C\u5728\u6570\u636E\u53D8\u5316\u540E\uFF0C\u6A21\u7248\u6539\u53D8\u524D\u89E6\u53D1\uFF0C\u5207\u52FF\u4F7F\u7528\u5B83\u76D1\u542C\u6570\u636E\u53D8\u5316</li><li><code>updated</code>\uFF1A\u66F4\u65B0\u540E\uFF0C\u5728\u6570\u636E\u6539\u53D8\u540E\uFF0C\u6A21\u7248\u6539\u53D8\u540E\u89E6\u53D1\uFF0C\u5E38\u7528\u4E8E\u91CD\u6E32\u67D3\u6848\u540E\u7684\u6253\u70B9\uFF0C\u6027\u80FD\u68C0\u6D4B\u6216\u89E6\u53D1vue\u7EC4\u4EF6\u4E2D\u975Evue\u7EC4\u4EF6\u7684\u66F4\u65B0</li></ol><h3 id="destroy\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#destroy\u9636\u6BB5" aria-hidden="true">#</a> destroy\u9636\u6BB5</h3><p>vue\u5B9E\u4F8B\u88AB\u9500\u6BC1</p><ol><li><code>beforeDestroy</code>\uFF1A\u5B9E\u4F8B\u88AB\u9500\u6BC1\u524D\uFF0C\u7EC4\u4EF6\u5378\u8F7D\u524D\u89E6\u53D1\uFF0C\u6B64\u65F6\u53EF\u4EE5\u624B\u52A8\u9500\u6BC1\u4E00\u4E9B\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5728\u6B64\u65F6\u6E05\u7406\u4E8B\u4EF6\u3001\u8BA1\u65F6\u5668\u6216\u8005\u53D6\u6D88\u8BA2\u9605\u64CD\u4F5C</li><li><code>destroyed</code>\uFF1A\u5378\u8F7D\u5B8C\u6BD5\u540E\u89E6\u53D1\uFF0C\u9500\u6BC1\u540E\uFF0C\u53EF\u4EE5\u505A\u6700\u540E\u7684\u6253\u70B9\u6216\u4E8B\u4EF6\u89E6\u53D1\u64CD\u4F5C</li></ol><h3 id="\u7EC4\u4EF6\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u7EC4\u4EF6\u751F\u547D\u5468\u671F</h3><h4 id="\u751F\u547D\u5468\u671F-\u7236\u5B50\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F-\u7236\u5B50\u7EC4\u4EF6" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F\uFF08\u7236\u5B50\u7EC4\u4EF6\uFF09</h4><p>\u7236\u7EC4\u4EF6beforeCreate --&gt; \u7236\u7EC4\u4EF6created --&gt; \u7236\u7EC4\u4EF6beforeMount --&gt; \u5B50\u7EC4\u4EF6beforeCreate --&gt; \u5B50\u7EC4\u4EF6created --&gt; \u5B50\u7EC4\u4EF6beforeMount --&gt; \u5B50\u7EC4\u4EF6 mounted --&gt; \u7236\u7EC4\u4EF6mounted --&gt; \u7236\u7EC4\u4EF6beforeUpdate --&gt; \u5B50\u7EC4\u4EF6beforeDestroy --&gt; \u5B50\u7EC4\u4EF6destroyed --&gt; \u7236\u7EC4\u4EF6updated</p><h4 id="\u52A0\u8F7D\u6E32\u67D3\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7D\u6E32\u67D3\u8FC7\u7A0B" aria-hidden="true">#</a> \u52A0\u8F7D\u6E32\u67D3\u8FC7\u7A0B</h4><p>\u7236\u7EC4\u4EF6beforeCreate --&gt; \u7236\u7EC4\u4EF6created --&gt; \u7236\u7EC4\u4EF6beforeMount --&gt; \u5B50\u7EC4\u4EF6beforeCreate --&gt; \u5B50\u7EC4\u4EF6created --&gt; \u5B50\u7EC4\u4EF6beforeMount --&gt; \u5B50\u7EC4\u4EF6mounted --&gt; \u7236\u7EC4\u4EF6mounted</p><h4 id="\u6302\u8F7D\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u6302\u8F7D\u9636\u6BB5" aria-hidden="true">#</a> \u6302\u8F7D\u9636\u6BB5</h4><p>\u7236\u7EC4\u4EF6created --&gt; \u5B50\u7EC4\u4EF6created --&gt; \u5B50\u7EC4\u4EF6mounted --&gt; \u7236\u7EC4\u4EF6mounted</p><h4 id="\u7236\u7EC4\u4EF6\u66F4\u65B0\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u7236\u7EC4\u4EF6\u66F4\u65B0\u9636\u6BB5" aria-hidden="true">#</a> \u7236\u7EC4\u4EF6\u66F4\u65B0\u9636\u6BB5</h4><p>\u7236\u7EC4\u4EF6beforeUpdate --&gt; \u7236\u7EC4\u4EF6updated</p><h4 id="\u5B50\u7EC4\u4EF6\u66F4\u65B0\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u5B50\u7EC4\u4EF6\u66F4\u65B0\u9636\u6BB5" aria-hidden="true">#</a> \u5B50\u7EC4\u4EF6\u66F4\u65B0\u9636\u6BB5</h4><p>\u7236\u7EC4\u4EF6beforeUpdate --&gt; \u5B50\u7EC4\u4EF6beforeUpdate --&gt; \u5B50\u7EC4\u4EF6updated --&gt; \u7236\u7EC4\u4EF6updated</p><h4 id="\u9500\u6BC1\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u9500\u6BC1\u9636\u6BB5" aria-hidden="true">#</a> \u9500\u6BC1\u9636\u6BB5</h4><p>\u7236\u7EC4\u4EF6beforeDestroy --&gt; \u5B50\u7EC4\u4EF6beforeDestroy --&gt; \u5B50\u7EC4\u4EF6destroyed --&gt; \u7236\u7EC4\u4EF6destroyed</p>',26);function r(o,h){return t}var c=e(d,[["render",r]]);export{c as default};
