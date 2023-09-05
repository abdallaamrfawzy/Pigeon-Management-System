let appendEle = document.querySelector(".append-section");
let lies = document.querySelectorAll("header .nav .nav-ul li");
let appendAdd = document.querySelector(".append-add");
let header = document.querySelector(".header");
let home = `
<section class="home-section">
                <h1>
                    <span class="span-h1"></span>
                    <span class="span2-h1">
                        your all-in-one solution for managing your
                        personal pigeon birds
                    </span>
                </h1>
                <p class="p-home">
                    This system is specifically designed to cater to all your pigeon raising needs, letting you focus on
                    what you love without worrying about the nitty-gritty details.
                    From the homepage, you can easily access all the different sections of the system. Review and manage
                    all your existing birds under 'Show the Birds', or add a new pigeon using our simple 'Add Bird'
                    tools.
                    The 'Bird Feeder' section allows you to keep track of your pigeons' feeding schedule, with detailed
                    information on types and quantities being fed. In 'Bird Profiles', you can access detailed
                    information about each bird, including health, breed, age, and any other relevant information.
                    With 'View A Report', you can view detailed reports about your birds and any other relevant data,
                    such as performance in races or progress in training. Lastly, with 'Bird Finance', you can oversee
                    all the financial aspects of bird care, including expense tracking and recording of sales and
                    purchase transactions.
                    At 'Pigeon Keeper', we aim to make pigeon care simpler and more efficient. Discover how we can help
                    you enjoy your pigeon companionship today.
                </p><button class="start-btn">Get Start</button>
</section>
`;
let showBirds = `
<section class="show-birds">
                <div class="btns-show">
                    <button class="all active-btn">Show All Birds</button>
                    <button class="old">Show Old Birds Only</button>
                    <button class="young">Show Young Birds Only</button>
                    <button class="eggs">Show Eggs Only</button>
                </div>
                <div class="flex-in-grid">
                    <div class="div-num-birds">
                        <div class="num-birds"></div>
                    </div>
                    <div class="div-show-h1">
                        <h1 class="Show-h1">All birds</h1>
                    </div>
                </div>
                <div class="clickHere" style="display:none">
                  <i class="fa-sharp fa-solid fa-arrow-down down"></i>
                  <span>Click Here To Add Birds</span>
                </div>
                <div class="btns-add">
                    <div class="openAndClose">
                        <span class="span1 spanOne"></span>
                        <span class="span2 spanTwo"></span>
                        <i class="fa-solid fa-close" style="display:none;"></i>
                    </div>
                    <div class="menu" style="display: none;">
                        <span class="add-old">Add An Old Bird</span>
                        <span class="add-young">Add A Young Bird</span>
                        <span class="add-egg">Add An Egg</span>
                        <span class="edit-bird">Edit Birds</span>
                    </div>
                </div>
                <table class="show">
                    <thead class="thead">
                        <tr>
                            <td class="first-td">Id</td>
                            <td>Name</td>
                            <td>Birth Day</td>
                            <td>Age</td>
                            <td>Kind</td>
                            <td class="last-td-id2">Partner ID Or Parent Id</td>
                            <td>Bird Stage</td>
                            <td class="last-td">Edit</td>
                        </tr>
                    </thead>
                    <tbody class="show-birds-in-tbody">
                    </tbody>
                </table></section>
`;
let birdFeeder = `
  <div class="birdFeeder">
    <div class="form">
      <h1>Food information</h1>
      <div class="inputs">
        <label for="KgMillet">Write down the usual weight to buy "Millet"</label>
        <input type="number" id="KgMillet"/>
        <span class="error-KgMillet" style="color:red; display: none;">You Must Writ The usual weight to buy "Millet" </span>
        <label for="KgBean">Write down the usual weight to buy "Bean"</label>
        <input type="number" id="KgBean"/>
        <label for="Date">Write down the usual feeding regimen</label>
        <input type="number" id="Date"/>
        <span class="error-date" style="color:red; display: none;">You Must Writ The usual feeding regimen</span>
      </div>
      <div class="radios">
        <span class="error-Am-Pm" style="color:red; display: none;">Please select a time of day (Am or Pm).</span>
        <input type="radio" name="date" id="pm" class="pm" />
        <label for="pm">Pm</label>
        <input type="radio" name="date" id="am" class="am" />
        <label for="am">Am</label>
      </div>
      <div class="div-save">
        <button class="save save-info-food">Save</button>
      <div>
    </div>
  </div>
`;
let addOldDiv = `
<div class="addDiv addOldYoung" >
<div class="form">
    <h1>Add an Old Bird</h1>
    <i class="fa-sharp fa-solid fa-circle-xmark close"></i>
    <div class="inputs">
        <label for="user">Write The Name Of bird</label>
        <input type="text" class="user-old user" id="user" />
        <span class="error-found-name" style="color:red; display: none;">This name is already in use</span>
        <span class="error-user-old" style="color:red; display: none;">You Must Write The Name Of
            Bird</span>
        <label for="date">Write The Birth Day Of bird</label>
        <input type="date" name="" class="date-old date" id="date" max="">
        <span class="error-date-old" style="color:red; display: none;">You Must Write The Date Of
            Bird</span>
    </div>
    <div class="radios">
        <span class="error-radio-old" style="color:red; display: none;">You Must Choose The Kind Of
            Bird</span>
        <input type="radio" name="Kind" id="male" class="male-old" />
        <label for="male">Male</label>
        <input type="radio" name="Kind" id="female" class="female-old" />
        <label for="female">Female</label>
    </div>
    <label for="id" class="label-id">Please Write the Id Of Partner</label>
    <input type="number" name="" class="id-old" id="id" />
    <span class="error-Partner-old" style="color:red; display: none;">Not Found Bird With This Id</span>
    <span class="error-Partner-found-old" style="color:red; display: none;">The bird with this id already has a partner</span>
    <span class="success-old" style="color:green; display: none;margin-left:20px;">Saved successfully</span>
    <div class="saveCancel">
        <button class="save save-old">Save</button>
        <button class="Cancel">Cancel</button>
    </div>
</div>
</div>
`;
let addYoungDiv = `
<div class="addYoung" >
            <div class="form">
                <h1>Add an Young Bird</h1>
                <i class="fa-sharp fa-solid fa-circle-xmark close"></i>
                <div class="inputs">
                    <label for="user">Write The Name Of bird</label>
                    <input type="text" class="user-old user" id="user" />
                    <span class="error-found-name" style="color:red; display: none;">This name is already in use</span>
                    <span class="error-user-old" style="color:red; display: none;">You Must Write The Name Of
                        Bird</span>
                    <label for="date">Write The Birth Day Of bird</label>
                    <input type="date" name="" class="date-old date" id="date" max="">
                    <span class="error-date-old" style="color:red; display: none;">You Must Write The Date Of
                        Bird</span>
                </div>
                <label for="id" class="label-id">Please Write the Id Of Parent</label>
                <input type="number" name="" class="id-old" id="id" />
                <span class="error-Partner-old" style="color:red; display: none;">Not Found Bird With This Id</span>
                <span class="success-old" style="color:green; display: none;margin-left:20px;">Saved successfully</span>
                <div class="saveCancel">
                    <button class="save save-old">Save</button>
                    <button class="Cancel">Cancel</button>
                </div>
            </div>
        </div>
`;
let addEggDiv = `
<div class="addEgg addDiv">
  <div class="form">
      <h1>Add An Egg</h1>
      <i class="fa-sharp fa-solid fa-circle-xmark close"></i>
      <div class="inputs">
        <label for="date">Write The Birth Day Of bird</label>
        <input type="date" name="" class="date-egg date" id="date" max="">
        <span class="error-date-egg" style="color:red; display: none;">You Must Write The Date Of
          Bird</span>
        <label for="id" class="id-egg-label">Please Write the Id Of Parent</label>
        <input type="number" name="" class="id-egg" id="id" />
        <span class="error-Partner-egg" style="color:red; display: none;">You Must Write The id Of
        Parent</span>
        <span class="error-Partner-egg2" style="color:red; display: none;">Not Found Bird With This
        Id</span>
      </div>
      <div class="saveCancel">
        <span class="success-egg" style="color:green; display: none;margin-left:20px;">Saved
            successfully</span>
        <button class="save save-egg">Save</button>
        <button class="Cancel">Cancel</button>
      </div>
  </div>
</div>
`;
let editBirdsDiv = `
<div class="editBird addDiv">
        <div class="form">
            <h1>Edit Birds</h1>
            <i class="fa-sharp fa-solid fa-circle-xmark close"></i>
            <div class="inputs">
                <label for="idToEdit" id="labelId" style="display: none;">Id Of Bird:</label>
                <label for="idToEdit" id="labelIdEdit">Write The Id Of Bird To Edit It</label>
                <input type="number" id="idToEdit" />
                <span class="error-id-edit" style="color:red; display: none;">You Must Write The Id Of Bird To Edit
                    It</span>
                <span class="error-not-found not-found-bird" style="color:red; display:none;">Not Found bird With this Id</span> 
                
            </div>
            <div class="divShowDate" style="display: none;">
                <label for="edit-name-old" class="label-name">Name Of bird</label>
                <input type="text" class="edit-name-old" id="edit-name-old" />
                <span class="error-name-edit" style="color:red; display:none; margin-left:-15px;">You Must Write The
                    Name Of bird</span>
                <span class="errorFound" style="color:red; display:none; margin-left:-15px;">This name is
                    already in use</span>
                <label for="edit-date-old" class="label-date">Birth Day Of bird</label>
                <input type="date" class="edit-date-old" id="edit-date-old" />
                <span class="error-date-edit" style="color:red; display:none; margin-left:-15px;">You Must Write The
                    Date Of bird</span>
                <label for="birdStage" class="label-birdStage">Bird Stage</label>
                <input type="text" class="birdStage" id="birdStage" readonly>
                <label for="partner-edit" class="partner-label">Partner Id</label>
                <label for="partner-edit" class="partner-label-young">Parent Id</label>
                <input type="number" class="partner-edit" id="partner-edit" />
                <span class="error-not-found-edit" style="color:red; display:none; margin-left:-15px;">Not Found Bird
                    With This Id </span>
    <span class="error-Partner-found-edit" style="color:red; display: none;">The bird with this id already has a partner</span>
    <span class="error-Partner-must" style="color:red; display: none;" style="display:none;">You Must write The Id Of Parent</span>
                <span class="error-partner-2" style="color:red; display:none; margin-left:-15px;">Can Not Write ID Of
                    This Bird In This Input</span>
                <div class="radios">
                    <input type="radio" name="kind-edit" id="male-edit-old" />
                    <label for="male-edit-old">Male</label>
                    <input type="radio" id="female-edit-old" name="kind-edit" />
                    <label for="female-edit-old">Female</label>
                </div>
            </div>
            <div class="saveCancel">
                <div class="spans-success">
                    <span class="success-delete" style="color:green; display: none;margin-left:20px;">Delete
                        successfully</span>
                    <span class="success-edit" style="color:green; display: none;margin-left:20px;">Edit
                        successfully</span>
                </div>
                <button class="save edit-btn">Edit</button>
                <button class="save save-btn" style="display: none;">Save</button>
                <button class="save delete-btn" style="display: none;">Delete</button>
                <button class="Cancel">Cancel</button>
            </div>
        </div>
    </div>
`;
let BirdProfiles = `
  <div class="formProfile">
    <h1>Bird Profile</h1>
    <div class="inputs">
      <label for="id-profile">Write The Id Of Bird To View Profile</label>
      <input type="text" id="id-profile" class="id-profile"/>
      <span class="error-id-profile-must" style="color:red; display:none;">You Must Write The Id Of Bird</span>
      <span class="error-id-profile-not" style="color:red; display:none;">Not Found bird With this Id</span>
    </div>
    <div class="show-profile" style="display:none">
        <div class="div-img">
            <div class="div-show-img">
                <i class="fa-sharp fa-solid fa-circle-xmark close" style="display:none"></i>
                <img src="" class="show-img" style="display:none" />
                <div class="menu-img" style="display:none">
                    <span class="show-img-span">Show Imag</span>
                    <span class="update-img-span">Update Img</span>
                </div>
            </div>
            <div class=" btn-img" style="display:none;">
                <i class="fa-solid fa-camera"></i>
                <i class="fa-solid fa-plus"></i>
            </div>
            <input type="file" class="upload-img" style="display:none;">
        </div>
        <div class="show-info" >
        <div class="inputs-show-info">
            <label for="id">Id Of Bird</label>
            <input type="number" class="id" id="id" readonly>
            <label for="name" class="label-name">Name Of Bird</label>
            <input type="text" class="name" id="name" readonly>
            <label for="birth-day">Birth Day Of Bird</label>
            <input type="date" class="birth-day" id="birth-day" readonly>
            <label for="age">Age Of Bird</label>
            <input type="text" id="age" class="age" readonly>
            <label for="bird-stage">Bird Stage</label>
            <input type="text" class="bird-stage" id="bird-stage" readonly>
            <label for="id2" class="label-id2" >Parent ID</label>
            <input type="number" class="id2" id="id2" readonly>
            <label for="kind" class="label-kind">Kind Of Bird</label>
            <input type="text" class="kind" id="kind" readonly>
        </div>
        <div class="p-div">
          <p class="text-calc"></p>
        </div>
        <div class="buttons">
            <button class="show-partner">Show Parent</button>
            <button class="show-children" style="display:none">Show Children</button>
            <button class="cancel">Cancel</button>
        </div>
    </div>
    </div>
    <div class="show-children-div" style="display:none">
      
    </div>
    <div class="saveCancel">
      <button class="next-profile">Next</button>
    </div>
  </div>
`;

