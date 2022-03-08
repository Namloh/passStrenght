(function(window, document, undefined){
    window.onload = init;
    function init(){
          

        const heslo = document.getElementById("heslo");
        const odo = document.getElementById("text");
        heslo.addEventListener("input", e => {
            var text = heslo.value;
            //console.log(text.length)
            //console.log(GetPasswordStrength(text))
            odo = GetPasswordStrength(text);
            
        })
       
        function hasNumber(myString) {
            return /\d/.test(myString);
        }
        function GetPasswordStrength(password)
        {
            var score = 0;
            var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
            //console.log(password)
            //console.log(password.length)
            if (password.length == 0) return "poopoo";
            if (password.length >= 3) score++;
            if (hasNumber(password)) score++;
            if (password.length >= 5) score++;
            if (password.length >= 8) score++;
            if (password.toUpperCase() !== password && password.toLowerCase() !== password) score++;
            if (format.test(password)) score++;
            if (score <= 2) return odo.innerHTML = "Lukashenko povida: SPATNY HESLO, KAMO", odo.style.color = "red";
            if (score <= 4) return odo.innerHTML = "Lukashenko povida: tak ale jako jo no", odo.style.color = "orange";
            if (score <= 6) return odo.innerHTML = "Lukashenko povida: kvalitka brasko! Pojd na invazi do ukrajiny", odo.style.color = "green";
        }





    }
    
    })(window, document, undefined);