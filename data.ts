export interface Answer {
    id: number;
    text: string;
    value: number;
}

export interface Question {
    id: number;
    text: string;
    answers: Answer[];
}

export const questions: Question[] = [
    {
        id: 1,
        text: "What is your skill level with JavaScript?",
        answers: [
            { id: 1, text: "Beginner", value: 1 },
            { id: 2, text: "Intermediate", value: 2 },
            { id: 3, text: "Advanced", value: 3 },
        ],
    },
    {
        id: 2,
        text: "What type of application are you building?",
        answers: [
            { id: 1, text: "Single-page application", value: 3 },
            { id: 2, text: "Server-side rendered application", value: 2 },
            { id: 3, text: "Static website", value: 1 },
        ],
    },
    {
        id: 3,
        text: "What kind of performance do you need?",
        answers: [
            { id: 1, text: "Top-notch performance", value: 3 },
            { id: 2, text: "Moderate performance", value: 2 },
            { id: 3, text: "Performance is not a critical factor", value: 1 },
        ],
    },
    {
        id: 4,
        text: "Do you need good documentation and community support?",
        answers: [
            { id: 1, text: "Yes, it's very important", value: 3 },
            { id: 2, text: "Somewhat important", value: 2 },
            { id: 3, text: "Not important", value: 1 },
        ],
    },
    {
        id: 5,
        text: "What is your preferred programming paradigm?",
        answers: [
            { id: 1, text: "Object-oriented programming", value: 3 },
            { id: 2, text: "Functional programming", value: 2 },
            { id: 3, text: "No preference", value: 1 },
        ],
    },
    {
        id: 6,
        text: "What is your budget for development?",
        answers: [
            { id: 1, text: "High budget", value: 3 },
            { id: 2, text: "Moderate budget", value: 2 },
            { id: 3, text: "Low budget", value: 1 },
        ],
    },
];
