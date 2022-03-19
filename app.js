var pilihAva=1;
var lokasiImage="aset/img/";
var barMakan=document.getElementById("pro_makan");
var barMain=document.getElementById("pro_main");
var barTidur=document.getElementById("pro_tidur");
var barBelajar=document.getElementById("pro_belajar");
var semester=1;
var idle;
var progres_belajar=299;
//set lama aktivitas
var t_belajar=20;
var t_tidur=25;
var t_makan=10;
var t_main=15;
document.getElementById("semester").innerHTML=semester
window.onload = function(event) {
    document.getElementById("utama").style.display="none";
    showImage(1);
    //showAktivitas("Diam",0);
    setProgress(barMakan,50);
    setProgress(barMain,50);
    setProgress(barTidur,50);
    setProgress(barBelajar,0); 
    idle=1;
}

function showImage(pilihan){
    namaAva="Avatar_"+pilihan+".png";
    document.getElementById("avatar").src=lokasiImage+namaAva;
}
function showAktivitas(pilihan,waktu,pilihAva){
    namaAva=pilihan+".png";
    document.getElementById("aktivitas").src=lokasiImage+pilihan+'/'+pilihan+'_'+pilihAva+".png";
    if(pilihan=='Diam'){
        document.getElementById("ketAktivitas").innerHTML=pilihan;
    }else{
        if(pilihan=='Main'){
            document.getElementById("ketAktivitas").innerHTML="Bermain = "+waktu+" menit";
        }else{
            document.getElementById("ketAktivitas").innerHTML=pilihan+"= "+waktu+" menit";
        }
    }
        
}
function aktivitas(act){ 
    switch(act) {
        case 'Makan':
            if(barMakan.ariaValueNow<=100 && barMakan.ariaValueNow>=0){
                var i=0
                var interval = setInterval(
                    function(){
                        btnDisable();
                        idle=2;
                        var pBelajar=barBelajar.ariaValueNow;
                        var pMakan=barMakan.ariaValueNow;
                        var pTidur=barTidur.ariaValueNow;
                        var pMain=barMain.ariaValueNow;
                        let progressBelajar=parseInt(pBelajar);
                        let progressTidur=parseInt(pTidur);
                        let progressMakan=parseInt(pMakan);
                        let progressMain=parseInt(pMain);
                        i++;                                       
                        if( progressTidur==0 || progressMain==0 || progres_belajar==0){
                            gameOver();
                        }            
                        else if(progressMakan>=100 && barBelajar.ariaValueNow>0 && barMain.ariaValueNow>0 && barTidur.ariaValueNow>0){
                            Swal.fire(
                                'Oh oh!',
                                'Saya sudah kenyang !',
                                'error'
                            )
                        }
                        if(progressMakan<100)
                            progressMakan=progressMakan+1;
                        if(progressTidur>0 && (i%5)==0)
                            progressTidur=progressTidur-1;
                        if(progressBelajar>0 && (i%10)==0)
                            progressBelajar=progressBelajar-1;
                        if(progressMain>0 && (i%5)==0)
                            progressMain=progressMain-1;
                        console.log(progressMakan)
                        setProgress(barBelajar,progressBelajar);
                        setProgress(barTidur,progressTidur);
                        setProgress(barMakan,progressMakan);
                        setProgress(barMain,progressMain);
                        showAktivitas(act,i,pilihAva); 
                        if(progres_belajar!=299)progres_belajar=progressBelajar;
                        if (i >=t_makan || progressMakan==100 || progressTidur==0 || progressMain==0 || progres_belajar==0) {
                            if(progressMakan==100){
                                Swal.fire(
                                    'Oh oh!',
                                    'Saya sudah kenyang !',
                                    'error'
                                )   
                            }
                            if(progressTidur==0 || progres_belajar==0 || progressMain==0)gameOver();
                            showAktivitas(act,i,pilihAva);
                            btnEnable();
                            idle=1;
                            i=0;
                            window.clearInterval(interval);
                            setTimeout(() => {showAktivitas("Diam",i,pilihAva);}, 200);
                        }
                    }, 1000);
            }
            break;
        case 'Belajar':
            if(barBelajar.ariaValueNow<=100 && barBelajar.ariaValueNow>=0 ){
                var i=0
                var interval = setInterval(
                    function(){
                        btnDisable();
                        idle=2;
                        var pBelajar=barBelajar.ariaValueNow;
                        var pMakan=barMakan.ariaValueNow;
                        var pTidur=barTidur.ariaValueNow;
                        var pMain=barMain.ariaValueNow;
                        let progressBelajar=parseInt(pBelajar);
                        let progressTidur=parseInt(pTidur);
                        let progressMakan=parseInt(pMakan);
                        let progressMain=parseInt(pMain);
                        i++;                                       
                        if(progressTidur==0 || progressMakan==0 || progressMain==0){
                            gameOver();
                        }           
                        else if(progressBelajar>=100 && barMakan.ariaValueNow>0 && barMain.ariaValueNow>0 && barTidur.ariaValueNow>0){
                            lulus();
                        }
                        if(progressBelajar<100){
                            progressBelajar=progressBelajar+1;
                            progres_belajar=progressBelajar;
                        }
                        if(progressTidur>0 && (i%5)==0)
                            progressTidur=progressTidur-1;
                        if(progressMakan>0 && (i%2)==0)
                            progressMakan=progressMakan-1;
                        if(progressMain>0 && (i%7)==0)
                            progressMain=progressMain-1;
                        console.log(progressBelajar)
                        setProgress(barBelajar,progressBelajar);
                        setProgress(barTidur,progressTidur);
                        setProgress(barMakan,progressMakan);
                        setProgress(barMain,progressMain);
                        showAktivitas(act,i,pilihAva); 
                        if (i >=t_belajar || progressBelajar==100 || progressTidur==0 || progressMakan==0 || progressMain==0) {
                            if(progressBelajar==100)lulus();
                            if(progressTidur==0 || progressMakan==0 || progressMain==0)gameOver();
                            showAktivitas(act,i,pilihAva); 
                            btnEnable();
                            idle=1;
                            i=0;
                            window.clearInterval(interval);
                            setTimeout(() => {showAktivitas("Diam",i,pilihAva);}, 200);
                            
                        }
                        
                    }, 1000);
            }
            break;
        case 'Istirahat':
            if(barTidur.ariaValueNow<=100 && barTidur.ariaValueNow>=0){
                var i=0
                var interval = setInterval(
                    function(){
                        btnDisable();
                        idle=2;
                        var pBelajar=barBelajar.ariaValueNow;
                        var pMakan=barMakan.ariaValueNow;
                        var pTidur=barTidur.ariaValueNow;
                        var pMain=barMain.ariaValueNow;
                        let progressBelajar=parseInt(pBelajar);
                        let progressTidur=parseInt(pTidur);
                        let progressMakan=parseInt(pMakan);
                        let progressMain=parseInt(pMain);
                        i++;                                       
                        if( progressMakan==0 || progressMain==0 || progres_belajar==0){
                            gameOver();
                        }            
                        else if(progressTidur>=100 && barBelajar.ariaValueNow>0 && barMain.ariaValueNow>0 && barMakan.ariaValueNow>0){
                            Swal.fire(
                                'Oke!',
                                'Suduh cukup tidurnya, saatnya bangun !',
                                'success'
                            )
                        }
                        if(progressTidur<100)
                            progressTidur=progressTidur+1;
                        if(progressMakan>0 && (i%5)==0)
                            progressMakan=progressMakan-1;
                        if(progressBelajar>0 && (i%10)==0)
                            progressBelajar=progressBelajar-1;
                        if(progressMain>0 && (i%3)==0)
                            progressMain=progressMain-1;
                        console.log(progressMain)
                        setProgress(barBelajar,progressBelajar);
                        setProgress(barTidur,progressTidur);
                        setProgress(barMakan,progressMakan);
                        setProgress(barMain,progressMain);
                        showAktivitas(act,i,pilihAva);
                        if(progres_belajar!=299)progres_belajar=progressBelajar;
                        if (i >=t_tidur || progressTidur==100 || progressMakan==0 || progressMain==0 || progres_belajar==0) {
                            if(progressTidur==100){
                                Swal.fire(
                                    'Oke!',
                                    'Suduh cukup tidurnya, saatnya bangun !',
                                    'success'
                                )   
                            }
                            if(progressMakan==0 || progres_belajar==0 || progressMain==0)gameOver();
                            showAktivitas(act,i,pilihAva);
                            btnEnable();
                            idle=1;
                            i=0;
                            window.clearInterval(interval);
                            setTimeout(() => {showAktivitas("Diam",i,pilihAva);}, 200);
                        }
                    }, 1000);
            }else{
                Swal.fire(
                    'Oke!',
                    'Suduh cukup tidurnya, saatnya bangun !',
                    'success'
                    )
            }
            break;
        case 'Main':
                if(barTidur.ariaValueNow<=100 && barTidur.ariaValueNow>=0){
                    var i=0
                    var interval = setInterval(
                        function(){
                            btnDisable();
                            idle=2;
                            var pBelajar=barBelajar.ariaValueNow;
                            var pMakan=barMakan.ariaValueNow;
                            var pTidur=barTidur.ariaValueNow;
                            var pMain=barMain.ariaValueNow;
                            let progressBelajar=parseInt(pBelajar);
                            let progressTidur=parseInt(pTidur);
                            let progressMakan=parseInt(pMakan);
                            let progressMain=parseInt(pMain);
                            i++;                                       
                            if( progressMakan==0 || progressTidur==0 || progres_belajar==0){
                                gameOver();
                            }            
                            else if(progressMain>=100 && barBelajar.ariaValueNow>0 && barTidur.ariaValueNow>0 && barMakan.ariaValueNow>0){
                                Swal.fire(
                                    'Oke!',
                                    'Suduh cukup mainnya, saatnya belajar !',
                                    'success'
                                )
                            }
                            if(progressMain<100)
                                progressMain=progressMain+1;
                            if(progressMakan>0 && (i%3)==0)
                                progressMakan=progressMakan-1;
                            if(progressBelajar>0 && (i%5)==0)
                                progressBelajar=progressBelajar-1;
                            if(progressTidur>0 && (i%3)==0)
                                progressTidur=progressTidur-1;
                            console.log(progressMain)
                            setProgress(barBelajar,progressBelajar);
                            setProgress(barTidur,progressTidur);
                            setProgress(barMakan,progressMakan);
                            setProgress(barMain,progressMain);
                            showAktivitas(act,i,pilihAva); 
                            if(progres_belajar!=299)progres_belajar=progressBelajar;
                            if (i >=t_main || progressMain==100 || progressMakan==0 || progressTidur==0 || progres_belajar==0) {
                                if(progressMain==100){
                                    Swal.fire(
                                        'Oke!',
                                        'Suduh cukup mainnya, saatnya belajar !',
                                        'success'
                                    )   
                                }
                                if(progressMakan==0 || progres_belajar==0 || progressTidur==0)gameOver();
                                showAktivitas(act,i,pilihAva);
                                btnEnable();
                                idle=1;
                                i=0;
                                window.clearInterval(interval);
                                setTimeout(() => {showAktivitas("Diam",i,pilihAva);}, 200);
                                            
                            }
                        }, 1000);
                }else{
                    Swal.fire(
                        'Oke!',
                        'Suduh cukup mainnya, saatnya belajar !',
                        'success'
                        )
                }
                break;
        default:     
    } 
}
function nextImage(){
    if(pilihAva<6){
        pilihAva=pilihAva+1;
    }else if(pilihAva>=6){
        pilihAva=1;
    }   
    showImage(pilihAva);
}
function prevImage(){
    if(pilihAva>1){
        pilihAva=pilihAva-1;
    }else{
        pilihAva=6;
    }   
    showImage(pilihAva);
}
function start(){
    nama=document.getElementById("inputName").value;
    if(nama==""){
        alert("nama tidak boleh kosong");
    }else{
        document.getElementById("login").style.display="none";
        document.getElementById("utama").style.display="block";
        utama(nama);
    }
    showAktivitas("Diam",0,pilihAva);
}
function tampilWaktu(nama){
    let  greeting;
    let textTime = new Date().toLocaleTimeString("en-US",{ hour12: false });
    console.log(textTime);
    jam=textTime.split(":");
    if(jam[0]>=5 && jam[0]<=12){
        greeting= " Good Morning, "+nama+" !";
        document.getElementById("main").style.backgroundImage="url('aset/img/morning.png')";
        document.getElementById("bgaktivitas").className="card bg-light text-light bg-gradient";
        document.getElementById("bgbar").className="card-body text-dark bg-light"
    }else if(jam[0]>12 && jam[0]<=17){
        greeting= " Good Afternoon, "+nama+" !";
        document.getElementById("main").style.backgroundImage="url('aset/img/afternoon.png')";
        document.getElementById("bgaktivitas").className="card bg-light text-light bg-gradient";
        document.getElementById("bgbar").className="card-body text-dark bg-light"
    }else if(jam[0]>17 || jam[0]<5 ){
        greeting= " Good Evening, "+nama+" !";
        document.getElementById("main").style.backgroundImage="url('aset/img/evening.png')";
        document.getElementById("bgaktivitas").className="card bg-dark text-light bg-gradient";
        document.getElementById("bgbar").className="card-body text-light bg-dark"
        //document.getElementById("greeting").className="text-light"
        //document.getElementById("waktu").className="text-light"
    }

    var timeDisplay = document.getElementById("waktu");
    function refreshTime() {
        var dateString = new Date().toLocaleTimeString("en-US",{ hour12: false });
        var formattedString= dateString.split(" ");
        timeDisplay.innerHTML = formattedString[0];
        detik=formattedString[0].split(":")
        if(idle==1){
            prosesidle(detik[2]);
        }
    }
    setInterval(refreshTime, 1000);
    document.getElementById("greeting").innerHTML=greeting;

}
function utama(nama){ 
    tampilWaktu(nama);
}

