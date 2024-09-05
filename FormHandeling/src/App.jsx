/* eslint-disable no-unused-vars */
/*Deslint-disableDno-unused-varsD*/
import { useState } from "react";
import "./index.css";
import "./APP.css"
import { useForm } from "react-hook-form"; // LIBRARAY DOWNLOAND FROM WEBSITE

function App() {
  // COPY FROM WEB SITE
  const {
    register,
    handleSubmit,
    setError,   // use to make custom erorrs
    watch,
    formState: { errors,isSubmitting },
  } = useForm();





  const delay = (time) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, time * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(2);
    // let response = await fetch("http://localhost:3000/",{method:"POST"});
    // let getResponse= await response.text()
    // console.log(data,getResponse);
    


    // this will genrate custom erorrs

           if(data.fname !== "Hashir")
           {
            setError("nameErorr",{message:"User Name is Incorrect"})
           }
           if(data.fname === "Hasnat")
           {
            setError("blocked",{message:"Thius iuser is blocked"})
           }
  };

  // const [ChangeInput, SetChangeInput] = useState([]);

  // const HandelChange = (e) => {
  //   SetChangeInput({ ...ChangeInput, [e.target.name]: e.target.value });
  //   console.log(ChangeInput);
  // };

  // const HandleSubmitt = () => {
  //   const dataToSave = JSON.stringify(ChangeInput); // Convert object to JSON string
  //   localStorage.setItem("formData", dataToSave); // Store data with a key "formData"
  //   console.log(dataToSave); // Optional: Log the saved data for verification
  // };

  return (
    <>
      <h1>Enter your details</h1>
      <h6>Form Handeling with Backend</h6>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="name-container">
          <div className="fname">
            <input
              {...register("fname", {
                required: true,
                minLength: { value: 3, message: "Enter more then 3 word" },
                maxLength: {
                  value: 10,
                  message: "User Name should be Less then 10 words",
                },
              })}
              placeholder="First Name"
            />
            {errors.fname && <div className="red">{errors.fname.message}</div>}
          </div>

          <div className="lname">
            <input {...register("lname")} placeholder="Last Name" />
          </div>

          <div className="email">
            <input {...register("email")} placeholder="Email" />
          </div>

          <div className="password">
            <input {...register("password")} placeholder="Password" />
          </div>
          <button disabled={isSubmitting}> Submitt</button>
          {isSubmitting && <div>Loading...</div>}
          {/* this will print custom erorr */}
          {errors.nameErorr && <div className="red">{errors.nameErorr.message}</div>}
          {errors.blocked && <div className="red">{errors.blocked.message}</div>}  
        </div>
      </form>
    </>
  );
}

export default App;
