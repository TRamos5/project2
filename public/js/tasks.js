// $('remove').click(function(){
//     $(this).closest('ul').hide();
// });


// var parent = 0;
var counter = 1;
$(document).ready(function(){

$('.down0').click(function(){
    $(this).closest('ul').children('ul').toggle();
    $(this).closest('ul').children('span').toggle();
});
//////////
////////////////////
//1
////////////////////
//////////
$('.addOn').click(function(){
    //the pieces of the form
    let but = document.getElementById('log');
    let div = document.createElement('div');
    let formBox = document.createElement('form');
    let labelS = document.createElement('label');
    let inputS = document.createElement('input');
    let labelO = document.createElement('label');
    let inputO = document.createElement('input');
    let labelD = document.createElement('label');
    let inputD = document.createElement('input');
    let labelB = document.createElement('label');
    let inputB = document.createElement('input');
    let Scrap = document.createElement('button');
    let Submit = document.createElement('input');
    inputS.setAttribute('type', 'text');
    inputS.setAttribute('name', 'f1name');
    inputO.setAttribute('type', 'text');
    inputO.setAttribute('name', 'f1owner');
    inputD.setAttribute('type', 'text');
    inputD.setAttribute('name', 'f1description');
    inputB.setAttribute('type', 'integer');
    inputB.setAttribute('name', 'f1budget');
    formBox.setAttribute('action', './../tasks');
    formBox.setAttribute('method', 'post');
    //putting the form together
    labelS.textContent = "Subtask:"
    formBox.appendChild(labelS);
    inputS.setAttribute('id', 'subtask');
    formBox.appendChild(inputS);
    labelO.textContent = "Owner:"
    formBox.appendChild(labelO);
    inputO.setAttribute('id', 'owner');
    formBox.appendChild(inputO);
    labelD.textContent = "Description:"
    formBox.appendChild(labelD);
    inputD.setAttribute('id', 'description');
    formBox.appendChild(inputD);
    labelB.textContent = "Budget:"
    formBox.appendChild(labelB);
    inputB.setAttribute('id', 'budget');
    formBox.appendChild(inputB);
    Scrap.setAttribute('class', 'scrap');
    Scrap.textContent="scrap";
    formBox.appendChild(Scrap);
    Submit.setAttribute('class', 'submit');
    Submit.setAttribute('type', 'submit');
    Submit.setAttribute('value', 'submit');
    formBox.appendChild(Submit);
    div.append(formBox);
    $(this).closest('ul').append(div); 

    //scrap button 
    $('.scrap').click(function(event){
        event.preventDefault();
        $(this).closest('div').remove();
    });
    let jesus = counter;
    //submit button
    $('.submit').click(function(event){
        event.preventDefault();
        
        //the peices of the new subtask
        let newUL = document.createElement('ul');
        let divUnordered = document.createElement('div');
        let pName = document.createElement('p');
        let pOwner = document.createElement('p');
        let bDown = document.createElement('button');
        let descr = document.createElement('span');
        let add = document.createElement('div');
        let remove = document.createElement('div');
        let tog = document.createElement('button');
        let complete = document.createElement('p');
        let tog2 = document.createElement('button');
        let togs = document.createElement('div');
        let buttons = document.createElement('div');
        //the classes of the new subtask
        divUnordered.setAttribute('class', 'unordered' + counter);
        pName.setAttribute('class', 'pName pName' + counter);
        pOwner.setAttribute('class', 'owner' + counter);
        bDown.setAttribute('class', 'down' + counter);
        bDown.setAttribute('id', 'down' + counter);
        newUL.setAttribute('class', 'ul' + counter);
        tog.setAttribute('class', 'tog tog'+counter);
        add.setAttribute('class', 'addOn addOn'+ counter);
        remove.setAttribute('class', 'removeB removeBut'+counter);
        complete.setAttribute('class', 'complete complete'+counter);
        tog2.setAttribute('class', 'tog2nd tog2nd'+counter);
        togs.setAttribute('class', 'togs togs'+counter);
        buttons.setAttribute('class', 'buttons buttons'+counter);
        //the content of the new subtask
        pName.textContent= $(this).siblings('#subtask').val();
        let NN=pName.textContent;
        pOwner.textContent=$(this).siblings('#owner').val();
        let OO= pOwner.textContent;
        bDown.textContent="V";
        descr.textContent=$(this).siblings('#description').val();
        let DD= descr.textContent;
        let BB = $(this).siblings('#budget');
        add.textContent="+ Add Sub-class";
        remove.textContent="X";
        //putting all the pieces together and plugging them in
        divUnordered.append(pName);
        divUnordered.append(pOwner);
        divUnordered.append(bDown);
        newUL.append(divUnordered);
        newUL.append(descr);
        togs.append(tog);
        togs.append(tog2);
        buttons.append(add);
        buttons.append(togs);
        buttons.append(remove);
        newUL.append(buttons);

        $(this).closest('ul').append(newUL);
        //remover form
        $(this).closest('div').remove();
        let jesus = counter;
        counter +=1;
        newUL.setAttribute('class', 'Parent_is1');
        divUnordered.setAttribute('class', 'unordered1');
        $.post("/tasks",
        {
            mainTask1: NN,
            description1: DD,
            budget1: BB,
            owner: OO,
            name: NN,
            
        })
        
    });

    $('body').on('click', 'div.removeBut' + counter, function(){
        $(this).closest('ul').remove();
    });
    //////////
    ////////////////////
    //2
    ////////////////////
    //////////
    $('body').on('click', 'button.tog' + counter, function(){            
        $(this).closest('ul').children('div').children('p').css("color", 'green');
    });
    $('body').on('click', 'button.tog2nd' + counter, function(){            
        $(this).closest('ul').children('div').children('p').css("text-decoration",'none');
    });

    $('body').on('click', 'button.down' + counter, function(){
        $(this).closest('ul').children('ul').toggle();
        $(this).closest('ul').children('span').toggle();
    });
    $('body').on('click', 'div.addOn' + counter, function(){       //the pieces of the form
        parent = 2;

        let but = document.getElementById('log');
        let div = document.createElement('div');
        let formBox = document.createElement('form');
        let labelS = document.createElement('label');
        let inputS = document.createElement('input');
        let labelO = document.createElement('label');
        let inputO = document.createElement('input');
        let labelD = document.createElement('label');
        let inputD = document.createElement('input');
        let labelB = document.createElement('label');
        let inputB = document.createElement('input');
        let Scrap = document.createElement('button');
        let Submit = document.createElement('input');
        inputS.setAttribute('type', 'text');
        inputS.setAttribute('name', 'f2name');
        inputO.setAttribute('type', 'text');
        inputO.setAttribute('name', 'f2owner');
        inputD.setAttribute('type', 'text');
        inputD.setAttribute('name', 'f2description');
        inputB.setAttribute('type', 'integer');
        inputB.setAttribute('name', 'f2budget');
        formBox.setAttribute('action', '/tasks');
        formBox.setAttribute('method', 'POST');
        //putting the form together
        labelS.textContent = "Subtask:"
        formBox.appendChild(labelS);
        inputS.setAttribute('id', 'subtask');
        formBox.appendChild(inputS);
        labelO.textContent = "Owner:"
        formBox.appendChild(labelO);
        inputO.setAttribute('id', 'owner');
        formBox.appendChild(inputO);
        labelD.textContent = "Description:"
        formBox.appendChild(labelD);
        inputD.setAttribute('id', 'description');
        formBox.appendChild(inputD);
        labelB.textContent = "Budget:"
        formBox.appendChild(labelB);
        inputB.setAttribute('id', 'budget');
        formBox.appendChild(inputB);
        Scrap.setAttribute('class', 'scrap');
        Scrap.textContent="scrap";
        formBox.appendChild(Scrap);
        Submit.setAttribute('class', 'submit');
        Submit.setAttribute('type', 'submit');
        Submit.setAttribute('value', 'submit');
        Submit.textContent='submit';
        console.log(Submit.textContent);
        formBox.appendChild(Submit);
        div.append(formBox);
        $(this).closest('ul').append(div);

        //scrap button 
        $('.scrap').click(function(event){
            event.preventDefault();
            $(this).closest('div').remove();
        });

        //submit button
        $('.submit').click(function(event){
            event.preventDefault();
            //the peices of the new subtask
            let newUL = document.createElement('ul');
            let divUnordered = document.createElement('div');
            let pName = document.createElement('p');
            let pOwner = document.createElement('p');
            let bDown = document.createElement('button');
            let descr = document.createElement('span');
            let add = document.createElement('div');
            let remove = document.createElement('div');
            let tog = document.createElement('button');
            let complete = document.createElement('p');
            let tog2 = document.createElement('button');
            let togs = document.createElement('div');
            let buttons = document.createElement('div');
            //the classes of the new subtask
            divUnordered.setAttribute('class', 'unordered' + counter);
            pName.setAttribute('class', 'pName pName' + counter);
            pOwner.setAttribute('class', 'owner' + counter);
            bDown.setAttribute('class', 'down' + counter);
            bDown.setAttribute('id', 'down' + counter);
            newUL.setAttribute('class', 'ul' + counter);
            tog.setAttribute('class', 'tog tog'+counter);
            add.setAttribute('class', 'addOn addOn'+ counter);
            remove.setAttribute('class', 'removeB removeBut'+counter);
            complete.setAttribute('class', 'complete complete'+counter);
            tog2.setAttribute('class', 'tog2nd tog2nd'+counter);
            togs.setAttribute('class', 'togs togs'+counter);
            buttons.setAttribute('class', 'buttons buttons'+counter);
            //the content of the new subtask
            pName.textContent= $(this).siblings('#subtask').val();
            let NNN=pName.textContent;
            pOwner.textContent=$(this).siblings('#owner').val();
            let OOO= pOwner.textContent;
            bDown.textContent="V";
            descr.textContent=$(this).siblings('#description').val();
            let DDD= descr.textContent;
            let BBB = $(this).siblings('#budget').val();
            add.textContent="+ Add Sub-class";
            remove.textContent="X";
            //putting all the pieces together and plugging them in
            divUnordered.append(pName);
            divUnordered.append(pOwner);
            divUnordered.append(bDown);
            newUL.append(divUnordered);
            newUL.append(descr);
            togs.append(tog);
            togs.append(tog2);
            buttons.append(togs);
            buttons.append(remove);
            newUL.append(buttons);

            $(this).closest('ul').append(newUL);
            //remover form
            $(this).closest('div').remove();
            counter +=1;
            newUL.setAttribute('class', 'Parent_is1');
            divUnordered.setAttribute('class', 'unordered2');
            console.log(jesus);
            $.post("/tasks",
            {
                // taskId: $(this).closest'ul'.
                description: DDD,
                subTaskIndex: counter-1,
                budget: BBB,
                task_id: jesus,
                name:NNN,
                owner: OOO

            })

        });

        $('body').on('click', 'div.removeBut' + counter, function(){
            $(this).closest('ul').remove();
        });
        //////////
        ////////////////////
        //2
        ////////////////////
        //////////
        $('body').on('click', 'button.tog' + counter, function(){            
            $(this).closest('ul').children('div').children('p').css("text-decoration",'line-through');
        });
        $('body').on('click', 'button.tog2nd' + counter, function(){            
            $(this).closest('ul').children('div').children('p').css("text-decoration",'none');
        });

    $('body').on('click', 'button.down' + counter, function(){
        $(this).closest('ul').children('ul').toggle();
        $(this).closest('ul').children('span').toggle();
    });
});
});
});