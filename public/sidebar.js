const sitenav = ` 
<a href="/index.html">home</a> | <a href="/pages/about.html">about the site</a>		
`;

document.getElementById("sitenav").innerHTML = sitenav;

const sidebar = ` 
<ul>
	<li><a href="/pages/themed.html">themed layouts</a></li>
	<li><a href="/pages/replica.html">replica layouts</a></li>
	<li><a href="/pages/snippets.html">snippets</a></li>
	<li><a href="/pages/grids.html">grids</a></li>
</ul>				
`;

document.getElementById("sidebar").innerHTML = sidebar;

const footer = ` 
<p>from <a href="https://angelnetcast.com">angel</a> with love			
`;

document.getElementById("footer").innerHTML = footer;
