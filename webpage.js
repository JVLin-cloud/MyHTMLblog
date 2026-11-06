    let savedName = localStorage.getItem('savedUserName');
    if (savedName) {
        let nameSpan = document.querySelector('#welcomeName');
        nameSpan.innerText = savedName;
    }


    let addplan=document.getElementById('button-plan');
    let planbox=document.getElementById('newplan');
    let totalPlan = document.querySelector('#total-plan'); 

    function updatePlanCount() {
    totalPlan.innerText = document.querySelectorAll('.finished.ed').length;
}

    addplan.addEventListener('click',function() {
        let rowbox=document.createElement('div')
        let newinput=document.createElement('input');
        let cutbutton=document.createElement('button');
        let finish=document.createElement('button')
        rowbox.className='rowbox'
        newinput.type='text'
        newinput.placeholder='请输入计划';
        newinput.className='ADDBAR-plan';
        finish.className='finished'
        finish.innerText='完成?'
        cutbutton.className='cutplan';
        cutbutton.innerText='删除'
        finish.addEventListener('click', function () {
            const isDone = finish.classList.toggle('ed');
            finish.innerText = isDone ? '完成!' : '完成?';
            updatePlanCount();
        });

        cutbutton.addEventListener('click', function () {
            rowbox.remove();
            updatePlanCount();
        });
        rowbox.appendChild(finish);
        rowbox.appendChild(newinput);
        rowbox.appendChild(cutbutton);
        planbox.appendChild(rowbox);
        newinput.focus();
    })


    let addcollection=document.getElementById('button-collection');
    let collectionbox=document.getElementById('newcollection');
    function toUrl(text) {
        let url=(text||'').trim();
        if (url==='') {
            return null;
        }
        if (!url.includes('://')) {
            url='https://'+url;
        }
         return url;
    }
    addcollection.addEventListener('click',function() {
        let rowbox=document.createElement('div');
        rowbox.className='rowbox-collection';
        let newinput=document.createElement('input');
        newinput.type='url';
        newinput.placeholder='输入网址,按下Enter跳转';
        newinput.className='ADDBAR-collection';
        let cutbutton=document.createElement('button');
        cutbutton.innerText='删除'; 
        newinput.addEventListener('keydown', function (to) {
            const url = toUrl(newinput.value);
            if (to.key === 'Enter') {
            window.open(url, '_blank');
        };
    });
        cutbutton.addEventListener('click', function() {
        rowbox.remove();
    });             
        cutbutton.className='cutcollection';
        collectionbox.appendChild(rowbox);
        rowbox.appendChild(newinput);
        rowbox.appendChild(cutbutton);
        newinput.focus();
    });
   


    let attend=document.getElementById('button-diary');
    const diarybox=document.getElementById('button-diary');
    attend.addEventListener('click',function() {
       attend.classList.add('clicked');
       attend.innerText="打卡成功！";
       attend.disabled=true;
    })
  
    const buttons=document.querySelectorAll('.button');
    function show(target) {
        if (target === 'plan') {
        document.querySelector('.PLANBAR').classList.add('toshow');
        document.querySelector('.NOTEBAR').classList.remove('toshow');
        document.querySelector('.COLLECTIONBAR').classList.remove('toshow');
        document.querySelector('.DIARYBAR').classList.remove('toshow');
        }
        if (target === 'note') {
        document.querySelector('.PLANBAR').classList.remove('toshow');
        document.querySelector('.NOTEBAR').classList.add('toshow');
        document.querySelector('.COLLECTIONBAR').classList.remove('toshow');
        document.querySelector('.DIARYBAR').classList.remove('toshow');
        }
        if (target === 'diary') {
        document.querySelector('.PLANBAR').classList.remove('toshow');
        document.querySelector('.NOTEBAR').classList.remove('toshow');
        document.querySelector('.COLLECTIONBAR').classList.remove('toshow');
        document.querySelector('.DIARYBAR').classList.add('toshow');
        }
        if (target === 'collection') {
        document.querySelector('.PLANBAR').classList.remove('toshow');
        document.querySelector('.NOTEBAR').classList.remove('toshow');
        document.querySelector('.COLLECTIONBAR').classList.add('toshow');
        document.querySelector('.DIARYBAR').classList.remove('toshow');
        }
        if (target === 'home') {
        document.querySelector('.PLANBAR').classList.add('toshow');
        document.querySelector('.NOTEBAR').classList.add('toshow');
        document.querySelector('.COLLECTIONBAR').classList.add('toshow');
        document.querySelector('.DIARYBAR').classList.add('toshow');
        }
    }
    buttons.forEach(function(btn){
        btn.addEventListener('click',function() {
            show(btn.dataset.target)
        })
    })


    let addnote=document.getElementById('button-note');
    let notebox=document.getElementById('newnote');
    addnote.addEventListener('click',function() {
        let rowbox=document.createElement('div');
        rowbox.className='rowbox-note';
        let newinpute=document.createElement('textarea');
        newinpute.className='ADDBAR-note';
        newinpute.placeholder='要记点什么？';
        let cutbutton=document.createElement('button');
        cutbutton.innerText='删除';              
        cutbutton.className='cutnote';
        cutbutton.addEventListener('click',function() {
            rowbox.remove();
        });
        rowbox.appendChild(newinpute);
        rowbox.appendChild(cutbutton);
        notebox.appendChild(rowbox);
        newinpute.focus();
    })


    const weekbox=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
    const mounthbox=['一','二','三','四','五','六','七','八','九','十','十一','十二'];
    const now=new Date();
    document.getElementById('month').textContent=mounthbox[now.getMonth()]+'月';
    document.getElementById('day').textContent= String(now.getDate()).padStart(2,'0');
    document.getElementById('week').textContent=weekbox[now.getDay()];