appendEle.innerHTML = home;
window.sessionStorage.setItem("new", "Yes");
function getNumOfBirds(name, span) {
  let num = 0;
  for (let i = 1; i <= localStorage.length; i++) {
    if (window.localStorage.getItem(`${name}${i}`)) {
      ++num;
    }
  }
  span.innerHTML = num;
}
function getNumOfAllBirds(span) {
  let num = 0;
  for (let i = 1; i <= localStorage.length; i++) {
    if (
      window.localStorage.getItem(`bird${i}`) ||
      window.localStorage.getItem(`birdYoung${i}`) ||
      window.localStorage.getItem(`Egg${i}`)
    ) {
      ++num;
    }
  }
  span.innerHTML = num;
}
function liFunction() {
  lies.forEach((li) => {
    li.addEventListener("click", function () {
      let liActive = document.querySelector(".active");
      liActive.classList.toggle("active");
      li.classList.toggle("active");
    });
    li.addEventListener("click", function () {
      if (li.classList.contains("li-show")) {
        appendEle.innerHTML = "";
        appendEle.innerHTML = showBirds;
        li.classList.add("active");
        let numBirds = document.querySelector(".num-birds");
        let spanBirdsNum = document.createElement("span");
        numBirds.innerHTML = "All Birds : ";
        getNumOfAllBirds(spanBirdsNum);
        numBirds.appendChild(spanBirdsNum);
        openAndCloseFunction();
        ScrollReveal().reveal(".btns-show", { origin: "top" });
        ScrollReveal().reveal(".btns-add", { origin: "bottom" });
        ScrollReveal().reveal(".div-show-h1", { origin: "bottom" });
        ScrollReveal().reveal(".div-num-birds", { origin: "bottom" });
        ScrollReveal().reveal(".show", { origin: "top" });
        btnShow();
        showAllBirds();
        deleteBtnFunction();
        calcIndex();
        if (window.sessionStorage.getItem("new")) {
          let clickHere = document.querySelector(".clickHere");
          clickHere.style.display = "block";
        }
        growYoungAndEgg();
      } else if (li.classList.contains("home")) {
        appendEle.innerHTML = "";
        appendEle.innerHTML = home;
        li.classList.add("active");
        ScrollReveal().reveal(".span-h1", { origin: "top" });
        ScrollReveal().reveal(".span2-h1", { origin: "bottom" });
        ScrollReveal().reveal(".p-home", { origin: "bottom" });
        ScrollReveal().reveal(".start-btn", { origin: "left" });
        getStart();
        writTextAuto();
      } else if (li.classList.contains("li-feeder")) {
        appendEle.innerHTML = "";
        appendEle.innerHTML = birdFeeder;
        li.classList.add("active");
      } else if (li.classList.contains("li-profiles")) {
        appendEle.innerHTML = "";
        appendEle.innerHTML = BirdProfiles;
        li.classList.add("active");
        BirdProfile();
      }
    });
  });
}
liFunction();
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
let liHome = document.querySelector(".home");
if (liHome.classList.contains("active")) {
  getStart();
  writTextAuto();
}
ScrollReveal().reveal(".span-h1", { origin: "top" });
ScrollReveal().reveal(".span2-h1", { origin: "bottom" });
ScrollReveal().reveal(".p-home", { origin: "bottom" });
ScrollReveal().reveal(".start-btn", { origin: "left" });

function openAndCloseFunction() {
  let menu = document.querySelector(".menu");
  let openAndClose = document.querySelector(".openAndClose");
  let spanOne = document.querySelector(".openAndClose .span1");
  let spanTwo = document.querySelector(".openAndClose .span2");
  let clickHere = document.querySelector(".clickHere");
  openAndClose.addEventListener("click", function () {
    if (menu.style.display === "none") {
      if (window.sessionStorage.getItem("new")) {
        window.sessionStorage.removeItem("new");
        clickHere.style.display = "none";
      }
      menu.style.display = "flex";
      AddOldFunction();
      AddYoungFunction();
      AddEggFunction();
      AddEditFunction();
    } else {
      menu.style.display = "none";
    }
    openAndClose.classList.toggle("openAndClose-click");
    spanOne.classList.toggle("span1");
    spanTwo.classList.toggle("span2");
    spanOne.classList.toggle("spanOneClose");
    spanTwo.classList.toggle("spanTwoClose");
  });
}

function btnShow() {
  let btnShowAll = document.querySelector(".show-birds .btns-show .all");
  let btnShowOLd = document.querySelector(".show-birds .btns-show .old");
  let btnShowYoung = document.querySelector(".show-birds .btns-show .young");
  let btnShowEgg = document.querySelector(".show-birds .btns-show .eggs");
  let btnActive = document.querySelector(".show-birds .btns-show .active-btn");
  let showBirdsInTbody = document.querySelector(".show-birds-in-tbody");
  let divShowH1 = document.querySelector(".div-show-h1");
  let ShowH1 = document.querySelector(".Show-h1");
  btnShowAll.addEventListener("click", function () {
    btnShowAll.classList.toggle("active-btn");
    btnActive.classList.toggle("active-btn");
    ShowH1.innerHTML = "All birds";
    showBirdsInTbody.innerHTML = "";
    showAllBirds();
    let numBirds = document.querySelector(".num-birds");
    let spanBirdsNum = document.createElement("span");
    numBirds.innerHTML = "All Birds : ";
    getNumOfAllBirds(spanBirdsNum);
    numBirds.appendChild(spanBirdsNum);
    divShowH1.classList.remove("show-young-h1");
    btnUpdateFunction();
  });
  btnShowOLd.addEventListener("click", function () {
    btnShowOLd.classList.toggle("active-btn");
    btnActive.classList.toggle("active-btn");
    showBirdsInTbody.innerHTML = "";
    ShowH1.innerHTML = "Old birds Only";
    ShowH1.style.left = "-30%";
    showDataOldFunction();
    let numBirds = document.querySelector(".num-birds");
    let spanBirdsNum = document.createElement("span");
    numBirds.innerHTML = "Old Birds : ";
    getNumOfBirds("bird", spanBirdsNum);
    numBirds.appendChild(spanBirdsNum);
    divShowH1.classList.remove("show-young-h1");
    btnUpdateFunction();
  });
  btnShowYoung.addEventListener("click", function () {
    btnShowYoung.classList.toggle("active-btn");
    btnActive.classList.toggle("active-btn");
    ShowH1.innerHTML = "Young birds Only";
    divShowH1.classList.add("show-young-h1");
    showBirdsInTbody.innerHTML = "";
    showDataYoungFunction();
    let numBirds = document.querySelector(".num-birds");
    let spanBirdsNum = document.createElement("span");
    numBirds.innerHTML = "Young Birds : ";
    getNumOfBirds("birdYoung", spanBirdsNum);
    numBirds.appendChild(spanBirdsNum);
    btnUpdateFunction();
  });
  btnShowEgg.addEventListener("click", function () {
    btnShowEgg.classList.toggle("active-btn");
    btnActive.classList.toggle("active-btn");
    ShowH1.innerHTML = "Eggs Only";
    showBirdsInTbody.innerHTML = "";
    showDataEggFunction();
    let numBirds = document.querySelector(".num-birds");
    let spanBirdsNum = document.createElement("span");
    numBirds.innerHTML = "Egg : ";
    getNumOfBirds("Egg", spanBirdsNum);
    numBirds.appendChild(spanBirdsNum);
    divShowH1.classList.remove("show-young-h1");
    btnUpdateFunction();
  });
}
function disabledBody() {
  appendEle.style.opacity = ".3";
  header.style.opacity = ".5";
  let btnDelete = document.querySelectorAll(".delete");
  lies.forEach((li) => {
    li.addEventListener("click", function () {
      let liShow = document.querySelector(".li-show");
      appendEle.innerHTML = showBirds;
      showDataOldFunction();
      openAndCloseFunction();
      li.classList.remove("active");
      liShow.classList.add("active");
      let numBirds = document.querySelector(".num-birds");
      let spanBirdsNum = document.createElement("span");
      numBirds.innerHTML = "All Birds : ";
      getNumOfAllBirds(spanBirdsNum);
      numBirds.appendChild(spanBirdsNum);
    });
  });
  if (
    window.localStorage.getItem("bird1") ||
    window.localStorage.getItem("birdYoung1") ||
    window.localStorage.getItem("Egg1")
  ) {
    btnDelete.forEach((btn) => {
      btn.disabled = true;
    });
  }
}
let index;
function calcIndex() {
  let showBirdsInTbody = document.querySelector(".show-birds-in-tbody");
  let tr = document.querySelectorAll(".show .show-birds-in-tbody tr");
  let indexes = [];
  if (showBirdsInTbody.innerHTML === "") {
    index = 1;
  } else {
    tr.forEach((tr) => {
      let tdAge = document.querySelectorAll(
        `.show .show-birds-in-tbody tr .id`
      );
      tdAge.forEach((td) => {
        indexes.push(td.className.slice(0, 1));
      });
    });
    let max = Math.max(...indexes);
    index = +max + 1;
  }
}

