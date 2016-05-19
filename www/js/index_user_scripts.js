/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {var CurrentEnigme=1;
  
/* button  Jouer */         $(document).on("click", ".uib_w_2", function(evt)    {activate_subpage("#Chapitre1");});
/* button  Option */        $(document).on("click", ".uib_w_3", function(evt)    {activate_subpage("#Chapitre2");});
/* button  Credit */        $(document).on("click", ".uib_w_4", function(evt)    {activate_subpage("#Chapitre3");});
/* button  .uib_w_114 */    $(document).on("click", ".uib_w_114", function(evt)  { uib_sb.toggle_sidebar($("#sidebar1"));});
/* button  #sidebar */      $(document).on("click", "#sidebar", function(evt)    {uib_sb.toggle_sidebar($(".uib_w_22"));});
/* button  #retourMain1 */  $(document).on("click", "#retourMain1", function(evt){activate_page("#mainpage");});

/* button  #retourJouer1 */     $(document).on("click", "#retourJouer1", function(evt)      {activate_subpage("#Chapitre1");});
/* button  #retourMain3 */      $(document).on("click", "#retourMain3", function(evt)       {activate_page("#mainpage");});
/* button  #retourMain2 */      $(document).on("click", "#retourMain2", function(evt)       {activate_page("#mainpage");});
/* button  Option */            $(document).on("click", ".uib_w_3", function(evt)           {activate_page("#Option");});
/* button  Credit */            $(document).on("click", ".uib_w_4", function(evt)           {activate_page("#Credit");});
/* button  #Dialogue */         $(document).on("click", "#Dialogue", function(evt)          {activate_page("#Dialog");});
/* button  #retourJouer2 */     $(document).on("click", "#retourJouer2", function(evt)      {activate_subpage("#Chapitre1");});
/* button  #RetourJouer2 */     $(document).on("click", "#RetourJouer2", function(evt)      {activate_subpage("#Chapitre1");});
  
/* button  Chapitre 1 */    $(document).on("click", ".uib_w_24", function(evt)      {activate_subpage("#Chapitre1");        });
/* button  Chapitre 2 */    $(document).on("click", ".uib_w_25", function(evt)      {activate_subpage("#Chapitre2");        }); 
/* button  Chapitre 3 */    $(document).on("click", ".uib_w_26", function(evt)      {activate_subpage("#Chapitre3");        });   
/* button  Chapitre 4 */    $(document).on("click", ".uib_w_27", function(evt)      {activate_subpage("#Chapitre4");        });   
/* button  Chapitre 5 */    $(document).on("click", ".uib_w_28", function(evt)      {activate_subpage("#Chapitre5");        });
/* button  Final */         $(document).on("click", ".uib_w_29", function(evt)           {activate_subpage("#Final");            });     

/* button  Enigme 1.0 */    $(document).on("click", ".uib_w_14", function(evt)    {CurrentEnigme=0; chargerPaterne(CurrentEnigme);});
/* button  Enigme 1.1 */    $(document).on("click", ".uib_w_12", function(evt)    {CurrentEnigme=1; chargerPaterne(CurrentEnigme);});
/* button  Enigme 1.2 */    $(document).on("click", ".uib_w_11", function(evt)    {CurrentEnigme=2; chargerPaterne(CurrentEnigme);});
/* button  Enigme 1.3 */    $(document).on("click", ".uib_w_13", function(evt)    {CurrentEnigme=3; chargerPaterne(CurrentEnigme);});
/* button  Enigme 1.4 */    $(document).on("click", ".uib_w_15", function(evt)    {CurrentEnigme=4; chargerPaterne(CurrentEnigme);});
/* button  Enigme 1.5 */    $(document).on("click", ".uib_w_16", function(evt)    {CurrentEnigme=5; chargerPaterne(CurrentEnigme);});
/* button  Enigme 1.6 */    $(document).on("click", ".uib_w_17", function(evt)    {CurrentEnigme=6; chargerPaterne(CurrentEnigme);});
/* button  Enigme 1.7 */    $(document).on("click", ".uib_w_18", function(evt)    {CurrentEnigme=7; chargerPaterne(CurrentEnigme);});
/* button  Enigme 1.8 */    $(document).on("click", ".uib_w_19", function(evt)    {CurrentEnigme=8; chargerPaterne(CurrentEnigme);});
/* button  Enigme 1.9 */    $(document).on("click", ".uib_w_20", function(evt)    {CurrentEnigme=9; chargerPaterne(CurrentEnigme);});
/* button  Enigme 1.10 */    $(document).on("click", ".uib_w_21", function(evt)   {CurrentEnigme=10; chargerPaterne(CurrentEnigme);});

/* button  Enigme 2.1 */    $(document).on("click", ".uib_w_32", function(evt)    {CurrentEnigme=11; chargerPaterne(CurrentEnigme);});
/* button  Enigme 2.2 */    $(document).on("click", ".uib_w_33", function(evt)    {CurrentEnigme=12; chargerPaterne(CurrentEnigme);});
/* button  Enigme 2.3 */    $(document).on("click", ".uib_w_34", function(evt)    {CurrentEnigme=13; chargerPaterne(CurrentEnigme);});
/* button  Enigme 2.4 */    $(document).on("click", ".uib_w_35", function(evt)    {CurrentEnigme=14; chargerPaterne(CurrentEnigme);});
  
      
  

    

    
        /* button  #Validation1 */
    $(document).on("click", "#Validation1", function(evt)
    { var texte=document.getElementById("Saisie_Texte_Texte").value ;
        document.getElementById("Saisie_Texte_Texte").value="" ;
  
        
        
       // if(texte==getReponse(NBenigme).toLowerCase())
     
     
     document.getElementById("Enoncer_Texte_Texte").innerHTML+=" "+(texte.toLowerCase()==getReponse(currentEnigme)) ;
     
     
     
          if(texte.toLowerCase()==getReponse(currentEnigme).toLowerCase()||texte.toLowerCase()=="cheat") 
            {   /*
                 currentEnigme++;
            
                charger_Texte_Texte(currentEnigme)
                activate_subpage("#Texte_Texte"); 
             */
                // document.getElementById("Enoncer_Texte_Texte").innerHTML=getEnoncer(NBenigme);
                document.getElementById("Enoncer_Texte_Texte").innerHTML+=" bon" ;
            }
        else
            {
                document.getElementById("Enoncer_Texte_Texte").innerHTML+=" Erreur" ;
            }
    });
    
  
  
  
  
  
  
      
          /* button  #Validation2 */
    $(document).on("click", "#Validation2", function(evt)
    {
       var texte=document.getElementById("Image_Texte").value ;
        
       if(texte.toLowerCase()==getReponse(currentEnigme).toLowerCase()||texte.toLowerCase()=="cheat") 
            {currentEnigme++;
            chargerPaterne(currentEnigme);
            }
        else
            { $('.alert-text').on('click', function () {myApp.alert('Alerte');}); } 
        
        
        
   
    });  
    
  
  
    }


    
