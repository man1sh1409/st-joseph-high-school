let contactData= $(document).getElementById('#contactform');
console.log('js is runnig..');
contactData.addEventListener('submit', eventlist); 
/*async function  eventlist(event){
         console.log('in event lisner')
        /* let a=['firstName','lastName','emailId','mobileNo'];
         console.log(a);
         let dataObj={};
         let classinpt=document.getElementsByTagName('input');
         console.log(classinpt)
         for(let i=0;i<classinpt.length;i++){
             dataObj[a[i]]= classinpt[i].value;
         }
         console.log(dataObj);
         let firstName=document.getElementById('first').value;
         let lastName=document.getElementById('last').value;
         let emailId=document.getElementById('email').value;
         let mobileNo=document.getElementById('mob').value;
        //const {firstName,lastName,emailId,mobileNo}=dataObj;
        //console.log(firstName);
         const respomse= await fetch('/contact',{
            method:'POST',
            headers:{
               'Content-Type':'appication/json' 
            },
            body:JSON.stringify({
                firstName,
                lastName,
                emailId,
                mobileNo
            })
        }).then(res=>res.json())
         .then(stdata=>{
             console.log(stdata.status)
         })
         .catch(err =>{
             console.log(err);
         })
}*/