import React, {
    useState,
    useEffect,
    useRef,
    TextareaHTMLAttributes,
} from "react";
import { useHistory } from "react-router-dom"
import '../PagesStyles/CustomerFeedback.css'

const MIN_TEXTAREA_HEIGHT = 232;
import axios from 'axios'


const CustomerFeedback = () => {
    const textareaRef = React.useRef(null);
    const [value, setValue] = React.useState("");
    const [feedbackError, setFeedbackError] = useState("")
    const onChange = (event) => setValue(event.target.value);
    const history = useHistory()

    React.useLayoutEffect(() => {
        // Reset height - important to shrink on delete
        textareaRef.current.style.height = "inherit";
        // Set height
        textareaRef.current.style.height = `${Math.max(
            textareaRef.current.scrollHeight,
            MIN_TEXTAREA_HEIGHT
        )}px`;
    }, [value]);

    const handleFeedbackSubmit = async () => {
        setFeedbackError("")
        if (value == "") {
            setFeedbackError("Feedback cannot be blank")
        }
        else {
            console.log('hello')
            // const res = await fetch('/feedback', {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         value
            //     })
            // });

            // const data = await res.json();

            axios.post('/feedback', {
                feedbackMsg: value
            }).then((response) => {
                console.log(response.data)
                setFeedbackError("")

                if (response.data == "You must be logged in to view this page") {
                    history.push('/login');
                }
                else if (!response.data) {
                    setFeedbackError("Some error has occurred")

                }
                else {
                    console.log(response.data);
                    history.push('/feedbackConfirmed')
                }
            })







        }
    }

    return (
        <div className="customerFeedbackScreen">
            <div id="feedbackContent">
                <div id="title">
                    FEEDBACK
                </div>
                <div id="caption">
                    Your valuable feedback is our breakthrough
                </div>

                <textarea
                    id="feedbackTextArea"
                    onChange={onChange}
                    ref={textareaRef}
                    style={{
                        minHeight: MIN_TEXTAREA_HEIGHT,
                        resize: "none",
                        width: "100%"
                    }}
                    value={value}
                />
                <div class="feedback error" name="feedbackError" style={{ color: '#ff0099', margin: '10px 2px', fontSize: '0.8em', fontWeight: 'bold' }}>
                    {feedbackError}
                </div>
                <div className="submitFeedbackButtonDiv" >
                    <button onClick={handleFeedbackSubmit}>SUBMIT FEEDBACK</button>
                </div>
            </div>
        </div>
    );
};

export default CustomerFeedback;