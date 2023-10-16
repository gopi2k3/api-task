

const row=document.querySelector('.row');
	
const mainfun=()=>{	
	
	fetch(`https://api.tvmaze.com/shows/1/episodes?specials=1`)
	
	
	.then((res)=>res.json())
	.then((msg)=>{
		
		for(data of msg){
			
			
			result(data)
			

		} 
	})
	
}

mainfun()


function result(data){
	
	
	
	row.innerHTML+=` <div class="col-lg-3 col-sm-12 col-md-6 mx-auto my-2">
			    <div class="card p-2 shadow " >
				    <img src="${data.image.medium}">
					<div class="content">
					    <div class="title pt-1"><h5>${data.name}</h5></div>
					<div class="d-flex justify-content-between">	
					    <div><h6></h6>Rating :<span class="rating">${data.rating.average}</span></div>
					    <div><h6></h6>Type:${data.type}</div>
					</div>	
					</div>
				</div>
			     
			</div>`
			
			
	// rating(data)




// function rating(data){
	
	// const rat=document.querySelector('.rating')
	// console.log(rat)
	// if(data.rating.average<5){
		// rat.classList.add("rat-green")
		
	// }
	// else if(data.rating.average<4){
		// rat.classList.add("rat-orange")
		// console.log('no')
	// }
	// else if(data.rating.average<4.5&&data.rating.average>=3){
	
		// console.log('no')
	// }
// }			
		
}



