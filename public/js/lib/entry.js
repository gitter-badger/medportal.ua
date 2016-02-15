

var entry = (function($, moment){

    function tabChoise (e) {
        var $this = $(this);
        if($this.attr('id') === 'userChoise_tab'){
            $($this.data('ofset ')).text('');
            $this.tab('show');
            $this.parent().nextAll().children().off();
        } else {
            $($this.data('ofset')).text('').parent().nextAll().children().text('');
            $this.tab('show');
            $this.parent().nextAll().children().off();
        }

        return false;
    }



    function checkChoise (choise, timetable) {
        switch(true){
            case choise.userName.length == 0:
                $('#userChoise_tab').tab('show')
                    .on('click', tabChoise);

                break;
            case choise.city.length == 0:
                $('a#cityChoise_tab').tab('show')
                    .on('click', tabChoise)
                    .parent().prevAll().children().on('click', tabChoise);

                break;
            case choise.spasialisation.length == 0:
                $('#spasialisationChoise_tab').tab('show')
                    .on('click', tabChoise)
                    .parent().prevAll().children().on('click', tabChoise);
                break;
            case choise.company.length == 0:
                $('a#cityChoise_tab').tab('show')
                    .on('click', tabChoise)
                    .parent().prevAll().children().on('click', tabChoise);

                break;
            case choise.doctor.length == 0:
                $('a#companyChoise_tab').tab('show')
                    .on('click', tabChoise)
                    .parent().prevAll().children().on('click', tabChoise);

                $('#doctorChoise_tab').tab('show');
                break;
            case choise.reseption_stamp.length == 0:
                var button = $('#hideButton');

                $('[data-toggle="1tab"]').on('click', function(){
                    button.addClass('hideButton');
                    document.forms['choise']['day'].value = '';
                    document.forms['choise']['time'].value = '';
                    $('#reseption_stampChoise').text('');
                    $('#timeChoise').text('');
                })

                createDatetimepicker (timetable, choise.doctorId, button)
                $('#reseption_stampChoise_tab').tab('show')
                    .on('click', tabChoise)
                    .parent().prevAll().children().on('click', tabChoise);;
                break;
        }
    }
    function ajaxLogin (e, self, choise, timetable) {
        e.preventDefault();
        var $this = $(self),
            loadurl = $this.attr('action'),
            cityChoise = $('#cityChoise');
        var user = {
            username: document.forms['ajaxLogin']['username'].value,
            password: document.forms['ajaxLogin']['password'].value
        }
        if(cityChoise.text() === ''){
            for(key in choise){
                choise[key] = '';
            }
        }
        if(choise.city === ''){
            cityChoise.text('').parent().nextAll().children().text('');
        }
        $.post(loadurl, user, function(data) {
            if(data.user){

                document.forms['ajaxLogin']['username'].value = '';
                document.forms['ajaxLogin']['password'].value = '';

                $('#errorMessage').text('');
                $('#userChoise').text(data.user.name);

                document.forms['choise']['userName'].value = data.user.name;
                document.forms['choise']['userPhone_number'].value = data.user.phone_number;
                document.forms['choise']['userEmail'].value = data.user.email;

                $('a#cityChoise_tab').tab('show')
                    .on('click', tabChoise)
                    .parent().prevAll().children().on('click', tabChoise);
                choise.userName = data.user.name;

                checkChoise(choise, timetable);
            } else {

                document.forms['ajaxLogin']['username'].value = '';
                document.forms['ajaxLogin']['password'].value = '';
                $('#userChoise').text('');
                $('#errorMessage').text(data.message);

            }
        });
        return false;
    }
    function ajaxCity (e, self, selectCompany){
        e.preventDefault();

        var $this = $(self);

        selectCompany.cityId = $this.attr('href')

        $('#cityChoise').text($this.text());

        $('a#spasialisationChoise_tab').tab('show')
            .on('click', tabChoise)
            .parent().prevAll().children().on('click', tabChoise);

        return false;
    }
    function ajaxSpasialisation (e, self, selectCompany){
        e.preventDefault();

        var $this = $(self);
        selectCompany.spasialisationId = $this.attr('href')

        $('#spasialisationChoise').text($this.text());

        $.post('/ajax/company', selectCompany, function(data) {

            $('div#company').html(data);

            $('.ajaxCompany').click(function(e){
                var self = this;
                ajaxCompany(e, self);
            });
            $('a#companyChoise_tab').tab('show')
                .on('click', tabChoise)
                .parent().prevAll().children().on('click', tabChoise);
        })

        return false;
    }
    function ajaxCompany (e, self){
        e.preventDefault();

        var $this = $(self);
        var loadurl = $this.attr('href')


        $('#companyChoise').text($this.text());

        $.get(loadurl, function(data) {

            $('div#doctor').html(data);
            $('.ajaxDoctors').click(function(e){
                var self = this;
                ajaxDoctors(e, self)
            });
            $('a#doctorChoise_tab').tab('show')
                .on('click', tabChoise)
                .parent().prevAll().children().on('click', tabChoise);
        })

        return false;
    }
    function ajaxDoctors(e, self){
        e.preventDefault();

        var $this = $(self),
            loadurl = $this.attr('href'),
            button = $('#hideButton');


        $('#doctorChoise').text($this.text());

        $.get(loadurl, function(data) {
            document.forms['choise']['doctorId'].value = data.doctorId;
            createDatetimepicker (data.timetable, data.doctorId, button)
            $('a#reseption_stampChoise_tab').tab('show')
                .on('click', tabChoise)
                .parent().prevAll().children().on('click', tabChoise);

            $('[data-toggle="1tab"]').on('click', function(){
                button.addClass('hideButton');
                document.forms['choise']['day'].value = '';
                document.forms['choise']['time'].value = '';
                $('#reseption_stampChoise').text('');
                $('#timeChoise').text('');
            })

        })

        return false;
    }
    function createDatetimepicker (timetable, doctorId, button){
        var disabledWeekDays;
        if(!timetable.saturday[1]){
            disabledWeekDays = [0,6];
        } else {
            disabledWeekDays = [0];
        }
        $('#datetimepicker').datetimepicker({
            minDate: 0,
            format:'d-m-Y',
            inline:true,
            timepicker:false,
            theme: 'dark',
            dayOfWeekStart: 1,
            disabledWeekDays: disabledWeekDays,
            lang:'uk',
            onSelectDate:function(ct){

                var weekday = moment(ct).format('dddd'),
                    allowTimes = pushAllowTimes (weekday, timetable);

                $.post('/ajax/time',{date: moment(ct).format('YYYY-MM-DD'), doctorId: doctorId}, function(data){
                    if(data[0]){
                        data.forEach(function(reservedTime){

                            if(inArray(allowTimes, reservedTime)){
                                allowTimes.splice(allowTimes.indexOf(reservedTime), 1)
                            }
                        })
                    }
                    $('#datetimepicker').datetimepicker({
                        timepicker:true,
                        inline:true,
                        theme: 'dark',
                        step: 30,
                        allowTimes: allowTimes,
                        onSelectTime: function(ct){
                            $('#timeChoise').text(moment(ct).format('HH:mm'));

                            document.forms['choise']['time'].value = moment(ct).format('HH:mm:00');
                            button.removeClass('hideButton');
                        }
                    });


                })
                $('#reseption_stampChoise').text(moment(ct).format('dddd, DD-MM-YYYY'));

                document.forms['choise']['day'].value = moment(ct).format('YYYY-MM-DD');


            }

        });
    }
    function pushAllowTimes (weekday, timetable){


        switch(weekday) {
            case 'понеділок':
                return routine (timetable.monday)
                break;
            case 'вівторок':
                return routine (timetable.tuesday)
                break;
            case 'середа':
                return routine (timetable.wednesday)
                break;
            case 'четверг':
                return routine (timetable.thursday)
                break;
            case 'п’ятниця':
                return routine (timetable.friday)
                break;
            case 'субота':
                return routine (timetable.saturday)

                break;
        }
    }
    function routine (dayArr){
        var allowTimes = [];
        for(var i = parseInt(dayArr[0], 10), k = parseInt(dayArr[1], 10); i < k; i++){
            if(i < 10){
                allowTimes.push('0' + i + ':00');
                allowTimes.push('0' + i + ':30');
            } else {
                allowTimes.push(i + ':00');
                allowTimes.push(i + ':30');
            }
        }
        return allowTimes;
    }
    function inArray (array ,value) {
        var i;
        for (i=0; i < array.length; i++)
        {
            if (array[i] == value)
            {
                return true;
            }
        }
        return false;
    }

return{
    init: function(choise, timetable, selectCompany){

        moment.locale('uk');

        checkChoise(choise, timetable);



        $('#ajaxLogin').click(function(e){
            var self = this;
            ajaxLogin(e, self, choise, timetable);
        })


        $('.ajaxCity').click(function(e){
            var self = this;
            ajaxCity(e, self, selectCompany);
        });

        $('.ajaxSpasialisation').click(function(e){
            var self = this;
            ajaxSpasialisation(e, self, selectCompany);
        });

        $('.ajaxCompany').click(function(e){
            var self = this;
            ajaxCompany(e, self);
        });

        $('.ajaxDoctors').click(function(e){
            var self = this;
            ajaxDoctors(e, self)
        });
    }
}

}(jQuery, moment))