function AddOldFunction() {
  let addOld = document.querySelector(".add-old");
  addOld.addEventListener("click", function () {
    appendAdd.innerHTML = "";
    appendAdd.innerHTML = addOldDiv;
    disabledBody();
    closeOld();
    formOld();
  });
}
function AddYoungFunction() {
  let addYoung = document.querySelector(".add-young");
  addYoung.addEventListener("click", function () {
    appendAdd.innerHTML = "";
    appendAdd.innerHTML = addYoungDiv;
    disabledBody();
    closeYoung();
    formYoung();
  });
}
function AddEggFunction() {
  let addEgg = document.querySelector(".add-egg");
  addEgg.addEventListener("click", function () {
    appendAdd.innerHTML = "";
    appendAdd.innerHTML = addEggDiv;
    disabledBody();
    formEgg();
    closeEgg();
  });
}
function AddEditFunction() {
  let edit = document.querySelector(".edit-bird");
  edit.addEventListener("click", function () {
    appendAdd.innerHTML = "";
    appendAdd.innerHTML = editBirdsDiv;
    disabledBody();
    closeEdit();
    EditBirdFromEditPage();
    deleteFromEditPage();
  });
}
function close() {
  let menu = document.querySelector(".menu");
  let liShow = document.querySelector(".li-show");
  let openAndClose = document.querySelector(".openAndClose");
  let spanOne = document.querySelector(".openAndClose .spanOne");
  let spanTwo = document.querySelector(".openAndClose .spanTwo");
  let btnShowAll = document.querySelector(".show-birds .btns-show .all");
  appendEle.style.opacity = "1";
  header.style.opacity = "1";
  menu.style.display = "none";
  openAndClose.classList.toggle("openAndClose-click");
  spanOne.classList.add("span1");
  spanTwo.classList.add("span2");
  spanOne.classList.remove("spanOneClose");
  spanTwo.classList.remove("spanTwoClose");
  liFunction();
  btnShow();
  btnShowAll.click();
  showAllBirds();
  deleteBtnFunction();
  growYoungAndEgg();
  calcIndex();
}
function closeOld() {
  let Cancel = document.querySelector(".Cancel");
  let closeIcon = document.querySelector(".close");
  Cancel.addEventListener("click", function () {
    close();
    appendAdd.innerHTML = "";
  });
  closeIcon.addEventListener("click", function () {
    close();
    appendAdd.innerHTML = "";
  });
}
function closeYoung() {
  let CancelYoung = document.querySelector(".addYoung .form .Cancel");
  let closeIcon = document.querySelector(".close");
  CancelYoung.addEventListener("click", function () {
    close();
    let addYoung = document.querySelector(".addYoung");
    addYoung.style.display = "none";
  });
  closeIcon.addEventListener("click", function () {
    close();
    appendAdd.innerHTML = "";
  });
}
function closeEdit() {
  let Cancel = document.querySelector(".editBird .form .saveCancel .Cancel");
  let editBirdDiv = document.querySelector(".editBird");
  let divShowDate = document.querySelector(".divShowDate");
  let editNameOld = document.querySelector(".edit-name-old");
  let editDateOld = document.querySelector(".edit-date-old");
  let editSave = document.querySelector(".save-btn");
  let partnerEdit = document.querySelector(".partner-edit");
  let maleEditOld = document.querySelector("#male-edit-old");
  let femaleEditOld = document.querySelector("#female-edit-old");
  let deleteBtn = document.querySelector(".delete-btn");
  let BtnEdit = document.querySelector(".edit-btn");
  let labelEditId = document.querySelector("#labelIdEdit");
  let labelId = document.querySelector("#labelId");
  let inputId = document.querySelector("#idToEdit");
  let errorIdEdit = document.querySelector(".error-id-edit");
  let errorNotFound = document.querySelector(".error-not-found");
  let successDelete = document.querySelector(".success-delete");
  let successEdit = document.querySelector(".success-edit");
  let closeIcon = document.querySelector(".close");
  function resetEditAndClose() {
    successEdit.style.display = "none";
    BtnEdit.style.display = "block";
    deleteBtn.style.display = "none";
    maleEditOld.checked = false;
    femaleEditOld.checked = false;
    editSave.style.display = "none";
    editNameOld.value = "";
    editDateOld.value = "";
    editBirdDiv.style = "height:250px";
    divShowDate.style.display = "none";
    editBirdDiv.style.display = "none";
    labelEditId.style.display = "block";
    labelId.style.display = "none";
    inputId.readOnly = false;
    idToEdit.classList.remove("inputId");
    errorIdEdit.style.display = "none";
    successDelete.style.display = "none";
    errorNotFound.style.display = "none";
  }
  Cancel.addEventListener("click", function () {
    close();
    resetEditAndClose();
  });
  closeIcon.addEventListener("click", function () {
    close();
    resetEditAndClose();
  });
}
function closeEgg() {
  let Cancel = document.querySelector(".addEgg .form .saveCancel .Cancel");
  let addEgg = document.querySelector(".addEgg");
  let closeIcon = document.querySelector(".close");
  Cancel.addEventListener("click", function () {
    close();
    addEgg.style.display = "none";
  });
  closeIcon.addEventListener("click", function () {
    close();
    appendAdd.innerHTML = "";
  });
}
function formOld() {
  let saveOld = document.querySelector(
    ".addOldYoung .form .saveCancel .save-old"
  );
  let userOld = document.querySelector(".user-old");
  let dateOld = document.querySelector(".date-old");
  let maleOld = document.querySelector(".male-old");
  let femaleOld = document.querySelector(".female-old");
  let errorUserOld = document.querySelector(".error-user-old");
  let errorDateOld = document.querySelector(".error-date-old");
  let errorRadioOld = document.querySelector(".error-radio-old");
  let errorFoundName = document.querySelector(".error-found-name");
  let successOld = document.querySelector(".success-old");
  let idOld = document.querySelector(".id-old");
  let errorPartnerOld = document.querySelector(".error-Partner-old");
  let Cancel = document.querySelector(".Cancel");
  let errorPartnerFound = document.querySelector(".error-Partner-found-old");
  forms(
    "bird",
    saveOld,
    Cancel,
    userOld,
    dateOld,
    maleOld,
    femaleOld,
    errorUserOld,
    errorDateOld,
    errorRadioOld,
    errorFoundName,
    successOld,
    idOld,
    errorPartnerOld,
    errorPartnerFound
  );
}
function formYoung() {
  let saveOld = document.querySelector(".addYoung .form .save-old");
  let userOld = document.querySelector(".addYoung .form .user-old");
  let dateOld = document.querySelector(".addYoung .form .date-old");
  let errorUserOld = document.querySelector(".addYoung .form .error-user-old");
  let errorDateOld = document.querySelector(".addYoung .form .error-date-old");
  let errorFoundName = document.querySelector(
    ".addYoung .form .error-found-name"
  );
  let successOld = document.querySelector(".addYoung .form .success-old");
  let idOld = document.querySelector(".addYoung .form .id-old");
  let errorPartnerOld = document.querySelector(
    ".addYoung .form .error-Partner-old"
  );
  let Cancel = document.querySelector(".addYoung .form .Cancel");
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1; // January is 0!
  let year = today.getFullYear();
  let addDiv = document.querySelector(".addYoung");
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  let today2 = new Date();
  today2.setMonth(today2.getMonth() - 5);

  let formattedMinDate =
    today2.getFullYear() +
    "-" +
    (today2.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    today2.getDate().toString().padStart(2, "0");
  dateOld.min = formattedMinDate;

  saveOld.addEventListener("click", function () {
    showNameArray = [];
    let showName;
    let found;
    for (i = 0; i <= localStorage.length; i++) {
      if (window.localStorage.getItem(`bird${i}`)) {
        let dateObjectJS;
        dateObjectJS = JSON.parse(window.localStorage.getItem(`bird${i}`));
        showName = dateObjectJS.name;
        showNameArray.push(showName);
      }
      if (window.localStorage.getItem(`birdYoung${i}`)) {
        let dateObjectJS;
        dateObjectJS = JSON.parse(window.localStorage.getItem(`birdYoung${i}`));
        showName = dateObjectJS.name;
        showNameArray.push(showName);
      }
      if (successOld.style.display === "block") {
        break;
      }
    }
    for (i = 0; i < showNameArray.length; ) {
      if (
        userOld.value == showNameArray[i] ||
        userOld.value === showNameArray[0]
      ) {
        found = true;
      } else {
        found = false;
      }
      i++;
    }
    if (successOld.style.display === "block") {
      errorUserOld.style.display = "none";
    } else if (userOld.value === "") {
      errorUserOld.style.display = "block";
    } else if (found === true) {
      errorUserOld.style.display = "none";
      errorFoundName.style.display = "block";
    } else if (dateOld.value === "") {
      errorUserOld.style.display = "none";
      errorFoundName.style.display = "none";
      errorDateOld.style.display = "block";
    } else if (idOld.value !== "") {
      errorUserOld.style.display = "none";
      let x = 1;
      if (window.localStorage.getItem(`bird1`)) {
        for (x; x <= localStorage.length; x++) {
          let dateObjectJS = JSON.parse(
            window.localStorage.getItem(`bird${x}`)
          );
          let showId = dateObjectJS.id;
          if (+idOld.value !== +showId) {
            errorUserOld.style.display = "none";
            errorFoundName.style.display = "none";
            errorDateOld.style.display = "none";
            errorPartnerOld.style.display = "block";
          } else {
            errorUserOld.style.display = "none";
            errorPartnerOld.style.display = "none";
            saveFormOld();
            errorUserOld.style.display = "none";
            break;
          }
        }
      } else {
        errorPartnerOld.innerHTML =
          "No birds added,Do Not Write in the Input , Click Save";
        errorPartnerOld.style.display = "block";
      }
    } else {
      errorPartnerOld.style.display = "none";
      errorUserOld.style.display = "none";
      saveFormOld();
      errorUserOld.style.display = "none";
    }
  });
  today = year + "-" + month + "-" + day;
  dateOld.setAttribute("max", today);
  errorUserOld.style.display = "none";

  userOld.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      if (userOld.value === "") {
        errorUserOld.style.display = "block";
      } else {
        dateOld.focus();
      }
    }
  });
  idOld.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      saveOld.click();
    }
  });
  function saveFormOld() {
    errorFoundName.style.display = "none";
    errorUserOld.style.display = "none";
    errorDateOld.style.display = "none";
    errorPartnerOld.style.display = "none";
    errorPartnerOld.innerHTML = "Not Found Bird With This Id";
    save();
    userOld.value = "";
    dateOld.value = "";
    idOld.value = "";
    successOld.style.display = "block";
    setTimeout(() => {
      errorUserOld.style.display = "none";
      successOld.style.display = "none";
    }, 1000);
    setTimeout(() => {
      if (appendAdd.innerHTML === "") {
        return;
      } else {
        errorUserOld.style.display = "none";
        Cancel.click();
        growYoungAndEgg();
        calcIndex();
      }
    }, 1500);
  }
  function save() {
    errorUserOld.style.display = "none";
    let userValue = userOld.value;
    let dateValue = dateOld.value;
    let kind = "";
    let bird = new Object({
      id: index,
      name: userValue,
      dateOFbird: dateValue,
      kindOFbird: "",
      id2: idOld.value,
      birdStageOfBird: "birdYoung",
    });
    window.localStorage.setItem(`birdYoung${index}`, JSON.stringify(bird));
  }
}
function formEgg() {
  let success = document.querySelector(".success-egg");
  let saveBtn = document.querySelector(".save-egg");
  let date = document.querySelector(".date-egg");
  let errorDate = document.querySelector(".error-date-egg");
  let errorPartnerEgg = document.querySelector(".error-Partner-egg");
  let errorPartnerEgg2 = document.querySelector(".error-Partner-egg2");
  let idEgg = document.querySelector(".id-egg");
  let Cancel = document.querySelector(".addEgg .form .saveCancel .Cancel");
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1; // January is 0!
  let year = today.getFullYear();
  let addEgg = document.querySelector(".addEgg");
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  today = year + "-" + month + "-" + day;
  date.setAttribute("max", today);
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 21);
  const minDateValue = currentDate.toISOString().split("T")[0];
  date.setAttribute("min", minDateValue);
  saveBtn.addEventListener("click", function () {
    if (success.style.display === "block") {
      errorDate.style.display = "none";
    } else if (date.value === "") {
      errorDate.style.display = "block";
    } else {
      errorDate.style.display = "none";
      if (idEgg.value === "") {
        errorPartnerEgg.style.display = "block";
      } else {
        let x = 1;
        errorPartnerEgg.style.display = "none";
        if (window.localStorage.getItem(`bird1`)) {
          for (x; x <= localStorage.length; x++) {
            if (
              window.localStorage.getItem(`birdYoung${x}`) ||
              window.localStorage.getItem(`Egg${x}`)
            ) {
              continue;
            }
            if (window.localStorage.getItem(`bird${x}`)) {
              let dateObjectJS = JSON.parse(
                window.localStorage.getItem(`bird${x}`)
              );
              let showId = dateObjectJS.id;
              if (+idEgg.value === +showId) {
                errorDate.style.display = "none";
                errorPartnerEgg.style.display = "none";
                errorPartnerEgg2.style.display = "none";
                saveFormOld();
                break;
              }
            } else {
              errorPartnerEgg2.style.display = "block";
            }
          }
        } else {
          errorPartnerEgg2.style.display = "block";
        }
      }
    }
  });
  date.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      if (date.value === "") {
        errorUser.style.display = "block";
      } else {
        idEgg.focus();
      }
    }
  });
  idEgg.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      saveBtn.click();
    }
  });
  function saveFormOld() {
    errorDate.style.display = "none";
    errorPartnerEgg2.style.display = "none";
    errorPartnerEgg.style.display = "none";
    save();
    errorDate.style.display = "none";
    date.value = "";
    idEgg.value = "";
    success.style.display = "block";
    setTimeout(() => {
      success.style.display = "none";
    }, 1000);
    setTimeout(() => {
      if (appendAdd.innerHTML === "") {
        return;
      } else {
        Cancel.click();
        growYoungAndEgg();
        calcIndex();
      }
    }, 1500);
  }
  function save() {
    let dateValue = date.value;
    let bird = new Object({
      id: index,
      name: "",
      dateOFbird: dateValue,
      kindOFbird: "",
      id2: idEgg.value,
      birdStageOfBird: "Egg",
    });
    window.localStorage.setItem(`Egg${index}`, JSON.stringify(bird));
    growYoungAndEgg();
  }
}
function forms(
  birdStage,
  saveBtn,
  cancelBtn,
  user,
  date,
  male,
  female,
  errorUser,
  errorDate,
  errorRadio,
  errorFound,
  success,
  id2,
  errorPartner,
  errorPartner2
) {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1; // January is 0!
  let year = today.getFullYear();
  let addDiv = document.querySelector(".addDiv");
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  let today2 = new Date();
  today2.setMonth(today2.getMonth() - 5);

  let formattedMinDate =
    today.getFullYear() +
    "-" +
    (today2.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    today2.getDate().toString().padStart(2, "0");
  date.setAttribute("max", formattedMinDate);
  saveBtn.addEventListener("click", function () {
    showNameArray = [];
    let showName;
    let found;
    for (i = 0; i <= localStorage.length; i++) {
      if (window.localStorage.getItem(`bird${i}`)) {
        let dateObjectJS;
        dateObjectJS = JSON.parse(window.localStorage.getItem(`bird${i}`));
        showName = dateObjectJS.name;
        showNameArray.push(showName);
      }
      if (window.localStorage.getItem(`birdYoung${i}`)) {
        let dateObjectJS;
        dateObjectJS = JSON.parse(window.localStorage.getItem(`birdYoung${i}`));
        showName = dateObjectJS.name;
        showNameArray.push(showName);
      }
      if (success.style.display === "block") {
        break;
      }
    }
    for (i = 0; i < showNameArray.length; ) {
      if (user.value == showNameArray[i] || user.value === showNameArray[0]) {
        found = true;
      } else {
        found = false;
      }
      i++;
    }
    if (success.style.display === "block") {
      errorUser.style.display = "none";
    } else if (user.value === "") {
      errorUser.style.display = "block";
    } else if (found === true) {
      errorUser.style.display = "none";
      errorFound.style.display = "block";
    } else if (date.value === "") {
      errorUser.style.display = "none";
      errorFound.style.display = "none";
      errorDate.style.display = "block";
    } else if (female.checked != true && male.checked != true) {
      errorUser.style.display = "none";
      errorFound.style.display = "none";
      errorDate.style.display = "none";
      errorRadio.style.display = "block";
    } else if (id2.value !== "") {
      errorUser.style.display = "none";
      let x = 1;
      if (window.localStorage.getItem(`bird1`)) {
        let showId;
        let dateObjectJS;
        for (x; x <= localStorage.length; x++) {
          if (window.localStorage.getItem(`bird${x}`)) {
            dateObjectJS = JSON.parse(window.localStorage.getItem(`bird${x}`));
            showId = dateObjectJS.id;
          }
          if (+id2.value !== +showId) {
            errorUser.style.display = "none";
            errorFound.style.display = "none";
            errorDate.style.display = "none";
            errorRadio.style.display = "none";
            errorPartner2.style.display = "none";
            errorPartner.style.display = "block";
          } else {
            let id = dateObjectJS.id2;
            if (id === "") {
              errorPartner2.style.display = "none";
              errorPartner.style.display = "none";
              saveFormOld();
              break;
            } else {
              errorPartner2.style.display = "block";
              errorUser.style.display = "none";
              errorFound.style.display = "none";
              errorDate.style.display = "none";
              errorRadio.style.display = "none";
              errorPartner.style.display = "none";
              break;
            }
          }
        }
      } else {
        errorRadio.style.display = "none";
        errorPartner.innerHTML =
          "No birds added,Do Not Write in the Input , Click Save";
        errorPartner.style.display = "block";
      }
    } else {
      errorPartner.style.display = "none";
      errorUser.style.display = "none";
      saveFormOld();
      errorUser.style.display = "none";
    }
  });
  errorUser.style.display = "none";

  user.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      if (user.value === "") {
        errorUser.style.display = "block";
      } else {
        date.focus();
      }
    }
  });
  id2.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      saveBtn.click();
    }
  });
  function saveFormOld() {
    errorPartner2.style.display = "none";
    errorFound.style.display = "none";
    errorUser.style.display = "none";
    errorDate.style.display = "none";
    errorPartner.style.display = "none";
    errorRadio.style.display = "none";
    errorPartner.innerHTML = "Not Found Bird With This Id";
    save();
    user.value = "";
    date.value = "";
    id2.value = "";
    female.checked = false;
    male.checked = false;
    success.style.display = "block";
    setTimeout(() => {
      errorUser.style.display = "none";
      success.style.display = "none";
    }, 1000);
    setTimeout(() => {
      if (appendAdd.innerHTML === "") {
        return;
      } else {
        errorUser.style.display = "none";
        cancelBtn.click();
        calcIndex();
      }
    }, 1500);
  }
  function save() {
    errorUser.style.display = "none";
    count = window.localStorage.length + 1;
    i = window.localStorage.length + 1;
    let userValue = user.value;
    let dateValue = date.value;
    let kind = "";
    if (female.checked) {
      kind = "Female";
    } else if (male.checked) {
      kind = "Male";
    }
    let bird = new Object({
      id: index,
      name: userValue,
      dateOFbird: dateValue,
      kindOFbird: kind,
      id2: id2.value,
      birdStageOfBird: birdStage,
    });
    window.localStorage.setItem(`${birdStage}${index}`, JSON.stringify(bird));
    if (id2.value !== "") {
      let id2Value = id2.value;
      let dateObjectJS;
      dateObjectJS = JSON.parse(window.localStorage.getItem(`bird${id2Value}`));
      let showId = dateObjectJS.id;
      let showName = dateObjectJS.name;
      let showDate = dateObjectJS.dateOFbird;
      let showKind = dateObjectJS.kindOFbird;
      let showId2 = dateObjectJS.id2;
      let showBirdStage = dateObjectJS.birdStageOfBird;
      showId2 = index;
      let bird = new Object({
        id: showId,
        name: showName,
        dateOFbird: showDate,
        kindOFbird: showKind,
        id2: showId2,
        birdStageOfBird: showBirdStage,
      });
      window.localStorage.setItem(`bird${showId}`, JSON.stringify(bird));
    }
  }
}
function showDataOldFunction() {
  showDateFunction("bird", "Old Bird");
}
function showDataYoungFunction() {
  showDateFunction("birdYoung", "Young Bird");
}
function showDataEggFunction() {
  showDateFunction("Egg", "Egg");
}
function showAllBirds() {
  let showBirdsInTbody = document.querySelector(".show-birds-in-tbody");
  showBirdsInTbody.innerHTML = "";
  showDataOldFunction();
  showDataYoungFunction();
  showDataEggFunction();
  btnUpdateFunction();
  deleteBtnFunction();
}
function showDateFunction(birdStage, birdStage2) {
  let dateObjectJS;
  let showBirdsInTbody = document.querySelector(".show-birds-in-tbody");
  calcIndex();
  for (i = 1; i <= localStorage.length; i++) {
    if (window.localStorage.getItem(`${birdStage}${i}`)) {
      dateObjectJS = JSON.parse(
        window.localStorage.getItem(`${birdStage}${i}`)
      );
      let showId = dateObjectJS.id;
      let showName = dateObjectJS.name;
      let showDate = dateObjectJS.dateOFbird;
      let showKind = dateObjectJS.kindOFbird;
      let showId2 = dateObjectJS.id2;
      let tr = document.createElement("tr");
      tr.classList.add(`${birdStage}${i}`);
      let tdId = document.createElement("td");
      let tdName = document.createElement("td");
      let tdDate = document.createElement("td");
      let tdAge = document.createElement("td");
      let tdKind = document.createElement("td");
      let tdId2 = document.createElement("td");
      let tdStage = document.createElement("td");
      let tdBtns = document.createElement("td");
      let tdBtn1 = document.createElement("button");
      let tdBtn2 = document.createElement("button");
      tdId.classList.add(`${showId}`);
      tdId.classList.add(`id`);
      tdBtn1.className = "update";
      tdBtn2.className = "delete";
      tdBtn1.innerHTML = "Update";
      tdBtn2.innerHTML = "Delete";
      tdBtns.appendChild(tdBtn1);
      tdBtns.appendChild(tdBtn2);
      tdBtns.className = "last-td";
      tdBtns.classList.add("last-td-btn");
      tdAge.classList.add("Age");
      tdBtn1.setAttribute("id", `${birdStage}${i}`);
      tdBtn2.setAttribute("id", `${birdStage}${i}`);
      tdId.innerHTML = showId;
      tdName.innerHTML = showName;
      tdDate.innerHTML = showDate;
      tdKind.innerHTML = showKind;
      tdStage.innerHTML = birdStage2;
      if (dateObjectJS.id2 === "") {
        tdId2.classList.toggle("not-found");
      } else {
        tdId2.innerHTML = showId2;
      }
      if (showName === "") {
        tdName.classList.toggle("not-found");
      }
      if (showKind === "") {
        tdKind.classList.toggle("not-found");
      }
      tdStage.classList.add("tdStage");
      tr.appendChild(tdId);
      tr.appendChild(tdName);
      tr.appendChild(tdDate);
      tr.appendChild(tdAge);
      tr.appendChild(tdKind);
      tr.appendChild(tdId2);
      tr.appendChild(tdStage);
      tr.appendChild(tdBtns);
      showBirdsInTbody.appendChild(tr);
      let dateNow = new Date();
      calculateAge(showDate, dateNow, tdAge, birdStage);
    }
  }
  deleteBtnFunction();
}
function calculateAge(date1, date2, tdAgeP, birdStage) {
  // Ensure the dates are Date objects
  if (!(date1 instanceof Date)) {
    date1 = new Date(date1);
  }
  if (!(date2 instanceof Date)) {
    date2 = new Date(date2);
  }

  // Calculate difference in date values
  let years = date2.getFullYear() - date1.getFullYear();
  let months = date2.getMonth() - date1.getMonth();
  let days = date2.getDate() - date1.getDate();

  // If current day is less, then reduce one month
  if (days < 0) {
    months--;
    days += 30; // Assume 30 days in a month
  }

  // If current month is less, then reduce one year
  if (months < 0) {
    years--;
    months += 12;
  }
  if (birdStage === "bird") {
    tdAgeP.innerHTML = years + "Y/" + months + "M/" + days + "D";
  } else if (birdStage === "birdYoung") {
    tdAgeP.innerHTML = months + "M/" + days + "D";
  } else if (birdStage === "Egg") {
    tdAgeP.innerHTML = days + "D";
  } else if (birdStage === "birdInfo") {
    tdAgeP.value = years + "Y/" + months + "M/" + days + "D";
  } else if (birdStage === "birdYoungInfo") {
    tdAgeP.value = months + "M/" + days + "D";
  } else if (birdStage === "EggInfo") {
    tdAgeP.value = days + "D";
  } else {
    return;
  }
}

