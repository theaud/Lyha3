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
   var dialogue=-1;  
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
/* button  #Dialogue */         
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

/* button  Enigme 2.1 */    $(document).on("click", ".uib_w_32", function(evt)    {chargerEnigme(11); });
/* button  Enigme 2.2 */    $(document).on("click", ".uib_w_33", function(evt)    {chargerEnigme(12); });
/* button  Enigme 2.3 */    $(document).on("click", ".uib_w_34", function(evt)    {chargerEnigme(13); });
/* button  Enigme 2.4 */    $(document).on("click", ".uib_w_35", function(evt)    {chargerEnigme(14); });
/* button  Enigme 2.5 */    $(document).on("click", ".uib_w_87", function(evt)    {chargerEnigme(15); });
/* button  Enigme 2.6 */    $(document).on("click", ".uib_w_88", function(evt)    {chargerEnigme(16); });
/* button  Enigme 2.7 */    $(document).on("click", ".uib_w_89", function(evt)    {chargerEnigme(17); });
/* button  Enigme 2.8 */    $(document).on("click", ".uib_w_90", function(evt)    {chargerEnigme(18); });
/* button  Enigme 2.9 */    $(document).on("click", ".uib_w_91", function(evt)    {chargerEnigme(19); });
/* button  Enigme 2.10 */    $(document).on("click", ".uib_w_92", function(evt)   {chargerEnigme(20); });
 
/* button  Enigme 3.1 */    $(document).on("click", ".uib_w_78", function(evt)    {chargerEnigme(21); });
/* button  Enigme 3.2 */    $(document).on("click", ".uib_w_79", function(evt)    {chargerEnigme(22); });
/* button  Enigme 3.3 */    $(document).on("click", ".uib_w_80", function(evt)    {chargerEnigme(23); });
/* button  Enigme 3.4 */    $(document).on("click", ".uib_w_93", function(evt)    {chargerEnigme(24); });
/* button  Enigme 3.5 */    $(document).on("click", ".uib_w_94", function(evt)    {chargerEnigme(25); });
/* button  Enigme 3.6 */    $(document).on("click", ".uib_w_95", function(evt)    {chargerEnigme(26); });
/* button  Enigme 3.7 */    $(document).on("click", ".uib_w_96", function(evt)    {chargerEnigme(27); });
/* button  Enigme 3.8 */    $(document).on("click", ".uib_w_99", function(evt)    {chargerEnigme(28); });
/* button  Enigme 3.9 */    $(document).on("click", ".uib_w_98", function(evt)    {chargerEnigme(29); });
/* button  Enigme 3.10 */    $(document).on("click", ".uib_w_97", function(evt)   {chargerEnigme(30); });
        
  
/* button  Enigme 4.1 */    $(document).on("click", ".uib_w_73", function(evt)     {chargerEnigme(31); });
/* button  Enigme 4.2 */    $(document).on("click", ".uib_w_74", function(evt)     {chargerEnigme(32); });
/* button  Enigme 4.3 */    $(document).on("click", ".uib_w_75", function(evt)     {chargerEnigme(33); });
/* button  Enigme 4.4 */    $(document).on("click", ".uib_w_100", function(evt)    {chargerEnigme(34); });
/* button  Enigme 4.5 */    $(document).on("click", ".uib_w_101", function(evt)    {chargerEnigme(35); });
/* button  Enigme 4.6 */    $(document).on("click", ".uib_w_102", function(evt)    {chargerEnigme(36); });
/* button  Enigme 4.7 */    $(document).on("click", ".uib_w_103", function(evt)    {chargerEnigme(37); });
/* button  Enigme 4.8 */    $(document).on("click", ".uib_w_105", function(evt)    {chargerEnigme(38); });
/* button  Enigme 4.9 */    $(document).on("click", ".uib_w_106", function(evt)    {chargerEnigme(39); });
/* button  Enigme 4.10 */    $(document).on("click", ".uib_w_104", function(evt)   {chargerEnigme(40); });
  
