"use strict";(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[639],{3159:(n,a,e)=>{e.r(a),e.d(a,{data:()=>s});const s={key:"v-293b0bbf",path:"/01-installing.html",title:"Installation",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Prerequisites",slug:"prerequisites",children:[]},{level:2,title:"Stable",slug:"stable",children:[]},{level:2,title:"Rolling",slug:"rolling",children:[]},{level:2,title:"Troubleshooting installation problems",slug:"troubleshooting-installation-problems",children:[]},{level:2,title:"Uninstall",slug:"uninstall",children:[]}],filePathRelative:"01-installing.md",git:{updatedTime:1631470177e3,contributors:[{name:"jamessouth",email:"jamesdanielsouth@gmail.com",commits:9},{name:"rebuilt",email:"memoryman51@hotmail.com",commits:7},{name:"Abouzar Parvan",email:"abzcoding@users.noreply.github.com",commits:3},{name:"Chris",email:"chris@macbook.local",commits:2},{name:"Jan Bronicki",email:"janbronicki@gmail.com",commits:2},{name:"christianchiarulli",email:"chrisatmachine@gmail.com",commits:2},{name:"11backslashes",email:"reversesolidi@protonmail.com",commits:1},{name:"Binx",email:"68950943+Binx-Codes@users.noreply.github.com",commits:1},{name:"Binx-Codes",email:"Devchou2008@gmail.com",commits:1},{name:"Chris",email:"chrisatmachine@gmail.com",commits:1},{name:"Shivom Srivastava",email:"71770229+Guchii@users.noreply.github.com",commits:1}]}}},6437:(n,a,e)=>{e.r(a),e.d(a,{default:()=>f});var s=e(6252);const l=(0,s._)("h1",{id:"installation",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),(0,s.Uk)(" Installation")],-1),i=(0,s._)("h2",{id:"prerequisites",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),(0,s.Uk)(" Prerequisites")],-1),o=(0,s.Uk)("Make sure you have installed the latest version of "),r={href:"https://github.com/neovim/neovim/releases/tag/v0.5.0",target:"_blank",rel:"noopener noreferrer"},t=(0,s._)("code",null,"Neovim 0.5",-1),c=(0,s.Uk)("."),u=(0,s._)("li",null,[(0,s.Uk)("Have "),(0,s._)("code",null,"npm"),(0,s.Uk)(", "),(0,s._)("code",null,"node"),(0,s.Uk)(" and "),(0,s._)("code",null,"cargo"),(0,s.Uk)(" installed on your system.")],-1),m={href:"https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally",target:"_blank",rel:"noopener noreferrer"},p=(0,s.Uk)("Resolve "),d=(0,s._)("code",null,"EACCES",-1),h=(0,s.Uk)(" permissions when installing packages globally"),b=(0,s.Uk)(" to avoid error when installing packages with npm."),g=(0,s.uE)('<h1 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h1><p>There are a few ways to install LunarVim</p><h2 id="stable" tabindex="-1"><a class="header-anchor" href="#stable" aria-hidden="true">#</a> Stable</h2><p>No alarms and no surprises:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">bash</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">curl</span> -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/install.sh<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="rolling" tabindex="-1"><a class="header-anchor" href="#rolling" aria-hidden="true">#</a> Rolling</h2><p>All the new features with all the new bugs:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">LVBRANCH</span><span class="token operator">=</span>rolling <span class="token function">bash</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">curl</span> -s https://raw.githubusercontent.com/lunarvim/lunarvim/rolling/utils/installer/install.sh<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">bash</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">curl</span> -s https://raw.githubusercontent.com/LunarVim/LunarVim/rolling/utils/installer/install-neovim-from-release<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="troubleshooting-installation-problems" tabindex="-1"><a class="header-anchor" href="#troubleshooting-installation-problems" aria-hidden="true">#</a> Troubleshooting installation problems</h2><p>If you encounter problems with the installation check the following:</p><ol><li>Make sure neovim was compiled with luajit. The output of version information <code>nvim -v</code> should include a line for: <code>LuaJIT</code>.</li><li>Make sure all the dependencies listed in <a href="#manual-install">Manual Install</a> are actually installed on your system.</li><li>If you&#39;re upgrading your install, sometimes an old packer compiled file can cause errors at runtime. Remove the folder. <code>rm -rf ~/.config/lvim/plugin</code> and run <code>:PackerSync</code></li><li>If you&#39;re upgrading from an older version of LunarVim, remove the old launcher. <code>sudo rm /usr/local/bin/lvim</code></li></ol><h2 id="uninstall" tabindex="-1"><a class="header-anchor" href="#uninstall" aria-hidden="true">#</a> Uninstall</h2><p>You can remove LunarVim entirely by running the following commands:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rm</span> -rf ~/.local/share/lunarvim\n\n<span class="token function">sudo</span> <span class="token function">rm</span> /usr/local/bin/lvim\n\n<span class="token function">rm</span> ~/.local/bin/lvim\n\n<span class="token function">rm</span> -rf ~/.local/share/applications/lvim.desktop\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>If reinstalling, also remove the packer_compiled folder</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token function">rm</span> -rf ~/.config/lvim/plugin\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',17),v={},f=(0,e(3744).Z)(v,[["render",function(n,a){const e=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[l,i,(0,s._)("ul",null,[(0,s._)("li",null,[o,(0,s._)("a",r,[t,(0,s.Wm)(e)]),c]),u,(0,s._)("li",null,[(0,s._)("a",m,[p,d,h,(0,s.Wm)(e)]),b])]),g],64)}]])},3744:(n,a)=>{a.Z=(n,a)=>{for(const[e,s]of a)n[e]=s;return n}}}]);