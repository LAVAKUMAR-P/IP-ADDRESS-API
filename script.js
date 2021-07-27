//heading
const heading = document.createElement("div");
heading.className = "card-heading";
heading.innerHTML="&#127881 HERE YOU CAN SEE YORE DETAILS &#127881"
document.body.append(heading);

//TO APPEND DATA TO UI
function loadUsers(users) {
    let user=users;
    console.log("load"+user)
    var carbagecheck = document.getElementsByClassName('user-list');
    if (carbagecheck.length > 0) {
        document.querySelector(".user-list").remove();
      }
        const userList = document.createElement("div");
        userList.className = "user-list";
               console.log(users);
               const userContainer = document.createElement("div");
               userContainer.className = "user-container";
               userContainer.innerHTML= `
               <div class="card-content">
                         REGION : ${user.region}
                        <br>
                        CITY : ${user.city}
                        <br>
                        NETWORK : ${user.org}
                        <br>
                        CONTINENT CODE : ${user.continent_code}
                        <br>
                        CONTRY : ${user.country}
                       <br>
                        YOUR IP ADDRESS : ${user.ip}
                       <br>
                        CONTRY CAPITAL : ${user.country_capital}
                       <br>
                        CONTRY AREA : ${user.country_area}
                       <br>
                        CONTRY POPULATION : ${user.country_population}
                       <br>
                        REGION CODE : ${user.region_code}
                       <br>
                        POSTAL : ${user.postal}
                       <br>
                        TIMEZONE : ${user.timezone}
                       <br>
                        LATITUDE & LAGITUDE : ${user.latitude} AND ${user.longitude}
                </div>
                      ` 
          userList.append(userContainer);
      document.body.append(userList);
  }

//to post our IP adress and get data from api
async function getUser(){
    const data =await fetch(`https://ipapi.co/json/`,
    {
        method:"GET"
    }
    );
    try{
        const users=await data.json();
        loadUsers(users);
       }
    catch(err){
        console.log(err);
        const userList = document.createElement("div");
        userList.className = "user-list";
        userList.innerHTML=`CHECK NETWORK`
        document.body.append(userList);
    }
}
getUser();