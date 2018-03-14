$(document).ready(function() {
$(&quot;.elprof-btn-srch&quot;).click(function(){
$(&quot;.elprof-srch&quot;)[&#39;fadeIn&#39;](400).css({
opacity: &quot;1&quot;,
transform: &quot;translate(0 , 0)&quot;
})
});
$(&quot;.elprof-close&quot;).click(function(){
$(&quot;.elprof-srch&quot;)[&#39;fadeOut&#39;](400).css({
opacity: &quot;0&quot;,
transform: &quot;translate(0 , 100%)&quot;
})	
});
});
