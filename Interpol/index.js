var m=parseFloat(document.getElementById("unk").value);
var lx=[];
var ly=[];
var n=1;    
var arrx=[];
var arex=[1,2];
var arey=[3,4];
var arry=[];
var z=0;
var i1;
var j1;
            function Ins() {
                var insr=document.getElementById("dis");
                var newr=insr.insertRow(n);
                
                lx[z]=document.getElementById("qx").value;
                ly[z]=document.getElementById("qy").value;
                
                var c1=newr.insertCell(0);
                var c2=newr.insertCell(1);
                
                c1.innerHTML=lx[z];
                c2.innerHTML=ly[z];
                n++;
                z++;
                return;
            }
            function Insn() {
                var insr=document.getElementById("disn");
                var newr=insr.insertRow(n);
                
                lx[z]=document.getElementById("qx").value;
                ly[z]=document.getElementById("qy").value;
                
                var c1=newr.insertCell(0);
                var c2=newr.insertCell(1);
                
                c1.innerHTML=lx[z];
                c2.innerHTML=ly[z];
                n++;
                z++;
                return;
            }

//Newton-Gregory
function Tabulate(tblId)
    {

        var m=parseFloat(document.getElementById("unk").value);
	    var tblBodyObj = document.getElementById(tblId).tBodies[0];
        for(var j=1;j<z;j++) {
	       for (var i=0; i<tblBodyObj.rows.length; i++) {
		      var newCell = tblBodyObj.rows[i].insertCell(-1);
		      newCell.innerHTML ="0"
	       }
        }
        var myTable = document.getElementById(tblId);
        for(i=2;i<=z;i++){
            myTable.rows[0].cells[i].innerHTML="\u0394 <sup>"+(i-1)+"</sup> y";
//        if((myTable.rows[i]cells[0].innerHTML)-(myTable.rows[i-1]cells[0].innerHTML)!==(myTable.rows[i+1]cells[0].innerHTML)-(myTable.rows[i]cells[0].innerHTML))
//            return; checking for constant h
        }
        if(((m-myTable.rows[1].cells[0])<(m-myTable.rows[z].cells[0]))||document.getElementById("f").checked==true)
            forward();
        else if(((m-myTable.rows[1].cells[0])>(m-myTable.rows[z].cells[0]))||document.getElementById("b").checked==true)
            backward();
        else
            alert("Check box or duplicate element");
        return;
    }
function forward() {
    var myTable = document.getElementById("dis");
    var m=parseFloat(document.getElementById("unk").value);
    var z1=z;
    z=z+1;
    for(j1=2;z!=0;j1++) {
        z--;
        for(i1=1;i1<z;i1++) {
            myTable.rows[i1].cells[j1].innerHTML=(parseFloat(myTable.rows[i1+1].cells[j1-1].innerHTML)-parseFloat(myTable.rows[i1].cells[j1-1].innerHTML));
        }
    }
    z=z1;
    return;
}

function backward() {
    var myTable = document.getElementById("dis");    
    for(i=2;i<=z;i++){
myTable.rows[0].cells[i].innerHTML="&#9661;"+(i-1)+" y";
//        if((myTable.rows[i]cells[0].innerHTML)-(myTable.rows[i-1]cells[0].innerHTML)!==(myTable.rows[i+1]cells[0].innerHTML)-(myTable.rows[i]cells[0].innerHTML))
//            return; checking for constant h
}
    var z1=z;
    var y=0;
    for(j=2;j<=z;j++) {
        y++;
        for(i=z;i>y;i--) {
            myTable.rows[i].cells[j].innerHTML=(parseFloat(myTable.rows[i].cells[j-1].innerHTML)-parseFloat(myTable.rows[i-1].cells[j-1].innerHTML));
        }
    }
    z=z1;
    return;
}

