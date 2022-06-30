import{_ as n,o as s,c as a,e}from"./app.1130c019.js";const i={},t=e(`<div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>Git\u5E38\u7528\u547D\u4EE4\u901F\u67E5\u8868</p></div><h1 id="git\u5E38\u7528\u547D\u4EE4\u901F\u67E5\u8868" tabindex="-1"><a class="header-anchor" href="#git\u5E38\u7528\u547D\u4EE4\u901F\u67E5\u8868" aria-hidden="true">#</a> Git\u5E38\u7528\u547D\u4EE4\u901F\u67E5\u8868</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>master:\u9ED8\u8BA4\u5F00\u53D1\u5206\u652F
Head:\u6307\u9488\uFF0C\u9ED8\u8BA4\u5F00\u53D1\u5206\u652F
origin:\u9ED8\u8BA4\u8FDC\u7A0B\u7248\u672C\u5E93
Head^:Head\u7684\u7236\u63D0\u4EA4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="config\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#config\u914D\u7F6E" aria-hidden="true">#</a> config\u914D\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> config --global  --list             <span class="token comment">#\u67E5\u770B\u5F53\u524D\u7528\u6237\uFF08global\uFF09\u914D\u7F6E</span>
$ <span class="token function">git</span> config --global user.name <span class="token string">&quot;name&quot;</span>    <span class="token comment">#\u914D\u7F6E\u7528\u6237\u540D\u79F0\u4FE1\u606F</span>
$ <span class="token function">git</span> config --global user.email <span class="token string">&quot;email&quot;</span>  <span class="token comment">#\u914D\u7F6E\u7528\u6237\u90AE\u7BB1\u4FE1\u606F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="\u4FEE\u6539\u548C\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u548C\u63D0\u4EA4" aria-hidden="true">#</a> \u4FEE\u6539\u548C\u63D0\u4EA4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> status                        <span class="token comment">#\u67E5\u770B\u72B6\u6001</span>
$ <span class="token function">git</span> <span class="token function">diff</span>                          <span class="token comment">#\u67E5\u770B\u53D8\u66F4\u5185\u5BB9</span>

$ <span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>.<span class="token punctuation">]</span>                       <span class="token comment">#\u8DDF\u8E2A\u6240\u6709\u6539\u52A8\u8FC7\u7684\u6587\u4EF6</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>                    <span class="token comment">#\u8DDF\u8E2A\u6307\u5B9A\u7684\u6587\u4EF6</span>

$ <span class="token function">git</span> commit -m <span class="token string">&quot;commit message&quot;</span>    <span class="token comment">#\u63D0\u4EA4\u6240\u6709\u66F4\u65B0\u8FC7\u7684\u6587\u4EF6</span>
$ <span class="token function">git</span> commit --amend                <span class="token comment">#\u4FEE\u6539\u6700\u540E\u4E00\u6B21\u63D0\u4EA4</span>

$ <span class="token function">git</span> <span class="token function">mv</span> <span class="token punctuation">[</span>old<span class="token punctuation">]</span> <span class="token punctuation">[</span>new<span class="token punctuation">]</span>                <span class="token comment">#\u6587\u4EF6\u6539\u540D</span>
$ <span class="token function">git</span> <span class="token function">rm</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>                     <span class="token comment">#\u5220\u9664\u6587\u4EF6</span>
$ <span class="token function">git</span> <span class="token function">rm</span> --cached <span class="token punctuation">[</span>file<span class="token punctuation">]</span>            <span class="token comment">#\u505C\u6B62\u8DDF\u8E2A\u6587\u4EF6\u4F46\u4E0D\u5220\u9664</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u67E5\u770B\u63D0\u4EA4\u5386\u53F2" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u63D0\u4EA4\u5386\u53F2" aria-hidden="true">#</a> \u67E5\u770B\u63D0\u4EA4\u5386\u53F2</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> reflog                        <span class="token comment">#\u67E5\u770B\u7248\u672C\u4FE1\u606F</span>
$ <span class="token function">git</span> log                           <span class="token comment">#\u67E5\u770B\u7248\u672C\u8BE6\u7EC6\u4FE1\u606F</span>
$ <span class="token function">git</span> log -p <span class="token punctuation">[</span>file<span class="token punctuation">]</span>                 <span class="token comment">#\u67E5\u770B\u6307\u5B9A\u6587\u4EF6\u7684\u63D0\u4EA4\u5386\u53F2</span>
$ <span class="token function">git</span> blame <span class="token punctuation">[</span>file<span class="token punctuation">]</span>                  <span class="token comment">#\u4EE5\u5217\u8868\u65B9\u5F0F\u67E5\u770B\u6307\u5B9A\u6587\u4EF6\u7684\u63D0\u4EA4\u5386\u53F2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u64A4\u9500" tabindex="-1"><a class="header-anchor" href="#\u64A4\u9500" aria-hidden="true">#</a> \u64A4\u9500</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> reset --hard HEAD             <span class="token comment">#\u64A4\u9500\u5DE5\u4F5C\u76EE\u5F55\u4E2D\u6240\u6709\u672A\u63D0\u4EA4\u6587\u4EF6\u7684\u4FEE\u6539\u5185\u5BB9</span>
$ <span class="token function">git</span> checkout HEAD <span class="token punctuation">[</span>file<span class="token punctuation">]</span>          <span class="token comment">#\u64A4\u9500\u6307\u5B9A\u7684\u672A\u63D0\u4EA4\u6587\u4EF6\u7684\u4FEE\u6539\u5185\u5BB9</span>
$ <span class="token function">git</span> revert <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>               <span class="token comment">#\u64A4\u9500\u6307\u5B9A\u7684\u63D0\u4EA4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5206\u652F\u4E0E\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u4E0E\u6807\u7B7E" aria-hidden="true">#</a> \u5206\u652F\u4E0E\u6807\u7B7E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u521B\u5EFA</span>
$ <span class="token function">git</span> branch <span class="token punctuation">[</span>new-branch<span class="token punctuation">]</span>           <span class="token comment">#\u8868\u793A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684branch\uFF0C\u5E76\u4E14Head\u4F9D\u65E7\u505C\u7559\u5728\u5F53\u524D\u7684branch</span>
$ <span class="token function">git</span> checkout -b <span class="token punctuation">[</span>new-branch<span class="token punctuation">]</span>      <span class="token comment">#\u8868\u793A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684branch\uFF0C\u5E76\u4E14Head\u4F1A\u79FB\u5411\u65B0\u521B\u5EFA\u7684branch</span>
$ <span class="token function">git</span> tag <span class="token punctuation">[</span>tagname<span class="token punctuation">]</span>                 <span class="token comment">#\u57FA\u4E8E\u6700\u65B0\u63D0\u4EA4\u521B\u5EFA\u6807\u7B7E</span>

<span class="token comment">#\u67E5\u770B/\u5207\u6362</span>
$ <span class="token function">git</span> branch                        <span class="token comment">#\u67E5\u770B\u5206\u652F\u4FE1\u606F</span>
$ <span class="token function">git</span> branch -v                     <span class="token comment">#\u67E5\u770B\u5206\u652F\u53CA\u7248\u672C\u4FE1\u606F</span>
$ <span class="token function">git</span> checkout <span class="token punctuation">[</span>branch/tag<span class="token punctuation">]</span>         <span class="token comment">#\u5207\u6362\u5230\u6307\u5B9A\u5206\u652F\u6216\u6807\u7B7E</span>
$ <span class="token function">git</span> tag                           <span class="token comment">#\u5217\u51FA\u6240\u6709\u672C\u5730\u6807\u7B7E</span>

<span class="token comment">#\u5220\u9664</span>
$ <span class="token function">git</span> branch -d <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>            <span class="token comment">#\u5220\u9664\u672C\u5730\u5206\u652F</span>
$ <span class="token function">git</span> tag -d <span class="token punctuation">[</span>tagname<span class="token punctuation">]</span>              <span class="token comment">#\u5220\u9664\u6807\u7B7E</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5408\u5E76\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u5206\u652F" aria-hidden="true">#</a> \u5408\u5E76\u5206\u652F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> merge <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>                <span class="token comment">#\u628A\u6307\u5B9A\u7684\u5206\u652F\u5408\u5E76\u5230\u5F53\u524D\u5206\u652F\u4E0A</span>
$ <span class="token function">git</span> merge --continue              <span class="token comment">#\u89E3\u51B3\u51B2\u7A81\u540E\uFF0C\u7EE7\u7EED\u5408\u5E76\uFF0Cvim\u4FEE\u6539-m</span>
$ <span class="token function">git</span> merge -m <span class="token string">&quot;&quot;</span>                   <span class="token comment">#\u89E3\u51B3\u51B2\u7A81\u540E\uFF0C\u7EE7\u7EED\u5408\u5E76\uFF0C\u76F4\u63A5\u63D0\u4EA4-m</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FDC\u7A0B\u4ED3\u5E93\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u4ED3\u5E93\u64CD\u4F5C" aria-hidden="true">#</a> \u8FDC\u7A0B\u4ED3\u5E93\u64CD\u4F5C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> clone \u8FDC\u7A0B\u5730\u5740                 <span class="token comment">#\u5C06\u8FDC\u7A0B\u4ED3\u5E93\u7684\u5185\u5BB9\u514B\u9686\u5230\u672C\u5730</span>
$ <span class="token function">git</span> remote -v                     <span class="token comment">#\u67E5\u770B\u5F53\u524D\u6240\u6709\u8FDC\u7A0B\u5730\u5740\u522B\u540D</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> \u522B\u540D \u8FDC\u7A0B\u5730\u5740       <span class="token comment">#\u8D77\u522B\u540D</span>
$ <span class="token function">git</span> push \u522B\u540D \u5206\u652F                 <span class="token comment">#\u63A8\u9001\u672C\u5730\u5206\u652F\u7684\u5185\u5BB9\u5230\u8FDC\u7A0B\u4ED3\u5E93</span>
$ <span class="token function">git</span> pull \u8FDC\u7A0B\u5E93\u5730\u5740\u522B\u540D \u8FDC\u7A0B\u5206\u652F\u540D  <span class="token comment">#\u5C06\u8FDC\u7A0B\u4ED3\u5E93\u5BF9\u4E8E\u5206\u652F\u6700\u65B0\u5185\u5BB9\u62C9\u4E0B\u6765\u540E\u4E0E\u672C\u5730\u5206\u652F\u76F4\u63A5\u5408\u5E76</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssh" tabindex="-1"><a class="header-anchor" href="#ssh" aria-hidden="true">#</a> ssh</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-keygen -t rsa -C ChokerLee@github.com     <span class="token comment">#\u521B\u5EFAssh\u5BC6\u94A5\uFF08\u8F93\u5165\u547D\u4EE4\u5E76\u6572\u4E0B3\u6B21\u56DE\u8F66\u5373\u53EF\uFF09</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><strong>git merge</strong></p></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--ff
When the merge resolves as a fast-forward, only update the branch pointer, 
without creating a merge commit. This is the default behavior.
\u5F53\u5408\u5E76\u89E3\u6790\u4E3A\u5FEB\u8FDB\u65F6\uFF0C\u53EA\u66F4\u65B0\u5206\u652F\u6307\u9488\uFF0C\u800C\u4E0D\u521B\u5EFA\u5408\u5E76\u63D0\u4EA4\u3002\u8FD9\u662F\u9ED8\u8BA4\u884C\u4E3A\u3002

--no-ff
Create a merge commit even when the merge resolves as a fast-forward. 
This is the default behaviour when merging an annotated (and possibly signed) tag.
\u5373\u4F7F\u5408\u5E76\u89E3\u6790\u4E3A\u5FEB\u8FDB\uFF0C\u4E5F\u8981\u521B\u5EFA\u5408\u5E76\u63D0\u4EA4\u3002\u8FD9\u662F\u5408\u5E76\u5E26\u6CE8\u91CA\uFF08\u53EF\u80FD\u8FD8\u6709\u7B7E\u540D\uFF09\u6807\u8BB0\u65F6\u7684\u9ED8\u8BA4\u884C\u4E3A\u3002

--squash
--no-squash
Produce the working tree and index state as if a real merge happened (except for the 
merge information), but do not actually make a commit, move the HEAD, or record 
$GIT_DIR/MERGE_HEAD (to cause the next git commit command to create a merge commit). 
This allows you to create a single commit on top of the current branch whose effect 
is the same as merging another branch (or more in case of an octopus).
\u751F\u6210\u5DE5\u4F5C\u6811\u548C\u7D22\u5F15\u72B6\u6001\uFF0C\u5C31\u50CF\u53D1\u751F\u4E86\u771F\u6B63\u7684\u5408\u5E76\u4E00\u6837\uFF08\u5408\u5E76\u4FE1\u606F\u9664\u5916\uFF09\uFF0C
\u4F46\u4E0D\u5B9E\u9645\u8FDB\u884C\u63D0\u4EA4\u3001\u79FB\u52A8\u5934\u90E8\u6216\u8BB0\u5F55$GIT_DIR/merge_HEAD\uFF08\u4EE5\u4F7F\u4E0B\u4E00\u4E2AGIT commit\u547D\u4EE4\u521B\u5EFA\u5408\u5E76\u63D0\u4EA4\uFF09\u3002
\u8FD9\u5141\u8BB8\u60A8\u5728\u5F53\u524D\u5206\u652F\u4E0A\u521B\u5EFA\u4E00\u4E2A\u63D0\u4EA4\uFF0C\u5176\u6548\u679C\u4E0E\u5408\u5E76\u53E6\u4E00\u4E2A\u5206\u652F\u76F8\u540C\uFF08\u5982\u679C\u662F\u7AE0\u9C7C\uFF0C\u5219\u4E3A\u591A\u4E2A\u5206\u652F\uFF09\u3002

With --no-squash perform the merge and commit the result. 
This option can be used to override --squash.
\u4F7F\u7528--no squash\u6267\u884C\u5408\u5E76\u5E76\u63D0\u4EA4\u7ED3\u679C\u3002\u6B64\u9009\u9879\u53EF\u7528\u4E8E\u8986\u76D6--squash\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),c=[t];function l(o,d){return s(),a("div",null,c)}var u=n(i,[["render",l],["__file","command.html.vue"]]);export{u as default};