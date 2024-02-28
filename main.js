const aiData=async()=>{
    try{
        const res=await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
        const datas=await res.json();
        console.log(datas);
        const ai=datas.data.tools;
        //console.log(ai);
        aiFunction(ai);
    }catch{
        console.log('Data not found');
    }
}

const aiFunction=(ai)=>{
    const divContainer=document.getElementById('divContainer');
    ai.forEach((aiTools)=>{
        //console.log(aiTools);
        const div =document.createElement("div");
        div.classList='card w-96 bg-base-100 shadow-xl';
        div.innerHTML=`
        <figure><img onclick="imageClick()" src="${aiTools.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-3xl font-bold">Features</h2>
                        <ol>
                            <li>${aiTools.features[0]}</li>
                            <li>${aiTools.features[1]}</li>
                            <li>${aiTools.features[2]}</li>
                        </ol>
                        <hr>
                        <h4 class="text-3xl font-bold">${aiTools.name}</h4>
                        <h5>${aiTools.published_in}</h5>
                    </div>
        `
        divContainer.appendChild(div);
    })
}

const imageClick=()=>{
    my_modal_5.showModal()
}

aiData();