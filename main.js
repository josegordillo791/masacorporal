

const calcularImc=()=>{
    let p = document.getElementById('peso').value; 
    let a = document.getElementById('altura').value; 
    let resultado=(p/(Math.pow(a,2)))*10000;
    console.log('mensaje');
    console.log(`peso ${p}`);
    console.log(`altura ${a}`);
    console.log(`resultado ${resultado.toFixed(2)}`);
    let clase='';
    let texto='';
    if (resultado > 24.9) {
        texto = ('Peso superior al normal');
        clase='btn btn-outline-danger';
    }
    else if (resultado<18.5){
        texto= ('Debajo de peso Normal');
        clase='btn btn-outline-success';
    } else if (resultado>18.5 && resultado<24.9){
        texto=('Peso  Normal');
        clase='btn btn-outline-danger';
    }
    
    document.getElementById('titulo').innerHTML=`
         <div><strong class="${clase}">${texto}</strong>.</div>
    `;
}
   
  