function answern() {
    var myTable = document.getElementById("dis");
    var m=parseFloat(document.getElementById("unk").value);
    var sum=0;
    var fact=1;
    var term;
    if(document.getElementById("f").checked==true) {
    var p=Number((m-parseFloat(myTable.rows[1].cells[0].innerHTML))/(parseFloat(myTable.rows[2].cells[0].innerHTML)-parseFloat(myTable.rows[1].cells[0].innerHTML)));
    for(i=0;i<z-1;i++) {
        term=(p-Number(i))/(Number(i)+1);
        sum=Number(sum)+(Number(fact)*Number(term)*parseFloat(myTable.rows[1].cells[i+2].innerHTML));
        fact=Number(fact)*Number(term);
    }
    document.getElementById("an").innerHTML=Number(myTable.rows[1].cells[1].innerHTML)+sum;
    }
    else if(document.getElementById("b").checked==true) {
    var p=Number((m-parseFloat(myTable.rows[z].cells[0].innerHTML))/(parseFloat(myTable.rows[2].cells[0].innerHTML)-parseFloat(myTable.rows[1].cells[0].innerHTML)));
    for(i=0;i<=z-2;i++) {
        term=(p+Number(i))/(Number(i)+1);
        sum=Number(sum)+(Number(fact)*Number(term)*parseFloat(myTable.rows[z].cells[i+2].innerHTML));
        fact=Number(fact)*Number(term);
    }
    document.getElementById("an").innerHTML=Number(myTable.rows[z].cells[1].innerHTML)+sum;
    }
    return;
}

