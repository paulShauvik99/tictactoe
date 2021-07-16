$(document).ready(function(){
//consts
    const status = document.querySelector('.status');
    const reset = document.querySelector('.reset');
    const cells  =  document.querySelectorAll('.cell');

//game variables

    let game = true;
    let xNext = true;
    const xsym = '×';
    const osym = '○';




//gameFunc
    const lettertosym = (letter) => letter==='x'?xsym:osym;
    

    const winner = (win) =>{
        game = false;
    
            if(win==='x'){
            swal({
                title: `${lettertosym(win)} has won!`,
                button: 'Continue' 
            })
            }else{
            swal({
                title: `${lettertosym(win)} has won!`,
                button: 'Continue'
            })
            }
    }

    const checkStatus = () =>{
        const tl = cells[0].classList[1];
        const tm = cells[1].classList[1];
        const tr = cells[2].classList[1];
        const ml = cells[3].classList[1];
        const mm = cells[4].classList[1];
        const mr = cells[5].classList[1];
        const bl = cells[6].classList[1];
        const bm = cells[7].classList[1];
        const br = cells[8].classList[1];

    
        if(tl && tl===tm && tl===tr){
            winner(tl);
            cells[0].classList.add('won');
            cells[1].classList.add('won');
            cells[2].classList.add('won');
        }else if(ml && ml===mm && ml===mr){
            winner(ml);
            cells[3].classList.add('won');
            cells[4].classList.add('won');
            cells[5].classList.add('won');
        }else if(bl && bl===bm && bl=== br){
            winner(bl);
            cells[6].classList.add('won');
            cells[7].classList.add('won');
            cells[8].classList.add('won');

        }else if(tl && tl===ml && tl===bl){
            winner(tl);
            cells[0].classList.add('won');
            cells[3].classList.add('won');
            cells[6].classList.add('won');

        }else if(tm && tm===mm && tm===bm){
            winner(tm);
            cells[1].classList.add('won');
            cells[4].classList.add('won');
            cells[7].classList.add('won');

        }else if(tr && tr===mr && tr===br){
            winner(tr);
            cells[2].classList.add('won');
            cells[5].classList.add('won');
            cells[8].classList.add('won');

        }else if(tl && tl===mm && tl===br){
            winner(tl);
            cells[0].classList.add('won');
            cells[4].classList.add('won');
            cells[8].classList.add('won');

        }else if(tr && tr===mm && tr===bl){
            winner(tr);
            cells[2].classList.add('won');
            cells[4].classList.add('won');
            cells[6].classList.add('won');

        }else if(tl && tm && tr && bl && bm && br && ml && mm && mr){
            game= false;
            swal({
                title: 'The game is Tied',
                button: 'Continue'
            })
        }else{
            xNext = !xNext;
            if(xNext){
                status.innerHTML = `${xsym}'s Turn!`;
            }else{
                status.innerHTML = `<span>${osym}'s Turn</span>`;
            }
        }

    }



//event handlers

    const handlereset = (e)=>{
            if(!xNext){
                status.innerHTML = `${xsym}'s Turn!`;
            }
            xNext = true;
            for ( const cell of cells){
                cell.classList.remove('x');
                cell.classList.remove('o');
                cell.classList.remove('won');
            }
            game= true;
    }

    const handleCell = (e)=>{
       //
        const classList = e.target.classList;


        if(!game || classList[1]==="x" || classList[1]==="o"){
            return;
        }
        
        if(xNext){
            classList.add("x");
            checkStatus()
        }else{
            classList.add("o");
            checkStatus();
        }
    
    }

//events

    reset.addEventListener('click',handlereset);

    for(cell of cells){
      cell.addEventListener('click',handleCell);
        //console.log(cell);
    }

})

