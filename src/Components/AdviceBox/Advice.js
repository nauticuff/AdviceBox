import fetchAdvice from "../../FetchData/fetch";
import { useState, useEffect } from 'react';

function DesktopAdvice() {
    const [advice, setAdvice] = useState('Click the button for advice');
    const [id, setId] = useState(0);

    useEffect(() => {
        renderAdvice()
    }, []);

    const renderAdvice = async () => {
        const data = await fetchAdvice();
        console.log(data);
        setId(data.id)
        setAdvice(data.advice)
    }

    return (
        <div className="flex text-[#CEE2E9] bg-[#202632] h-screen justify-center items-center">
            <div className="p-8 pb-16 bg-[#313A49] max-w-[500px]  flex-col relative gap-10 rounded-lg flex justify-center items-center">
                <p className="uppercase text-center text-[#53FFAB] tracking-[.25em] text-xs font-medium">Advice # <span>{id}</span></p>
                <p className="text-center text-2xl font-medium">"<span>{advice}</span>"</p>
                <div><svg width="446" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" /><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>            </div>

                {/* <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg> */}

                <div onClick={() => renderAdvice()} className="dice rounded-full cursor-pointer group bg-[#53FFAB] absolute bottom-0 translate-y-7 w-14 h-14 flex justify-center items-center">
                    <svg className="group-hover:rotate-45 duration-300" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg>
                </div>
            </div>

        </div>

    );
}

export default DesktopAdvice;