function deleteBtnFunction() {
  let deleteBtn = document.querySelectorAll(".delete");
  let showLi = document.querySelector(".li-show");
  let birdStage;
  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      for (y = 1; y <= localStorage.length; y++) {
        if (btn.id === `bird${y}`) {
          birdStage = "bird";
          break;
        } else if (btn.id === `birdYoung${y}`) {
          birdStage = "birdYoung";
          break;
        } else if (btn.id === `Egg${y}`) {
          birdStage = "Egg";
          break;
        }
      }
    });
  });
  deleteBtn.forEach((btnDelete) => {
    btnDelete.addEventListener("click", function () {
      let showId2;
      let showKind;
      let showDate;
      let showName;
      let showId;
      for (y = 1; y <= localStorage.length; y++) {
        let tr = document.querySelectorAll(".show .show-birds-in-tbody tr");
        let indexes = [];
        let max;
        tr.forEach((tr) => {
          let tdAge = document.querySelectorAll(
            `.show .show-birds-in-tbody tr .id`
          );
          tdAge.forEach((td) => {
            indexes.push(td.className.slice(0, 1));
            max = Math.max(...indexes);
          });
        });
        if (btnDelete.id === `${birdStage}${y}`) {
          let deleteId = btnDelete.id.slice(length - 1);
          if (deleteId < max) {
            if (window.localStorage.getItem(`${birdStage}${y}`)) {
              let dateObjectJS;
              dateObjectJS = JSON.parse(
                window.localStorage.getItem(`${birdStage}${y}`)
              );
              showId = dateObjectJS.id;
              showName = dateObjectJS.name;
              showDate = dateObjectJS.dateOFbird;
              showKind = dateObjectJS.kindOFbird;
              showId2 = dateObjectJS.id2;
              let bird = new Object({
                id: showId,
                name: showName,
                dateOFbird: showDate,
                kindOFbird: showKind,
                id2: showId2,
              });
              window.localStorage.setItem(
                `${birdStage}${y}Deleted`,
                JSON.stringify(bird)
              );
              window.localStorage.removeItem(`${birdStage}${y}`);
              window.localStorage.removeItem(`image${birdStage}${y}`);
              showLi.click();
            }
          } else {
            window.localStorage.removeItem(`${birdStage}${y}`);
            window.localStorage.removeItem(`image${birdStage}${y}`);
            showLi.click();
          }
        }
      }
    });
  });
}

function runFunctionsInSHowLI() {
  let liShow = document.querySelector(".li-show");
  if (liShow.classList.contains("active")) {
    showDataOldFunction();
    openAndCloseFunction();
    btnShow();
    deleteBtnFunction();
    growYoungAndEgg();
    let numBirds = document.querySelector(".num-birds");
    let spanBirdsNum = document.createElement("span");
    numBirds.innerHTML = "All Birds : ";
    getNumOfAllBirds(spanBirdsNum);
    numBirds.appendChild(spanBirdsNum);
    growYoungAndEgg();
    calcIndex();
  }
}
runFunctionsInSHowLI();

