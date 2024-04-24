
let vale = document.getElementById("blood_name");
let subm = document.getElementById("submit_blood");



let  blood =[
"rudraksh rai",
"khushi mehrotra",
"yasmeen",
"prakhar verma",
"aryan verma",
"yuvraj singh", 
"abbas mehdi hasan", 
"shikhar upadhyay",
"anuj singh",
"abhinav joshi", 
"anishka gupta",
"rishabh dwivedi", 
"shivang mishra",
"kashik mishra",
"adarsh gupta",
"manish verma",
"purandev singh",
"abhinav pandey",
"aditya nikhil raj",
"arpita singh",
"annat tripathi",
"anushka shukla",
"avanish dubey",
"ayan ahmad",
"manjeet gupta",
"sumit yadav",
"jai bhargava", 
"mohd. sami",
"shruti shukla",
"pallavi raturi",
"abhishek kumar pandey",
"mohd faiz qureshi",
"ali ahmed",
"aditya raj",
"ayush kathri",
"shubham tripathi",
"mohd adnan",
"ali ahmad",
"shadab ansari",
"md danish",
"mohd faiz qureshi",
"mariyam fatima rizvi" 
 

];


let vg = false;

function myfuction() {
    for (let i = 0; i <= blood.length; i++) {
       if(blood[i] == vale.value.toLowerCase().trim()){
       console.log("hello");
vg=true;
       break;
       }
        
    }
    if(vg == false){
      alert("You are not a valid person, please fill name which you had provided at the time of Registration... ");
      
    }

    else{

      
      
      alert("your blood donation certificate is generated successfully...");

     
      generatePDFBlood(vale.value);
      
    }
    
    
  }

  var reload = false;

      const generatePDFBlood = async (name) =>{ 
        const {PDFDocument, StandardFonts, rgb} = PDFLib;
        name = name.toUpperCase();
      
        const exBytes = await fetch("./Bld_dn_camp.pdf").then((res) =>{
            return res.arrayBuffer();
        });
      
    
        const pdfDoc = await PDFDocument.load(exBytes);
        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
        
        // Get the first page of the document
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];
      
        
        // Draw a string of text diagonally across the first page 
        
        // xPos ---> line se pahle ki 
        // line ki width 19 charachters
        // 1 character --- 15px 
        let xPos = 170;
        let nameLenth = name.length;
        let offset = (490 - nameLenth*15)/2;
        firstPage.drawText(name, {
        x: xPos + offset,
        y: 240,
        size:25,
        // color: rgb(0, 0.53, 0.71),
        // color: rgb(0, 0, 0),
        font:timesRomanFont,
        // color: rgb(250, 250, 250),
      });
      
      const uri = await pdfDoc.saveAsBase64({dataUri:true});
      // document.querySelector("#mypdf").src = uri;
      
        // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
        // document.getElementById("mypdf").src = pdfDataUri;
      
        // Serialize the PDFDocument to bytes (a Uint8Array)
      const pdfBytes = await pdfDoc.save();
      console.log("Done creating");
      
      // this was for creating uri and showing in iframe
      
      // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
      // document.getElementById("pdf").src = pdfDataUri;
      
      var file = new File(
        [pdfBytes],
        "NSS Blood Donation Certificate.pdf",
        {
          type: "application/pdf;charset=utf-8",
        }
      );
      saveAs(file);

      reload = true;
      
      if(reload==true){
        location.reload();
      }
      
      };

      

      //  poster



      let valep = document.getElementById("poster_name");
      let submp = document.getElementById("submit_poster");

      let poster =[
       "ankita shukla",
        "vidyank verma",
        "aditi singh", 
        "anu kushwaha", 
        "arpita singh", 
        "deepshika singh",
        "md danish", 
        "nandini singh", 
        "nikita singh",
        "pratibha umrao", 
        "priya singh", 
        "sanjana singh",
        "shivani yadav",
        "sumi gaur",
        "tanu tiwari",
        "vaishnavi agarwal", 
        "yashika singh tomar",
        "shubham tripathi",
        "mohd adnan",
        "ali ahmad",
        "shadab ansari",
        "mohd faiz qureshi",
        "mariyam fatima rizvi",
        "yazdaan butool",
        "khushboo singh",
        "sinu kumari"
        
      ];

      let vgp = false;

