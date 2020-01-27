var config = { maxSelected: 2 };
var seletedPlayers = [];
var message = '';
var boat = {margin: 1, positionX: 0, seletedPlayers: []};

document.getElementById('msgCentro').style.display='none';

var persons = [];
var htmlIndios = '';
var htmlPadres = '';
var tipoPerson = '';
var sentidoBoat = 'IDA';

//create persons - indios e padres
for (let i = 1; i <= 6; i++) {
    if(i<=3){
        tipoPerson = 'indio';
        persons.push(createPerson(tipoPerson, i));
        htmlIndios += templatePerson(tipoPerson, i);
    }else{
        tipoPerson = 'padre';
        persons.push(createPerson(tipoPerson, i));
        htmlPadres += templatePerson(tipoPerson, i);
    }
}   

document.getElementById('area-indios').innerHTML = htmlIndios;
document.getElementById('area-padres').innerHTML = htmlPadres;

function onSelect(id, tipo){
    if(seletedPlayers.length < config.maxSelected){
        seletedPlayers.push({'id': id, 'tipo': tipo});                        
        addClassById(id);
        show('msgBoat', seletedPlayers.length);
        document.getElementById(id).style.display = 'none';
        if(seletedPlayers.length === config.maxSelected){            
            runBoat(sentidoBoat);
        }
        show('message', '');
    }else{
        show('message', 'Voce so pode selecionar no maximo 2 pessoas!');
    }

}

function runBoat(sentido){
    var htmlIndios = '';
    var htmlPadres = '';
    console.log('sentido', sentido);
    if(sentido === 'IDA'){
        document.getElementById('boat').classList.remove('box-drift-anime-back');
        document.getElementById('boat').classList.add('box-drift-anime');
        setTimeout(function(){
            for (let i = 0; i < seletedPlayers.length; i++) {
                const person = seletedPlayers[i];
                if(person.tipo === 'indio'){
                    htmlIndios += templatePerson(person.tipo, 'sup-'+person.id);
                }else{
                    htmlPadres += templatePerson(person.tipo, 'sup-'+person.id);
                }   
            }  
            document.getElementById('area-indios-sup').innerHTML = htmlIndios;
            document.getElementById('area-padres-sup').innerHTML = htmlPadres;
            show('msgBoat', 0);
            seletedPlayers = [];
            sentidoBoat = 'VOLTA';
        }, 3000);
    }else{
        document.getElementById('boat').classList.remove('box-drift-anime');
        document.getElementById('boat').classList.add('box-drift-anime-back');
        setTimeout(function(){

            for (let i = 0; i < seletedPlayers.length; i++) {
                const person = seletedPlayers[i];
                var id = person.id;
                id = id.replace('sup-', '');
                console.log(id);
                document.getElementById(id).style.display = 'block';
                // if(person.tipo === 'indio'){
                //     //htmlIndios += templatePerson(person.tipo, 'sup-'+person.id);
                // }else{
                //     htmlPadres += templatePerson(person.tipo, 'sup-'+person.id);
                // }   
            }  
            show('msgBoat', 0);
            seletedPlayers = [];
            sentidoBoat = 'IDA';
        }, 3000);
    }

}

function show(ondeExibir, msg){
    document.getElementById(ondeExibir).innerHTML = msg;
}

function addClassById(id){
    document.getElementById(id).classList.add("person-selected");
}
