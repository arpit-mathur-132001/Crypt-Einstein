// Navbar
function ul(index,val) {
	
	var underlines = document.querySelectorAll(".underline");

	for (var i = 0; i < underlines.length; i++) {
		underlines[i].style.transform = 'translate3d(' + ((index * 100)+val) + '%,0,0)';
	}
}

function ulvnav(index) {
	
	var underlines = document.querySelectorAll(".underlinevnav");

	for (var i = 0; i < underlines.length; i++) {
		underlines[i].style.transform = 'translate3d(0,' + index * 100 + '%,0)';
	}
}

function ulvnavHorizontal(index) {
	
	var underlines = document.querySelectorAll(".underlinevnav");

	for (var i = 0; i < underlines.length; i++) {
		underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
	}
}

function ulVertical(index,val) {
	
	var underlines = document.querySelectorAll(".underline");

	for (var i = 0; i < underlines.length; i++) {
		underlines[i].style.transform = 'translate3d(0,' + ((index * 100)+val) + '%,0)';
	}
}




// Navbar Close



const img=document.getElementById("imgDesktop");
img.addEventListener("click",()=>{
	ul(0,222);
	setTimeout(() => {
		if(window.location.href!=="/"){
			window.location.href="../"
		}else{
			window.location.href="/";
		}
	}, 500);
})



