/*function validerEpost(epost) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(epost);
}

function validerTelefon(telefonnr) {
    const re = /^[1-9]\d{7}$/;
    return re.test(telefonnr);
}    */
$("#kjopBillett").click(function(){
    const billetter={
        film: $("#filmOption").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefonnr: $("#telefonnr").val(),
        epost: $("#epost").val()
    }
    $.post("/lagre", billetter, function(){
        hentAlle();
    })
    $("#filmOption").val("");
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");
})
function hentAlle(){
    $.get("/hentAlle", function(data){
        formaterData(data);
    })
}
$("#slettAlle").click(function(){
    $.get("/slettAlle", function(){
        hentAlle();
    })
})
    $("#knapp").click(function(){
    console.log("Knappen trykket på");
})

function formaterData(billetter){
    let ut="<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th>"+
            "<th>Telefonnr</th><th>Epost</th></tr>";
    for (const billett of billetter){
        ut+="<tr><td>"+billett.film+"</td><td>"+billett.antall+"</td><td>"+billett.fornavn+
            "</td><td>"+billett.etternavn+"</td><td>"+billett.telefonnr+"</td><td>"+billett.epost+"</td></tr>";
    }
    ut+="</table>";
    $("#alleBilletter").html(ut);
}