function EditBirdFromEditPage() {
  let btnEdit = document.querySelector(".edit-btn");
  let inputId = document.querySelector("#idToEdit");
  let errorIdEdit = document.querySelector(".error-id-edit");
  let errorNotFoundId = document.querySelector(".error-not-found");
  let divShowDate = document.querySelector(".divShowDate");
  let birdStage;
  let successEdit = document.querySelector(".success-edit");
  let errorPartnerNotFound = document.querySelector(".not-found-bird");
  btnEdit.addEventListener("click", function () {
    successEdit.style.display = "none";
    if (inputId.value === "") {
      errorIdEdit.style.display = "block";
    } else {
      errorIdEdit.style.display = "none";
      if (window.localStorage.getItem(`bird${idToEdit.value}`)) {
        birdStage = "bird";
      } else if (window.localStorage.getItem(`birdYoung${idToEdit.value}`)) {
        birdStage = "birdYoung";
      } else if (window.localStorage.getItem(`Egg${idToEdit.value}`)) {
        editEgg();
        return;
      } else {
        birdStage = "not found";
      }
      if (birdStage === "not found") {
        errorNotFoundId.style.display = "block";
      } else {
        errorNotFoundId.style.display = "none";
        divShowDate.style.display = "flex";
        let partnerLabel = document.querySelector(".partner-label");
        let partnerLabelYoung = document.querySelector(".partner-label-young");
        let errorNameEdit = document.querySelector(".error-name-edit");
        let errorDateEdit = document.querySelector(".error-date-edit");
        let partnerEdit = document.querySelector(".partner-edit");
        let errorPartner = document.querySelector(".error-not-found");
        let errorPartnerTwo = document.querySelector(".error-partner-2");
        let errorNotFound2 = document.querySelector(".errorFound");
        let dateObjectJS;
        dateObjectJS = JSON.parse(
          window.localStorage.getItem(`${birdStage}${inputId.value}`)
        );
        let showId = dateObjectJS.id;
        let showName = dateObjectJS.name;
        let showDate = dateObjectJS.dateOFbird;
        let showKind = dateObjectJS.kindOFbird;
        let showId2 = dateObjectJS.id2;
        let editNameOld = document.querySelector(".edit-name-old");
        let editDateOld = document.querySelector(".edit-date-old");
        let maleEditOld = document.querySelector("#male-edit-old");
        let femaleEditOld = document.querySelector("#female-edit-old");
        let birdStageInput = document.querySelector(".birdStage");
        styleFormEdit(idToEdit);
        inputId.value = showId;
        editNameOld.value = showName;
        editDateOld.value = showDate;
        partnerEdit.value = showId2;
        idToEdit.classList.add("inputId");
        if (birdStage === "bird") {
          birdStageInput.value = "Old Bird";
        } else if (birdStage === "birdYoung") {
          birdStageInput.value = "Young Bird";
        } else if (birdStage === "Egg") {
          birdStageInput.value = "Egg";
        }
        if (birdStageInput.value === "Old Bird") {
          partnerLabel.style.display = "block";
          partnerLabelYoung.style.display = "none";
          let today = new Date();
          let day = today.getDate();
          let month = today.getMonth() + 1; // January is 0!
          if (day < 10) {
            day = "0" + day;
          }
          if (month < 10) {
            month = "0" + month;
          }
          let today2 = new Date();
          today2.setMonth(today2.getMonth() - 5);
          let formattedMinDate =
            today.getFullYear() +
            "-" +
            (today2.getMonth() + 1).toString().padStart(2, "0") +
            "-" +
            today2.getDate().toString().padStart(2, "0");
          editDateOld.setAttribute("max", formattedMinDate);
          saveEdit();
        } else if (birdStageInput.value === "Young Bird") {
          let today = new Date();
          let day = today.getDate();
          let month = today.getMonth() + 1; // January is 0!
          let year = today.getFullYear();
          if (day < 10) {
            day = "0" + day;
          }
          if (month < 10) {
            month = "0" + month;
          }
          let today2 = new Date();
          today2.setMonth(today2.getMonth() - 5);
          let formattedMinDate =
            today2.getFullYear() +
            "-" +
            (today2.getMonth() + 1).toString().padStart(2, "0") +
            "-" +
            today2.getDate().toString().padStart(2, "0");
          today = year + "-" + month + "-" + day;
          editDateOld.setAttribute("max", today);
          editDateOld.min = formattedMinDate;
          femaleEditOld.style.display = "none";
          maleEditOld.style.display = "none";
          partnerLabel.style.display = "none";
          partnerLabelYoung.style.display = "block";
          let labelRadio = document.querySelectorAll(
            ".divShowDate .radios label"
          );
          labelRadio.forEach((label) => {
            label.style.display = "none";
          });
        }
        if (showKind === "Female") {
          femaleEditOld.checked = true;
        } else {
          maleEditOld.checked = true;
        }
        saveEdit();
      }
    }
  });
}
function editEgg() {
  let btnEdit = document.querySelector(".edit-btn");
  let inputId = document.querySelector("#idToEdit");
  let errorIdEdit = document.querySelector(".error-id-edit");
  let errorNotFound = document.querySelector(".error-not-found");
  let divShowDate = document.querySelector(".divShowDate");
  let birdStage;
  let successEdit = document.querySelector(".success-edit");
  successEdit.style.display = "none";
  if (inputId.value === "") {
    errorIdEdit.style.display = "block";
  } else {
    errorIdEdit.style.display = "none";
    if (window.localStorage.getItem(`Egg${idToEdit.value}`)) {
      birdStage = "Egg";
    } else {
      birdStage = "not found";
    }
    if (birdStage === "not found") {
      errorNotFound.style.display = "block";
    } else {
      errorNotFound.style.display = "none";
      divShowDate.style.display = "flex";
      let labelName = document.querySelector(".label-name");
      let partnerEdit = document.querySelector(".partner-edit");
      let labelRadio = document.querySelectorAll(".divShowDate .radios label");
      let dateObjectJS;
      dateObjectJS = JSON.parse(
        window.localStorage.getItem(`${birdStage}${inputId.value}`)
      );
      let showId = dateObjectJS.id;
      let showDate = dateObjectJS.dateOFbird;
      let showId2 = dateObjectJS.id2;
      let editNameOld = document.querySelector(".edit-name-old");
      let editDateOld = document.querySelector(".edit-date-old");
      let maleEditOld = document.querySelector("#male-edit-old");
      let femaleEditOld = document.querySelector("#female-edit-old");
      let birdStageInput = document.querySelector(".birdStage");
      let partnerLabel = document.querySelector(".partner-label");
      let partnerLabelYoung = document.querySelector(".partner-label-young");
      styleFormEdit(idToEdit);
      partnerLabel.style.display = "none";
      partnerLabelYoung.style.display = "block";
      inputId.value = showId;
      editNameOld.style.display = "none";
      editDateOld.value = showDate;
      partnerEdit.value = showId2;
      idToEdit.classList.add("inputId");
      birdStageInput.value = "Egg";
      femaleEditOld.style.display = "none";
      maleEditOld.style.display = "none";
      labelName.style.display = "none";
      labelRadio.forEach((label) => {
        label.style.display = "none";
      });
      let today = new Date();
      let day = today.getDate();
      let month = today.getMonth() + 1; // January is 0!
      let year = today.getFullYear();
      if (day < 10) {
        day = "0" + day;
      }
      if (month < 10) {
        month = "0" + month;
      }
      today = year + "-" + month + "-" + day;
      editDateOld.setAttribute("max", today);
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - 21);
      const minDateValue = currentDate.toISOString().split("T")[0];
      editDateOld.setAttribute("min", minDateValue);
    }
  }
  saveEditEgg();
}

function styleFormEdit(inputIDToEdit) {
  let editSave = document.querySelector(".save-btn");
  let deleteEdit = document.querySelector(
    ".editBird .form .saveCancel .delete-btn"
  );
  let divShowDate = document.querySelector(".divShowDate");
  let EditBirdDiv = document.querySelector(".editBird");
  let BtnEdit = document.querySelector(".edit-btn");
  let labelEditId = document.querySelector("#labelIdEdit");
  let labelName = document.querySelector(".label-name");
  let labelId = document.querySelector("#labelId");
  inputIDToEdit.readOnly = true;
  EditBirdDiv.style.height = "480px";
  EditBirdDiv.style.width = "400px";
  deleteEdit.style.display = "block";
  editSave.style.display = "block";
  labelEditId.style.display = "none";
  labelId.style.display = "block";
  BtnEdit.style.display = "none";
  labelName.style = "position:relative;top:-75px;";
}

function deleteFromEditPage() {
  let deleteBtn = document.querySelector(".delete-btn");
  let birdStage;
  let birdStageInput = document.querySelector(".birdStage");
  let inputId = document.querySelector("#idToEdit");
  let divShowDate = document.querySelector(".divShowDate");
  let editSave = document.querySelector(".save-btn");
  let deleteEdit = document.querySelector(
    ".editBird .form .saveCancel .delete-btn"
  );
  let EditBirdDiv = document.querySelector(".editBird");
  let BtnEdit = document.querySelector(".edit-btn");
  let labelEditId = document.querySelector("#labelIdEdit");
  let labelId = document.querySelector("#labelId");
  let successDelete = document.querySelector(".success-delete");
  let editBirdDiv = document.querySelector(".editBird");
  let cancelBtn = document.querySelector(".editBird .form .saveCancel .Cancel");
  deleteBtn.addEventListener("click", function () {
    if (birdStageInput.value === "Old Bird") {
      birdStage = "bird";
    } else if (birdStageInput.value === "Young Bird") {
      birdStage = "birdYoung";
    } else if (birdStageInput.value === "Egg") {
      birdStage = "Egg";
    }
    let tr = document.querySelectorAll(".show .show-birds-in-tbody tr");
    let indexes = [];
    let max;
    tr.forEach((tr) => {
      let tdAge = document.querySelectorAll(
        `.show .show-birds-in-tbody tr .id`
      );
      tdAge.forEach((td) => {
        indexes.push(td.className.slice(0, 1));
        max = Math.max(...indexes);
      });
    });
    if (+inputId.value === max) {
      window.localStorage.removeItem(`${birdStage}${inputId.value}`);
      window.localStorage.removeItem(`image${birdStage}${inputId.value}`);
    } else if (+inputId.value < max) {
      let dateObjectJS;
      dateObjectJS = JSON.parse(
        window.localStorage.getItem(`${birdStage}${inputId.value}`)
      );
      showId = dateObjectJS.id;
      showName = dateObjectJS.name;
      showDate = dateObjectJS.dateOFbird;
      showKind = dateObjectJS.kindOFbird;
      showId2 = dateObjectJS.id2;
      let bird = new Object({
        id: showId,
        name: showName,
        dateOFbird: showDate,
        kindOFbird: showKind,
        id2: showId2,
      });
      window.localStorage.setItem(
        `${birdStage}${inputId.value}Deleted`,
        JSON.stringify(bird)
      );
      window.localStorage.removeItem(`${birdStage}${inputId.value}`);
      window.localStorage.removeItem(`image${birdStage}${inputId.value}`);
    }
    divShowDate.style.display = "none";
    inputId.readOnly = false;
    EditBirdDiv.style.height = "250px";
    EditBirdDiv.style.width = "350px";
    deleteEdit.style.display = "none";
    editSave.style.display = "none";
    labelEditId.style.display = "block";
    labelId.style.display = "none";
    BtnEdit.style.display = "block";
    successDelete.style.display = "block";
    inputId.classList.toggle("inputId");
    setTimeout(() => {
      if (editBirdDiv.style.display == "none") {
        return;
      } else {
        successDelete.style.display = "block";
        cancelBtn.click();
      }
    }, 1500);
  });
}
function saveEditEgg() {
  let btnSave = document.querySelector(".save-btn");
  let idToEdit = document.querySelector("#idToEdit");
  let editDateOld = document.querySelector(".edit-date-old");
  let errorDateEdit = document.querySelector(".error-date-edit");
  let successEdit = document.querySelector(".success-edit");
  let Cancel = document.querySelector(".editBird .form .saveCancel .Cancel");
  let partnerEdit = document.querySelector(".partner-edit");
  let errorPartnerMust = document.querySelector(".error-Partner-must");
  btnSave.addEventListener("click", function () {
    if (editDateOld.value === "") {
      errorDateEdit.style.display = "block";
    } else if (partnerEdit.value === "") {
      errorPartnerMust.style.display = "block";
      errorDateEdit.style.display = "none";
    } else {
      let bird = new Object({
        id: idToEdit.value,
        name: "",
        dateOFbird: editDateOld.value,
        kindOFbird: "",
        id2: partnerEdit.value,
      });
      window.localStorage.setItem(`Egg${idToEdit.value}`, JSON.stringify(bird));
      successEdit.style.display = "block";
      setTimeout(() => {
        if (appendAdd.innerHTML === "") {
          return;
        } else {
          successEdit.style.display = "none";
          Cancel.click();
          growYoungAndEgg();
        }
      }, 1500);
    }
  });
}
function btnUpdateFunction() {
  let btnUpdate = document.querySelectorAll(".update");
  let editBirdDiv = document.querySelector(".editBird");
  btnUpdate.forEach((btn) => {
    btn.addEventListener("click", function () {
      appendAdd.innerHTML = "";
      appendAdd.innerHTML = editBirdsDiv;
      let idToEdit = document.querySelector("#idToEdit");
      let errorIdEdit = document.querySelector(".error-id-edit");
      let successEdit = document.querySelector(".success-edit");
      let errorNameEdit = document.querySelector(".error-name-edit");
      let errorDateEdit = document.querySelector(".error-date-edit");
      let errorPartner = document.querySelector(".error-not-found");
      let errorPartnerTwo = document.querySelector(".error-partner-2");
      let errorNotFound = document.querySelector(".errorFound");
      disabledBody();
      closeEdit();
      deleteFromEditPage();
      let divShowDate = document.querySelector(".editBird .form .divShowDate");
      let partnerEdit = document.querySelector(".partner-edit");
      divShowDate.style.display = "flex";
      let partnerLabel = document.querySelector(".partner-label");
      let partnerLabelYoung = document.querySelector(".partner-label-young");
      errorNameEdit.style.display = "none";
      errorDateEdit.style.display = "none";
      errorPartner.style.display = "none";
      errorPartnerTwo.style.display = "none";
      errorNotFound.style.display = "none";
      let dateObjectJS;
      dateObjectJS = JSON.parse(window.localStorage.getItem(`${btn.id}`));
      let showId = dateObjectJS.id;
      let showName = dateObjectJS.name;
      let showDate = dateObjectJS.dateOFbird;
      let showKind = dateObjectJS.kindOFbird;
      let showId2 = dateObjectJS.id2;
      let editNameOld = document.querySelector(".edit-name-old");
      let editDateOld = document.querySelector(".edit-date-old");
      let maleEditOld = document.querySelector("#male-edit-old");
      let femaleEditOld = document.querySelector("#female-edit-old");
      let birdStageInput = document.querySelector(".birdStage");
      styleFormEdit(idToEdit);
      idToEdit.classList.add("inputId");
      if (btn.id.includes("Young")) {
        birdStageInput.value = "Young Bird";
      } else if (btn.id.includes("bird")) {
        birdStageInput.value = "Old Bird";
      } else if (btn.id.includes("Egg")) {
        birdStageInput.value = "Egg";
      } else {
        birdStageInput.value = "Un";
      }
      if (birdStageInput.value === "Egg") {
        let labelRadio = document.querySelectorAll(
          ".divShowDate .radios label"
        );
        let labelName = document.querySelector(".label-name");
        labelName.style.display = "none";
        labelRadio.forEach((label) => {
          label.style.display = "none";
        });
        femaleEditOld.style.display = "none";
        maleEditOld.style.display = "none";
        editNameOld.style.display = "none";
        idToEdit.value = showId;
        editDateOld.value = showDate;
        partnerEdit.value = showId2;
        partnerLabel.style.display = "none";
        partnerLabelYoung.style.display = "block";
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth() + 1; // January is 0!
        let year = today.getFullYear();
        if (day < 10) {
          day = "0" + day;
        }
        if (month < 10) {
          month = "0" + month;
        }
        today = year + "-" + month + "-" + day;
        editDateOld.setAttribute("max", today);
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 21);
        const minDateValue = currentDate.toISOString().split("T")[0];
        editDateOld.setAttribute("min", minDateValue);
        saveEditEgg();
      } else if (birdStageInput.value === "Old Bird") {
        idToEdit.value = showId;
        editNameOld.value = showName;
        editDateOld.value = showDate;
        partnerEdit.value = showId2;
        if (showKind === "Female") {
          femaleEditOld.checked = true;
        } else {
          maleEditOld.checked = true;
        }
        partnerLabel.style.display = "block";
        partnerLabelYoung.style.display = "none";
        errorPartner.style.display = "none";
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth() + 1; // January is 0!
        if (day < 10) {
          day = "0" + day;
        }
        if (month < 10) {
          month = "0" + month;
        }
        let today2 = new Date();
        today2.setMonth(today2.getMonth() - 5);
        let formattedMinDate =
          today.getFullYear() +
          "-" +
          (today2.getMonth() + 1).toString().padStart(2, "0") +
          "-" +
          today2.getDate().toString().padStart(2, "0");
        editDateOld.setAttribute("max", formattedMinDate);
        saveEdit();
      } else if (birdStageInput.value === "Young Bird") {
        let labelRadio = document.querySelectorAll(
          ".divShowDate .radios label"
        );
        labelRadio.forEach((label) => {
          label.style.display = "none";
        });
        idToEdit.value = showId;
        editNameOld.value = showName;
        editDateOld.value = showDate;
        partnerEdit.value = showId2;
        femaleEditOld.style.display = "none";
        maleEditOld.style.display = "none";
        idToEdit.value = showId;
        editDateOld.value = showDate;
        partnerEdit.value = showId2;
        partnerLabel.style.display = "none";
        partnerLabelYoung.style.display = "block";
      }
      if (birdStageInput.value === "Young Bird") {
        partnerLabel.style.display = "none";
        partnerLabelYoung.style.display = "block";
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth() + 1; // January is 0!
        let year = today.getFullYear();
        if (day < 10) {
          day = "0" + day;
        }
        if (month < 10) {
          month = "0" + month;
        }
        let today2 = new Date();
        today2.setMonth(today2.getMonth() - 5);
        let formattedMinDate =
          today2.getFullYear() +
          "-" +
          (today2.getMonth() + 1).toString().padStart(2, "0") +
          "-" +
          today2.getDate().toString().padStart(2, "0");
        today = year + "-" + month + "-" + day;
        editDateOld.setAttribute("max", today);
        editDateOld.setAttribute("min", formattedMinDate);
        saveEdit();
      }
    });
  });
}

