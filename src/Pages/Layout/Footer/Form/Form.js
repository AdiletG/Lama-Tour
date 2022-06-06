import React from 'react';
import styles from './form.module.css';
import {useForm} from 'react-hook-form';

const Form = () => {

    const {form, label, input, textarea, button, erro} = styles;

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
            <form className={form}>
                <label  className={label}>
                    <input className={input} {...register('tel', {
                        required : 'Это поля обезательна для заполнение !!!',
                        minLength : {
                            value : 9 ,
                            message : 'Минимум 9 символа'
                        }
                    })} placeholder="+996"/>
                    <p className={erro}>
                    { errors ?.tel && errors?.tel?.message }
                </p>

                </label>

                <label  className={label}>
                    <textarea className={textarea} {...register('comment', {
                        required : 'Это поля обезательна для заполнение !!!',
                        minLength : {
                            value : 5 ,
                            message : 'Минимум 5 символа'
                        }
                    })} placeholder="Вопрос"/>
                    <p className={erro}>
                        { errors ?.comment && errors?.comment?.message }
                    </p>
                </label>

                <label  className={label}>
                    <button className={button}>Отправить</button>
                </label>
            </form>
        </>
    );
};

export default Form;