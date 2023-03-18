

$.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method:"get",
    success:function(users){
        console.log(users);
    },
    error:function(users){
        console.log(users);

    }
})
