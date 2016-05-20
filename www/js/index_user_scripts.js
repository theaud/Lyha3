/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {  var CurrentEnigme=1;    
    var EnigmeDebloquer=10;  
    function getCurrent()       {return CurrentEnigme;}      
    function setCurrent(id)     { CurrentEnigme=id;}
    function addCurrent()       {CurrentEnigme++;}
  
    function getDebloquer()     {return EnigmeDebloquer;}   
    function setDebloquer(id)   { EnigmeDebloquer=id;}
    function addDebloquer()     {EnigmeDebloquer++;}
  
  function chargerEnigme(id){if(EnigmeDebloquer>=id){CurrentEnigme=id;chargerPaterne(CurrentEnigme);}
                          else{ myApp.addNotification({
                              title: 'Enigme non deverouiller',
                              subtitle: 'Vous n\'avez pas débloquer l\'egnime choisie',
                              message: 'Vous avez actuelment débloquer les '+EnigmeDebloquer+" premiere enigme"
                            }); }
                         }
  
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

/* button  Enigme 1.0 */    $(document).on("click", ".uib_w_14", function(evt)     {chargerEnigme(0); });
/* button  Enigme 1.1 */    $(document).on("click", ".uib_w_12", function(evt)     {chargerEnigme(1); });
/* button  Enigme 1.2 */    $(document).on("click", ".uib_w_11", function(evt)     {chargerEnigme(2); });
/* button  Enigme 1.3 */    $(document).on("click", ".uib_w_13", function(evt)     {chargerEnigme(3); });
/* button  Enigme 1.4 */    $(document).on("click", ".uib_w_15", function(evt)     {chargerEnigme(4); });
/* button  Enigme 1.5 */    $(document).on("click", ".uib_w_16", function(evt)     {chargerEnigme(5); });
/* button  Enigme 1.6 */    $(document).on("click", ".uib_w_17", function(evt)     {chargerEnigme(6); });
/* button  Enigme 1.7 */    $(document).on("click", ".uib_w_18", function(evt)     {chargerEnigme(7); });
/* button  Enigme 1.8 */    $(document).on("click", ".uib_w_19", function(evt)     {chargerEnigme(8); });
/* button  Enigme 1.9 */    $(document).on("click", ".uib_w_20", function(evt)     {chargerEnigme(9); });
/* button  Enigme 1.10 */    $(document).on("click", ".uib_w_21", function(evt)    {chargerEnigme(10);});

/* button  Enigme 2.1 */    $(document).on("click", ".uib_w_32", function(evt)     {chargerEnigme(11); });
/* button  Enigme 2.2 */    $(document).on("click", ".uib_w_33", function(evt)     {chargerEnigme(12); });
/* button  Enigme 2.3 */    $(document).on("click", ".uib_w_34", function(evt)     {chargerEnigme(13); });
/* button  Enigme 2.4 */    $(document).on("click", ".uib_w_35", function(evt)     {chargerEnigme(14); });
    
/* button  #Validation1 */
    $(document).on("click", "#Validation1", function(evt)
    { var texte=document.getElementById("Saisie_Texte_Texte").value ;
     document.getElementById("Saisie_Texte_Texte").value="" ;

     if(texte.toLowerCase()==getReponse(getCurrent()).toLowerCase()||texte.toLowerCase()=="cheat") 
        {  suivant();        myApp.addNotification({title:'Correct'});        }
    else
        { myApp.addNotification({title: 'Ceci n\'est pas la solution'});}
    });
    
 
      
/* button  #Validation2 */
    $(document).on("click", "#Validation2", function(evt)
    {var texte=document.getElementById("Entrer_Image_Texte").value ;
     document.getElementById("Entrer_Image_Texte").value="" ;

     if(texte.toLowerCase()==getReponse(getCurrent()).toLowerCase()||texte.toLowerCase()=="cheat") 
        {suivant();        myApp.addNotification({title:'Correct'});        }
    else
        { myApp.addNotification({title: 'Ceci n\'est pas la solution'});}
    });  
    
  
  
/* button  test */
    $(document).on("click", ".uib_w_87", function(evt)
    {
        /* Notifications are created using custom js 
         For examples and documentation visit http://www.idangero.us/framework7/docs/notifications.html */
        myApp.addNotification({
          title: 'Enigme non deverouiller',
          subtitle: 'Custom notification w/ media',
          message: 'Vous n\'avez pas débloquer l\'egnime choisie'
        }); 
         return false;
    });
    
  

function suivant()  {addCurrent();addDebloquer();chargerEnigme(getCurrent());   }
    
function getEgnime(Id) {
    var texte="Enigme "+Id+" :<br>";
    texte+=" Reponse = "+getReponse(Id)+" <br> ";           
        
        switch(Id)
            {case 0:return texte+"b8 88 ? 98";
                    
            case 1:return "images/Arrow.png";
                    
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
    {document.getElementById("Image_Texte").setAttribute("src", getEgnime(ID));;
  
       
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
      /* button  Sortir */
    $(document).on("click", ".uib_w_86", function(evt)
    {
       myApp.exitApp();
         return false;
    });
    
    }
    
    
    
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
