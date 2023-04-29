import './SASS/verify.scss'
import myImage from './images/logo_black_font_without_border(o).png'
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';

function Verify() {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const inputRefs = useRef([]);


    const onSubmit = (data) => {
        console.log(data)
    }

    const handleInputChange = (index, event) => {
        const inputLength = event.target.value.length;
        const maxLength = event.target.maxLength;

        if (inputLength >= maxLength && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    };

    return (
        <>
            <div className='container'>

                <div id='main-head'>
                    <Row>

                        <Col xs={{ offset: 1, span: 4 }}>
                            <img src={myImage} alt='Bayo Logo' className='image' />
                        </Col>

                        <Col xs={{ offset: 1, span: 1 }}>
                            <span />
                        </Col>


                        <Col xs={3}>
                            <h2 id='header'>Transfer</h2>
                        </Col>

                    </Row>
                </div>

                <h3 className='verify'>Verify Your Identity</h3>

                <p className='code'>We've sent a code to your configured two-factor authentication code</p>



                <form id="verifyForm" onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col xs={6}>
                            <input
                                type='text'
                                name='digit1'
                                maxLength={1}
                                {...register('digit1', { required: true })}
                                className={`hover ${errors.digit1 ? 'border-danger text-danger' : ''}`}
                                ref={(el) => inputRefs.current[0] = el}
                                onChange={(e) => handleInputChange(0, e)}
                            />

                            <input
                                type='text'
                                maxLength={1}
                                name='digit2'
                                {...register('digit2', { required: true })}
                                className={`hover ${errors.digit2 ? 'border-danger text-danger' : ''}`}
                                ref={(el) => inputRefs.current[1] = el}
                                onChange={(e) => handleInputChange(1, e)}
                            />

                            <input
                                type='text'
                                name='digit3'
                                maxLength={1}
                                {...register('digit3', { required: true })}
                                className={`hover ${errors.digit3 ? 'border-danger text-danger' : ''}`}
                                ref={(el) => inputRefs.current[2] = el}
                                onChange={(e) => handleInputChange(2, e)}
                            />

                        </Col>


                        <Col xs={6}>
                            <input
                                type='text'
                                name='digit4'
                                maxLength={1}
                                {...register('digit4', { required: true })}
                                className={`hover ${errors.digit4 ? 'border-danger text-danger' : ''}`}
                                ref={(el) => inputRefs.current[3] = el}
                                onChange={(e) => handleInputChange(3, e)}
                            />

                            <input
                                type='text'
                                name='digit5'
                                maxLength={1}
                                {...register('digit5', { required: true })}
                                className={`hover ${errors.digit5 ? 'border-danger text-danger' : ''}`}
                                ref={(el) => inputRefs.current[4] = el}
                                onChange={(e) => handleInputChange(4, e)}
                            />

                            <input
                                type='text'
                                name='digit6'
                                maxLength={1}
                                {...register('digit6', { required: true })}
                                className={`hover ${errors.digit6 ? 'border-danger text-danger' : ''}`}
                                ref={(el) => inputRefs.current[5] = el}
                                onChange={(e) => handleInputChange(5, e)}
                            />

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