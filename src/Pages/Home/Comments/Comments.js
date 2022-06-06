import React, { useState } from 'react';
import styles from './comments.module.css';
import {useForm} from "react-hook-form";
import {FaUserCircle} from 'react-icons/fa'



const Comments = () => {
    const {button, form, input, textarea, line, btns, comments, commentsries, section, 
    userLogo, card, cardTop, logoIcon, login, description, erro,} = styles;

const [recall, setRecall] = useState(false)

const {
    register,
    reset,
    handleSubmit,
    formState : {
        errors
    },
} = useForm(
    {
        mode: 'onBlur'
    }
);

    return (
        <>
            <section className={comments}>
            
                {
                    recall ? 
                    <div className={section}>
                        <form className={form}>

                                    <div>
                                        <input type="text" {...register('name', {
                                            required : 'Это поля обезательна для заполнение',
                                            minLength : {
                                                value : 2 ,
                                                message : 'Минимум 2 символа'
                                            }
                                        })} className={input} placeholder='Логин' />
                                        <span className={erro}>

                                          { errors ?.name && errors?.name?.message }
                                          </span>
                                    </div>

                                    <div>
                                        <textarea className={textarea} {...register('comments', {
                                            required : 'Это поля обезательна для заполнение',
                                            minLength : {
                                                value : 5 ,
                                                message : 'Минимум 5 символа'
                                            }
                                        })} placeholder='Отзыв'/>

                                        <span className={erro}>
                                          { errors ?.comments && errors?.comments?.message }
                                          </span>
                                    </div>


                                    <div className={line}/>
                                    <div className={btns}>
                                        <button className={button} onClick={()=> setRecall(false)}>
                                            Отмена
                                        </button>
                                        <button className={button}>Отправить</button>
                                    </div>
                                </form>
                    
                    </div>
                    :
                    <button style={{margin: '20px auto '}} className={button}
                                    onClick={()=> setRecall(true)}>Оставить отзыв</button>
                }
                   
                
               <div className={commentsries}>

               <div className={card}>
                                <div className={cardTop}>
                                    <div className={userLogo}>
                                        <FaUserCircle className={logoIcon}/>
                                    </div>

                                    <h3 className={login}></h3>

                                </div>

                                <p className={description}></p>


                            </div>
               </div>
                    
            </section>
        </>
    );
};

export default Comments;