function polynom() {
    var bsum=0;
    var bsuma=[];
    var arp=new Array(8);
    for(var i=0;i<8;i++) {
            arp[i]=[];
        }
    var myTable = document.getElementById("dis");
    
    
    if(document.getElementById("f").checked==true) {
    arp[0][0]=Number(myTable.rows[1].cells[2].innerHTML).toFixed(3);
    if(z-1>1){
    arp[0][1]=Number(-1/2)*Number(myTable.rows[1].cells[3].innerHTML).toFixed(3);
        if(z-1>2){
            arp[0][2]=Number(2/6)*Number(myTable.rows[1].cells[4].innerHTML).toFixed(3);
            if(z-1>3) {
            arp[0][3]=Number(-6/24)*Number(myTable.rows[1].cells[5].innerHTML).toFixed(3);
                if(z-1>4) {
                arp[0][4]=Number(24/120)*Number(myTable.rows[1].cells[6].innerHTML).toFixed(3);
                    if(z-1>5) {
                    arp[0][5]=Number(-120/720)*Number(myTable.rows[1].cells[7].innerHTML).toFixed(3);
                    }
                }
            }
        }
    }
    if(z-1>1){
        arp[1][0]=Number(1/2)*Number(myTable.rows[1].cells[3].innerHTML).toFixed(3);
        if(z-1>2) {
        arp[1][1]=Number(-1/2)*Number(myTable.rows[1].cells[4].innerHTML).toFixed(3);
            if(z-1>3) {
            arp[1][2]=Number(11/24)*Number(myTable.rows[1].cells[5].innerHTML).toFixed(3);
                if(z-1>4) {
                arp[1][3]=Number(-50/120)*Number(myTable.rows[1].cells[6].innerHTML).toFixed(3);
                    if(z-1>5) {
                arp[1][4]=Number(274/720)*Number(myTable.rows[1].cells[7].innerHTML).toFixed(3);
                    }
                }
            }
        }
    }
    if(z-1>2) {
        arp[2][0]=Number(1/6)*Number(myTable.rows[1].cells[4].innerHTML).toFixed(3);
        if(z-1>3) {
        arp[2][1]=Number(-6/24)*Number(myTable.rows[1].cells[5].innerHTML).toFixed(3);
            if(z-1>4) {
            arp[2][2]=Number(35/120)*Number(myTable.rows[1].cells[6].innerHTML).toFixed(3);
                if(z-1>5) {
                arp[2][3]=Number(-225/720)*Number(myTable.rows[1].cells[7].innerHTML).toFixed(3);
                }
            }
        }
    }
    if(z-1>3) {
    arp[3][0]=Number(1/24)*Number(myTable.rows[1].cells[5].innerHTML).toFixed(3);
        if(z-1>4) {
        arp[3][1]=Number(-10/120)*Number(myTable.rows[1].cells[6].innerHTML).toFixed(3);
            if(z-1>5) {
            arp[3][2]=Number(85/720)*Number(myTable.rows[1].cells[7].innerHTML).toFixed(3);
            }
        }
    }
    if(z-1>4) {
    arp[4][0]=Number(1/120)*Number(myTable.rows[1].cells[6].innerHTML).toFixed(3);
        if(z-1>5){
        arp[4][1]=Number(-15/720)*Number(myTable.rows[1].cells[7].innerHTML).toFixed(3);
        }
    }
    if(z-1>5){
    arp[4][1]=Number(1/720)*Number(myTable.rows[1].cells[7].innerHTML).toFixed(3);
    }
    var coun=1;
    for(i=0;i<z;i++) {
        bsum=Number(0);
        for(var j=0;j<z-coun;j++) {
            bsum=Number(bsum)+Number(arp[i][j]);
        }
        bsuma[i]=Number(bsum);
        coun++;
    }
    for(i=z-2;i>=0;i--) {
        document.getElementById("pol").innerHTML+="("+Number(bsuma[i]).toFixed(3)+"p<sup>"+(i+1)+"</sup>"+")+";
    }
    document.getElementById("pol").innerHTML+=myTable.rows[1].cells[1].innerHTML;
}
    
    
     else if(document.getElementById("b").checked==true) {
    arp[0][0]=Number(myTable.rows[z].cells[2].innerHTML);
    if(z-1>1){
    arp[0][1]=Number(1/2)*Number(myTable.rows[z].cells[3].innerHTML).toFixed(3);
        if(z-1>2){
            arp[0][2]=Number(2/6)*Number(myTable.rows[z].cells[4].innerHTML).toFixed(3);
            if(z-1>3) {
            arp[0][3]=Number(6/24)*Number(myTable.rows[z].cells[5].innerHTML).toFixed(3);
                if(z-1>4) {
                arp[0][4]=Number(24/120)*Number(myTable.rows[z].cells[6].innerHTML).toFixed(3);
                    if(z-1>5) {
                    arp[0][5]=Number(120/720)*Number(myTable.rows[z].cells[7].innerHTML).toFixed(3);
                    }
                }
            }
        }
    }
    if(z-1>1){
        arp[1][0]=Number(1/2)*Number(myTable.rows[z].cells[3].innerHTML).toFixed(3);
        if(z-1>2) {
        arp[1][1]=Number(1/2)*Number(myTable.rows[z].cells[4].innerHTML).toFixed(3);
            if(z-1>3) {
            arp[1][2]=Number(11/24)*Number(myTable.rows[z].cells[5].innerHTML).toFixed(3);
                if(z-1>4) {
                arp[1][3]=Number(50/120)*Number(myTable.rows[z].cells[6].innerHTML).toFixed(3);
                    if(z-1>5) {
                arp[1][4]=Number(274/720)*Number(myTable.rows[z].cells[7].innerHTML).toFixed(3);
                    }
                }
            }
        }
    }
    if(z-1>2) {
        arp[2][0]=Number(1/6)*Number(myTable.rows[z].cells[4].innerHTML).toFixed(3);
        if(z-1>3) {
        arp[2][1]=Number(6/24)*Number(myTable.rows[z].cells[5].innerHTML).toFixed(3);
            if(z-1>4) {
            arp[2][2]=Number(35/120)*Number(myTable.rows[z].cells[6].innerHTML).toFixed(3);
                if(z-1>5) {
                arp[2][3]=Number(225/720)*Number(myTable.rows[z].cells[7].innerHTML).toFixed(3);
                }
            }
        }
    }
    if(z-1>3) {
    arp[3][0]=Number(1/24)*Number(myTable.rows[z].cells[5].innerHTML).toFixed(3);
        if(z-1>4) {
        arp[3][1]=Number(10/120)*Number(myTable.rows[z].cells[6].innerHTML).toFixed(3);
            if(z-1>5) {
            arp[3][2]=Number(85/720)*Number(myTable.rows[z].cells[7].innerHTML).toFixed(3);
            }
        }
    }
    if(z-1>4) {
    arp[4][0]=Number(1/120)*Number(myTable.rows[z].cells[6].innerHTML).toFixed(3);
        if(z-1>5){
        arp[4][1]=Number(15/720)*Number(myTable.rows[z].cells[7].innerHTML).toFixed(3);
        }
    }
    if(z-1>5){
    arp[4][1]=Number(1/720)*Number(myTable.rows[z].cells[7].innerHTML).toFixed(3);
    }
    var coun=1;
    for(i=0;i<z;i++) {
        bsum=Number(0);
        for(var j=0;j<z-coun;j++) {
            bsum=Number(bsum)+Number(arp[i][j]);
        }
        bsuma[i]=Number(bsum);
        coun++;
    }
    for(i=z-2;i>=0;i--) {
        document.getElementById("pol").innerHTML+="("+(bsuma[i]).toFixed(3)+"p<sup>"+(i+1)+"</sup>"+")+";
    }
    document.getElementById("pol").innerHTML+=myTable.rows[1].cells[1].innerHTML;
}
    return;
}
//Newton-Gregory end

