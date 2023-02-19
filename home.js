let topContainer = document.getElementById("topContainer");
let updateButton = document.getElementById("updateButton");
let addMoreButton = document.getElementById("addMoreButton");



function createAndAppendBlog(element){
    let elementId = element.uniqueNo;
    let mainContainerdiv = document.createElement("div");
    mainContainerdiv.classList.add("col-sm-12","col-md-6","col-lg-3","m-0");
    topContainer.appendChild(mainContainerdiv);
    mainContainerdiv.id=elementId;



    let divElement = document.createElement("div");
    divElement.classList.add("card");
    divElement.id="cardContainer";
    
    function myFunction(x) {
        if (x.matches) { // If media query matches
            divElement.style="width: 100rem; height:35rem";
        } else{
            divElement.style="height:35rem";
        }
      }
      
      var x = window.matchMedia("(max-width: 120px)")
      myFunction(x) // Call listener function at run time
    //   x.addListener(myFunction)
    mainContainerdiv.appendChild(divElement);


    let imgElement = document.createElement("img");
    imgElement.classList.add("card-img-top");
    imgElement.alt="...";
    imgElement.id="imageElement";
    imgElement.src=element.imgsrc;
    divElement.appendChild(imgElement);

    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body");
    divElement.appendChild(cardBodyDiv);

    let headElement = document.createElement("h5");
    headElement.classList.add("card-title");
    headElement.id="headingElement";
    headElement.textContent=element.title;
    cardBodyDiv.appendChild(headElement);

    let textElement = document.createElement("p");
    textElement.classList.add("card-text");
    textElement.id="paraElement";
    textElement.textContent=element.text;
    cardBodyDiv.appendChild(textElement)

    let editElement = document.createElement("i");
    editElement.classList.add("fa", "fa-edit","edit-icon");
    cardBodyDiv.appendChild(editElement);

    let deleteElement = document.createElement("i");
    deleteElement.classList.add("fas","fa-trash-alt","delete-icon");
    cardBodyDiv.appendChild(deleteElement);
    deleteElement.onclick=function(){
        deleteBlog(elementId);
    }
    editElement.onclick=function(){
        editBlogElement(elementId); //3
    }

    localStorage.removeItem("elemTitle")
    localStorage.removeItem("elemText")
};

function addMore(){
    localStorage.setItem("addedKey","added")
}
function localStorageVal(){
    let flag  = localStorage.getItem("flag")
    if(flag=="" || flag==null){
        return 0
    }
    else{
        return flag
    }
 }

localStorage.setItem("deleted_value",null)

function deleteBlog(elementId){
    let deleteElement = document.getElementById(elementId);
    topContainer.removeChild(deleteElement)

    localStorage.setItem("deleted_value",elementId)

    let index = containerContent.findIndex(obj => obj.uniqueNo == elementId)
    for (let element of containerContent){
        let unique_id = element.uniqueNo
        if(unique_id===elementId){
            
            containerContent.splice(index,1)
            localStorage.setItem("containerData",JSON.stringify(containerContent));
        }
    }
};

function editBlogElement(elementId){
    localStorage.setItem("editedKey","edit")

    let data  = localStorage.getItem("containerData")
    let containerListData = JSON.parse(data)
    for (let element of containerListData){
        let uniqueId = element.uniqueNo
        if(elementId==uniqueId){
            // console.log(element)
            window.location.href = "add.html"
            localStorage.setItem("elemTitle",(element.title))
            localStorage.setItem("elemText",element.text)
            localStorage.setItem("elemImage",(element.imgsrc))
            localStorage.setItem("elemUnique",(element.uniqueNo))
        }
    }

}


let containerList=[
    
    {
        title:"Waltair Veeraya",
        text:"The father of Waltair Veeraya is a revered man in a village and his son Bala Simha Reddy settles in the USA.When his father gets killed in the village ...",
        imgsrc:"https://www.cinejosh.com/newsimg/newsmainimg/megastar-chiranjeevi-in--as-waltair-veerayya-teaser-arrived_b_2410221122.jpg",
        uniqueNo:1
    },
    {
        title:"Varasudu",
        text:"The movie is a bilingual action drama, which will be released in Tamil as Varisu and in Telugu as Varasudu. The film is releasing as the ...",
        imgsrc:"https://cdn.gulte.com/wp-content/uploads/2022/06/Vaarasudu-first-look.jpeg",
        uniqueNo:2
    }

];


let changeTitle = localStorage.getItem("MovieTitle");
let changeText = localStorage.getItem("MovieText");
let changeImage = localStorage.getItem("MovieImage");
let changeUnique = localStorage.getItem("MovieNo");



function retriveDataFromLocalStorage(){
    let contanierData = localStorage.getItem("containerData")
    let containerListData = JSON.parse(contanierData)
    if(containerListData=="" || containerListData==null){
        return []
    }
    else{
        return containerListData
    }
}



let containerContent =  retriveDataFromLocalStorage()


let contLength = containerContent.length

let obj1 = localStorage.getItem("obj1")
let newObj = JSON.parse(obj1)
if(newObj!=null){
    let del_val = localStorage.getItem("deleted_value")
    let insideUniqueId = newObj.uniqueNo || 0
    
    localStorage.setItem("deleted_value",null)
    if(contLength != insideUniqueId && del_val != insideUniqueId){
        containerContent.unshift(newObj) 
        localStorage.removeItem("obj1")
    }
}

let latestObj = localStorage.getItem("newObj")
let latestObject = JSON.parse(latestObj)


if(latestObject != null){
    let uniqueNumber = latestObject.uniqueNo
    let index = containerContent.findIndex(obj => obj.uniqueNo == uniqueNumber)
    
    containerContent[index] = latestObject
    localStorage.removeItem("newObj")

}
    

localStorage.setItem("containerData",JSON.stringify(containerContent));



for (let element of containerContent){
    
    createAndAppendBlog(element);
}