function getEgnime(Id) {
    var texte="Enigme "+Id+" :<br>";
    texte+=" Reponse = "+getReponse(Id)+" <br> ";           
        
        switch(Id)
            {case 0:return texte+"b8 88 ? 98";
                    
            case 1:return texte+"cf image";
                    
            case 2:return texte+"64 chiens sont inscrits pour un concours de beauté canin réservé aux chiens de races, parmi ces 64 chiens de races, 50 % arrivent en huitième de finale. Lors des de cette épreuve, 50% sont éliminés, arrivent les quarts où,face à un jury énervé par le temps pluvieux, encore 50% sont éliminés. Finalement, après des heures de délibérations,le jury décide enfin qui sera envoyé en finale. Parmi les gagnants, quel pourcentage à gagné ?";
                    
            case 3:return  texte+"Ayant réglée mon réveil analogique pour 10 heures du matin, et comptant dormir vers disons 8h du soir, dans combien d'heure sortirais-je de veille ?";  
                    
            case 4:return texte+"Combien de gouttes d'eau peut-on mettre dans un verre vide ?";  
                    
            case 5:return texte+"Qu'obtient-on si l'on mélange du Calcium, du Nickel, du Carbone et de l'Hélium ?";
                    
            case 6:return texte+"Trouvez l'errreur : 9 7 5 6 2 3 1 8 4";
                    
            case 7:return texte+"Quel nombre divisé par lui-même donne son double ?"; 
                    
            case 8:return texte+"Si développer une I.A coutait 2000 €,Le support électronique coutant 1990 € de plus que le programme,, combien coute le programme ?";
                    
            case 9:return texte+"MEDENTREN";
                    
            case 10:return texte+"Un train A part de Paris vers Bordeaux à 7h00 du matin et roule à 90 km/h. Le même jour à 8h00, un autre train B part de Bordeaux vers Paris et roule à 110 km/h. Lorsqu'ils se croiseront, lequel de ces trains sera le plus proche de Paris ?";
                    
                    
            default:return texte+"limite depasser";     
            }       
    
        
}
     function getReponse(Id) {
        switch(Id)
            {case 0:return "87";
            case 1:return "16";
            case 2:return "100";
            case 3:return "2";      
            case 4:return "1";        
            case 5:return "caniche";
            case 6:return "errreur";
            case 7:return  "0.5";        
            case 8:return "5";
            case 9:return "rendement";
            case 10:return "aucun";
             default:return "limite depasser";     
            }       
}   
    
    function charger_Texte_Texte(ID)
    {document.getElementById("Enoncer_Texte_Texte").innerHTML=getEgnime(ID) ;}
    
     function charger_Image_Texte(ID)
    {//§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§
    
    }
    
    
    function getType(Id)
    { switch(Id)        /*type:1 => texte texte               2 => image texte        */
            {case 0:return 1;           case 1:return 2;            case 2:return 1;            case 3:return 1;            case 4:return 1;
            case 5: return 1;            case 6:return 1;            case 7:return 1;            case 8:return 1;            case 9:return 1;
            case 10:return 1;             
                
            default:return 1;     
            } 
    }
    
    function chargerPaterne(Id)
    {switch(getType(Id))
            {   case 1:charger_Texte_Texte(Id);         activate_subpage("#Texte_Texte"); break;     
                case 2:charger_Texte_Texte(Id);         activate_subpage("#Image_Texte"); break;      
                case 3: break;    
                case 4: break;  
                default:break;
            }     
    }

    
    
    
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
