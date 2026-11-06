    let loginBtn = document.querySelector('#conform-up');
    let userInput = document.querySelector('#text-name');
    loginBtn.addEventListener('click', function() {
        let name = userInput.value; 
        if (name === "") {
            alert("请输入用户名");
            return;
        }
        localStorage.setItem('savedUserName', name); 
        window.location.href = 'webpage.html'; 
    });
