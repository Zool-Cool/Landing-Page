  // creat navbar 

  const navbaritems = [

            {id: 'toHome',     text: 'Home',     href: '#'},
            {id: 'toService', text: 'Services', href: '#'},
            {id: 'toAbout',    text: 'About',    href: '#'},
            {id: 'toContact',  text: 'Contact',  href: '#'},

  ];

  function buildingnav () {

        const navbar = document.getElementById('navigation');
        const ul = document.createElement('ul');

        navbaritems.forEach(item => {

            const li = document.createElement('li');
            const a = document.createElement('a');

            a.id = item.id;
            a.href = item.href;
            a.textContent = item.text;

            ul.appendChild(li);
            li.appendChild(a);
           

        });
        navbar.appendChild(ul);


    }


buildingnav();



    
  // scroll to home

const fromhome = document.getElementById('toHome') ;
const tohome = document.getElementById('home');

fromhome.addEventListener('click', (event) => {

event.preventDefault();

    tohome.scrollIntoView(

             {  behavior: 'smooth', 
             
            }

    );
  

});


// scroll to services

const fromservice = document.getElementById('toService') ;
const toservice = document.getElementById('service');

fromservice.addEventListener('click', (event) => {

event.preventDefault();


    toservice.scrollIntoView(
    
             {  behavior: 'smooth',
            }

    );
});

// scroll to about 

const fromabout = document.getElementById('toAbout') ;
const toabout = document.getElementById('about');

fromabout.addEventListener('click', (event) => {

event.preventDefault();

    toabout.scrollIntoView(

             {  behavior: 'smooth',
            }

    );
});



// scroll to contact

const fromcontact = document.getElementById('toContact') ;
const tocontact = document.getElementById('contact');

fromcontact.addEventListener('click', (event) => {


    event.preventDefault();

    tocontact.scrollIntoView(

    
             {  behavior: 'smooth',
             
            }

    );
});


   

// home highlight

function highlight0 () {


const homesec = document.getElementById('home');
const homelink = document.getElementById('toHome');
const rect = homesec.getBoundingClientRect();




if(rect.top >= 0 || rect.bottom >= 120){



    homelink.classList.add('active');

}

    else {
            
            homelink.classList.remove('active');
    }
}
    window.addEventListener('scroll', highlight0) ;

// highlight services 

    function highlight1 () {


        const servicesec = document.getElementById('service');
        const servicelink = document.getElementById('toService');
        const rect = servicesec.getBoundingClientRect();
       
        
        if(rect.top < 115 && rect.bottom > 100  ){
        
           
            servicelink.classList = ('active');
        
        }
        
            else {
                    
                    servicelink.classList.remove('active');
            }
        }
            window.addEventListener('scroll', highlight1) ;
        

    

    // about highlight 
    function highlight2 () {


        const aboutsec = document.getElementById('about');
        const aboutlink = document.getElementById('toAbout');
        const rect = aboutsec.getBoundingClientRect();
       
        
        
        
        if(rect.top <= 121 && rect.bottom > 110 ){
        
            aboutlink.classList.add ('active');
        
        }
        
            else {
                    
                    aboutlink.classList.remove('active');
            }
        }
            window.addEventListener('scroll', highlight2) ;
        
            // highlight contact 

            function highlight3 () {


                const contactsec = document.getElementById('contact');
                const contactlink = document.getElementById('toContact');
                const rect = contactsec.getBoundingClientRect();
               
                
                
                
                if(rect.top <= 130){
                
                    contactlink.classList.add('active');
                
                }
                
                    else {
                            
                            contactlink.classList.remove('active');
                    }
                }
                    window.addEventListener('scroll', highlight3) ;
                

    
                     // scroll to top page 

const scrollup =
document.getElementById("scrollup");



window.onscroll =()=>{

    scrollup.style.display = 
    (document.documentElement.scrollTop > 1300 )?
    "block": "none";
};



scrollup.onclick = () =>
    window.scrollTo ({

    top:0,
    behavior: "smooth",


});