function myfuctionp() {
    for (let i = 0; i <= poster.length; i++) {
       if(poster[i] == valep.value.toLowerCase()){
       console.log("hello");
vgp=true;
       break;
       }
        
    }
    if(vgp == false){
      alert("You are not a valid person, please fill name which you had provided at the time of Registration... ");
      
    }

    else{
     
      alert("your certification for poster making competition is generated successfully...");
      generatePDFPoster(valep.value);
    }

    
  }


  const generatePDFPoster = async (name) =>{ 
    const {PDFDocument, StandardFonts, rgb} = PDFLib;
    name = name.toUpperCase();
  
    const exBytes = await fetch("./poster_making.pdf").then((res) =>{
        return res.arrayBuffer();
    });
  
    const pdfDoc = await PDFDocument.load(exBytes);
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    
    // Get the first page of the document
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
  
    
    // Draw a string of text diagonally across the first page 
    
    // xPos ---> line se pahle ki 
    // line ki width 19 charachters
    // 1 character --- 15px 
    let xPos = 170;
    let nameLenth = name.length;
    let offset = (490 - nameLenth*15)/2;
    firstPage.drawText(name, {
    x: xPos + offset,
    y: 240,
    size:25,
    // color: rgb(0, 0.53, 0.71),
    // color: rgb(0, 0, 0),
    font:timesRomanFont,
    // color: rgb(250, 250, 250),
  });
  
  const uri = await pdfDoc.saveAsBase64({dataUri:true});
  // document.querySelector("#mypdf").src = uri;
  
    // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    // document.getElementById("mypdf").src = pdfDataUri;
  
    // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();
  console.log("Done creating");
  
  // this was for creating uri and showing in iframe
  
  // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  // document.getElementById("pdf").src = pdfDataUri;
  
  var file = new File(
    [pdfBytes],
    "NSS Poster Making Participation Certificate.pdf",
    {
      type: "application/pdf;charset=utf-8",
    }
  );
  saveAs(file);

  reload = true;
      
      if(reload==true){
        location.reload();
      }

  };




  // speech

  let valespeech = document.getElementById("speech_name");
    let submspeech = document.getElementById("submit_speech");






  let speech = [
    "rishav mishra", 
    "shivansh chandra",
    "om hari singh yadav",
    "ayush pathak",
    "sonali kumari", 
    "khushi singh", 
    "ananya singhal",
    "krishna singh", 
    "deeksha bhadauria", 
    "mohd farhan", 
    "shikhar upadhyay", 
    "agrima dwivedi", 
    "khushi yadav",
    "dolly shahi", 
    "sakshi mishra", 
    "anishka gupta",
    "shubham tripathi",
    "mohd adnan",
    "ali ahmad",
    "shadab ansari",
    "md danish",
    "mohd faiz qureshi",
    "ananya verma",
    "mariyam fatima rizvi",
    "yazdaan butool"

    ];
let vgspeech= false;
    function myfuctionspeech() {
      for (let i = 0; i <= speech.length; i++) {
         if(speech[i] == valespeech.value.toLowerCase()){
         console.log("hello");
  vgspeech=true;
         break;
         }
          
      }
      if(vgspeech == false){
        alert("You are not a valid person, please fill name which you had provided at the time of Registration... ");
        
      }
  
      else{
       
        alert("your speech competition certificate is generated successfully...");
        generatePDFSpeech(valespeech.value);
      }
  
      
    }
  
    const generatePDFSpeech = async (name) =>{ 
      const {PDFDocument, StandardFonts, rgb} = PDFLib;
      name = name.toUpperCase();
    
      const exBytes = await fetch("./Speech_comp.pdf").then((res) =>{
          return res.arrayBuffer();
      });
    
      const pdfDoc = await PDFDocument.load(exBytes);
      const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
      
      // Get the first page of the document
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
    
      
      // Draw a string of text diagonally across the first page 
      
      // xPos ---> line se pahle ki 
      // line ki width 19 charachters
      // 1 character --- 15px 
      let xPos = 170;
      let nameLenth = name.length;
      let offset = (490 - nameLenth*15)/2;
      firstPage.drawText(name, {
      x: xPos + offset,
      y: 240,
      size:25,
      // color: rgb(0, 0.53, 0.71),
      // color: rgb(0, 0, 0),
      font:timesRomanFont,
      // color: rgb(250, 250, 250),
    });
    
    const uri = await pdfDoc.saveAsBase64({dataUri:true});
    // document.querySelector("#mypdf").src = uri;
    
      // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
      // document.getElementById("mypdf").src = pdfDataUri;
    
      // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();
    console.log("Done creating");
    
    // this was for creating uri and showing in iframe
    
    // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    // document.getElementById("pdf").src = pdfDataUri;
    
    var file = new File(
      [pdfBytes],
      "NSS Speech Comp Certificate.pdf",
      {
        type: "application/pdf;charset=utf-8",
      }
    );
    saveAs(file);

    reload = true;
      
    if(reload==true){
      location.reload();
    }

    };



    // digital


    let valedigi = document.getElementById("digital_name");
    let submdigi = document.getElementById("submit_digital");


    let digital = [
      "abhishek kumar yadav",
      "adhiraj singh",
      "dheeraj gupta",
      "yash chawla",
      "adarsh shukla", 
      "ankit pandey",
      "arpit verma", 
      "aman kr.singh",
      "ayush kr.gupta",
      "anshuman singh", 
      "garvit mittal",
      "krish gupta",
      "rishabh maddy", 
      "adarsh srivastava", 
      "akshat srivastava", 
      "sawan singh",
      "aditya kr. srivastava", 
      "rohan singh", 
      "rishav upadhyay", 
      "vijay raj gupta", 
      "akarsh srivastava", 
      "jitendra kumar verma",
      "lalit gangwar",
      "himanshu gupta",
      "disha singh", 
      "shruti mishra", 
      "kirtika singh",
      "anshuman chaturvedi", 
      "sidhant tiwari"
    ];
    
    let vgdigi= false;
    function myfuctiondigital() {
      for (let i = 0; i <= digital.length; i++) {
         if(digital[i] == valedigi.value.toLowerCase()){
         console.log("hello");
  vgdigi=true;
         break;
         }
          
      }
      if(vgdigi == false){
        alert("You are not a valid person, please fill name which you had provided at the time of Registration... ");
        
      }
  
      else{
        
        alert("your digital making competition certificate is generated successfully...");
        generatePDFDigitalPoster(valedigi.value);
      }
  
      
    }


    const generatePDFDigitalPoster = async (name) =>{ 
      const {PDFDocument, StandardFonts, rgb} = PDFLib;
      name = name.toUpperCase();
    
      const exBytes = await fetch("./digital_poster.pdf").then((res) =>{
          return res.arrayBuffer();
      });
    
      const pdfDoc = await PDFDocument.load(exBytes);
      const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
      
      // Get the first page of the document
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
    
      
      // Draw a string of text diagonally across the first page 
      
      // xPos ---> line se pahle ki 
      // line ki width 19 charachters
      // 1 character --- 15px 
      let xPos = 0;
      let nameLenth = name.length;
      let offset = (490 - nameLenth*12)/2;
      firstPage.drawText(name, {
      x: xPos + offset + 5,
      y: 280,
      size:22,
      // color: rgb(0, 0.53, 0.71),
      // color: rgb(0, 0, 0),
      font:timesRomanFont,
      // color: rgb(250, 250, 250),
    });
    
    const uri = await pdfDoc.saveAsBase64({dataUri:true});
    // document.querySelector("#mypdf").src = uri;
    
      // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
      // document.getElementById("mypdf").src = pdfDataUri;
    
      // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();
    console.log("Done creating");
    
    // this was for creating uri and showing in iframe
    
    // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    // document.getElementById("pdf").src = pdfDataUri;
    
    var file = new File(
      [pdfBytes],
      "NSS Digital Poster Comp Certificate.pdf",
      {
        type: "application/pdf;charset=utf-8",
      }
    );
    saveAs(file);

    reload = true;
      
      if(reload==true){
        location.reload();
      }

    };

