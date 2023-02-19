let AddTitleId = document.getElementById("AddTitleId");
let AddTextId = document.getElementById("AddTextId");
let addImageId = document.getElementById("addImageId");
let postButton = document.getElementById("postButton");
let updateButton = document.getElementById("updateButton");
let reqValidation1=document.getElementById("reqValidation1");
let reqValidation2 = document.getElementById("reqValidation2");
let reqValidation3 = document.getElementById("reqValidation3");

let added_value = localStorage.getItem("addedKey");
if(added_value=='added'){
    updateButton.style.display = "none"
    localStorage.removeItem("addedKey")


}
let edited_value = localStorage.getItem("editedKey");
if(edited_value=='edit'){
    postButton.style.display = "none"
    localStorage.removeItem("editedKey")

}


postButton.onclick=function(){
    
    if (AddTitleId.value === ""){
        reqValidation1.textContent="required*"
        reqValidation1.classList.add("val-color");
    
    }
    if (AddTextId.value === ""){
        reqValidation2.textContent="required*"
        reqValidation2.classList.add("val-color");
    }
    if (addImageId.value === ""){
        reqValidation3.textContent="required*"
        reqValidation3.classList.add("val-color");
    }
    
    localStorage.removeItem("addedKey")

    let localValues = localStorage.getItem("containerData");
    let values = JSON.parse(localValues);
    let uniqueNo = values.length;

    uniqueNo=uniqueNo+1;
    userEnteredTitle = AddTitleId.value;
    userEnteredText = AddTextId.value;
    userImage = addImageId.value;
    
    let newImg = userImage.slice(12)
    let newPath = "file:///C:/Users/HARSHA/OneDrive/Pictures/Screenshots/" + newImg
    
    
    
    let obj1 ={
        "title":userEnteredTitle,
        "text":userEnteredText,
        "imgsrc":newPath,
        "uniqueNo":uniqueNo
    }
    localStorage.setItem("obj1",JSON.stringify(obj1));
    
    if(AddTitleId.value !== "" && AddTextId.value !== "" && addImageId.value!== "" ){
        window.location.href = "home.html"
    }

};

let localTitle = localStorage.getItem("elemTitle");
let localText = localStorage.getItem("elemText");
let localImage = localStorage.getItem("elemImage");

let localUnique = localStorage.getItem("elemUnique");



let updatedObject ={
    "title":localTitle,
    "text":localText,
    "imgsrc":localImage,
    "uniqueNo":localUnique
}

let newImg1 = localImage.slice(54)
AddTitleId.value = localTitle
AddTextId.value = localText



function updateData(){
    if (AddTitleId.value === ""){
        reqValidation1.textContent="required*"
        reqValidation1.classList.add("val-color");
    
    }
    if (AddTextId.value === ""){
        reqValidation2.textContent="required*"
        reqValidation2.classList.add("val-color");
    }
    if (addImageId.value === ""){
        reqValidation3.textContent="required*"
        reqValidation3.classList.add("val-color");
    }
    localStorage.removeItem("editedKey")

    userEnteredTitle = AddTitleId.value;
    userEnteredText = AddTextId.value;
    newImageElement = addImageId.value;

    if(newImageElement !==  ""   ){
        let newImg = newImageElement.slice(12)
        latestUserImage = "file:///C:/Users/HARSHA/OneDrive/Pictures/Screenshots/"+ newImg
        console.log(newImg.value);
    }
    else{
        latestUserImage = localImage
    }

    let newObj ={
        "title":userEnteredTitle,
        "text":userEnteredText,
        "imgsrc":latestUserImage,
        "uniqueNo":localUnique
    }
    localStorage.setItem("newObj",JSON.stringify(newObj));
    
    if(AddTitleId.value !== "" && AddTextId.value !== "" && addImageId.value !== ""){
        window.location.href = "home.html"
    }
}