function saveEdit() {
  let btnSave = document.querySelector(".save-btn");
  let idToEdit = document.querySelector("#idToEdit");
  let editNameOld = document.querySelector(".edit-name-old");
  let editDateOld = document.querySelector(".edit-date-old");
  let maleEditOld = document.querySelector("#male-edit-old");
  let femaleEditOld = document.querySelector("#female-edit-old");
  let errorNameEdit = document.querySelector(".error-name-edit");
  let errorDateEdit = document.querySelector(".error-date-edit");
  let partnerEdit = document.querySelector(".partner-edit");
  let errorPartner = document.querySelector(".error-not-found-edit");
  let errorPartnerTwo = document.querySelector(".error-partner-2");
  let successEdit = document.querySelector(".success-edit");
  let Cancel = document.querySelector(".editBird .form .saveCancel .Cancel");
  let birdStageInput = document.querySelector(".birdStage");
  let birdStage;
  let errorNotFound = document.querySelector(".errorFound");
  let nameValue = editNameOld.value;
  let editBirdDiv = document.querySelector(".editBird");
  let errorPartnerFoundEdit = document.querySelector(
    ".error-Partner-found-edit"
  );
  let id2Value = partnerEdit.value;
  btnSave.addEventListener("click", function () {
    if (birdStageInput.value === "Old Bird") {
      birdStage = "bird";
    } else if (birdStageInput.value === "Young Bird") {
      birdStage = "birdYoung";
    } else if (birdStageInput.value === "Egg") {
      birdStage = "Egg";
    }
    showNameArray = [];
    let showName;
    let found;
    for (i = 0; i <= localStorage.length; i++) {
      if (window.localStorage.getItem(`bird${i}`)) {
        let dateObjectJS;
        dateObjectJS = JSON.parse(window.localStorage.getItem(`bird${i}`));
        showName = dateObjectJS.name;
        if (showName !== nameValue) {
          showNameArray.push(showName);
        }
      }
      if (window.localStorage.getItem(`birdYoung${i}`)) {
        let dateObjectJS;
        dateObjectJS = JSON.parse(window.localStorage.getItem(`birdYoung${i}`));
        showName = dateObjectJS.name;
        showNameArray.push(showName);
        if (showName !== nameValue) {
          showNameArray.push(showName);
        } else {
          showNameArray.pop(nameValue);
        }
      }
      if (successEdit.style.display === "block") {
        break;
      }
    }
    for (i = 0; i < showNameArray.length; ) {
      if (
        editNameOld.value == showNameArray[i] ||
        editNameOld.value === showNameArray[0]
      ) {
        found = true;
      } else {
        found = false;
      }
      i++;
    }
    if (editNameOld.value === "") {
      errorNameEdit.style.display = "block";
    } else if (found === true) {
      errorNameEdit.style.display = "none";
      errorNotFound.style.display = "block";
    } else if (editDateOld.value === "") {
      errorNameEdit.style.display = "none";
      errorNotFound.style.display = "none";
      errorDateEdit.style.display = "block";
    } else if (partnerEdit.value !== "") {
      let x = 1;
      for (i = 0; i <= localStorage.length; i++) {
        let showId;
        let dateObjectJS;
        if (window.localStorage.getItem(`bird${x}`)) {
          dateObjectJS = JSON.parse(window.localStorage.getItem(`bird${x}`));
          showId = dateObjectJS.id;
        }
        if (partnerEdit.value === idToEdit.value) {
          errorPartnerTwo.style.display = "block";
          errorPartner.style.display = "none";
        } else {
          if (+id2Value === +partnerEdit.value) {
            errorDateEdit.style.display = "none";
            save();
          } else {
            if (+partnerEdit.value !== +showId) {
              errorNameEdit.style.display = "none";
              errorNotFound.style.display = "none";
              errorDateEdit.style.display = "none";
              errorPartnerTwo.style.display = "none";
              errorPartner.style.display = "block";
            } else {
              let id = dateObjectJS.id2;
              if (birdStageInput.value === "Old Bird") {
                if (id === "") {
                  save();
                  errorNameEdit.style.display = "none";
                  errorPartner.style.display = "none";
                  break;
                } else {
                  errorNameEdit.style.display = "none";
                  errorPartner.style.display = "none";
                  errorPartnerTwo.style.display = "none";
                  errorNotFound.style.display = "none";
                  errorPartnerFoundEdit.style.display = "block";
                }
              } else {
                errorNameEdit.style.display = "none";
                errorPartner.style.display = "none";
                errorPartnerTwo.style.display = "none";
                errorNotFound.style.display = "none";
                errorPartnerFoundEdit.style.display = "none";
                save();
                errorNameEdit.style.display = "none";
                errorPartner.style.display = "none";
                break;
              }
            }
          }
        }
        x++;
      }
    } else {
      save();
      errorPartner.style.display = "none";
      errorNameEdit.style.display = "none";
    }
    function save() {
      errorNameEdit.style.display = "none";
      errorDateEdit.style.display = "none";
      errorPartner.style.display = "none";
      errorPartnerTwo.style.display = "none";
      errorNotFound.style.display = "none";
      let kind;
      if (birdStage === "bird") {
        if (femaleEditOld.checked) {
          kind = "Female";
        } else {
          kind = "Male";
        }
      } else {
        kind = "";
      }
      let bird = new Object({
        id: idToEdit.value,
        name: editNameOld.value,
        dateOFbird: editDateOld.value,
        kindOFbird: kind,
        id2: partnerEdit.value,
      });
      window.localStorage.setItem(
        `${birdStage}${idToEdit.value}`,
        JSON.stringify(bird)
      );
      if (birdStage === "bird") {
        if (partnerEdit.value !== "") {
          let id2Value = partnerEdit.value;
          let dateObjectJS;
          dateObjectJS = JSON.parse(
            window.localStorage.getItem(`bird${id2Value}`)
          );
          let showId = dateObjectJS.id;
          let showName = dateObjectJS.name;
          let showDate = dateObjectJS.dateOFbird;
          let showKind = dateObjectJS.kindOFbird;
          let showId2 = dateObjectJS.id2;
          showId2 = idToEdit.value;
          let bird = new Object({
            id: showId,
            name: showName,
            dateOFbird: showDate,
            kindOFbird: showKind,
            id2: showId2,
          });
          window.localStorage.setItem(`bird${showId}`, JSON.stringify(bird));
        }
      }
      successEdit.style.display = "block";
      setTimeout(() => {
        if (appendAdd.innerHTML === "") {
          return;
        } else {
          successEdit.style.display = "none";
          growYoungAndEgg();
          Cancel.click();
        }
      }, 1500);
    }
  });
}

function getStart() {
  let startBtn = document.querySelector(".start-btn");
  let liShow = document.querySelector(".li-show");
  let openAndClose = document.querySelector(
    ".show-birds .btns-add .openAndClose"
  );
  startBtn.addEventListener("click", function () {
    liShow.click();
  });
}

function growYoungAndEgg() {
  let dateObjectJS;
  for (i = 0; i <= localStorage.length; i++) {
    if (window.localStorage.getItem(`Egg${i}`)) {
      let tr = document.querySelectorAll(".show .show-birds-in-tbody tr");
      tr.forEach((tr) => {
        if (tr.classList.contains(`Egg${i}`)) {
          let tdAge = document.querySelectorAll(
            `.show .show-birds-in-tbody tr .Age`
          );
          tdAge.forEach((td) => {
            if (td.parentElement.classList.contains(`Egg${i}`)) {
              let Age = parseInt(td.innerHTML);
              function growEgg(date) {
                dateObjectJS = JSON.parse(
                  window.localStorage.getItem(`Egg${i}`)
                );
                let showId = dateObjectJS.id;
                let showName = dateObjectJS.name;
                let showDate = dateObjectJS.dateOFbird;
                let showKind = dateObjectJS.kindOFbird;
                let showId2 = dateObjectJS.id2;
                window.localStorage.removeItem(`Egg${i}`);
                let bird = new Object({
                  id: showId,
                  name: showName,
                  dateOFbird: date,
                  kindOFbird: showKind,
                  id2: showId2,
                });
                window.localStorage.setItem(
                  `birdYoung${showId}`,
                  JSON.stringify(bird)
                );
                let index;
                let msg = document.querySelector(".msg");
                if (
                  msg.innerHTML === "" ||
                  msg.innerHTML === "No Notices Now"
                ) {
                  index = 1;
                } else {
                  let lastElement = msg.lastElementChild.className
                    .slice(6)
                    .slice(0, 1);
                  index = +lastElement + 1;
                }
                let spanNum = document.querySelector(".num");
                spanNum.innerHTML = index;
                let mp3 = document.querySelector(".mp3");
                mp3.play();
                let notice = `
                    <div class="notice${index} divNotice">
                        (${index})The Egg Registered With ID Number ${i} Now is hatched , And Now You have a new Young Bird
                    <div>
                  `;
                msg.innerHTML += notice;
              }
              if (Age === 20) {
                let today = new Date();
                let formattedDate =
                  today.getFullYear() +
                  "-" +
                  (today.getMonth() + 1).toString().padStart(2, "0") +
                  "-" +
                  today.getDate().toString().padStart(2, "0");
                growEgg(formattedDate);
                showAllBirds();
              } else if (Age > 20) {
                let today = new Date();
                let formattedDate =
                  today.getFullYear() +
                  "-" +
                  (today.getMonth() + 1).toString().padStart(2, "0") +
                  "-" +
                  (today.getDate().toString().padStart(2, "0") - (Age - 20));
                growEgg(formattedDate);
                showAllBirds();
              }
            }
          });
        }
      });
    } else if (window.localStorage.getItem(`birdYoung${i}`)) {
      let tr = document.querySelectorAll(".show .show-birds-in-tbody tr");
      tr.forEach((tr) => {
        if (tr.classList.contains(`birdYoung${i}`)) {
          let tdAge = document.querySelectorAll(
            `.show .show-birds-in-tbody tr .Age`
          );
          tdAge.forEach((td) => {
            if (td.parentElement.classList.contains(`birdYoung${i}`)) {
              let Age = parseInt(td.innerHTML.charAt(0));
              if (Age === 5) {
                dateObjectJS = JSON.parse(
                  window.localStorage.getItem(`birdYoung${i}`)
                );
                let showId = dateObjectJS.id;
                let showName = dateObjectJS.name;
                let showDate = dateObjectJS.dateOFbird;
                let showKind = dateObjectJS.kindOFbird;
                let showId2 = dateObjectJS.id2;
                window.localStorage.removeItem(`birdYoung${i}`);
                let bird = new Object({
                  id: showId,
                  name: showName,
                  dateOFbird: showDate,
                  kindOFbird: showKind,
                  id2: "",
                });
                window.localStorage.setItem(
                  `bird${showId}`,
                  JSON.stringify(bird)
                );
                let index;
                let msg = document.querySelector(".msg");
                if (
                  msg.innerHTML === "" ||
                  msg.innerHTML === "No Notices Now"
                ) {
                  index = 1;
                } else {
                  let lastElement = msg.lastElementChild.className
                    .slice(6)
                    .slice(0, 1);
                  index = +lastElement + 1;
                }
                let spanNum = document.querySelector(".num");
                spanNum.innerHTML = index;
                let mp3 = document.querySelector(".mp3");
                mp3.play();
                let notice = `
                    <div class="notice${index} divNotice">
                        (${index})The Young Bird Registered With ID Number ${i} Now is Grown , And Now You have a new Old Bird
                    <div>
                  `;
                msg.innerHTML += notice;
                showAllBirds();
              }
            }
          });
        }
      });
    }
  }
}

let notice = document.querySelector(".notice");
let msg = document.querySelector(".msg");

notice.addEventListener("click", function (event) {
  event.stopPropagation();
  msg.classList.toggle("msg-block");
  showMessageIfEmpty();
});

document.addEventListener("click", function () {
  if (msg.classList.contains("msg-block")) {
    if (msg.innerHTML !== "") {
      let spanNum = document.querySelector(".num");
      msg.innerHTML = "";
      spanNum.innerHTML = "";
      msg.classList.remove("msg-block");
    }
  } else {
    msg.classList.remove("msg-block");
  }
});