function myFunction1(y) {
  if(y.matches) { // If media query matches
		if(document.querySelector("#active:checked ~ .menu-btn")){
			document.getElementById("menu-btn").click();
		}

		const home=document.getElementById("home");
		home.addEventListener("click",()=>{
			ul(0,222);
			setTimeout(() => {
				if(window.location.href!=="/"){
					window.location.href="../"
				}else{
					window.location.href="/";
				}
			}, 500);
		})

		const about=document.getElementById("about");
		about.addEventListener("click",()=>{
			ul(1,225);
			setTimeout(() => {
				if(window.location.href!=="/"){
					window.location.href="../about"
				}else{
					window.location.href="about";
				}
			}, 500);
		})

		const encrypt=document.getElementById("encrypt");
		encrypt.addEventListener("click",()=>{
			ul(2,226);
			setTimeout(() => {
				if(window.location.href!=="/"){
					window.location.href="../encrypt"
				}else{
					window.location.href="encrypt";
				}
			}, 500);
		})
		const decrypt=document.getElementById("decrypt");
		decrypt.addEventListener("click",()=>{
			ul(3,229);
			setTimeout(() => {
				if(window.location.href!=="/"){
					window.location.href="../decrypt"
				}else{
					window.location.href="decrypt";
				}
			}, 500);
		})
		const bruteforce=document.getElementById("bruteforce");
		bruteforce.addEventListener("click",()=>{
			ul(4,231);
			setTimeout(() => {
				if(window.location.href!=="/"){
					window.location.href="../bruteforce"
				}else{
					window.location.href="bruteforce";
				}
			}, 500);
		})
		const additiveEncrypt=document.getElementById("additiveEncrypt");
		if(additiveEncrypt){
			additiveEncrypt.addEventListener("click",()=>{
				ulvnav(0);
				setTimeout(() => {
					window.location.href="../additive/additiveEncrypt";
				}, 500);
			})
		}
		
		const multiplicativeEncrypt=document.getElementById("multiplicativeEncrypt");
		if(multiplicativeEncrypt){
			multiplicativeEncrypt.addEventListener("click",()=>{
				ulvnav(1);
				setTimeout(() => {
					window.location.href="../multiplicative/multiplicativeEncrypt";
				}, 500);
			})
		}
		
		const autokeyEncrypt=document.getElementById("autokeyEncrypt");
		if(autokeyEncrypt){
			autokeyEncrypt.addEventListener("click",()=>{
				ulvnav(2);
				setTimeout(() => {
					window.location.href="../autokey/autokeyEncrypt";
				}, 500);
			})
		}
		
		const rsaEncrypt=document.getElementById("rsaEncrypt");
		if(rsaEncrypt){
			rsaEncrypt.addEventListener("click",()=>{
				ulvnav(3);
				setTimeout(() => {
					window.location.href="../rsa/rsaEncrypt";
				}, 500);
			})
		}
		
		const affineEncrypt=document.getElementById("affineEncrypt");
		if(affineEncrypt){
			affineEncrypt.addEventListener("click",()=>{
				ulvnav(4);
				setTimeout(() => {
					window.location.href="../affine/affineEncrypt";
				}, 500);
			})
		}
		
		
		const additiveDecrypt=document.getElementById("additiveDecrypt");
		if(additiveDecrypt){
			additiveDecrypt.addEventListener("click",()=>{
				ulvnav(0);
				setTimeout(() => {
					window.location.href="../additive/additiveDecrypt";
				}, 500);
			})
		}
		
		const multiplicativeDecrypt=document.getElementById("multiplicativeDecrypt");
		if(multiplicativeDecrypt){
			multiplicativeDecrypt.addEventListener("click",()=>{
				ulvnav(1);
				setTimeout(() => {
					window.location.href="../multiplicative/multiplicativeDecrypt";
				}, 500);
			})
		}
		
		const autokeyDecrypt=document.getElementById("autokeyDecrypt");
		if(autokeyDecrypt){
			autokeyDecrypt.addEventListener("click",()=>{
				ulvnav(2);
				setTimeout(() => {
					window.location.href="../autokey/autokeyDecrypt";
				}, 500);
			})
		}
		
		const rsaDecrypt=document.getElementById("rsaDecrypt");
		if(rsaDecrypt){
			rsaDecrypt.addEventListener("click",()=>{
				ulvnav(3);
				setTimeout(() => {
					window.location.href="../rsa/rsaDecrypt";
				}, 500);
			})
		}
		
		const affineDecrypt=document.getElementById("affineDecrypt");
		if(affineDecrypt){
			affineDecrypt.addEventListener("click",()=>{
				ulvnav(4);
				setTimeout(() => {
					window.location.href="../affine/affineDecrypt";
				}, 500);
			})
		}
		
		
		const additiveBrute=document.getElementById("additiveBrute");
		if(additiveBrute){
			additiveBrute.addEventListener("click",()=>{
				ulvnav(0);
				setTimeout(() => {
					window.location.href="../additive/additiveBrute";
				}, 500);
			})
		}
		
		const multiplicativeBrute=document.getElementById("multiplicativeBrute");
		if(multiplicativeBrute){
			multiplicativeBrute.addEventListener("click",()=>{
				ulvnav(1);
				setTimeout(() => {
					window.location.href="../multiplicative/multiplicativeBrute";
				}, 500);
			})
		}
		
		const autokeyBrute=document.getElementById("autokeyBrute");
		if(autokeyBrute){
			autokeyBrute.addEventListener("click",()=>{
				ulvnav(2);
				setTimeout(() => {
					window.location.href="../autokey/autokeyBrute";
				}, 500);
			})
		}
		
		const rsaBrute=document.getElementById("rsaBrute");
		if(rsaBrute){
			rsaBrute.addEventListener("click",()=>{
				ulvnav(3);
				setTimeout(() => {
					window.location.href="../rsa/rsaBrute";
				}, 500);
			})
		}
		
		const affineBrute=document.getElementById("affineBrute");
		if(affineBrute){
			affineBrute.addEventListener("click",()=>{
				ulvnav(4);
				setTimeout(() => {
					window.location.href="../affine/affineBrute";
				}, 500);
			})
		}		
		var navActive=document.querySelector(".full");
		const wrapper=document.querySelector(".wrapper");
		const formGroup1=document.querySelector(".form__group1");
		const formGroup2=document.querySelector(".form__group2");
		const ciphers=document.querySelector(".ciphers");
		wrapper.style.display="none";
		formGroup1.style.display="flex";
		formGroup2.style.display="flex";
		ciphers.style.display="flex";
		navActive.style.display="block";
		navActive.style.zIndex="0";
    navActive.style.flexDirection="none";
    navActive.style.alignItems="none";
    navActive.style.justifyContent="none";
		navActive.style.height="6.4vh";
		navActive.style.padding="8px 0";
		
  }
}

