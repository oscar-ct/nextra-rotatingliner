import {useRef, useState} from "react";
import styles from "./contact.module.css"
import emailjs from "@emailjs/browser";
const ContactForm = () => {

    const form = useRef();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(true);
    const [btnDisabled, setBtnDisabled] = useState(false);

    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID
    const TEMPLATE_ID =  process.env.NEXT_PUBLIC_TEMPLATE_ID
    const KEY = process.env.NEXT_PUBLIC_KEY

    const resetState = () => {
        setName("");
        setEmail("");
        setMessage("");
    };

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setBtnDisabled(true);
        emailjs.sendForm(`${SERVICE_ID}`, `${TEMPLATE_ID}`, form.current, `${KEY}`)
            .then((result: { text: any; }) => {
                if (result.text === "OK") {
                    setError(false);
                    setSuccess(true);
                    setBtnDisabled(false);
                    resetState();
                }
                setTimeout(function () {
                    setSuccess(false);
                }, 3000);

            }, (error: { text: any; }) => {
                if (error) {
                    setError(true);
                    setBtnDisabled(false);
                }
            });
    };

    return (
        <>
            <div className={`nx-mt-12 nx-bg-gray-100 nx-rounded-lg ${styles.fromWrapper}`}>
                <div className={styles.card}>
                    <div className={"nx-pb-8 nx-w-full nx-text-4xl nx-font-semibold"}>
                        Have an inquiry? Send us a message
                    </div>
                    <form ref={form} onSubmit={sendEmail} className={`${styles.formContainer}`}>
                        <div className={"nx-w-full nx-flex nx-flex-col nx-gap-4"}>
                            <div>
                                <label htmlFor={"name"}>Name
                                </label>
                                <input
                                    name={"from_name"}
                                    className={`nx-bg-white nx-w-full nx-px-4 nx-py-2 nx-border nx-rounded-md nx-shadow-sm  nx-ring-1 nx-ring-black/5 ${styles.input}`}
                                    autoComplete={"name"}
                                    type={"name"}
                                    placeholder={"Enter name"}
                                    id={"name"}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor={"email"}>Email
                                </label>
                                <input
                                    name={"email_id"}
                                    className={`nx-bg-white nx-w-full nx-px-4 nx-py-2 nx-border nx-rounded-md nx-shadow-sm  nx-ring-1 nx-ring-black/5 ${styles.input}`}
                                    autoComplete={"email"}
                                    type={"email"}
                                    placeholder={"Enter email"}
                                    id={"email"}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                            </div>
                        </div>
                        <div className={"nx-w-full nx-flex nx-flex-col"}>
                            <div>
                                <label htmlFor={"message"}>Message
                                </label>
                                <textarea
                                    name={"message"}
                                    className={`nx-bg-white nx-w-full nx-px-4 nx-py-2 nx-border nx-rounded-md nx-shadow-sm  nx-ring-1 nx-ring-black/5 ${styles.input}`}
                                    autoComplete={"off"}
                                    placeholder={"Enter message"}
                                    id={"message"}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    rows={4}
                                />
                            </div>
                            <div className={"nx-w-full nx-flex nx-justify-end nx-pt-6"}>
                                <button type={"submit"} disabled={btnDisabled} className={styles.button}>
                                    <div className={"nx-flex nx-items-center"}>
                                        <span>Send</span>
                                        {
                                            btnDisabled && (
                                                <span style={{marginLeft: "6px"}} className={styles.loading}/>
                                            )
                                        }
                                    </div>
                                </button>
                            </div>
                        </div>
                    </form>
                    {
                        success && (
                            <div className={"nx-text-center nx-pt-4"}>
                                Message sent successfully.
                            </div>
                        )
                    }
                    {
                        error && (
                            <div className={"nx-text-center nx-text-red-500 nx-pt-4"}>
                                Something went wrong, please try again later.
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
};

export default ContactForm;