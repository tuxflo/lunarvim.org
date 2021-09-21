"use strict";(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[94],{2604:(n,e,a)=>{a.r(e),a.d(e,{data:()=>s});const s={key:"v-2677598e",path:"/plugins/01-installing.html",title:"Installing Plugins",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Example",slug:"example",children:[]},{level:2,title:"Removing Plugins",slug:"removing-plugins",children:[]}],filePathRelative:"plugins/01-installing.md",git:{updatedTime:1629186958e3,contributors:[{name:"Binx-Codes",email:"Devchou2008@gmail.com",commits:1},{name:"christianchiarulli",email:"chrisatmachine@gmail.com",commits:1}]}}},3152:(n,e,a)=>{a.r(e),a.d(e,{default:()=>l});const s=(0,a(6252).uE)('<h1 id="installing-plugins" tabindex="-1"><a class="header-anchor" href="#installing-plugins" aria-hidden="true">#</a> Installing Plugins</h1><p>Plugins are installed by adding snippets into the <code>lvim.plugins</code> table in your <code>config.lua</code> file. Save (<code>:w</code> or <code>&lt;leader&gt;w</code>), and Packer will autoinstall the new plugins.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>plugins <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span><span class="token string">&quot;lunarvim/colorschemes&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span><span class="token string">&quot;folke/tokyonight.nvim&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> \n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Run <code>:PackerSync</code> to pull down updates for your existing plugins. The plugins are stored at <code>~/.local/share/lunarvim/site/pack/packer</code>. The README&#39;s (and <code>docs/</code> folder if it exists) typically contain excellent documentation, so it may be worthwhile to create an alias for this directory.</p><h2 id="removing-plugins" tabindex="-1"><a class="header-anchor" href="#removing-plugins" aria-hidden="true">#</a> Removing Plugins</h2><p>Removing a plugin from the <code>lvim.plugin</code> table removes it from your configuration but not your system. Any plugins left in the <code>start</code> directory will still autostart. To remove them completely, run <code>:PackerClean</code></p>',7),i={},l=(0,a(3744).Z)(i,[["render",function(n,e){return s}]])},3744:(n,e)=>{e.Z=(n,e)=>{for(const[a,s]of e)n[a]=s;return n}}}]);