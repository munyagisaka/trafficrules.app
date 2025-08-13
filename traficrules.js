const startBtn=document.getElementById("start");
const question=document.getElementById("question");
const feedback=document.getElementById("feedback");
const scoreBoard=document.getElementById("score");
const container=document.getElementById("container");
const answersContainer=document.getElementById("answers-container");
const welcome=document.getElementById("welcome-message");

const qObject=[
    {
        question:" Ikinyabiziga cyose cyangwa ibinyabiziga bigenda bigomba kugira:",
        answers:["Umuyobozi","Umuherekeza","A na B ni ibisubizo by\’ukuri","Nta gisubizo cy\’ukuri kirimo"],
        correct:"Umuyobozi",
    },
    {question:"Ijambo “akayira” bivuga inzira nyabagendwa ifunganye yagenewe gusa:",
        answers:["Abanyamaguru","Ibinyabiziga bigendera ku biziga bibiri","A na B ni ibisubizo by\’ukuri","Nta gisubizo cy\’ukuri kirimo"],
        correct:"A na B ni ibisubizo by\’ukuri",

    },
    {
        question:"Umurongo uciyemo uduce umenyesha ahegereye umurongo ushobora kuzuzwa n\’uturanga gukata tw\’ibara ryera utwo turanga cyerekezo\ tumenyesha :",
        answers:["Igisate cy\’umuhanda abayobozi bagomba gukurikira","Ahegereye umurongo ukomeje","Igabanurwa ry\’umubare w\’ibisate by\’umuhanda mu cyerekezo bajyamo","A na C nibyo"],
        correct:"Igabanurwa ry\’umubare w\’ibisate by\’umuhanda mu cyerekezo bajyamo",
    },
    {question:"Ahantu ho kugendera mu muhanda herekanwa n’ibimenyetso bimurika ibinyabiziga ntibishobora kuhagenda :",
        answers:["Biteganye","Kumurongo umwe","A na B ni ibisubizo byukuri","Ntagisubizo cy\'ukuri kirimo"],
        correct:"Ntagisubizo cy\'ukuri kirimo"

    },
    {
        question:"Ibinyabiziga bikurikira bigomba gukorerwa isuzumwa buri mwaka:",
        answers:["Ibinyabiziga bigenewe gutwara abagenzi muri rusange","Ibinyabiziga bigenewe gutwara ibintu birengeje toni 3.5","Ibinyabiziga bigenewe kwigisha gutwara","Nta gisubizo cy\’ukuri kirimo ahubwo ni amezi 6"],
        correct:"Nta gisubizo cy\’ukuri kirimo ahubwo ni amezi 6",
    },
    {question:"Ubugari bwa romoruki ikuruwe n\’ikinyamitende itatu ntibugomba kurenza ibipimo bikurikira:",
        answers:["cm75","cm125","cm265","Nta gisubizo cy\’ukuri"],
        correct:"Nta gisubizo cy\’ukuri",

    },
    {
        question:"Uburebure bw’ibinyabiziga bikurikira ntibugomba kurenga metero 11 :",
        answers:["Ibifite umutambiko umwe uhuza imipira",
            "Ibifite imitambiko ibiri ikurikiranye mu bugari bwayo",
            "Makuzungu",
            "Ntagisubizo cy\'ukuri"],
        correct:"Ntagisubizo cy\'ukuri",
    },
    {question:"Ikinyabiziga kibujijwe guhagarara akanya kanini aha hakurikira :",
        answers:[") Ahatarengeje metero 1 imbere cyangwa inyuma y’ikinyabiziga gihagaze akanya gato cyangwa kanini",
            "Ahantu hari ibimenyetso bibuza byabugenewe",
            "Aho abanyamaguru banyura mu muhanda ngo bakikire inkomyi",
            "Ibisubizo byose nibyo"
        ],
        correct:"Ibisubizo byose nibyo",

    },
    {
        question:"Kunyuranaho bikorerwa:",
        answers:["Mu ruhande rw\'iburyo gusa",
            "Igihe cyose ni ibumoso",
            "Iburyo iyo unyura ku nyamaswa",
            "Ntagisubizo cyukuri"
        ],
        correct:"Ntagisubizo cyukuri",
    },
    {question:"Icyapa cyerekana umuvuduko ntarengwa ikinyabiziga kitagomba kurenza gishyirwa gusa ku binyabiziga bifite uburemere ntarengwa\
bukurikira:",
        answers:["Burenga toni 1",
            "Burenga toni 2",
            "Burenga toni 24",
            "Nta gisubizo cy\'ukuri kirimo"
        ],
        correct:"Nta gisubizo cy\'ukuri kirimo"

    },
    {
        question:"Ahatari mu nsisiro umuvuduko ntarengwa mu isaha wa velomoteri ni:",
        answers:["Km 50",
             "Km 40",
             "Km 30",
            "Ntagisubizo cy\'ukuri kirimo"],
            correct:"Km 50",
    },
    {question:". Umuyobozi ugenda mu muhanda igihe ubugari\
         bwawo budatuma anyuranaho nta nkomyi ashobora kunyura mu kayira k\’abanyamaguru ariko amaze kureba ibi bikurikira:",
        answers:["Umuvuduko w\’abanyamaguru",
            "Ubugari bw'umuhanda",
            "Umubare w'abanyamaguru",
            "Ntagisubizo cy'ukuri kirimo"
        ],
        correct:"Ntagisubizo cy'ukuri kirimo",

    },
    {
        question:" Ku byerekeye kwerekana ibinyabiziga n'ukumurika kwabyo ndetse no kwerekana ihindura ry'ibyerekezo byabyo. Birabujijwe gukora\andi matara cyangwa utugarurarumuri uretse ibitegetswe ariko ntibireba amatara akurikira:",
        answers:["Amatara ndanga",
            "Amatara ari imbere mu modoka",
            "Amatara ndangaburambarare",
            "Ibisubizo byose nibyo"

        ],
        correct:"Amatara ari imbere mu modoka",
    },
    {question:"Iyo nta mategeko awugabanya by'umwihariko umuvuduko ntarengwa w'amapikipiki mu isaha ni:",
        answers:["Km 25",
            "Km 75",
            "Km 40",
            "Ntagisubizo kirimo"
        ],
        correct:"Ntagisubizo kirimo",

    },
    {
        question:"Uburyo bukoreshwa kugirango ikinyabiziga kigende gahoro igihe feri idakora neza babwita:",
        answers:["Feri y'urugendo",
            "Feri yo guhagarara umwanya munini",
            "Feri yo gutabara",
            "Nta gisubizo cy'ukuri kirimo"
        ],
        correct:"Feri yo gutabara",
    },
    {question:"Nibura ikinyabiziga gitegetswe kugira uduhanagurakirahure tungahe:",
        answers:["2",
            "3",
            "1",
            "Ntagisubizo kirimo"
        ],
        correct:"1",

    },
    {
        question:"Amatara maremare y'ikinyabziga agomba guzimwya mubihe bikurikira:",
        answers:["Iyo umuhanda umurikiye umuyobozi abasha kureba muri metero 20",
            "Iyo ikinyabiziga kigiye kubisikana nikindi",
            "Iyo ageze munsisiro",
            "Ibisubizo byose nibyo"
        ],
        correct:"Iyo ikinyabiziga kigiye kubisikana nikindi",
    },
    {question:"Ikinyabiziga ntigishobora kugira amatara abiri y'ubwoko bumwe keretse kubyerekeye amatara akurikira:",
        answers:["Itara ndangamubyimba",
            "Itara ndangakerekezo",
            "itara ndangamurumbarare",
            "Ibisubizo byose ni ukuri"
        ],
        correct:"Ibisubizo byose ni ukuri",

    },
    {
        question:"Ubugari bwa romoruki ikuruwe n'igare cyangwa velomoteri ntiburenza ibipimo bikurikira:",
        answers:["Cm 25",
            "Cm 125",
            "Cm 45",
            "Ntagisubizo kirimo"
        ],
        correct:"Ntagisubizo kirimo"
    },
    {question:"Ibinyabiziga bikoreshwa nka tagisi, bitegereza abantu munzira nyabagendwa bishobora gushyirwaho itara ryerekanako ikinyabiziga kitakodeshejwe. Iryo tara rishyirwaho kuburyo bukurikira:",
        answers:["Ni itara ry'icyatsi rishyirwa imbere kubinyabiziga",
            "Ni itara ry'icyatsi rishyirwa ibumoso",
            "Ni itara ry'umuhondo rishyirwa inyuma",
            "A na c ni ibisubizo by'ukuri"
        ],
        correct:"Ni itara ry'icyatsi rishyirwa imbere kubinyabiziga"

    },
    {
        question:"Za otobisi zigenewe  gutwara abanyeshuri zishyirwahoo amatara abiri asa nicunga rihishije kugirango yerekane ko zihagaze no kwerekana ko bagomba kwitonda ayo matara ashyirwaho muburyo bukurikira:",
        answers:["Amatara abiri ashyirwa inyuma","Amatara abiri ashyirwa inyuma","Rimwe rishyirwa imbere irindi inyuma","b na c ni ibizubizo byukuri"],
        correct:"Rimwe rishyirwa imbere irindi inyuma"
    },
    {question:"Itara ryo guhagarara ry'ibara ritukura rigomba kugaragara igihe ijuru rikeye nibura muntera ikurirkira:",
        answers:["Metero ijana kumanywa na metero 20 nijoro","Metero 150 kumanywa na metero 50 nijoro","Metero 200 na metero 100 nijoro","Ntagisubizo kirimo"],
        correct:"Ntagisubizo kirimo"

    },
    {
        question:"Iyo imuvuduko w'ibinyabiziga bidapakiye udashobora kurenga km50 mu isaha ahategamye, bigomba kugira ibikoresho by'ihoni byumvikana mu ntera:",
        correct:"Metero 50",
        answers:["Metero 100","Metero 200","Metero 50","Metero 150"],
    },
    {question:"Birabujijwe kugenza ibinyabiziga bigendeshwa na moteri naza romoruki zikururwa nabyo, iyo ibiziga bidahagwa cyangwa inziga zikurura zifite umubyimba uri hasi ya cm 4.Ariko ibyo ntibikurikizwa kubinyabiziga bikurikira:",
        correct:"Ntagisubizo kirimo",
        answers:["Kubinyabiziga byingabo bitarenga km 25","Ibinyabiziga bihinga","Ibinyabiziga bya police","Ntagisubizo kirimo"]

    },
    {
        question:"Igice kinzira nyabagendwa kigarukira ku mirongo ibiri yera icagaguye ibangikanye kandi kidafite ubugari buhagije kugirango imodoka zitambuke neza kiba ari:",
        answers:["Ahanyurwa namagare na za velomoteri","Ahanyurwa ningorofani","Ahanyurwa nibinyamitende","Ntagisubizo kirimo"],
        correct:"Ahanyurwa nibinyamitende",
    },
    ,
    {question:"Ubugari bwa romoruki ntibugomba kurenga ubugari bwikinyabiziga kiyikura iyo ikururwa nibinyabiziga bikurikira:",
        answers:["Igare","Velomoteri","Ipikipiki ifite akanyabiziga kayometseho","Ntagisubizo kirimo"],
        correct:"Ipikipki ifite akanyabiziga kayometseho"

    },
    {
        question:"Iyo hatarimo indi myanya birabujijwe gutwara abana mu ntebe yimbere y'imodoka abana badafite:",
        correct:"Imyaka 12",
        answers:["Imyaka 7","Imyaka 12","Imyaka 18","Ntagisubizo kirimo"],
    },
    {question:"Icyapa kivuga gutambuka mbere kwibinyabiziga birututse imbere bifite amabara akurikira:",
        answers:["Ubuso ni umweru","Ikirango ni umutuku n'umukara","Ikiango ni umweru n'umukara","Ntagisubizo kirimo"],
        correct:"Ntagisubizo kirimo"

    },
    {
        question:"Ni ryari itegeko ryogutambuka mbere kwiburyo rikurikizwa mu masangano",
        answers:["Iyo nta cyapa cyogutambuka mbere gihari","Iyo ikimenyetso kimurika cyagenewe ibinybaiziga kidakora","A na B ni ibisubizo","Ntagisubizo kirimo"],
        correct:"A na B ni ibisubizo"
    },
    {question:"Inkomane z'inzira nyabagendwa cyangwa z'umuhanda zishobora kugaragazwa n'ibikoresho ngarurarumuri.Ibyo bikoresho bigomba gushyirwa aho abagenzi babibona:",
        answers:["Babona gusa ibumoso bwabo iby'ibara ritukura","Iburyo babona iby'ibara ryicunga rihishiye","Babona iby'ibara ryumuhondo ibumoso","Ntagisubizo kirimo"],
        correct:"Ntagisubizo kirimo"

    },
    {
        question:"Ibinyabiziga bigomba gukorerwa inshuro imwe mu mezi 6:",
        answers:["Ibinyabiziga bitwara abagenzi muri rusange","Ibinyabiziga bigenewe gutwara ibintu birengeje toni 3.5","Ibisubizo byose nibyo"],
    correct:"Ibisubizo byose nibyo"},
    {question:"Iyo kuyobya umuhanda aringombwa bigaragazwa kuva aho uhere no kuburebure bwawo na mabara akurikira:",
        correct:"Ubururu",
        answers:["Ubururu","Umutuku","Umweru","Ntagisubizo kirimo"]

    },
    {
        question:"Kumuhanda ibyapa bigomba kugaragazwa kuburyo bumwe:",
        answers:["Ibyapa biburira n'ibitegeka","Ibyapa biyobora n'ibitegeka","Ibyapa bibuza n'ibitegeka","Ntagisubizo kirimo"],
        correct:"Ibyapa bibuza n'ibitegeka"
    },
    {question:"Ni iyihe feri ituma imodoka igenda gahoro igahagarara kuburyo bwizewe kandi nyabwo, uko imodoka yaba yikoreye kose yaba igeze ahacuramye cyangwa ahazamuka:",
        correct:"Feri y'urugendo",
        answers:["Feri y'urugendo","Feri yo gutabara ","Feri yo guhagarara umwanya munini","Ntagisubizo kirimo"]

    },
    {question:"Ibizirikisho byiminyururu cyangwa by'insinga kimwe nibindi byingoboka bikorehwa gusa igihe umuntu ntakundi yabigenza kandi ntakindi biririwe uretse gusa ikinyabiziga kigere aho kigomba gukorerwa kandi nturenze narimwe  km 20 mu isaha, ibyo bizirikisho bigaragazwa kuburyo bukurikira:",
        answers:["Agatambaro gatukur ka cm 50 zumuhanda","Ikimenyetso kitara risa nicunga rihishije","Icyapa cya mpande inye zingana gifite cm 20 kuri buri ruhande","Nta gisubizo kirimo"],
        correct:"Nta gisubizo kirimo"

    },
    {
        question:"Uretse mumujyi kuyindi mihanda yagenwe na ministiri ushinzwe gutwara abantu n'ibintu, uburemere ntarengwa kubinyabiziga bifite imitambiko itatu hatarimo makuzungu ni:",
        answers:["Toni 20","Toni 16","Toni 10","Toni 24"],
        correct:"Toni 16",
    },
    {question:"Ubugari bwimizigo yikorewe nibinyamitende itatu n'ubwiyikorewe nibinyamitende ine 4 bifite cyangwa bidafite moteri kimwe nibyikorewe na romoruki zikururwa nibyo binyabiziga  ntibuhsobora kurenga ibipimo bikurikira:",
        answers:["cm 30 kubinyabiziga bidapakiye","Ubugari budakuaka ni metero 2 na cm 50","A na B ni ibisubizo byukuri","Ntagisubizo kirimo"],
        correct:"A na B ni ibisubizo byukuri"

    },
    {question:"Kunyura kukinyabiziga uretse igifite ibiziga biri, bibujijwe aha hakurikira:",
        answers:["Hafi yiteme iyo ari umuhanda ufunganye","Hafi yaho abanyamaguru banyura","Hafi yibice byumahanda bimeze nabi","Ibisubizo byose ni ukuri"],
        correct:"Ibisubizo byose ni ukuri"

    },
    {
        question:"Iyo ntamategekeo awugabanya byumwihariko,umuvuduko ntarengwa kumodoka zitwara abagenzi muri rusange ni:",
        answers:["Km 60 mu isaha","Km 40 mu isaha","Km 75 mu isaha","Km 20 mu isaha"],
        correct:"Km 60 mu isaha",
    },{
        question:"Ikinyabiziga kibujijwe guhagarara aha hakurikira",
        answers:["Imbere yahantu hinjirwa hakanasohokerwa nabantu benshi","Mu muhanda aho ugabanyijemo ibisate bigaragazwa numurongo udacagaguye","A na B ni ibisubizo byukuri","Ntagisubizo kirimo"],
        correct:"A na B ni ibisubizo byukuri"
},{
        question:"Iyo bwije kugeza bukeye bitewe nuko ibihe bimeze nigihe cyibihu cyangwa ikumvura bitagishoboka kubona neza muntera ya metero 200,udutsiko twose twabanyamaguru nkimperekerane, cyangwa udutsiko twabanyeshuri baheekejwe namwalimu, iyo bagenda mumuhanda ku isonga hakaba hari abantu barenze umwe, bagomba kugaragazwa muburyo bukurikira:",
        answers:["Imbere ni itarat ryumuhondo ritwariiwe iibumoso","Inyumwa ni itara ryera ritwariwe ibumoso n'umurku uri inyuma kumurongo ugabanya umuhanda mo kabiri","A na B ni ibisubizo byukuri","Ntagisubizo kirimo"],
        correct:"Ntagisubizo kirimo",
    }];

    let currentIndex=0;
    let score=0;
    function displayQuestion(){
        const currentQuestion=qObject[currentIndex];
        question.textContent=currentQuestion.question;
        answersContainer.innerHTML="";
        welcome.innerHTML="";
        currentQuestion.answers.forEach( (answer) =>
        {
            const li=document.createElement("li");
            li.innerText=answer;
            li.dataset.answer=answer;
            li.style.cursor="pointer";
        answersContainer.appendChild(li)}
            
        )

    }
    function handleClick(e){
        if(e.target.tagName==="LI"){
            const selected=e.target.dataset.answer;
            const correct=qObject[currentIndex].correct;
            if(selected === correct){
                feedback.textContent="✅ Correct!"
                score+=3;
                currentIndex++;
                scoreBoard.textContent=`The Score :${score}.0`
                setTimeout(()=>{
                if(currentIndex < qObject.length){
                    displayQuestion();
                }
            else{
                question.textContent="🎉 Quiz finished!";
                answersContainer.innerHTML="";
                scoreBoard.textContent=`The total score is:
                ${score}`
            }},300)
    
            }
            else{
                feedback.textContent="❌ Ooops! Try again.";
                score-=5;
                scoreBoard.textContent=`The score reduced to:${score}`

            }
        }}
    displayQuestion()
answersContainer.addEventListener("click", handleClick)