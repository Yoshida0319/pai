'use strict';
        const a=document.getElementById('tamesi');
        const b=document.getElementById('tamesi2');
        const c=document.getElementById('botan');
        const re=document.getElementById('result-area')
        const pai=a.value;
        b.onkeydown=event=>{
         if(event.key==='Enter'){
            c.onclick();
         }
        };
        c.onclick = ()=>{
            const x=b.value;
            const l=x.length;
            if (l===0) {
                return;
            }
            re.innerText="";
            const header=document.createElement('h4');
            header.innerText='その数列は、小数点以下';
            re.appendChild(header);
            var r=[0];
         for (let i = 0; i < 10001; i++) {
            var d=pai[i];
            var j=0;
            fun();
            function fun() {
                let e=x[j];
                let d=pai[i+j];
             if (d===e && j<l) {
                j++;
                fun();
             } else if(j===l && l===1){
                const paragraph=document.createElement('p');
                const result=(i+1 + '桁');
                r.push(1);
                paragraph.innerText=result;
                re.appendChild(paragraph);
             } else if (j===l && l>1){
                let f=i+1;
                let g=i+l;
                const paragraph=document.createElement('p');
                const result=(f + '桁~' + g +'桁');
                r.push(1);
                paragraph.innerText=result;
                re.appendChild(paragraph);
             } else if(i === 10000 && r[1] === 1){
               const batu=document.createElement('h4');
               const maru=('にあります');
               batu.innerText=maru;
               re.appendChild(batu);
             } else if(i === 10000) {
               const batu=document.createElement('h4');
               const maru=('10000桁にはありませんでした');
               batu.innerText=maru;
               re.appendChild(batu);
             } else{
               return;
             }
            }
            }
        }