//Lagrange's
function Inslag() {
    var xlag=document.getElementById("xlag").value;
    var ylag=document.getElementById("ylag").value;
    arrx.push(xlag);
    arry.push(ylag);
}
function answerlag() {
    var sum=0;
    var temp;
    var num=1;
    var den=1;
    var xl=document.getElementById("unk").value;
    for(var j=0;j<arry.length;j++) {
    num=1;
    den=1;
        for(var i=0;i<arrx.length;i++) {
        if(i===j) {
            continue;
        }
            num=parseFloat(num)*(parseFloat(xl)-parseFloat(arrx[i]));
            den=Number(den)*(parseFloat(arrx[j])-parseFloat(arrx[i]));
        }
        sum=Number(sum)+((num/den)*Number(arry[j]));
    }
    document.getElementById("an").innerHTML=sum;
}
function polynomlag() {
    var str="";
    for(var i=0;i<arry.length;i++) {
        var po="";
    var den=1;
        for(var j=0;j<arrx.length;j++) {
            if(i==j) {
                continue;
            }
            po+="<u>(x-"+arrx[j]+")</u>";
        den=Number(den)*(parseFloat(arrx[i])-parseFloat(arrx[j]));
        }
        po+="&nbsp; x &nbsp;"+arry[i]+"+";
        str+="&nbsp;&nbsp;&nbsp;&nbsp;"+den+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    document.getElementById("pol").innerHTML+=po;
    }
    document.getElementById("pol").innerHTML+="0"+"<br>"+str;
}
//Lagrange's end

//Newton DDI
function Tabulates(tblId)
{
	var tblBodyObj = document.getElementById(tblId).tBodies[0];
    for(var j=1;j<z;j++) {
	for (var i=0; i<tblBodyObj.rows.length; i++) {
		var newCell = tblBodyObj.rows[i].insertCell(-1);
		newCell.innerHTML ="0"
	}
    }
    var myTablen = document.getElementById(tblId);
    for(var i=1;i<z;i++) {
        myTablen.rows[0].cells[i+1].innerHTML=i+" D.D";
    }
    if(true) {
        values();
    }
    return;
}

function values() {
    var myTablen = document.getElementById("disn");
    var z1=z;
    for(var j=2;j<=z+2;j++) {
        z--;
        for(var i=1;i<=z;i++) {
            myTablen.rows[i].cells[j].innerHTML=((parseFloat(myTablen.rows[i+1].cells[j-1].innerHTML)-parseFloat(myTablen.rows[i].cells[j-1].innerHTML))/(parseFloat(myTablen.rows[i+j-1].cells[0].innerHTML)-parseFloat(myTablen.rows[i].cells[0].innerHTML)));
        }
    }
    z=z1;
}

function answet() {
    var fact=1;
    var sum=0;
    var myTablen = document.getElementById("disn");
    var m=parseFloat(document.getElementById("unk").value);
    for(var i=1;i<z;i++) {
        term=(Number(m)-Number(myTablen.rows[i].cells[0].innerHTML));
        sum=Number(sum)+(Number(fact)*Number(term)*Number(myTablen.rows[1].cells[i+1].innerHTML));
        fact=Number(fact)*Number(term);
    }
    document.getElementById("ann").innerHTML=Number(myTablen.rows[1].cells[1].innerHTML)+Number(sum);
}

function polynewt() {
    var s="";
    var myTablen = document.getElementById("disn");
    for(var i=0;i+2<=z;i++) {
        s+="(x-"+myTablen.rows[i+1].cells[0].innerHTML+")";
        document.getElementById("pon").innerHTML+=Number(myTablen.rows[1].cells[i+2].innerHTML).toFixed(3)+s+"+";
    }
    document.getElementById("pon").innerHTML+=myTablen.rows[1].cells[1].innerHTML;
}
//Newton's DDI end

