import React from 'react'
import { useState } from 'react'

const InputExample = () => {

    const [form, setForm] = useState({name:"", lastname:""})

    const onChangeInput = (e) =>  {
        // console.log(e.target.name);
        setForm({...form, [e.target.name]: e.target.value})
    }

    //value {name} olduğu için bir değişiklik yapamayız. o yüzden event.target.value
    //ile değişikliğe gidebiliyoruz


  return (
    <div>
        please enter a name
        <br />
        <input name='name' type="text" value={form.name} onChange={onChangeInput}/>
        <br />
        
        lastname
        <br />
        <input name= "lastname" type="text" value={form.lastname} onChange={onChangeInput}/>
        <br />

        {form.name} {form.lastname}
    </div>
  )
}

export default InputExample