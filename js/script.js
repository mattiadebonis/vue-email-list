var app = new Vue({
    el: "#root",
    data:{
        mailUsers: []
    },
    mounted: function(){
        for (var i =0; i<10; i++){
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")

                .then((result) => {                    
                        const mail = result.data.response;
                        this.mailUsers.push(mail);                        
                });
        }
        
    }
});