//Differentiation
function ansdif1() {
    var ar=[];
    var sum=0;
    var fact=1;
    var myTable = document.getElementById("dis");
    var m=Number(document.getElementById("unk").value); 
    var p=Number((m-Number(myTable.rows[1].cells[0].innerHTML))/(Number(myTable.rows[2].cells[0].innerHTML)-Number(myTable.rows[1].cells[0].innerHTML)));
    var q=Number((m-Number(myTable.rows[z].cells[0].innerHTML))/(Number(myTable.rows[2].cells[0].innerHTML)-Number(myTable.rows[1].cells[0].innerHTML)));
    if(document.getElementById("f").checked==true) {
    ar[0]=(2*p)-1;
    ar[1]=(3*p*p)-(6*p)+2;
    ar[2]=(4*p*p*p)-(18*p*p)+(22*p)-6;
    ar[3]=(5*p*p*p*p)-(40*p*p*p)+(105*p*p)-(100*p)+24;
    ar[4]=(6*p*p*p*p*p)-(75*p*p*p*p)+(340*p*p*p)-(675*p*p)+(452*p)-120;
    ar[5]=(7*p*p*p*p*p*p)-(126*p*p*p*p*p)+(875*p*p*p*p)-(2980*p*p*p)+(4908*p*p)-(2952*p)+720;
    for(var j=1;j+2<=z;j++) {
        fact=fact*(j+1);
        sum=sum+(Number(myTable.rows[1].cells[j+2].innerHTML)*ar[j-1])/fact;
    }
    document.getElementById("and").innerHTML=Number((sum+Number(myTable.rows[1].cells[2].innerHTML))/(Number(myTable.rows[2].cells[0].innerHTML)-Number(myTable.rows[1].cells[0].innerHTML)));
    }
    else {
        sum=0;
        fact=1;
    ar[0]=(2*q)+1;
    ar[1]=(3*q*q)+(6*q)+2;
    ar[2]=(4*q*q*q)+(18*q*q)+(22*q)+6;
    ar[3]=(5*q*q*q*q)+(40*q*q*q)+(105*q*q)+(100*q)+24;
    ar[4]=(6*q*q*q*q*q)+(75*q*q*q*q)+(340*q*q*q)+(675*q*q)+(452*q)+120;
    ar[5]=(7*q*q*q*q*q*q)+(126*q*q*q*q*q)+(875*q*q*q*q)+(2980*q*q*q)+(4908*q*q)+(2952*q)+720;
    for(var j=1;j+2<=z;j++) {
        fact=fact*(j+1);
        sum=sum+(Number(myTable.rows[z].cells[j+2].innerHTML)*ar[j-1])/fact;
    }
    document.getElementById("and").innerHTML=Number((sum+Number(myTable.rows[z].cells[2].innerHTML))/(Number(myTable.rows[2].cells[0].innerHTML)-Number(myTable.rows[1].cells[0].innerHTML)));
    }
}
//Differentiation end


//
////Integration
function store() {
	var h;
	h=(Number(document.getElementById("b").value)-Number(document.getElementById("a").value))/Number(document.getElementById("int").value);
}
function enter() {
    var xinte=parseFloat(document.getElementById("xinte").value);
    var yinte=parseFloat(document.getElementById("yinte").value);
    arex.push(xinte);
    arey.push(yinte);
}
function answer(){
    
var suminte=0;
    if(document.getElementById("trap").checked==true){
	for(var i=0 ;i<arey.length ;i++){
		if(i==0 || i== arey.length-1){
			suminte+= arey[i];
		}
		else{
			suminte+= 2*arey[i];
		}
    }
document.getElementById("ans").innerHTML=(h/2)*suminate;
}
else if(document.getElementById("onet").checked==true) {
for(var i=0; i<arey.length; i++){
	if(i==0 || i==arey.length-1){
		suminte+=arey[i];
	}
	else if(i%2!==0 && i!==arey.length-1){
		suminte+= 4*arey[i];
	}
	else {
		suminte+= 2*arey[i];
	}
}
document.getElementById("ans").innerHTML=(h/3)*suminte;
}
    else if(document.getElementById("thre").checked==true) {
for(i=0; i<arey.length;i++){
	if(i==0 || i== arey.length-1){
		suminte+= arey[i];
	}
	else if(i%3==0 && i!==arey.length-1){
		suminte+= 2*arey[i];
	}
	else {
		suminte+= 3*arey[i];
	}
}
document.getElementById("ans").innerHTML+(3*h/8)* suminte;
} 
    }

