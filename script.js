var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+918600765857'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>8600765857</label></div> </a> <a href='mailto:patilvinu777@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/Vinayak-09'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/918600765857'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/vinayak_09'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/vinayak_patil_09'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/vinayak-patil-793bb5206/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Vinayak Resume.pdf</label></div><a href='assets/Vinayak Patil&#39;s Resume.pdf' download='Vinayak_Patil_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.63833262443757!2d74.19014864534314!3d16.865338763272877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1a7dcf40f5dd7%3A0xd7b69fe1fcfa9877!2zMTbCsDUxJzU1LjQiTiA3NMKwMTEnMjUuMyJF!5e0!3m2!1sen!2sin!4v1645079906766!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>B2 'Asara'<br>Kodoli<br>Kolhapur, Maharashtra, INDIA 416114</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Arthur Leywin.</a>.</span><br><br>I was a student and professor at <span class='bold'>Xyrus Academy 👨🏻‍💻📚</span><br><br>I am now one of the Lances of dicathen, and I am here to provide audiobooks for my story.<br><br>Send <span class='bold'>'audio'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "audio":
            sendTextMessage("<span class='sk'>What book would you like...<br><span class='bold'>'1'</span> - Book 1: Early years<br><span class='bold'>'2'</span> - Book 2: New Heights<br><span class='bold'>'3'</span> - Book 3: Beckoning Fates<br><span class='bold'>'4'</span> - Book 4: Horizon's Edge<br><span class='bold'>'5'</span> - Book 5: Convergence<br><span class='bold'>'6'</span> - Book 6: Transcendence<br><span class='bold'>'7'</span> - Book 7: Divergence<br><span class='bold'>'8'</span> - Book 8: Ascension<br><span class='bold'>'9'</span> - Book 9: Reckoning<br><span class='bold'>'10'</span> - Book 10: Retribution</span>");
            break;
        case "1":
            var linkUrl = "https://drive.google.com/file/d/1NsXznmyyicrfbQycCitEaicEpeSrBmQa/view";
            var linkElement = document.createElement('a');
            linkElement.href = linkUrl;
            linkElement.textContent = "Book 1-2"; // Text shown for the link
            sendTextMessage(linkElement.outerHTML);
            break;
        case "2":
            var linkUrl = "https://drive.google.com/file/d/1NsXznmyyicrfbQycCitEaicEpeSrBmQa/view";
            var linkElement = document.createElement('a');
            linkElement.href = linkUrl;
            linkElement.textContent = "Book 1-2"; // Text shown for the link
            sendTextMessage(linkElement.outerHTML);
            break;
        case "3":
            var linkUrl = "https://drive.google.com/file/d/1iROTGlBnXMq_-0QIkMxfq6W5EnQYR4MR/view";
            var linkElement = document.createElement('a');
            linkElement.href = linkUrl;
            linkElement.textContent = "Book 3-4"; // Text shown for the link
            sendTextMessage(linkElement.outerHTML);
            break;
        case "4":
            var linkUrl = "https://drive.google.com/file/d/1iROTGlBnXMq_-0QIkMxfq6W5EnQYR4MR/view";
            var linkElement = document.createElement('a');
            linkElement.href = linkUrl;
            linkElement.textContent = "Book 3-4"; // Text shown for the link
            sendTextMessage(linkElement.outerHTML);
            break;
        case "5":
            var linkUrl = "https://drive.google.com/file/d/1WdYcNnsR7LUBv8pWIRw9IpXxvVzXvnIA/view";
            var linkElement = document.createElement('a');
            linkElement.href = linkUrl;
            linkElement.textContent = "Book 5"; // Text shown for the link
            sendTextMessage(linkElement.outerHTML);
            break;
        case "6":
            var linkUrl = "https://drive.google.com/file/d/1fOhOIURr4lzyo9DFfOjn9lxBixX7KiJc/view";
            var linkElement = document.createElement('a');
            linkElement.href = linkUrl;
            linkElement.textContent = "Book 6"; // Text shown for the link
            sendTextMessage(linkElement.outerHTML);
            break;
        case "7":
            var linkUrl = "https://drive.google.com/file/d/1VslCcmG920Vx_3SwS0obAEQk36DGNCa0/view";
            var linkElement = document.createElement('a');
            linkElement.href = linkUrl;
            linkElement.textContent = "Book 7"; // Text shown for the link
            sendTextMessage(linkElement.outerHTML);
            break;
        case "8":
            var linkUrl = "https://drive.google.com/file/d/1WvAfVczGlN3zH1saAT1EkoQ_8zzQFdtO/view";
            var linkElement = document.createElement('a');
            linkElement.href = linkUrl;
            linkElement.textContent = "Book 8"; // Text shown for the link
            sendTextMessage(linkElement.outerHTML);
            break;
        case "9":
            var linkUrl = "https://drive.google.com/file/d/1Q65GAmx_bSAYdRRapVrNn0YEiJprfuNE/view";
            var linkElement = document.createElement('a');
            linkElement.href = linkUrl;
            linkElement.textContent = "Book 9"; // Text shown for the link
            sendTextMessage(linkElement.outerHTML);
            break;
        case "10":
            var linkUrl = "https://drive.google.com/file/d/1Q4JUTSCkgyYWP_GaZcSsOlU2O9W8b2bu/view";
            var linkElement = document.createElement('a');
            linkElement.href = linkUrl;
            linkElement.textContent = "Book 10"; // Text shown for the link
            sendTextMessage(linkElement.outerHTML);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'audio' to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
