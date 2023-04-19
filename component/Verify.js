import './SASS/verify.scss'
import myImage from './images/logo_black_font_without_border(o).png'
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


function Verify() {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    } 


    return (
        <>
            <div className='container'>

                <div id='main-head'>
                    <Row>

                        <Col xs={{ offset: 1, span: 4 }}>
                            <img src={myImage} alt='Bayo Logo' />
                        </Col>

                        <Col xs={{ offset: 1, span: 1 }}>
                            <span></span>
                        </Col>


                        <Col xs={3}>
                            <h2>Transfer</h2>
                        </Col>

                    </Row>
                </div>

                <h3 className='verify'>Verify Your Identity</h3>

                <p className='code'>We've sent a code to your configured two-factor authentication code</p>
               
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col xs={6}>
                            <input type='text' name='digit1'
                                {...register('digit1', {
                                    required: true,
                                })}
                                className={`hover ${errors.digit1 ? 'border-danger text-danger' : ''}`}
                                >
                            </input>


                            <input type='text'
                                name='digit2'
                                {...register('digit2', {
                                    required: true,
                                })}
                                className={`hover ${errors.digit2 ? 'border-danger text-danger' : ''}`}
                                ></input>

                            <input type='text' name='digit3'
                                {...register('digit3', {
                                    required: true,
                                })}
                                className={`hover ${errors.digit3 ? 'border-danger text-danger' : ''}`}
                                ></input>


                        </Col>


                        <Col xs={6}>
                            <input type='text' name='digit4'
                                {...register('digit4', {
                                    required: true,
                                })}
                                className={`hover ${errors.digit4 ? 'border-danger text-danger' : ''}`} 
                                ></input>

                            <input type='text' name='digit5'
                                {...register('digit5', {
                                    required: true,
                                })}
                                className={`hover ${errors.digit5 ? 'border-danger text-danger' : ''}`} 
                                ></input>

                            <input type='text' name='digit6'
                                {...register('digit6', {
                                    required: true,
                                })}
                                className={`hover ${errors.digit6 ? 'border-danger text-danger' : ''}`} 
                                ></input>

                        </Col>


                    </Row>
                    <p className="text-error p-2">{errors.digit6?.type === 'required' && "You Must Fill All 6 Digits"}</p>

                    <Row id="continue">
                        <Col xs={6}>
                            <p><a href='#' className='anchor'>Send code again</a></p>
                        </Col>

                        <Col xs={5}>
                            <button type="submit" className='btn'>Continue</button>

                        </Col>
                    </Row>
                </form>

            </div>
        </>
    )
}

export default Verify