//formulae

function forng()
{
    if(document.getElementById("f").checked==true) {
    document.getElementById("fo").innerHTML="y=f(x)=y<sub>0</sub>+p&#916;y<sub>0</sub>+<u>p(p-1)</u>&#916;<sup>2</sup>y<sub>0</sub>+<u>p(p-1)(p-2)</u>&#916;<sup>3</sup>y<sub>0</sub>+...<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3!";
    }
    else if(document.getElementById("b").checked==true) {
    document.getElementById("fo").innerHTML="y=f(x)=y<sub>n</sub>+q&#9661;y<sub>n</sub>+<u>q(q+1)</u>&#9661;<sup>2</sup>y<sub>n</sub>+<u>q(q+1)(q+2)</u>&#9661;<sup>3</sup>y<sub>n</sub>+...<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3!";
    }
}

function forn() {
    document.getElementById("fonewt").innerHTML="y=f(x)=f(x<sub>0</sub>)+(x-x<sub>0</sub>)f(x<sub>0</sub>,x<sub>1</sub>)+(x-x<sub>0</sub>)(x-x<sub>1</sub>)f(x<sub>0</sub>,x<sub>1</sub>,x<sub>2</sub>)+...+(x-x<sub>0</sub>)(x-x<sub>1</sub>)(x-x<sub>2</sub>)...(x-x<sub>n-2</sub>)f(x<sub>0</sub>,x<sub>1</sub>,...x<sub>n-1</sub>)"
}

function forl()  {
    document.getElementById("folag").innerHTML="y=f(x)=<u>(x-x<sub>1</sub>)(x-x<sub>2</sub>)(x-x<sub>3</sub>)...(x-x<sub>n-1</sub>)</u>&nbsp;y<sub>0</sub>+<u>(x-x<sub>0</sub>)(x-x<sub>2</sub>)(x-x<sub>3</sub>)...(x-x<sub>n-1</sub>)</u>&nbsp;y<sub>1</sub>+...<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(x<sub>0</sub>-x<sub>1</sub>)(x<sub>0</sub>-x<sub>2</sub>)(x<sub>0</sub>-x<sub>3</sub>)...(x<sub>0</sub>-x<sub>n-1</sub>)&nbsp;&nbsp;&nbsp;(x<sub>1</sub>-x<sub>0</sub>)(x<sub>1</sub>-x<sub>2</sub>)(x<sub>1</sub>-x<sub>3</sub>)...(x<sub>1</sub>-x<sub>n-1</sub>)"
}
function ford() {
    if(document.getElementById("f").checked==true) {
        document.getElementById("fodif").innerHTML="y<sup>1</sup>=<u>1</u> [&#916;y<sub>0</sub>+<u>(2p-1)</u>&#916;<sup>2</sup>y<sub>0</sub>+(<u>3p</u><sup>2</sup><u>-6p+2</u>)&#916;<sup>3</sup>y<sub>0</sub>+(<u>4p</u><sup>3</sup><u>-8p</u><sup>2</sup><u>+22p-6</u>)&#916;<sup>4</sup>y<sub>0</sub>+...]<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;h&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4!";
    }
    else if(document.getElementById("b").checked==true) {
        document.getElementById("fodif").innerHTML="y<sup>1</sup>=<u>1</u> [&#916;y<sub>0</sub>+<u>(2q+1)</u>&#916;<sup>2</sup>y<sub>0</sub>+(<u>3q</u><sup>2</sup><u>+6q+2</u>)&#916;<sup>3</sup>y<sub>0</sub>+(<u>4q</u><sup>3</sup><u>+8q</u><sup>2</sup><u>+22q+6)</u>&#916;<sup>4</sup>y<sub>0</sub>+...]<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;h&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4!";
    }
}