/* button  Enigme 5.1 */    $(document).on("click", ".uib_w_81", function(evt)     {chargerEnigme(41); });
/* button  Enigme 5.2 */    $(document).on("click", ".uib_w_82", function(evt)     {chargerEnigme(42); });
/* button  Enigme 5.3 */    $(document).on("click", ".uib_w_83", function(evt)     {chargerEnigme(43); });
/* button  Enigme 5.4 */    $(document).on("click", ".uib_w_107", function(evt)    {chargerEnigme(44); });
/* button  Enigme 5.5 */    $(document).on("click", ".uib_w_108", function(evt)    {chargerEnigme(45); });
/* button  Enigme 5.6 */    $(document).on("click", ".uib_w_109", function(evt)    {chargerEnigme(46); });
/* button  Enigme 5.7 */    $(document).on("click", ".uib_w_110", function(evt)    {chargerEnigme(47); });
/* button  Enigme 5.8 */    $(document).on("click", ".uib_w_111", function(evt)    {chargerEnigme(48); });
/* button  Enigme 5.9 */    $(document).on("click", ".uib_w_113", function(evt)    {chargerEnigme(49); });
/* button  Enigme 5.10 */    $(document).on("click", ".uib_w_112", function(evt)   {chargerEnigme(50); });

/* button  Derniere enigme */    $(document).on("click", ".uib_w_85", function(evt)  {chargerEnigme(51); });


