const noScrollLinks = document.querySelectorAll('.btn');

noScrollLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
  });
});



// boton 25


const btn_25 =document.querySelector('.btn-25');
const btn_25_span =document.querySelector('.btn-25-span');


btn_25.addEventListener('click', ()=>{
    if(btn_25.classList.contains('btn-25-off')){
        btn_25.classList.add('btn-25-on');
        btn_25_span.classList.add('btn-25-span-on')
        removerclase_btn25_off();
    }else if(btn_25.classList.contains('btn-25-on')){
        removerclase_btn25_on();
        btn_25.classList.add('btn-25-off');
        btn_25_span.classList.add('btn-25-span-off')
    }
});



function removerclase_btn25_on() {
    btn_25.classList.remove('btn-25-on');
    btn_25_span.classList.remove('btn-25-span-on')
}


function removerclase_btn25_off() {
    btn_25.classList.remove('btn-25-off');
    btn_25_span.classList.remove('btn-25-span-off')
}


// boton 27

const btn_27 = document.querySelector('.btn-27');
const btn_27_span1 = document.querySelector('.btn-27-span1');
const btn_27_span2 = document.querySelector('.btn-27-span2');
const btn_27_span3 = document.querySelector('.btn-27-span3');
const btn_27_span4 = document.querySelector('.btn-27-span4');
const btn_27_span = document.querySelector('.btn-27-span');



btn_27.addEventListener('mouseenter', ()=>{
    if(!btn_27_span1.classList.contains('btn-27-span1-activado') && btn_27_span1.style.opacity == '0'){
        btn_27_span1.classList.add('btn-27-span1-activado');
        btn_27_span2.classList.add('btn-27-span2-activado');
        btn_27_span3.classList.add('btn-27-span1-activado');
        btn_27_span4.classList.add('btn-27-span2-activado');
        btn_27_span1.style.opacity = '1';
        btn_27_span2.style.opacity = '1';
        btn_27_span3.style.opacity = '1';
        btn_27_span4.style.opacity = '1';
    }
});

btn_27.addEventListener('mouseout', ()=>{
    
    setTimeout(()=>{
        btn_27_span1.style.opacity = '0';
        btn_27_span2.style.opacity = '0';
        btn_27_span3.style.opacity = '0';
        btn_27_span4.style.opacity = '0';
    },10)
    
    
    setTimeout(()=>{
        btn_27_span1.classList.remove('btn-27-span1-activado');
        btn_27_span2.classList.remove('btn-27-span2-activado');
        btn_27_span3.classList.remove('btn-27-span1-activado');
        btn_27_span4.classList.remove('btn-27-span2-activado');
    },600)
});




// boton 29


const btn_29 = document.querySelector('.btn-29');
const btn_29_veri_izq = document.querySelector('.btn-29-veri-izq');
const btn_29_veri_der = document.querySelector('.btn-29-veri-der');
const btn_29_cont1 = document.querySelectorAll('.btn-29-cont1');
const btn_29_cont2 = document.querySelectorAll('.btn-29-cont2');


btn_29_veri_izq.addEventListener('mouseover', ()=>{
    if (!btn_29.classList.contains('btn-29-izquierda')) {
        btn_29.classList.add('btn-29-izquierda');
        btn_29.classList.remove('btn-29-derecha');
        
        btn_29_cont2.forEach(btn_29_cont2 => {
            btn_29_cont2.classList.add('btn-29-conjunto2');
        });

        btn_29_cont1.forEach(btn_29_cont1 => {
            btn_29_cont1.classList.add('btn-29-conjunto1-rev');
        });
      }
});

btn_29_veri_izq.addEventListener('mouseout', ()=>{
    if(btn_29.classList.contains('btn-29-izquierda')){
        btn_29.classList.remove('btn-29-izquierda')

        btn_29_cont2.forEach(btn_29_cont2 => {
            btn_29_cont2.classList.remove('btn-29-conjunto2');
        });

        btn_29_cont1.forEach(btn_29_cont1 => {
            btn_29_cont1.classList.remove('btn-29-conjunto1-rev');
        });
    }
});




btn_29_veri_der.addEventListener('mousemove', ()=>{
    if(!btn_29.classList.contains('btn-29-derecha')){
        btn_29.classList.add('btn-29-derecha');
        btn_29.classList.remove('btn-29-izquierda');
        
        btn_29_cont1.forEach(btn_29_cont1 => {
            btn_29_cont1.classList.add('btn-29-conjunto1');
        });

        btn_29_cont2.forEach(btn_29_cont2 => {
            btn_29_cont2.classList.add('btn-29-conjunto2-rev');
        });
    }
});

btn_29_veri_der.addEventListener('mouseout', ()=>{
    if(btn_29.classList.contains('btn-29-derecha')){
        btn_29.classList.remove('btn-29-derecha');
        
        btn_29_cont1.forEach(btn_29_cont1 => {
            btn_29_cont1.classList.remove('btn-29-conjunto1');
        });

        btn_29_cont2.forEach(btn_29_cont2 => {
            btn_29_cont2.classList.remove('btn-29-conjunto2-rev');
        });
    }
});




// boton 30



const btn_30 = document.querySelector('.btn-30');


function btn_30_fondo1() {
    let btn_30color1 = Math.ceil(Math.random() * 255);
    let btn_30color2 = Math.ceil(Math.random() * 255);
    let btn_30color3 = Math.ceil(Math.random() * 255);
    
    btn_30.style.backgroundColor = `rgb(${btn_30color1}, ${btn_30color2}, ${btn_30color3})`;
}

btn_30_fondo1();

btn_30.addEventListener('click', () => {
    btn_30_fondo1();
});




// boton 31



const btn_31 = document.querySelector('.btn-31');
const btn_31_span1 = document.querySelector('.btn-31-span1');
const btn_31_span2 = document.querySelector('.btn-31-span2');
const btn_31_span3 = document.querySelector('.btn-31-span3');
const btn_31_span4 = document.querySelector('.btn-31-span4');
const btn_31_span5 = document.querySelector('.btn-31-span5');
const btn_31_span6 = document.querySelector('.btn-31-span6');


let btn_31_tiempo;



btn_31.addEventListener('mouseup', function() {
  clearTimeout(btn_31_tiempo);
    btn_31.style.transitionDuration = '.2s';

    btn_31_span1.classList.add('btn-31-span1-activado');
    btn_31_span2.classList.add('btn-31-span2-activado');
    btn_31_span3.classList.add('btn-31-span3-activado');
    btn_31_span4.classList.add('btn-31-span4-activado');
    btn_31_span5.classList.add('btn-31-span5-activado');
    btn_31_span6.classList.add('btn-31-span6-activado');
   
  if(btn_31_span1.classList.contains('btn-31-span1-activado')){
        btn_31_tiempo = setTimeout(function() {
            btn_31_span1.classList.remove('btn-31-span1-activado');
            btn_31_span2.classList.remove('btn-31-span2-activado');
            btn_31_span3.classList.remove('btn-31-span3-activado');
            btn_31_span4.classList.remove('btn-31-span4-activado');
            btn_31_span5.classList.remove('btn-31-span5-activado');
            btn_31_span6.classList.remove('btn-31-span6-activado');
            btn_31.style.transitionDuration = '2s';
        }, 600);  
    }
    
});