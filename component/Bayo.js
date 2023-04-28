import './SASS/bayo.scss';
import myImage from './images/logo_black_font_without_border(o).png'
import React from 'react';
import {Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useState } from 'react';
function Bayo() {

  const {register, formState: {errors}, handleSubmit} = useForm()

  const [showPassword, setShowPassword] = useState(false);

  

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className="container">
        <div id={"login-wrapper"}>
          <div id="head">
            <Row>

              <Col xs={{ offset: 1, span: 4 }}>
                <img src={myImage} alt='Bayo Logo' />
              </Col>

              <Col xs={{ offset: 1, span: 1 }}>
                <span></span>
              </Col>


              <Col xs={3}>
                <h2 className='transfer'>Transfer</h2>
              </Col>

            </Row>
          </div>


          <div className='d-flex justify-content-center align-items-center text-center'>
            <h3 className='login'>Login</h3>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} >
            <div className="form-floating mb-3">
              <input type="email" name='email'
              {...register("email", {
                required: "Email is required",
                pattern: {
                 value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email Must Be Valid",
              }
              })
            }
            className={`form-control ${errors.email ? 'border-danger' : ''}`}
               id="floatingInput" placeholder="name@example.com"></input>
              <label htmlFor="floatingInput" className="form-label">Email</label>
             {/* {errors.email?. type=== 'required' && <p className="erro"> "Email is required"</p>} */}
            <p className='error'>{errors.email?.message}</p>
            </div>

            {/* Password Input */}
            <div className="form-floating">


              <input type={showPassword ? 'text' : 'password'}   name='password' {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                  message: "Password Must Be More Than 8 Characters And Contain One Letter",
                },
                minLength:{
                  value: 8,
                  message: "Password Must Have at least 8 charachters",
                }
              })} 
              className={`form-control ${errors.password ? 'border-danger' : ''}`}
              
              id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword" className="form-label">Password</label>
              <span className='eye-password' onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <i clasName="ri-eye-off-fill"></i> : <i className="ri-eye-fill"></i>}
              </span>
              <p className='error'>{errors.password?.message}</p>

               {/* {errors.password?.type==='required' && <p className="erro"> "Password Must Be More Than 8 Characters And Contain One Letter"</p>} */}
            
            </div>





            <Row id="password">
              <Col xs={8}>
                <p><a href='/'>Forgot my password</a></p>
              </Col>

              <Col xs={3}>
                <button type='submit' className='btn'>Login</button>

              </Col>
            </Row>
          </form>

          <div id="hr">
              <hr></hr>
            
              <p>or</p>
                       
              <hr></hr>
              </div>
            

          <div>

            <div className='google'>
              <svg id="img1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="48" height="48"
                viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>

              <p><a href='/'>Sign in with Google</a></p>
            </div>
          </div>
          <div>

            <div className='micro'>
              <svg id="img2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="48" height="48"
                viewBox="0 0 48 48">
                <path fill="#ff5722" d="M6 6H22V22H6z" transform="rotate(-180 14 14)"></path><path fill="#4caf50" d="M26 6H42V22H26z" transform="rotate(-180 34 14)"></path><path fill="#ffc107" d="M26 26H42V42H26z" transform="rotate(-180 34 34)"></path><path fill="#03a9f4" d="M6 26H22V42H6z" transform="rotate(-180 14 34)"></path>
              </svg>

              <p><a href="/">Sign in with Microsoft</a></p>
            </div>
          </div>

        </div>
      </div>
    </>
  );


}

export default Bayo