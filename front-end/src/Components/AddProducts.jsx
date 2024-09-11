import { useState } from "react";


const AddProduct =()=>{
 const [name,setName]=useState('');
 const [price,setPrice]=useState('');
 const [category,setCategory]=useState('');
 const [company,setCompany]=useState('');
 const [error,seterror]=useState(false);
 
  const Addproduct=async()=>{
    if (!name ||!price||!category||!company){
        seterror(true);
        return(false)
    }
    console.warn(name,price,category,company);
    const userId =  JSON.parse(localStorage.getItem('user'))._id;
    let result =await fetch('http://localhost:5000/add-products',{
        method:'post',
        body:JSON.stringify({name,price,category,company,userId}),
        headers:{ "Content-Type":"application/json"
    }

    });
     result = await result.json();
     console.warn(result);

  }





    return (
        <div>
            <h1>Add Products</h1>
            <input type="text" placeholder="Enter the name" onChange={(e)=>{setName(e.target.value)}}  value={name}/>
           { error && !name && <span className="valid">Enter the valid name</span>}
            <input type="text" placeholder="Enter the price" onChange={(e)=>{setPrice(e.target.value)} } value={price}/>
            { error && !price && <span>Enter the valid price</span>}
            <input type="text" placeholder="Enter the category" onChange={(e)=>{setCategory(e.target.value)}} value={category} />
            { error && !category && <span>Enter the valid category</span>}
            <input type="text" placeholder="Enter the company" onChange={(e)=>{setCompany(e.target.value)}} value={company}/>
            { error && !company && <span>Enter the valid company</span>}
            <button onClick={Addproduct}> Add Products</button>





        </div>
    )
}
export default AddProduct;