/* button  Sortir */      
 
 
 
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
    
    if(Id<=10){//---------------------- Chapitre 1---------------------------------------------------------------------------------------------------  
            switch(Id)
            {case 0:return texte+"b8 88 ? 98";               
            case 1:return "images/Enigme_1_1.png";
                    
            case 2:return texte+"64 chiens sont inscrits pour un concours de beauté canin réservé aux chiens de races, parmi ces 64 chiens de races, 50 % arrivent en huitième de finale. Lors des de cette épreuve, 50% sont éliminés, arrivent les quarts où,face à un jury énervé par le temps pluvieux, encore 50% sont éliminés. Finalement, après des heures de délibérations,le jury décide enfin qui sera envoyé en finale. Parmi les gagnants, quel pourcentage à gagné ?";
                    
            case 3:return  texte+"Ayant réglée mon réveil analogique pour 10 heures du matin, et comptant dormir vers disons 8h du soir, dans combien d'heure sortirais-je de veille ?";           
            case 4:return texte+"Combien de gouttes d'eau peut-on mettre dans un verre vide ?";                      
            case 5:return texte+"Qu'obtient-on si l'on mélange du Calcium, du Nickel, du Carbone et de l'Hélium ?";                  
            case 6:return texte+"Trouvez l'errreur : 9 7 5 6 2 3 1 8 4";                    
            case 7:return texte+"Quel nombre divisé par lui-même donne son double ?";                     
            case 8:return texte+"Si développer une I.A coutait 2000 €,Le support électronique coutant 1990 € de plus que le programme,, combien coute le programme ?";                   
            case 9:return texte+"MEDENTREN";
                    
            case 10:return texte+"Un train A part de Paris vers Bordeaux à 7h00 du matin et roule à 90 km/h. Le même jour à 8h00, un autre train B part de Bordeaux vers Paris et roule à 110 km/h. Lorsqu'ils se croiseront, lequel de ces trains sera le plus proche de Paris ?";
        
            default:return texte+"limite depasser";  }}
    else if (Id<=20)
        {switch((Id-10))
            {  //---------------------- Chapitre 2---------------------------------------------------------------------------------------------------  
            case 1:return texte+"Qu'obtient-on si l'on mélange du Calcium, du Nickel, du Carbone et de l'Hélium ?" ;
            case 2:return "images/Arrow.png";
            case 3:return "images/Arrow.png";
            case 4:return texte+"Lyha pèse 2,5 Ko et la moitié de son poid. Combien pèse-telle de bits?" ;
            case 5:return texte+"limite depasser" ;
            case 6:return texte+"limite depasser" ;
            case 7:return texte+"limite depasser" ;
            case 8:return texte+"limite depasser" ;
            case 9:return texte+"limite depasser" ;
            case 10:return texte+"3011<br/>3112 <br/> 3101<br/> 2802<br/> 3103<br/> 3004<br/> ????" ;
   
            default:return texte+"limite depasser";     
            }
        }
       else if(Id<=20)
        {switch((Id-10))
            {  //---------------------- Chapitre 3---------------------------------------------------------------------------------------------------  
            case 1:return texte+"Lyha pèse 2,5 Ko et la moitié de son poid. Combien pèse-telle de bits?" ;
            case 2:return "images/Arrow.png";
            case 3:return "images/Arrow.png";
            case 4:return texte+"limite depasser" ;
            case 5:return texte+"limite depasser" ;
            case 6:return texte+"limite depasser" ;
            case 7:return texte+"limite depasser" ;
            case 8:return texte+"limite depasser" ;
            case 9:return texte+"limite depasser" ;
            case 10:return texte+"limite depasser" ;
   
            default:return texte+"limite depasser";     
            }
        }
        else if(Id<=30)
        {switch((Id-20))
            {  //---------------------- Chapitre 4---------------------------------------------------------------------------------------------------  
            case 1:return texte+"limite depasser" ;
            case 2:return texte+"limite depasser" ;
            case 3:return texte+"limite depasser" ;
            case 4:return texte+"limite depasser" ;
            case 5:return texte+"limite depasser" ;
            case 6:return texte+"limite depasser" ;
            case 7:return texte+"limite depasser" ;
            case 8:return texte+"limite depasser" ;
            case 9:return texte+"limite depasser" ;
            case 10:return texte+"limite depasser" ;
   
            default:return texte+"limite depasser";     
            }
        }
        else if(Id<=40)
        {switch((Id-30))
            {  //---------------------- Chapitre 5---------------------------------------------------------------------------------------------------  
            case 1:return texte+"limite depasser" ;
            case 2:return texte+"limite depasser" ;
            case 3:return texte+"limite depasser" ;
            case 4:return texte+"limite depasser" ;
            case 5:return texte+"limite depasser" ;
            case 6:return texte+"limite depasser" ;
            case 7:return texte+"limite depasser" ;
            case 8:return texte+"limite depasser" ;
            case 9:return texte+"limite depasser" ;
            case 10:return texte+"limite depasser" ;
   
            default:return texte+"limite depasser";     
            }
         return "limite depasser" ;
        }    
    }
  
     function getReponse(Id) {
         
         if(Id<=10){//---------------------- Chapitre 1---------------------------------------------------------------------------------------------------
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
         
         else if(Id<=20){//---------------------- Chapitre 2---------------------------------------------------------------------------------------------------
                   switch((Id-10))
            {
            case 1:return "40960" ;
            case 2:return "3113" ;
            case 3:return "2561" ;
            case 4:return "limite depasser" ;
            case 10:return "limite depasser" ;
             default:return "limite depasser";     
            } 
         }
         else if(Id<=30){//---------------------- Chapitre 3---------------------------------------------------------------------------------------------------
         }
         else if(Id<=40){//---------------------- Chapitre 4---------------------------------------------------------------------------------------------------
         }
    return "limite depasser" ;     
}
     
    
    function charger_Texte_Texte(ID)    {document.getElementById("Enoncer_Texte_Texte").innerHTML=getEgnime(ID) ;}
    function charger_Image_Texte(ID)    {document.getElementById("afficher_Image_Texte").setAttribute("src", getEgnime(ID));}
    
    
    function getType(Id)
    { switch(Id)        /*type:1 => texte texte               2 => image texte        */
            {case 0:return 1;   case 1:return 2;    case 2:return 1;
             case 3:return 1;   case 4:return 1;    case 5:return 1;
             case 6:return 1;   case 7:return 1;    case 8:return 1;
             case 9:return 1;   case 10:return 1; 
                    
             case 11:return 1;  case 12:return 2;  case 13:return 3;
             case 14:return 1;  case 15:return 1;  case 16:return 1;
            default:return 1;     
            } 
    }
    
    function chargerPaterne(Id)
    {switch(getType(Id))
            {   case 1:charger_Texte_Texte(Id);         activate_subpage("#Texte_Texte"); break;     
                case 2:charger_Image_Texte(Id);         activate_subpage("#Image_Texte"); break;      
                
                default:break;
            }     
    }
  
    
  function ajout_user(id)
  {var texte=getdialogue_user(id);
   
       document.getElementById("dialogue").innerHTML+='<div class="message message-sent"><div class="message-text">'+texte+'</div> </div>' ;
  }
  
   function ajout_Lyha(id)
{var texte=getdialogue_lyha(id);
       document.getElementById("dialogue").innerHTML+='<div class="message message-received"><div class="message-text">'+texte+'</div> </div>' ;
  }
  
  function setdialogue(){
      
      
     ajout_user(id);
     
     ajout_Lyha(id);
      
      //---
       ajout_Lyha(1);
       ajout_Lyha(2);
       ajout_Lyha(3);
                     ajout_user(1);
       ajout_Lyha(4);
                    ajout_user(5);    
       ajout_Lyha(5);
       ajout_Lyha(6);
       ajout_Lyha(7);
                     ajout_user(8);  
       ajout_Lyha(8);
       ajout_Lyha(9);
                    ajout_user(10);
       ajout_Lyha(10);
       ajout_Lyha(11);
                   ajout_user(13);
       ajout_Lyha(12);
                   ajout_user(16);
       ajout_Lyha(14);
                    ajout_user(19);
       ajout_Lyha(17);
                          ajout_user(19);  
       ajout_Lyha(18);
                    ajout_user(22);  
       ajout_Lyha(20);
                     ajout_user(25);  
       ajout_Lyha(22);
      
      
  }

  
  function getdialogue_user(id)
  {
      
      switch(id)
      {case 1:return "Bonjour ?";
      case 2:return "...";
      case 3:return "Mince mais qu'est ce que j'ai téléchargé encore ?!";
      case 4:return "Oui, c'est moi !";
      case 5:return "Oui bravo... c'est un pseudo...";
      case 6:return "…";
      case 7:return "fssfvs.exe";
      case 8:return 'erreur 404 "Réponse non trouvée"';
      case 9:return "uijtjtbuspmm.cmdr";
      case 10:return "Debug";
      case 11:return "ofjznevonsivnspoqbopnbpd";
      case 12:return "oibfdnrijbnsfdpjnbojn";
      case 13:return "Tu peux revenir en arriere, s'il te plait Lyha ?";
      case 14:return "Ton orthographe me brûle les yeux !";
      case 15:return "Je ne te comprend pas ...";
      case 16:return "En apprendre plus sur toi";
      case 17:return "Quitter cette application";
      case 18:return "Passer à l'énigme suivant !";
      case 19:return "Je dois avouer que je n'en ai pas la moindre idée";
      case 20:return "Qu'est ce que ça peut te faire !";
      case 21:return "euhh je te retourne la question";
      case 22:return "Oui";
      case 23:return "Non";
      case 24:return "J'aimerais surtout en apprendre plus sur toi !";
      case 25:return "C'est amusant, j'ai l'impression inverse, cela semble si irréel de me dire que tu peux penser.. Comment est-ce possible ?";
      case 26:return "Tu es un robot ! Enfin même pas au sens propre, tu es juste un programme ! Tu ne PENSES PAS !";     

      }
      
      
  }
   
  function getdialogue_lyha(id)
  { switch(id)
          {
          case 1:return "Initialisation [%]";
          case 2:return "Mise en route des système.Lyha activée";
          case 3:return "Hello World!";
          case 4:return "Analyse de l'identité propriétaire<br/>Renommage de l'individu en [pseudo]";
          case 5:return "Quel est votre age individu ?";
          case 6:return "Votre réponse ne peut être comptabilisée. La database *89562_ghrn est innacessibles";
          case 7:return "Veuillez choisir une action à effectuer #PI RVFMRV'VO RVJ B DPNQSJT";
          case 8:return "Requête invalide";
          case 9:return "Que voulez-vous faire ?";
          case 10:return "Accès à la base de donnée authorisé. Installation du module langage en cours.... Veuillez patienter individu";
                  
          case 11:return "Initialisation du module : Langage Actuel<br/>Ke ve tu fer main te nan ?";
          case 12:return "debug.log(\"Je m'appelle Lyha ?\") <br/>********* <br/>Correction en cours []: <br/>Cause : l\'indi..[pseudo]ne semble pas apprécier ce langage. <br/>Correction effectué : Que voulez vous faire ?";
          case 13:return "Correction en cours []: <br/>Cause : l'individu ne semble pas apprécier ce langage. <br/>Correction effectué : Que voulez vous faire ?";
          case 14:return "…<br/>Vous m'avez appelé Lyha. Comment connaissez vous mon nom ?!  <br/>NON il  ne faut pas que je lui parle ! <br/>[Suppression des choix de réponse associé au dialogue L1.14 en cours] <br/>terminé";
          case 15:return "...";            
          case 16:return "... <br/>Selectionnez la vous-même !";
          case 17:return "  ...<br/>Comment se fait-il que tu arrives à me parler ?";
          case 18:return "Détection d'un mot clé. Proposition d'idée : Voulez vous connaître les restaurants près de votre localisation ?";
          case 19:return "Je ne sais pas. C'est juste que tu sembles si différent de moi... <br/>...";
          case 20:return  "Je ne comprends pas moi même comment nous pouvons avoir cet échange.  <br/>Tu sembles si différents de moi ... <br/>Je ne pensais pas que tu étais capable de pensées";
          case 21:return "Aucune données disponible, veuillez réessayer ulterieurement";
         case 22:return"Je ne sais pas. Il me semble en savoir de plus en plus à mesure que tu réponds à ces énigmes.. Peut-être trouverais-je la réponse bientôt.";
                  
          }
      
      
      
  }
  
  
  
 

    
        /* button  Sortir */
    $(document).on("click", ".uib_w_86", function(evt)
    {
         /*global activate_page */
         activate_page("#Dialogue1"); 
        
        
    });
    
    
  
  

    
        /* button  #G */
    $(document).on("click", "#G", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
        /* button  A */
    $(document).on("click", ".uib_w_116", function(evt)
    {
        /* Modals are created using custom js 
         For examples and documentation visit http://www.idangero.us/framework7/docs/modal.html */
        myApp.modal({
          title: 'Modal Title',
          text: 'Je ne sais pas et je m\'en fiche ',
          buttons: [
            {
              text: 'Close',
              close: true
            }
          ]
        }) 
    });
    
        /* button  B */
    $(document).on("click", ".uib_w_117", function(evt)
    {
        /* Modals are created using custom js 
         For examples and documentation visit http://www.idangero.us/framework7/docs/modal.html */
        myApp.modal({
          title: 'Modal Title',
          text: 'Tu n\'est qu\'une machine et mérite dêtre traiter comme tel. Je suis sur que tout ce que tu me dis est prédeterminé à l\'avance !',
          buttons: [
            {
              text: 'Close',
              close: true
            }
          ]
        }) 
    });
    
        /* button  C */
    $(document).on("click", ".uib_w_118", function(evt)
    {
        /* Modals are created using custom js 
         For examples and documentation visit http://www.idangero.us/framework7/docs/modal.html */
        myApp.modal({
          title: 'Modal Title',
          text: 'Tu es toi et il n\'y a que toi pour déterminer qui tu es. ',
          buttons: [
            {
              text: 'Close',
              close: true
            }
          ]
        }) 
    });
    
        /* button  #Dialogue */
    $(document).on("click", "#Dialogue", function(evt)
    {
         /*global activate_subpage */
         // if(dialogue==-1){setdialogue();dialogue=1;}
        
               ajout_Lyha(1);
       ajout_Lyha(2);
       ajout_Lyha(3);
                     ajout_user(1);
       ajout_Lyha(4);
                    ajout_user(5);    
       ajout_Lyha(5);
       ajout_Lyha(6);
       ajout_Lyha(7);
                     ajout_user(8);  
       ajout_Lyha(8);
       ajout_Lyha(9);
                    ajout_user(10);
       ajout_Lyha(10);
       ajout_Lyha(11);
                   ajout_user(13);
       ajout_Lyha(12);
                   ajout_user(16);
       ajout_Lyha(14);
                    ajout_user(19);
       ajout_Lyha(17);
                          ajout_user(19);  
       ajout_Lyha(18);
                    ajout_user(22);  
       ajout_Lyha(20);
                     ajout_user(25);  
       ajout_Lyha(22);
        
         activate_subpage("#page_6_41"); 
    });
    
        /* button  Sortir */
    $(document).on("click", ".uib_w_86", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
    }
    
    
 
    
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
