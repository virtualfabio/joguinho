
function createPerson(tipo, id){
    return {'id': id, 'tipo': tipo};
}

function templatePerson(tipo, id){
    var random = Math.floor(Math.random() * 3);
    var typeFace = 'classic';
    var pele = '';

    if(random === 1){
        typeFace = 'large-smile';
    }
    if(random === 2){
        typeFace = 'worried';
    }

    random = Math.floor(Math.random() * 3);
    
    if(tipo === 'indio'){
        pele = 'indio-pele-3';
    }else{
        pele = 'padre-pele-3'; 
    }

    if(random === 1){
        if(tipo === 'indio'){
            pele = 'indio-pele-2';
        }else{
            pele = 'padre-pele-1'; 
        }
    }
    if(random === 2){
        if(tipo === 'indio'){
            pele = 'indio-pele-1';
        }else{
            pele = 'padre-pele-2'; 
        }
    }
    

    var template = 
    `<div class="minifigure person" onClick="onSelect('${id}', '${tipo}')">
        <div id="${id}" class="head ${pele}">
            <div class="faces-wrap">
                <div class="faces">
                    <div class="face ${typeFace}">
                        <div class="eye right"></div>
                        <div class="eye left"></div>
                        <div class="mouth"></div>
                    </div>
                </div>
            </div>
        </div>
 
      </div>

    </div>`;
    return template;
}