var pbar = document.getElementById("pro_makan");

function setProgress(bar,percent){
    bar.style.width = percent + "%";
    bar.ariaValueNow=percent;
    bar.innerHTML= percent + "%";;
    if (percent >75 && percent <=100 )
        bar.className = "progress-bar progress-bar-striped";
    else if (percent > 50 && percent <=75)
        bar.className = "progress-bar progress-bar-striped bg-info";
    else if (percent > 25 && percent <=50)
        bar.className = "progress-bar progress-bar-striped bg-warning";
    else if (percent >=0  && percent <=25)
        bar.className = "progress-bar progress-bar-striped bg-danger";
    
}
function gameOver(){
    idle=2;
    Swal.fire({
        title: 'Oh oh Anda kalah!',
        text: "Permainan selesai !",
        icon: 'error',
        showCancelButton: false,
        confirmButtonColor: '#b10239',
        //cancelButtonColor: '#d33',
        confirmButtonText: 'Mulai permainan baru'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.reload(true)
        }
    })
    
}
function prosesidle(i){
    //alert(i)
    var pBelajar=barBelajar.ariaValueNow;
    var pMakan=barMakan.ariaValueNow;
    var pTidur=barTidur.ariaValueNow;
    var pMain=barMain.ariaValueNow;
    let progressBelajar=parseInt(pBelajar);
    let progressTidur=parseInt(pTidur);
    let progressMakan=parseInt(pMakan);
    let progressMain=parseInt(pMain);
    if(progres_belajar!=299)progres_belajar=progressBelajar;                                
    if(progressTidur==0 || progressMakan==0 || progressMain==0 || progres_belajar==0){  
        gameOver();
    }
    if(progressMakan>0 && (i%3)==0)
        progressMakan=progressMakan-1;
    if(progressTidur>0 && (i%10)==0)
        progressTidur=progressTidur-1;
    if(progressBelajar>0 && (i%30)==0)
        progressBelajar=progressBelajar-1;
    if(progressMain>0 && (i%5)==0)
        progressMain=progressMain-1;
    
    setProgress(barBelajar,progressBelajar);
    setProgress(barTidur,progressTidur);
    setProgress(barMakan,progressMakan);
    setProgress(barMain,progressMain);
}
function lulus(){
    if(semester<8){
        Swal.fire({
            title: "Good job!",
            text: "Anda lulus semester "+semester+" !",
            icon:"success" ,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Lanjut ke Semester berikutnya!'
        })
    semester=semester+1;
    document.getElementById("semester").innerHTML=semester;
    showAktivitas("Diam",0,pilihAva);
    setProgress(barBelajar,0);
    progres_belajar=299;
    } else {
        Swal.fire({
            title: "Congratulation!",
            text: "Anda Telah Wisuda!!!!",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: '#44ff4b',
            confirmButtonText: 'Mulai bermain dari awal'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload(true)
            }
        })
    }
    
    
}

function btnDisable(){
    document.getElementById("btnMakan").setAttribute("disabled", true);
    document.getElementById("btnMain").setAttribute("disabled", true);
    document.getElementById("btnTidur").setAttribute("disabled", true);
    document.getElementById("btnBelajar").setAttribute("disabled", true);
}

function btnEnable(){
    document.getElementById("btnMakan").removeAttribute("disabled");
    document.getElementById("btnMain").removeAttribute("disabled");
    document.getElementById("btnTidur").removeAttribute("disabled");
    document.getElementById("btnBelajar").removeAttribute("disabled");
}
