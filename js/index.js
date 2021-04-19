
tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fulldscreen',
        'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo dero | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter' +
    'alignright alignjustify | bullist nunlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body {font-family:Helvetica,Arial,sans-serif; fant-size:14 px}'
});



    document.queryselector("#registrar-btn").addeventListener("click",()=>{
        let nombre = document.queryselector("#nombre-txt").value;
        let tipo = document.queryselector("#tipo-select").value;
        let legendario = document.queryselector("#legendario-si").checked;
        let descripcion = tinymce.get("descripcion-txt").getcontent(); //solo para el tinymce 
        console.log("hola mundo!",nombre);
        } );