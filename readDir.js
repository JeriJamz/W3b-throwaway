/*This is great for when u need to read files. U get into someone comp and implement this and you can read they files*/
/*Downside due to node. This file has to be wherever you want to read something
Ima see if I can work around this. Great way to get info out someone

BIG OLE REMINDER:
	this is why security rings are important. When the CPU get an instruction 
	to read certain files or a whole directory. It wont let you.
	I sont think eeven the Admin or rooot can help you here.
	Gonna find a way past that. I think if I get right to the boot reader I can
	bypass it. Prolly idk
	Can I basically put someone Secruity rings to sleep. So I can have free acess
	

*/

const fs = require('fs')

fs.readdir('./', (err, files)=>{

    if(err) return console.log(err)

    files.forEach(function (file){

	fs.readFile(file, (err, fileData) =>{
	
	  if(err) return console.error(err)

   	  console.log(`${file}: ${fileData.length}`)

	})

     })
  console.log('Done')
})