function showMessageIfEmpty() {
  if (msg.classList.contains("msg-block") && msg.innerHTML.trim() === "") {
    msg.innerHTML = "No Notices Now";
  }
}
notice.addEventListener("click", function () {
  if (!msg.classList.contains("msg-block")) {
    if (msg.innerHTML !== "") {
      let spanNum = document.querySelector(".num");
      msg.innerHTML = "";
      spanNum.innerHTML = "";
    }
  }
});

function writTextAuto() {
  let spanH1 = document.querySelector(".home-section h1 .span-h1");
  let text = "Welcome to 'Pigeon Keeper',";
  let index = 0;
  let adding = true;
  function typeText() {
    if (adding) {
      if (index < text.length) {
        spanH1.textContent += text[index];
        index++;
        setTimeout(typeText, 200);
      } else {
        setTimeout(() => {
          adding = false;
          typeText();
        }, 1000);
      }
    } else {
      if (index > 0) {
        spanH1.textContent = spanH1.textContent.slice(0, -1);
        index--;
        setTimeout(typeText, 200);
      } else {
        adding = true;
        setTimeout(typeText, 500);
      }
    }
  }
  typeText();
}
function BirdProfile() {
  let idProfile = document.querySelector(".id-profile");
  let errorIdProfileMust = document.querySelector(".error-id-profile-must");
  let errorIdProfileNot = document.querySelector(".error-id-profile-not");
  let nextBtn = document.querySelector(".next-profile");
  let formProfile = document.querySelector(".formProfile");
  let inputs = document.querySelector(".inputs");
  let birdStage;
  let showProfile = document.querySelector(".show-profile");
  nextBtn.addEventListener("click", function () {
    for (i = 1; i <= 3; i++) {
      if (i == 1) {
        birdStage = "bird";
      } else if (i == 2) {
        birdStage = "birdYoung";
      } else if (i == 3) {
        birdStage = "Egg";
      }
      if (idProfile.value === "") {
        errorIdProfileNot.style.display = "none";
        errorIdProfileMust.style.display = "block";
      } else if (
        !window.localStorage.getItem(`${birdStage}${idProfile.value}`)
      ) {
        errorIdProfileMust.style.display = "none";
        errorIdProfileNot.style.display = "block";
      } else {
        formProfile.style = "height:523px;width:1000px;";
        let idValue = idProfile.value;
        errorIdProfileMust.style.display = "none";
        errorIdProfileNot.style.display = "none";
        showProfile.style.display = "block";
        inputs.style.display = "none";
        nextBtn.style.display = "none";
        let dateObjectJS;
        dateObjectJS = JSON.parse(
          window.localStorage.getItem(`${birdStage}${idProfile.value}`)
        );
        let inputId = document.querySelector(
          ".show-info .inputs-show-info .id"
        );
        let inputName = document.querySelector(
          ".show-info .inputs-show-info .name"
        );
        let inputBirth = document.querySelector(
          ".show-info .inputs-show-info .birth-day"
        );
        let inputAge = document.querySelector(
          ".show-info .inputs-show-info .age"
        );
        let inputKind = document.querySelector(
          ".show-info .inputs-show-info .kind"
        );
        let inputId2 = document.querySelector(
          ".show-info .inputs-show-info .id2"
        );
        let inputBirdStage = document.querySelector(
          ".show-info .inputs-show-info .bird-stage"
        );
        let btnPartner = document.querySelector(
          ".formProfile .show-profile .buttons .show-partner"
        );
        let btnChildren = document.querySelector(
          ".formProfile .show-profile .buttons .show-children"
        );
        let cancel = document.querySelector(
          ".formProfile .show-profile .buttons .cancel"
        );
        cancel;
        let labelId2 = document.querySelector(
          ".formProfile .show-profile .label-id2"
        );
        let labelKind = document.querySelector(
          ".formProfile .show-profile .label-kind"
        );
        let labelName = document.querySelector(
          ".formProfile .show-profile .label-name"
        );

        let showId = dateObjectJS.id;
        let showName = dateObjectJS.name;
        let showDate = dateObjectJS.dateOFbird;
        let showKind = dateObjectJS.kindOFbird;
        let showId2 = dateObjectJS.id2;
        let showBirdStage = dateObjectJS.birdStageOfBird;
        let dateNow = new Date();
        calculateAge(showDate, dateNow, inputAge, `${showBirdStage}Info`);
        inputId.value = showId;
        inputName.value = showName;
        inputBirth.value = showDate;
        inputKind.value = showKind;
        inputId2.value = showId2;
        cancel.addEventListener("click", function () {
          let liProfiles = document.querySelector(".li-profiles");
          liProfiles.click();
        });
        if (showBirdStage === "bird") {
          inputBirdStage.value = "Old Bird";
          btnPartner.innerHTML = "Show Partner";
          btnChildren.style.display = "inline";
          labelId2.innerHTML = "Partner Id";
          viewChildren(idValue);
        } else if (showBirdStage === "birdYoung") {
          inputKind.style.display = "none";
          inputBirdStage.value = "Young Bird";
          labelKind.style.display = "none";
          labelId2.style = "position: absolute;top: 395px;";
          inputId2.style = "position: absolute;top: 421px;";
          let textCalc = document.querySelector(".text-calc");
          textCalc.style.display = "none";
        } else if (showBirdStage === "Egg") {
          inputBirdStage.value = "Egg";
          inputKind.style.display = "none";
          inputName.style.display = "none";
          labelKind.style.display = "none";
          labelName.style.display = "none";
          labelId2.style = "position: absolute;top: 395px; left:4px";
          inputId2.style = "position: absolute;top: 421px; left:0px";
          let divImg = document.querySelector(".div-img");
          divImg.style.display = "none";
          formProfile.style = "height:523px;width:600px;";
          document.querySelector(".inputs-show-info").style = "top:50px";
          let textCalc = document.querySelector(".text-calc");
          textCalc.style.display = "none";
        }
        viewPartner();
        imageProfile(birdStage, idValue);
        break;
      }
    }
  });
}
function imageProfile(birdStage, idValue) {
  const btnImg = document.querySelector(".btn-img");
  const uploadImg = document.querySelector(".upload-img");
  const img = document.querySelector(".show-img");
  const divShowImg = document.querySelector(".div-show-img");
  const close = document.querySelector(".div-show-img .close");
  const menuImg = document.querySelector(".menu-img");
  const showImgSpan = document.querySelector(".menu-img .show-img-span");
  const updateImgSpan = document.querySelector(".menu-img .update-img-span");

  function checkImageInLocalStorage() {
    const storedImage = window.localStorage.getItem(
      `image${birdStage}${idValue}`
    );
    if (storedImage) {
      img.style.display = "block";
      img.src = storedImage;
      btnImg.style.display = "none";
    } else {
      btnImg.style.display = "block";
      img.style.display = "none";
    }
  }

  function handleImageClick(e) {
    if (menuImg.style.display === "none") {
      if (img.classList.contains("big-img")) {
        return;
      } else {
        e.stopPropagation();
        menuImg.style.display = "block";
      }
    } else {
      menuImg.style.display = "none";
    }
  }

  function enlargeImage() {
    if (!img.classList.contains("big-img")) {
      img.classList.add("big-img");
      divShowImg.classList.add("big-img-div");
      close.style.display = "block";
    }
    menuImg.style.display = "none";
  }

  function closeEnlargedImage() {
    close.style.display = "none";
    img.classList.remove("big-img");
    divShowImg.classList.remove("big-img-div");
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem(`image${birdStage}${idValue}`, reader.result);
        checkImageInLocalStorage();
      };
      reader.readAsDataURL(file);
    }
  }

  checkImageInLocalStorage();

  img.addEventListener("click", handleImageClick);
  btnImg.addEventListener("click", () => uploadImg.click());
  uploadImg.addEventListener("change", handleFileChange);
  showImgSpan.addEventListener("click", enlargeImage);
  updateImgSpan.addEventListener("click", () => {
    uploadImg.click();
    menuImg.style.display = "none";
  });
  close.addEventListener("click", closeEnlargedImage);
  document.addEventListener("click", (e) => {
    if (menuImg.style.display === "block" && e.target !== menuImg) {
      menuImg.style.display = "none";
    }
  });
}

