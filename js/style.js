
        function Myfunction(input){
            ///Full Name
            var num1=document.getElementById('nm1').value;
            var result1 = num1;
            document.getElementById('output1').innerHTML=result1;
            ///phone Number
            var num2=document.getElementById('phn').value;
            var result2 =num2;
            document.getElementById('output2').innerHTML=result2;
            ///Email
            var mail=document.getElementById('eml').value;
            var email=mail;
            document.getElementById('output3').innerHTML=email;
            ///Address
            var address=document.getElementById('ad').value;
            var AddRess=address;
            document.getElementById('output4').innerHTML=AddRess;
            ///Datetime
            var datetime=document.getElementById('dtm').value;
            var DateTime=datetime;
            document.getElementById('output5').innerHTML=DateTime;
            ///Profession
            var Porfession=document.getElementById('Profsn').value;
            var ProFession=Porfession;
            document.getElementById('output6').innerHTML=ProFession;
            ///Language
            var Lang=document.getElementById('lang').value;
            var Language=Lang;
            document.getElementById('lan_output').innerHTML=Language;
           ///About Yourself
            var aboutYourself=document.getElementById('yourself').value;
            var Yourself=aboutYourself;
            document.getElementById('output8').innerHTML=Yourself;
            ///skill
            var Skill=document.getElementById('skill').value;
            var SKill=Skill;
            document.getElementById('Skill_output').innerHTML=SKill;
            ///Expreance
            var Exp=document.getElementById('exp').value;
            var Expreance=Exp;
            document.getElementById('exp_output').innerHTML=Expreance;
            //Education
            var Education=document.getElementById('edu').value;
            var Edu=Education;
            document.getElementById('edu_output').innerHTML=Edu;
            //certification
            var Certification=document.getElementById('cer').value;
            var Cer=Certification;
            document.getElementById('cer_output').innerHTML=Cer;

            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#blah')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
            }

