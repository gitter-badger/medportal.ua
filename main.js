(function(){
    
    
    var createForm = function(){
        
        
        var y = document.getElementsByTagName('body');
        y[0].style.position = 'relative';
        var elem = document.createElement('div');
        elem.setAttribute('id', 'shadow');
        elem.innerHTML = '<div id="subscription">\n\
                <img id="close" src="photonav1.gif" alt="Закрыть">\n\
                <form class="login" name="form" method="post" action="#">\n\
                    <label for="email">Чтобы получать уведомления об акциях и советы по выбору мебели от лучших дизайнеров</label>\n\
                    <input type="text" name="email" id="email">\n\
                    <span id="emailf"></span>\n\
<input id="submit" type="submit" value="Отправить форму">\n\
                </form>\n\
            </div>';
        var x = document.getElementsByTagName('div');
        x[0].parentNode.appendChild(elem);
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
    
    var sendData = function(e){
        e.preventDefault();
        var form = document.forms['form']['email'].value;
        var dog = form.indexOf('@');
        var point = form.indexOf('.');
        var spase = form.indexOf(' ');
        var emailf =  document.getElementById('emailf');
        if (form.length === 0){
            emailf.innerHTML = 'данное поле обязательно для заполнения';
        }
        else if(dog < 1 || point < 1 || spase > 0){
            emailf.innerHTML = 'email введен не верно!';
        }
        else{
            setCookie('email', form, '/');
            var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

            var xhr = new XHR();

            xhr.open('POST', 'http://dev.sailplay.ru/js-api/74/users/update/', true);

            xhr.onload = function() {
              alert( this.responseText );
            };

            xhr.onerror = function() {
              alert( 'Ошибка ' + this.status );
            };

            xhr.send(form);
            remove();
        }   
    };
    var remove = function (){
        var elem = document.getElementById('shadow');
        elem.parentNode.removeChild(elem);
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
        console.log( close );
        close.addEventListener('click', exit, false);
    }
    else{
        alert(getCookie('email'));
    };
})();
