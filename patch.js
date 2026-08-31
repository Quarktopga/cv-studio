const fix=()=>{const b=document.getElementById('print');if(b)b.onclick=()=>window.print()};new MutationObserver(fix).observe(document.body,{childList:true,subtree:true});fix();