// elections

let valeE = document.getElementById("election_name");
    let subE = document.getElementById("submit_election");


let election = [
  "mariyam fatima rizvi",
  "ankush srivastava",
  "deepak gupta",
  "abhishek vishwakarma",
  "neha mishra",
  "shruti mishra",
  "himanshu gupta",
  "rajan rai",
  "disha singh",
  "yashika singh tomar",
  "kirti chaurasia",
  "kirtika singh"

];

let vgE= false;
    function myfuctionelection() {
      for (let i = 0; i <= election.length; i++) {
         if(election[i] == valeE.value.toLowerCase()){
         console.log("hello");
  vgE=true;
         break;
         }
          
      }
      if(vgE == false){
        alert("You are not a valid person, please fill name which you had provided at the time of Registration... ");
        
      }
  
      else{
        
        alert("your speech on election awareness competition certificate is generated successfully...");
        generatePDFElectionSpeech(valeE.value);
      }
  
      
    }


    const generatePDFElectionSpeech = async (name) =>{ 
      const {PDFDocument, StandardFonts, rgb} = PDFLib;
      name = name.toUpperCase();
    
      const exBytes = await fetch("./speechElection.pdf").then((res) =>{
          return res.arrayBuffer();
      });
    
      const pdfDoc = await PDFDocument.load(exBytes);
      const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
      
      // Get the first page of the document
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
    
      
      // Draw a string of text diagonally across the first page 
      
      // xPos ---> line se pahle ki 
      // line ki width 19 charachters
      // 1 character --- 15px 
      let xPos = 0;
      let nameLenth = name.length;
      let offset = (490 - nameLenth*12)/2;
      firstPage.drawText(name, {
      x: xPos + offset + 5,
      y: 280,
      size:22,
      // color: rgb(0, 0.53, 0.71),
      // color: rgb(0, 0, 0),
      font:timesRomanFont,
      // color: rgb(250, 250, 250),
    });
    
    const uri = await pdfDoc.saveAsBase64({dataUri:true});
    // document.querySelector("#mypdf").src = uri;
    
      // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
      // document.getElementById("mypdf").src = pdfDataUri;
    
      // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();
    console.log("Done creating");
    
    // this was for creating uri and showing in iframe
    
    // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    // document.getElementById("pdf").src = pdfDataUri;
    
    var file = new File(
      [pdfBytes],
      "NSS Election Speech Comp Certificate.pdf",
      {
        type: "application/pdf;charset=utf-8",
      }
    );
    saveAs(file);

    reload = true;
      
    if(reload==true){
      location.reload();
    }

    };
