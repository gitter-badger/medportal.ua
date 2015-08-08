window.onload = function (){
    
    /*конфигурационный об'ект
    var input = {
        //Название строки: тип строки
        email: 'text'
    };*/
    
    var createForm = function(){
        var y,
            shadow,
            subscription,
            x;
        y = document.getElementsByTagName('body')
        y[0].style.position = "relative";
        
        //создаём тёмный фон
        shadow = document.createElement('div');
        shadow.setAttribute('id', 'shadow');
        
        
        subscription = document.createElement('div');
        subscription.setAttribute('id', 'subscription');
        subscription.innerHTML = '<img id="close" src="photonav1.gif" alt="Закрыть">\n\
                <form class="login" name="form" method="post" action="#">\n\
                    <label for="email">Чтобы получать уведомления об акциях и советы по выбору мебели от лучших дизайнеров</label>\n\
                    <input type="text" name="email" id="email" value="email">\n\
                    <span id="emailf"></span>\n\
                    <input id="submit" type="submit" value="Отправить форму">\n\
                </form>';
        x = document.getElementsByTagName('div');
        x[0].parentNode.appendChild(shadow);
        x[0].parentNode.appendChild(subscription);

    };
    
    var setCookie = function ( name, value, path, domain, secure ){
        var cookieString = name + "=" + escape ( value );
        
        var currentDate = new Date;
        
        var cookieYear = currentDate.getFullYear ( ) + 1;
        
        var cookieMonth = currentDate.getMonth ( );
        
        var cookieDay = currentDate.getDate ( );
        
        var expires = new Date (cookieYear, cookieMonth,cookieDay);
        
        cookieString += "; expires=" + expires.toGMTString();

        if ( path )
              cookieString += "; path=" + escape ( path );

        if ( domain )
              cookieString += "; domain=" + escape ( domain );

        if ( secure )
              cookieString += "; secure";

        document.cookie = cookieString;
    };
    var getCookie  = function ( cookie_name ){
        var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );

        if ( results )
          return ( unescape ( results[2] ) );
        else
          return null;
    };
    
    var sendData = function(submit){
        var form = document.forms['form']['email'].value,
            dog = form.indexOf('@'),
            point = form.indexOf('.'),
            spase = form.indexOf(' '),
            emailf =  document.getElementById('emailf'),
            content;
        submit.preventDefault();
        
        
        if (form.length === 0){
            emailf.innerHTML = 'данное поле обязательно для заполнения';
        }
        else if(dog < 1 || point < 1 || spase > 0){
            emailf.innerHTML = 'email введен не верно!';
        }
        else{
            setCookie('email', form, '/');
            var content = 'email=' + form;
            $.ajax({
		async: false,
		url: 'http://dev.sailplay.ru/js-api/74/users/update/api.php?callback=?',
		type: 'POST',
                dataType: 'jsonp', 
		data: content,
		cache: false,
		crossDomain: true
            });
        }  
    };
    var remove = function (){
        var elem = document.getElementById('shadow');
        var elem1 = document.getElementById('subscription');
        elem.parentNode.removeChild(elem);
        elem1.parentNode.removeChild(elem1);
    };
    var exit = function (){
        setCookie('email', 'none email', '/');
        remove();
    };
    if( ! getCookie('email') ){
        createForm('form');
        var close = document.getElementById('close');
        var submit = document.getElementById('submit');
        submit.addEventListener('click', sendData, false);
        close.addEventListener('click', exit, false);
    }
    else{
        alert(getCookie('email'));
    };
};
