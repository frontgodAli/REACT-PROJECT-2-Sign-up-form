import { useId, useState } from "react"

function Form(){
    
    const id=useId()
    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        sexe:"",
        comment:"",
        isAccepted:false,
        language:""
    })
    

    function changing(e){

        const {name,type,checked,value}=e.target

        setFormData(prev =>{
            return {
                ...prev,
                [name]:type==="checkbox"? checked : value
            }
        })
    }

    function submitting(e){

        e.preventDefault()
        if(formData.password === formData.confirmPassword){
            console.log("the form has been submitted sucessfully")
            console.log(formData)
        }else{
            console.log("passwords not matching !!!!")
        }
        
    }

    return (
    <form onSubmit={submitting}>
        
        <label htmlFor={id+"-firstname"}>
            First name:
        </label>
        <br/>
        <input 
            type="text"
            placeholder="First name"
            id={id+"-firstname"}
            name="firstName"
            value={formData.firstName}
            onChange={changing}
        />
        <br/>



        <label htmlFor={id+"-lastname"}>
            Last name:
        </label>
        <br/>
        <input 
            type="text"
            placeholder="Last name"
            id={id+"-lastname"}
            name="lastName"
            value={formData.lastName}
            onChange={changing}
        
        />
        <br/>


        <label htmlFor={id+"-email"}>
            E-mail:
        </label>
        <br/>
        <input 
            type="email"
            placeholder="E-Mail"
            id={id+"-email"}
            name="email"
            value={formData.email}
            onChange={changing}
        />
        <br/>

        <label htmlFor={id+"-password"}>
            Password:
        </label>
        <br/>
        <input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={changing}
            id={id+"-password"}
        />
        <br/>

        <label htmlFor={id+"-confirmpassword"}>
            Confirm your password:
        </label>
        <br/>
        <input 
            type="password" 
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={changing}
            id={id+"-confirmpassword"}
        />
        <br/>



        <fieldset>
            <legend>
                Chose your sexe:
            </legend>
            
            <input 
                type="radio" 
                value="male"
                id={id+"-radio-male"}
                onChange={changing}
                name="sexe"
                checked={formData.sexe==="male"} 
            />
            <label htmlFor={id+"-radio-male"}>
                Male
            </label>
            <br/>


            
            <input 
                type="radio" 
                value="female"
                id={id+"-radio-female"}
                onChange={changing}
                name="sexe"
                checked={formData.sexe==="female"} 
            />
            <label htmlFor={id+"-radio-female"}>
                Female
            </label>
            <br/>

        </fieldset>

        
        <input
            type="checkbox"
            checked={formData.isAccepted}
            name="isAccepted"
            id={id+"-isAccepted"}
            onChange={changing}
        />
        <label htmlFor={id+"-isAccepted"}>
            Accept the terms and conditions
        </label>
        <br/>


        <br/>
        <label htmlFor={id+"-select"}>
            Chose your favorite javascript framework:
        </label>
        <br/>
        <select 
            name="language" 
            id={id+"-select"} 
            onChange={changing}
            value={formData.language}

        >
                <option value="">--Choose--</option>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
        </select>
        <br/>
        
        <label htmlFor={id+"-comment"}>
            Write a comment:
        </label>
        <br/>
        <textarea 
            value={formData.comment}
            id={id+"-comment"}
            name="comment"
            onChange={changing}
            placeholder="leave a comment"
        
        />



        <br/>
        <br/>

        <button>Submit form</button>

    </form>)
}
export default Form