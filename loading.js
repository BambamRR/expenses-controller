<<<<<<< HEAD
function showLoading() {
   const div = document.createElement("div");
   div.classList.add('loading', 'centralize');
   document.body.appendChild(div);

   const label = document.createElement("label");
   label.innerText = "Carregando..."
   div.appendChild(label);

   setTimeout(() => hideLoading(), 2000);

}

function hideLoading() {
    const loadings = document.getElementsByClassName("loading");
    if(loadings.length){
        loadings[0].remove();
    }
=======
function showLoading() {
   const div = document.createElement("div");
   div.classList.add('loading', 'centralize');
   document.body.appendChild(div);

   const label = document.createElement("label");
   label.innerText = "Carregando..."
   div.appendChild(label);

   setTimeout(() => hideLoading(), 2000);

}

function hideLoading() {
    const loadings = document.getElementsByClassName("loading");
    if(loadings.length){
        loadings[0].remove();
    }
>>>>>>> a370bfaf250f0035df43c96733c00c7bb6c23651
}