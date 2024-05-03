var api = [
    {
        "folderName": "Identificador_cambios_python",
        "date": "27/03/23",
        "lastModified": "Last Week",
        "versions": 5
    },
    {
        "folderName": "Prueba",
        "date": "27/03/23",
        "lastModified": "Last Month",
        "versions": 2
    },
    {
        "folderName": "Construcción Software",
        "date": "11/10/22",
        "lastModified": "2023",
        "versions": 4
    }
];
function mostrarFolders(){
    var html = "";
    api.forEach(function(api) {
        html += '<div class="table-row"><div class="table-l"><h1>' + api.folderName + '</h1><div class="table-l-d"><h2>Created: ' + api.date + '</h2><h2>Modified: ' + api.lastModified + '</h2></div></div><div class="table-r" ><div class="table-r-l"><button class="btn" onclick="goTo()">Acceder</button><h2>Versions: ' + api.versions + '</h2></div><div class="table-r-r"><p style="font-size: 20px;">Delete?</p><img src="../img/delete.png" alt="" class="delete" onclick="delFolder()"></div></div></div>';
    });
    document.getElementById("folders").innerHTML = html;    
}

function buscarFolders() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var filteredFolders = api.filter(function(folder) {
        return folder.folderName.toLowerCase().includes(searchTerm);
    });
    var html = "";
    filteredFolders.forEach(function(folder) {
        html += '<div class="table-row"><div class="table-l"><h1>' + folder.folderName + '</h1><div class="table-l-d"><h2>Created: ' + folder.date + '</h2><h2>Modified: ' + folder.lastModified + '</h2></div></div><div class="table-r" ><div class="table-r-l"><button class="btn" onclick="goTo()">Acceder</button><h2>Versions: ' + folder.versions + '</h2></div><div class="table-r-r"><p style="font-size: 20px;">Delete?</p><img src="../img/delete.png" alt="" class="delete" onclick="delFolder()"></div></div></div>';
    });
    document.getElementById("folders").innerHTML = html;    
}

mostrarFolders();
