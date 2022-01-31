const data=document.getElementById('myform');
data.addEventListener('submit',(event)=>{
    //console.log(data.value[0]);
    alert("hello body")
    console.log(document.getElementsByClassName('Name_sec'))
    fetch('/apply',{
        method:POST,
        headers:{
           content:application/json
        },
        body:data.json().stringfy({
            mname,
            pass
        })
    }).then(res=> res.json())
      .then(data=>{
          console.log('ok');
      })
})
