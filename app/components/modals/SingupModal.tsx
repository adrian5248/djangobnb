'use client';

import Modal from "./Modal";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useSingupModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";
import { error } from "console";
import apiService from "@/app/services/apiService";
import { sign } from "crypto";
import { handleLogin } from "@/app/lib/actions";

const SingupModal = () => {

    //
    // Variables
    const router = useRouter();
    const singupModal = useSingupModal();
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState<string[]>([]);

    //
    // Submit functionality

    const SubmitSingup = async () => {
        const formData = {
            name: 'stein',
            email: email,
            password1: password1,
            password2: password2
        }

        const response = await apiService.post('/api/auth/register/', JSON.stringify(formData));

        if (response.access) {
            
            handleLogin(response.user.pk, response.access, response.refresh);

            singupModal.close();

            router.push('/')
        } else {
            const tmpErrors: string[] = Object.values(response).map((error: any) => {
                return error;
            })

            setErrors(tmpErrors)
        }
    }

    const content = (
            <>
            
                <form
                    action={SubmitSingup}
                    className="space-y-4"
                >
                    <input onChange={(e) => setEmail(e.target.value)} placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>

                    <input onChange={(e) => setPassword1(e.target.value)} placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>

                    <input onChange={(e) => setPassword2(e.target.value)} placeholder="Repeat password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>

                    {errors.map((error, index) => {
                        return (
                            <div
                                key={`error_${index}`}
                                className="p-5 bg-airbnb text-white rounded-xl opacity-80"
                            >
                                {error}
                            </div>
                        )
                    })}


                    <CustomButton
                    
                        label="Submit"
                        onClick={SubmitSingup}
                    
                    />
                </form>
            </>
        
    )

    return(
        <Modal
            isOpen={singupModal.isOpen}
            close={singupModal.close}
            label="Sing up"
            content={content}
        />
    )
}

export default SingupModal;