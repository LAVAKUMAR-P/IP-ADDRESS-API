//heading
const heading = document.createElement("div");
heading.className = "card-heading";
heading.innerHTML="&#127881 HERE YOU CAN SEE YOUR DETAILS &#127881"
document.body.append(heading);

//TO APPEND DATA TO UI
function loadUsers(users) {
    let user=users;
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
                         <div>
                         REGION
                         </div>

                         <div>
                         : ${user.region}
                         </div>

                         <div>
                         CITY
                        </div>

                        <div>
                         : ${user.city}
                        </div>

                        <div>
                        NETWORK
                        </div>

                        <div>
                         : ${user.org}
                         </div>

                        <div>
                        CONTINENT CODE
                        </div>

                        <div>
                         : ${user.continent_code}
                        </div>

                        <div>
                        COUNTRY 
                        </div>

                        <div>
                        : ${user.country}
                        </div>

                        <div>
                        YOUR IP ADDRESS
                        </div>

                        <div> 
                        :${user.ip}
                        </div>

                        <div>
                        CAPITAL
                        </div>

                        <div>
                         : ${user.country_capital}
                        </div>

                        <div>
                        COUNTRY AREA
                        </div>

                        <div>
                         : ${user.country_area}
                        </div>

                        <div>
                        POPULATION
                        </div>

                        <div>
                         : ${user.country_population}
                        </div>

                        <div>
                        REGION CODE
                        </div> 

                        <div>
                        : ${user.region_code}
                        </div>

                        <div>
                        POSTAL
                        </div>

                        <div>
                         : ${user.postal}
                        </div>

                        <div>
                        TIMEZONE
                        </div>

                        <div>
                         : ${user.timezone}
                        </div>

                        <div>
                        LATITUDE & LONGITUDE
                        </div>

                        <div>
                         : ${user.latitude} AND ${user.longitude}
                         </div>
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
        alert("CHECK NETWORK");
        const userList = document.createElement("div");
        userList.className = "user-list";
        userList.innerHTML=`CHECK NETWORK`
        document.body.append(userList);
    }
}
getUser();
