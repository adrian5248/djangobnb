'use client';

import Modal from "./Modal";

import { useState } from "react";
import useSingupModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const SingupModal = () => {

    const singupModal = useSingupModal()
 
    const content = (
            <>
            

                <form className="space-y-4">
                    <input placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>

                    <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>

                    <input placeholder="Repeat password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>

                    <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                        The error message
                    </div>

                    <CustomButton
                    
                        label="Submit"
                        onClick={() => console.log('Test')}
                    
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