var y = window.matchMedia("(min-width: 600px)")
myFunction1(y) // Call listener function at run time
y.addListener(myFunction1) // Attach listener function on state changes




function myFunction2(x) {
  if(x.matches){
		const additiveEncrypt=document.getElementById("additiveEncrypt");
		if(additiveEncrypt){
			additiveEncrypt.addEventListener("click",()=>{
				ulvnavHorizontal(0);
				setTimeout(() => {
					window.location.href="../additive/additiveEncrypt";
				}, 500);
				const additive = document.querySelectorAll("#additive");
		
				for (var i = 0; i < additive.length; i++) {
					additive[i].style="transform: translate3d(0, 0px, 0px)"
				}
				function myFunction3(z){
					if(z.matches){
						for (var i = 0; i < multiplicative.length; i++) {
							multiplicative[i].style="transform: translate3d(0, 0px, 0px)"
						}
					}
				}
				var z = window.matchMedia("(min-width: 600px)")
				myFunction3(z) // Call listener function at run time
				z.addListener(myFunction3) // Attach listener function on state changes	
			})
		}
		
		const multiplicativeEncrypt=document.getElementById("multiplicativeEncrypt");
		if(multiplicativeEncrypt){
			multiplicativeEncrypt.addEventListener("click",()=>{
				ulvnavHorizontal(1);
				setTimeout(() => {
					window.location.href="../multiplicative/multiplicativeEncrypt";
				}, 500);
			})
			const multiplicative = document.querySelectorAll("#multiplicative");
		
			for (var i = 0; i < multiplicative.length; i++) {
				multiplicative[i].style="transform: translate3d(100%, 0px, 0px)"
			}
			function myFunction3(z){
				if(z.matches){
					for (var i = 0; i < multiplicative.length; i++) {
						multiplicative[i].style="transform: translate3d(0px, 100%, 0px)"
					}
				}
			}
			var z = window.matchMedia("(min-width: 600px)")
			myFunction3(z) // Call listener function at run time
			z.addListener(myFunction3) // Attach listener function on state changes

		}

		const autokeyEncrypt=document.getElementById("autokeyEncrypt");
		if(autokeyEncrypt){
			autokeyEncrypt.addEventListener("click",()=>{
				ulvnavHorizontal(2);
				setTimeout(() => {
					window.location.href="../autokey/autokeyEncrypt";
				}, 500);
			})
			const autokey = document.querySelectorAll("#autokey");
		
			for (var i = 0; i < autokey.length; i++) {
				autokey[i].style="transform: translate3d(200%, 0px, 0px)"
			}
			function myFunction3(z){
				if(z.matches){
					for (var i = 0; i < autokey.length; i++) {
						autokey[i].style="transform: translate3d(0px, 200%, 0px)"
					}
				}
			}
			var z = window.matchMedia("(min-width: 600px)")
			myFunction3(z) // Call listener function at run time
			z.addListener(myFunction3) // Attach listener function on state changes

		}

		const rsaEncrypt=document.getElementById("rsaEncrypt");
		if(rsaEncrypt){
			rsaEncrypt.addEventListener("click",()=>{
				ulvnavHorizontal(3);
				setTimeout(() => {
					window.location.href="../rsa/rsaEncrypt";
				}, 500);
			})
			const rsa = document.querySelectorAll("#rsa");
		
			for (var i = 0; i < rsa.length; i++) {
				rsa[i].style="transform: translate3d(300%, 0px, 0px)"
			}
			function myFunction3(z){
				if(z.matches){
					for (var i = 0; i < rsa.length; i++) {
						rsa[i].style="transform: translate3d(0px, 300%, 0px)"
					}
				}
			}
			var z = window.matchMedia("(min-width: 600px)")
			myFunction3(z) // Call listener function at run time
			z.addListener(myFunction3) // Attach listener function on state changes

		}
		const affineEncrypt=document.getElementById("affineEncrypt");
		if(affineEncrypt){
			affineEncrypt.addEventListener("click",()=>{
				ulvnavHorizontal(4);
				setTimeout(() => {
					window.location.href="../affine/affineEncrypt";
				}, 500);
			})
			const affine = document.querySelectorAll("#affine");
		
			for (var i = 0; i < affine.length; i++) {
				affine[i].style="transform: translate3d(400%, 0px, 0px)"
			}
			function myFunction3(z){
				if(z.matches){
					for (var i = 0; i < affine.length; i++) {
						affine[i].style="transform: translate3d(0px, 400%, 0px)"
					}
				}
			}
			var z = window.matchMedia("(min-width: 600px)")
			myFunction3(z) // Call listener function at run time
			z.addListener(myFunction3) // Attach listener function on state changes

		}
		
		var navActive=document.querySelector(".full");
		navActive.style.display="none";



		const home=document.getElementById("home");
		home.addEventListener("click",()=>{
			ulVertical(0,0);
			setTimeout(() => {
				if(window.location.href!=="/"){
					window.location.href="../"
				}else{
					window.location.href="/";
				}
			}, 500);

		})
		


		const about=document.getElementById("about");
		about.addEventListener("click",()=>{
			ulVertical(1,225);
			setTimeout(() => {
				if(window.location.href!=="/"){
					window.location.href="../about"
				}else{
					window.location.href="about";
				}
			}, 500);
		})

		const encrypt=document.getElementById("encrypt");
		encrypt.addEventListener("click",()=>{
			ulVertical(2,226);
			setTimeout(() => {
				if(window.location.href!=="/"){
					window.location.href="../encrypt"
							
				}else{
					window.location.href="encrypt";

				}
			}, 500);
		})
		const decrypt=document.getElementById("decrypt");
		decrypt.addEventListener("click",()=>{
			ulVertical(3,229);
			setTimeout(() => {
				if(window.location.href!=="/"){
					window.location.href="../decrypt"
				}else{
					window.location.href="decrypt";
				}
			}, 500);
		})
		const bruteforce=document.getElementById("bruteforce");
		bruteforce.addEventListener("click",()=>{
			ulVertical(4,231);
			setTimeout(() => {
				if(window.location.href!=="/"){
					window.location.href="../bruteforce"
				}else{
					window.location.href="bruteforce";
				}
			}, 500);
		})

  }
}

var x = window.matchMedia("(max-width: 600px)")
myFunction2(x)
x.addListener(myFunction2)





const menu=document.getElementById("menu-btn");
menu.addEventListener("click",()=>{
	var navActive=document.querySelector(".full");
	const wrapper=document.querySelector(".wrapper");
	const formGroup1=document.querySelector(".form__group1");
	const formGroup2=document.querySelector(".form__group2");
	const ciphers=document.querySelector(".ciphers");

	if(navActive.style.display=="flex"){
		navActive.style.display="none";
		wrapper.style.display="block";
		formGroup1.style.display="flex"
		formGroup2.style.display="flex"
		ciphers.style.display="flex";
	}else{
		wrapper.style.display="none";
		formGroup1.style.display="none";
		formGroup2.style.display="none";
		ciphers.style.display="none";
		navActive.style.display="flex";
		navActive.style.zIndex="1";
    navActive.style.flexDirection="column";
    navActive.style.alignItems="center";
    navActive.style.justifyContent="center";
    navActive.style.height="100vh";
		navActive.style.padding="0";
	}
})
