fetch("index.json")
.then(function(response){
	return response.json();
})
.then(function(index){
	let placeholder=document.querySelector("#data-output");
	let out="";
	for(let dia of index){
		out+=`
		<tr>
		    <td>${dia.id}</td>
		    <td>${dia.nombre}</td>
		    <td>${dia.edad}</td>
		    <td>${dia.identidadsecreta}</td>
		    <td>${dia.poderes}</td>
		    <td><img src='${dia.image}' width="200px" height="200px"></td>
		</tr>`;
	}   placeholder.innerHTML=out;
})