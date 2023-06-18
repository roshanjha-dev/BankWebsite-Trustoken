var RAFVal = null;


ListReader();
const interval1 = setInterval(() => {
    if(ClientListReader != undefined){
        clearInterval(interval1);
        for(var i=0; i<ClientListReader.length; i++){
            if(ClientListReader[i] == "CDAC INDIA TrusToken 0"){
                Connect(ClientListReader[i]);
                const intervalConnect = setInterval(() =>{
                    if(TokenConnectStatus == true){
                        
                        var usbBulb = document.getElementById('usbBulb');
                        usbBulb.classList.add('connected');
                        
                        Start_RAF_Process();
                        const intervalHCF = setInterval(async () => {
                            Start_HCF_Process();
                            await console.log("HCF Status: " + HCFStatus);
                        }, 3000);
                        clearInterval(intervalConnect);
                    }
                }, 3000); 

            }
        }
        
    }
}, 3000);


document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("RAFStatus from FE: " + RAFStatus);

    if(RAFStatus == true){
        try {
            const response = await axios.post('/login', {
                email: email,
                password: password,
                RAF: RAFStatus
            });

            console.log(response);
            // Handle the response and perform the redirect if needed
            if (response.status === 200) {
                console.log(response);
                

                window.location.href = "/homepage"; // Redirect to the homepage
                Start_HCF_Process();
            } else {
                console.log("Login unsuccessful");
                // Handle unsuccessful login
            }
        } catch (error) {
            console.log(error);
            // Handle errors
        }
    }
    else{
        console.log("Remote Authentication in process!!!");
    }
});



// document.getElementById("loginForm").addEventListener("submit", async function(event) {
//     event.preventDefault();
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     console.log(RAFStatus)
         
//     await fetch('/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             email: email,
//             password: password,
//             RAF: RAFStatus
//         })
//     })
    
// });