function viewPartner() {
  let btn = document.querySelector(
    ".formProfile .show-profile .buttons .show-partner"
  );
  let formProfile = document.querySelector(".formProfile");
  let inputId = document.querySelector(".show-info .inputs-show-info .id");
  let inputBirdStage = document.querySelector(
    ".show-info .inputs-show-info .bird-stage"
  );
  let inputName = document.querySelector(".show-info .inputs-show-info .name");
  let inputBirth = document.querySelector(
    ".show-info .inputs-show-info .birth-day"
  );
  let inputAge = document.querySelector(".show-info .inputs-show-info .age");
  let btnChildren = document.querySelector(
    ".formProfile .show-profile .buttons .show-children"
  );
  let inputKind = document.querySelector(".show-info .inputs-show-info .kind");
  let inputId2 = document.querySelector(".show-info .inputs-show-info .id2");
  let labelKind = document.querySelector(
    ".formProfile .show-profile .label-kind"
  );
  let labelName = document.querySelector(
    ".formProfile .show-profile .label-name"
  );
  let labelId2 = document.querySelector(
    ".formProfile .show-profile .label-id2"
  );
  let birdStage;
  btn.addEventListener("click", function (event) {
    if (inputBirdStage.value === "Old Bird") {
      birdStage = "bird";
    } else if (inputBirdStage.value === "Young Bird") {
      birdStage = "birdYoung";
    } else if (inputBirdStage.value === "Egg") {
      birdStage = "Egg";
    }
    let dateObjectJS = JSON.parse(
      window.localStorage.getItem(`${birdStage}${inputId.value}`)
    );
    let id2 = dateObjectJS.id2;
    setTimeout(() => {
      if (window.localStorage.getItem(`bird${id2}`)) {
        let dateObjectJS2 = JSON.parse(
          window.localStorage.getItem(`bird${id2}`)
        );
        let showId = dateObjectJS2.id;
        let showName = dateObjectJS2.name;
        let showDate = dateObjectJS2.dateOFbird;
        let showKind = dateObjectJS2.kindOFbird;
        let showId2 = dateObjectJS2.id2;
        let showBirdStage = dateObjectJS2.birdStageOfBird;
        inputId.value = showId;
        inputName.value = showName;
        inputBirth.value = showDate;
        inputKind.value = showKind;
        inputId2.value = showId2;
        inputBirdStage.value = "Old Bird";
        btn.innerHTML = "Show Partner";
        btnChildren.style.display = "inline";
        inputKind.style.display = "block";
        labelKind.style.display = "block";
        labelId2.style = "position: absolute;top: 300px;";
        inputId2.style = "position: absolute;top: 327px;";
        inputKind.style.display = "block";
        inputName.style.display = "block";
        labelKind.style.display = "block";
        labelName.style.display = "block";
        let divImg = document.querySelector(".div-img");
        divImg.style.display = "block";
        formProfile.style = "height:523px;width:1000px;";
        document.querySelector(".inputs-show-info").style = "top:20px";
        let pCalc = document.querySelector(".text-calc");
        pCalc.style.display = "block";
        let dateNow = new Date();
        calculateAge(showDate, dateNow, inputAge, `${showBirdStage}Info`);
        imageProfile("bird", showId);
        viewChildren(showId);
      }
    }, 30);
  });
}
function viewChildren(id) {
  let btnChildren = document.querySelector(".show-children");
  let pCalc = document.querySelector(".text-calc");
  let found1;
  let found2;
  function calcChildren() {
    let numYoung = 0;
    let numEgg = 0;
    for (i = 0; i <= localStorage.length; i++) {
      if (window.localStorage.getItem(`birdYoung${i}`)) {
        let dateObjectJS;
        dateObjectJS = JSON.parse(window.localStorage.getItem(`birdYoung${i}`));
        let showId2 = dateObjectJS.id2;
        if (showId2 == id) {
          ++numYoung;
          pCalc.innerHTML = `The Bird have A ${numYoung} Young Bird And have A ${numEgg} Egg`;
        } else {
          let dateObjectJS;
          dateObjectJS = JSON.parse(window.localStorage.getItem(`bird${id}`));
          let id2 = dateObjectJS.id2;
          let dateObjectJS2 = JSON.parse(
            window.localStorage.getItem(`birdYoung${i}`)
          );
          let showId2 = dateObjectJS2.id2;
          if (showId2 === id2) {
            ++numYoung;
            pCalc.innerHTML = `The Bird have A ${numYoung} Young Bird And have A ${numEgg} Egg`;
          }
        }
      } else {
        pCalc.innerHTML = `The Bird have A ${numYoung} Young Bird And have A ${numEgg} Egg`;
      }
      if (window.localStorage.getItem(`Egg${i}`)) {
        let dateObjectJS;
        dateObjectJS = JSON.parse(window.localStorage.getItem(`Egg${i}`));
        let showId2 = dateObjectJS.id2;
        if (showId2 == id) {
          ++numEgg;
          pCalc.innerHTML = `The Bird have A ${numYoung} Young Bird And have A ${numEgg} Egg`;
        } else {
          let dateObjectJS;
          dateObjectJS = JSON.parse(window.localStorage.getItem(`bird${id}`));
          let id2 = dateObjectJS.id2;
          let dateObjectJS3 = JSON.parse(
            window.localStorage.getItem(`Egg${i}`)
          );
          let showId2 = dateObjectJS3.id2;
          if (showId2 == id2) {
            ++numEgg;
            pCalc.innerHTML = `The Bird have A ${numYoung} Young Bird And have A ${numEgg} Egg`;
          }
        }
      } else {
        pCalc.innerHTML = `The Bird have A ${numYoung} Young Bird And have A ${numEgg} Egg`;
      }
    }
  }
  calcChildren();
  function view() {
    function styleShowChildren(bird, i) {
      let showProfile = document.querySelector(".show-profile");
      let formProfile = document.querySelector(".formProfile");
      let showChildren = document.querySelector(".show-children-div");
      showProfile.style.display = "none";
      showChildren.style.display = "flex";
      formProfile.style = "height:fit-content; width:1100px";
      let divChild = document.createElement("div");
      let divContain = `
      <i class="fa-sharp fa-solid fa-circle-xmark close-children"></i>
  <div class="div-img-children img${bird}${i}" style="border-radius: 50%;">
    <div class="div-show-img-children" style="height: 100px;width: 100px;display: flex;justify-content: center;border-radius: 50%;">
        <img src="" class="img-children" style="display:none" />
    </div>
  </div>
  <div class="show-info-children ${bird}${i}" >
    <div class="inputs">
      <label for="id-children">Id Of Bird</label>
      <input type="number" class="id-children" id="" readonly>
      <label for="name-children" class="label-name">Name Of Bird</label>
      <input type="text" class="name-children " readonly>
      <label for="bird-stage" class="labelBirdStage">Bird Stage</label>
      <input type="text" class="bird-stage" id="bird-stage" readonly>
      <button class="show-btn">Show</button>
    </div>
  </div>
      `;
      divChild.innerHTML += divContain;
      showChildren.append(divChild);
    }
    for (i = 0; i <= localStorage.length; i++) {
      if (window.localStorage.getItem(`birdYoung${i}`)) {
        let dateObjectJS;
        dateObjectJS = JSON.parse(window.localStorage.getItem(`birdYoung${i}`));
        let showId2 = dateObjectJS.id2;
        let showId = dateObjectJS.id;
        let name = dateObjectJS.name;
        let birdStage = "Young bird";
        if (+showId2 == +id) {
          styleShowChildren("birdYoung", i);
          let inputName = document.querySelector(
            `.birdYoung${i} .name-children`
          );
          let inputId = document.querySelector(`.birdYoung${i} .id-children`);
          let inputBirdStage = document.querySelector(
            `.birdYoung${i} .bird-stage`
          );
          inputId.value = showId;
          inputName.value = name;
          inputBirdStage.value = birdStage;
          if (window.localStorage.getItem(`imagebirdYoung${i}`)) {
            let classDiv = document
              .querySelector(`.imgbirdYoung${i}`)
              .className.slice(17);
            let img = document.querySelector(
              `.${classDiv} .div-show-img-children .img-children`
            );
            let divShowImg = document.querySelector(
              `.${classDiv} .div-show-img-children`
            );
            divShowImg.style =
              "height: 100px;width: 100px;display: flex;justify-content: center;border-radius: 50%;";
            img.style.display = "block";
            img.src = localStorage.getItem(`imagebirdYoung${i}`);
          }
          let classDiv = document
            .querySelector(`.imgbirdYoung${i}`)
            .className.slice(17);
          let img = document.querySelector(
            `.${classDiv} .div-show-img-children .img-children`
          );
          let divImg = document.querySelector(
            `.${classDiv} .div-show-img-children`
          );
          if (img.style.display === "none") {
            divImg.innerHTML = "Not Found Image";
            divImg.style =
              "text-align:center;color:var(--colorText);border-radius: 50%;height: 50px;background-color: #5f5f5f; width: 50px;justify-content: center cursor: pointer;z-index: 999;";
          }
        } else {
          let dateObjectJS = JSON.parse(
            window.localStorage.getItem(`bird${id}`)
          );
          let id2 = dateObjectJS.id2;
          let dateObjectJS2 = JSON.parse(
            window.localStorage.getItem(`birdYoung${i}`)
          );
          let showId2 = dateObjectJS2.id2;
          if (+showId2 == +id2) {
            styleShowChildren("birdYoung", i);
            let inputName = document.querySelector(
              `.birdYoung${i} .name-children`
            );
            let inputId = document.querySelector(`.birdYoung${i} .id-children`);
            let inputBirdStage = document.querySelector(
              `.birdYoung${i} .bird-stage`
            );
            inputId.value = showId;
            inputName.value = name;
            inputBirdStage.value = birdStage;
            if (window.localStorage.getItem(`imagebirdYoung${i}`)) {
              let classDiv = document
                .querySelector(`.imgbirdYoung${i}`)
                .className.slice(17);
              let img = document.querySelector(
                `.${classDiv} .div-show-img-children .img-children`
              );
              let divShowImg = document.querySelector(
                `.${classDiv} .div-show-img-children`
              );
              divShowImg.style =
                "height: 100px;width: 100px;display: flex;justify-content: center;border-radius: 50%;";
              img.style.display = "block";
              img.src = localStorage.getItem(`imagebirdYoung${i}`);
            }
            let classDiv = document
              .querySelector(`.imgbirdYoung${i}`)
              .className.slice(17);
            let img = document.querySelector(
              `.${classDiv} .div-show-img-children .img-children`
            );
            let divImg = document.querySelector(
              `.${classDiv} .div-show-img-children`
            );
            if (img.style.display === "none") {
              divImg.innerHTML = "Not Found Image";
              divImg.style =
                "text-align:center;color:var(--colorText);border-radius: 50%;height: 50px;background-color: #5f5f5f; width: 50px;justify-content: center cursor: pointer;z-index: 999;";
            }
          } else if (i == localStorage.length) {
            found1 = false;
          }
        }
      }
      if (window.localStorage.getItem(`Egg${i}`)) {
        let dateObjectJS;
        dateObjectJS = JSON.parse(window.localStorage.getItem(`Egg${i}`));
        let showId2 = dateObjectJS.id2;
        let showId = dateObjectJS.id;
        let birdStage = dateObjectJS.birdStageOfBird;
        if (showId2 == id) {
          styleShowChildren("Egg", i);
          let inputName = document.querySelector(`.Egg${i} .name-children`);
          let labelName = document.querySelector(`.Egg${i} .label-name`);
          let inputId = document.querySelector(`.Egg${i} .id-children`);
          let inputBirdStage = document.querySelector(`.Egg${i} .bird-stage`);
          let img = document.querySelector(
            `.imgEgg${i} .div-show-img-children`
          );
          let labelBirdStage = document.querySelector(
            `.Egg${i} .labelBirdStage`
          );
          inputName.style.display = "none";
          labelName.style.display = "none";
          labelBirdStage.style = "position: relative; top:60px";
          inputId.value = showId;
          inputBirdStage.style = "margin-top:70px;";
          img.innerHTML = "Not Found Image";
          img.style =
            "text-align:center;color:var(--colorText);border-radius: 50%;height: 50px;background-color: #5f5f5f; width: 50px;justify-content: center cursor: pointer;z-index: 999;";
          inputBirdStage.value = birdStage;
          document.querySelector(`.Egg${i} .show-btn`).style =
            "position: relative; top: 60px;";
        } else {
          let dateObjectJS = JSON.parse(
            window.localStorage.getItem(`bird${id}`)
          );
          let id2 = dateObjectJS.id2;
          let dateObjectJS2 = JSON.parse(
            window.localStorage.getItem(`Egg${i}`)
          );
          let showId2 = dateObjectJS2.id2;
          if (+showId2 == +id2) {
            styleShowChildren("Egg", i);
            let inputName = document.querySelector(`.Egg${i} .name-children`);
            let inputId = document.querySelector(`.Egg${i} .id-children`);
            let inputBirdStage = document.querySelector(`.Egg${i} .bird-stage`);
            inputId.value = showId;
            inputName.value = name;
            inputBirdStage.value = birdStage;
            let classDiv = document
              .querySelector(`.imgEgg${i}`)
              .className.slice(17);
            let img = document.querySelector(
              `.${classDiv} .div-show-img-children .img-children`
            );
            let divImg = document.querySelector(
              `.${classDiv} .div-show-img-children`
            );
            if (img.style.display === "none") {
              divImg.innerHTML = "Not Found Image";
              divImg.style =
                "text-align:center;color:var(--colorText);border-radius: 50%;height: 50px;background-color: #5f5f5f; width: 50px;justify-content: center cursor: pointer;z-index: 999;";
            }
          } else if (i == localStorage.length) {
            found1 = false;
          }
        }
      }
    }
  }
  btnChildren.addEventListener("click", function () {
    let showChildren = document.querySelector(".show-children-div");
    showChildren.innerHTML = "";
    calcChildren();
    view();
    if (found1 == false && found2 == false) {
      let showChildren = document.querySelector(".show-children-div");
      let showProfile = document.querySelector(".show-profile");
      let formProfile = document.querySelector(".formProfile");
      showProfile.style.display = "none";
      showChildren.style.display = "flex";
      showChildren.innerHTML = `Not Found Children Now <button class="cancel-children"/>Cancel</button>`;
      formProfile.style = "height:100px; width:500px";
      let cancel = document.querySelector(".cancel-children");
      cancel.addEventListener("click", function () {
        document.querySelector(".li-profiles").click();
      });
    } else {
      document.body.addEventListener("click", function (event) {
        if (event.target.classList.contains("close-children")) {
          document.querySelector(".li-profiles").click();
        }
      });
      showBtnFunction();
    }
  });
}

function showBtnFunction() {
  let btnShow = document.querySelectorAll(".show-btn");
  btnShow.forEach((btn) => {
    btn.addEventListener("click", function () {
      let parentOne = btn.parentElement;
      let parentTwoClass = parentOne.parentElement.className.slice(19);
      let id = document.querySelector(
        `.${parentTwoClass} .inputs .id-children`
      );
      let birdStageInput = document.querySelector(
        `.${parentTwoClass} .inputs .bird-stage`
      );
      let showChildren = document.querySelector(".show-children-div");
      let showProfile = document.querySelector(".show-profile");
      let formProfile = document.querySelector(".formProfile");
      let btnChildren = document.querySelector(".show-children");
      let textCalc = document.querySelector(".text-calc");
      textCalc.style.display = "none";
      btnChildren.style.display = "none";
      let birdStage;
      if (birdStageInput.value === "Young bird") {
        birdStage = "birdYoung";
      } else {
        birdStage = "Egg";
      }
      showChildren.style.display = "none";
      formProfile.style = "height:523px;width:1000px;";
      let idValue = id.value;
      showProfile.style.display = "block";
      let dateObjectJS;
      dateObjectJS = JSON.parse(
        window.localStorage.getItem(`${birdStage}${id.value}`)
      );
      let inputId = document.querySelector(".show-info .inputs-show-info .id");
      let inputName = document.querySelector(
        ".show-info .inputs-show-info .name"
      );
      let inputBirth = document.querySelector(
        ".show-info .inputs-show-info .birth-day"
      );
      let inputAge = document.querySelector(
        ".show-info .inputs-show-info .age"
      );
      let inputKind = document.querySelector(
        ".show-info .inputs-show-info .kind"
      );
      let inputId2 = document.querySelector(
        ".show-info .inputs-show-info .id2"
      );
      let inputBirdStage = document.querySelector(
        ".show-info .inputs-show-info .bird-stage"
      );
      let btnPartner = document.querySelector(
        ".formProfile .show-profile .buttons .show-partner"
      );
      let cancel = document.querySelector(
        ".formProfile .show-profile .buttons .cancel"
      );
      cancel;
      let labelId2 = document.querySelector(
        ".formProfile .show-profile .label-id2"
      );
      let labelKind = document.querySelector(
        ".formProfile .show-profile .label-kind"
      );
      let labelName = document.querySelector(
        ".formProfile .show-profile .label-name"
      );

      let showId = dateObjectJS.id;
      let showName = dateObjectJS.name;
      let showDate = dateObjectJS.dateOFbird;
      let showKind = dateObjectJS.kindOFbird;
      let showId2 = dateObjectJS.id2;
      let showBirdStage = dateObjectJS.birdStageOfBird;
      let dateNow = new Date();
      calculateAge(showDate, dateNow, inputAge, `${showBirdStage}Info`);
      inputId.value = showId;
      inputName.value = showName;
      inputBirth.value = showDate;
      inputKind.value = showKind;
      inputId2.value = showId2;
      cancel.addEventListener("click", function () {
        let liProfiles = document.querySelector(".li-profiles");
        liProfiles.click();
      });
      if (showBirdStage === "bird") {
        inputBirdStage.value = "Old Bird";
        btnPartner.innerHTML = "Show Partner";
        btnChildren.style.display = "inline";
        labelId2.innerHTML = "Partner Id";
      } else if (showBirdStage === "birdYoung") {
        inputKind.style.display = "none";
        inputBirdStage.value = "Young Bird";
        labelKind.style.display = "none";
        labelId2.style = "position: absolute;top: 395px;";
        inputId2.style = "position: absolute;top: 421px;";
        btnPartner.innerHTML = "Show Parent";
        labelId2.innerHTML = "Parent Id";
      } else if (showBirdStage === "Egg") {
        inputBirdStage.value = "Egg";
        inputKind.style.display = "none";
        inputName.style.display = "none";
        labelKind.style.display = "none";
        labelName.style.display = "none";
        labelId2.style = "position: absolute;top: 395px; left:4px";
        inputId2.style = "position: absolute;top: 421px; left:0px";
        let divImg = document.querySelector(".div-img");
        divImg.style.display = "none";
        formProfile.style = "height:523px;width:600px;";
        document.querySelector(".inputs-show-info").style = "top:50px";
        btnPartner.innerHTML = "Show Parent";
        labelId2.innerHTML = "Parent Id";
      }
      viewPartner();
      imageProfile(birdStage, idValue);
    });
  });
}
