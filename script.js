let cardTitle = ["ANDROID","IOS","MARKETING COMMUNICATION","PYTHON","RPA","BLOCKCHAIN","JAVA WEB","MS DOTNET","QC / TEST ENGINEER (AUTOMATION)","SALES (S/W INTERNATIONAL)","CONTENT STRATEGY ","JAVASCRIPT BACK-END","MS SHAREPOINT","QC / TEST ENGINEER (MANUAL)","DEVOPS / CLOUD (AWS, MS AZURE, GCP)","JAVASCRIPT FRONT-END","PHP","QC / TEST ENGINEER (PERFORMANCE)","UX / UI DESIGNER","FLUTTER"]


let cardDiv = document.querySelector(".content")
const displayElement = ()=> {
    cardTitle.forEach(e=> {
        let div = document.createElement("div")
    div.innerHTML = `  <div class="card m-3 p-2">
                        <a class="text-decoration-none" href="">
                            <div class="col-12 d-flex title">
                                <div class="col-9"><h1 class="">${e}</h1> </div><div class="col-3"><i class="ri-checkbox-circle-fill fs-3 ms-5"></i></div>
                                </div>
                                
                                <div class="col-12 mt-1 dips">
                                <p><i class="ri-arrow-right-double-line"></i> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, reprehenderit?</p>
                                <p><i class="ri-arrow-right-double-line"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p><i class="ri-arrow-right-double-line"></i> Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                            </div>
                        </a>
                        </div>`
                        // console.log(div)
                        cardDiv.appendChild(div)
    })
}
displayElement()

