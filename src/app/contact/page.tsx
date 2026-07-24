"use client"

import { useEffect, useState } from "react"
import {contactPageStyles as s} from "../../../public/dummyStyles"

import emailjs from "@emailjs/browser"
import { pre } from "motion/react-client";




export default function Contact(){

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        subject:"",
        message:""
    });

    const [focused, setFocused] = useState<string | null>(null)
    const [sending,setSending] = useState(false);

    useEffect(() =>{
        const publicKey="Lb2fYYsYp8OBDAKV6";
        if(publicKey) emailjs.init(publicKey);
    },[])

    const handleSubmit = async (e:React.FormEvent) =>{
        e.preventDefault();
        setSending(true);

        const templateParams= {
            from_name:formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message
        };

        const serviceId="service_parlqu7";
        const templateId ="template_l2mv946";

        try {
            if(!serviceId || !templateId){
                throw new Error("EmailJS sercie or template ID not configured");
            };

            await emailjs.send(serviceId,templateId,templateParams);

            setFormData({name:"",email:"",subject:"",message:""});
            setFocused(null);

            alert("Message sent - thank you!");

        } catch (error) {
            console.error("EmailJS error: ",error);
            alert("failed to sent message. Please try again later.")
        }
        finally{
            setSending(false);
        }

    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData((prev) =>({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const getLavelClass = (fieldName:string) =>{
        const baseClass = s.formLabelBase;
        const focusedClass= focused === fieldName || formData[fieldName as keyof typeof formData] ? s.formLabelFocused : s.formLabelUnfocused;

        return `${baseClass} ${focusedClass}`
    }

    return(
        <>
        <div className={s.pageContainer}>
            <div className={s.contentContainer}>
                <div className={s.formOuterContainer}>
                    <div className={s.backgroundOverlay}/>

                    

                </div>

            </div>

        </div>
        
        </>
    )
}