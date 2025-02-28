let inp = document.querySelector("#q");
let btn = document.querySelector("button");
let url = "http://universities.hipolabs.com/search?country=India";
let list=document.querySelector("#list");

btn.addEventListener("click",async()=>{
   let userInput = inp.value.trim().toLowerCase();
   let res = await getcolleges();
  let filteredColleges = res.filter(coll=>{
    let state = coll["state-province"] ? coll["state-province"].toLowerCase() : "";
    return state.includes(userInput);
  })
   ShowColl(filteredColleges);
});

  function ShowColl(arr){
   
     if(arr.length===0){
        list.innerHTML="<li>No University Found in This state</li>"
     }
      
       for(coll of arr){
        let li = document.createElement("li")
        let state = coll["state-province"] ? coll["state-province"] : "Null";
        li.innerHTML = `${coll.name}`;
        list.appendChild(li);
       }
  }
async function getcolleges(){
    try{
        let res = await axios.get(url);
         return res.data;
    } catch(err){
        console.log(err);
        
    }
    
  }
  let btn1= document.querySelector("#back");
  
  btn1.addEventListener("click",()=>{
     list.innerHTML="";
     inp.value = "";
  })
 