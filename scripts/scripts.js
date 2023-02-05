function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let formAno = document.getElementById("txtano");
  let res = document.getElementById("res");

  if (formAno.value.length == 0 || Number(formAno.value) > ano) {
    window.alert(
      "[ERRO] Verifique se campos estão completos e tente novamente!"
    );
  } else {
    let formSex = document.getElementsByName("radsex");
    let idade = ano - Number(formAno.value);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (formSex[0].checked) {
      if (idade >= 0 && idade < 5) {
        genero = "Uma criança";
        img.setAttribute("src", "./img/criancaMenino.png");
      } else if (idade < 13) {
        genero = "Um menino";
        img.setAttribute("src", "./img/menino.png");
      } else if (idade < 21) {
        genero = "Um jovem";
        img.setAttribute("src", "./img/oJovem.png");
      } else if (idade < 50) {
        genero = "Um homem";
        img.setAttribute("src", "./img/homem.png");
      } else {
        genero = "Um jovem idoso";
        img.setAttribute("src", "./img/jovemIdoso.png");
      }
    } else if (formSex[1].checked) {
      if (idade >= 0 && idade < 5) {
        genero = "Uma criança";
        img.setAttribute("src", "./img/criancaMenina.png");
      } else if (idade < 13) {
        genero = "Uma menina";
        img.setAttribute("src", "./img/menina.png");
      } else if (idade < 21) {
        genero = "Uma jovem";
        img.setAttribute("src", "./img/aJovem.png");
      } else if (idade < 50) {
        genero = "Uma mulher";
        img.setAttribute("src", "./img/mulher.png");
      } else {
        genero = "Uma jovem idosa";
        img.setAttribute("src", "./img/jovemIdosa.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`;
    res.appendChild(img);
  }
}
