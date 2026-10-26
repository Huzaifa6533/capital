
function capitalizeName() {

    let name = document.getElementById("name").value;

    let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

    document.getElementById("result").innerText = capitalizedName;

}
