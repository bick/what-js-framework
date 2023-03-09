import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import { questions, Question, Answer } from "../../data";

// Install Swiper modules
SwiperCore.use([Navigation]);

const Questionnaire = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
    const swiperRef = useRef<SwiperCore>(null);

    const handleAnswerSelect = (answerValue: number) => {
        setSelectedAnswers([...selectedAnswers, answerValue]);
        swiperRef.current?.swiper.slideNext();
    };

    const calculateResult = (): string => {
        // Calculate the total value based on the selected answers
        const totalValue = selectedAnswers.reduce((acc, val) => acc + val, 0);

        // Return the name of the recommended framework based on the total value
        if (totalValue >= 6) {
            return "React";
        } else if (totalValue >= 4) {
            return "Vue";
        } else {
            return "Svelte";
        }
    };

    return (
        <div>
            {currentQuestion === 0 && (
                <button onClick={() => setCurrentQuestion(1)}>Get Started</button>
            )}

            {currentQuestion > 0 && currentQuestion <= questions.length && (
                <Swiper navigation ref={swiperRef}>
                    {questions.map((question: Question, index: number) => (
                        <SwiperSlide key={question.id}>
                            <div>
                                <h2>{question.text}</h2>
                                <ul>
                                    {question.answers.map((answer: Answer) => (
                                        <li key={answer.id}>
                                            <button onClick={() => handleAnswerSelect(answer.value)}>
                                                {answer.text}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            {currentQuestion > questions.length && (
                <div>
                    <h2>Based on your answers, we recommend using {calculateResult()}</h2>
                    <button onClick={() => setCurrentQuestion(1)}>Restart</button>
                </div>
            )}
        </div>
    );
};

export default Questionnaire;